const { spawn } = require('child_process');
const fs = require('fs');

async function main() {
  const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    '--window-size=390,844',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const listRes = await fetch('http://127.0.0.1:9222/json/list');
    const tabs = await listRes.json();
    const pageTab = tabs.find(t => t.type === 'page') || tabs[0];
    const ws = new WebSocket(pageTab.webSocketDebuggerUrl);

    let id = 1;
    const callbacks = new Map();

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && callbacks.has(msg.id)) {
        callbacks.get(msg.id)(msg);
        callbacks.delete(msg.id);
      }
    };

    await new Promise(r => ws.onopen = r);

    function send(method, params = {}) {
      return new Promise((resolve) => {
        const curId = id++;
        callbacks.set(curId, resolve);
        ws.send(JSON.stringify({ id: curId, method, params }));
      });
    }

    await send('Page.enable');
    await send('DOM.enable');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true
    });

    console.log('Navigating to live page...');
    await send('Page.navigate', { url: 'https://janer-hus-weboldal.vercel.app' });
    await new Promise(r => setTimeout(r, 3000));

    // Audit for overflowing elements
    const evalRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const docW = document.documentElement.clientWidth;
        const windowW = window.innerWidth;
        const bodyScrollW = document.body.scrollWidth;
        const docScrollW = document.documentElement.scrollWidth;

        const overflowing = [];
        document.querySelectorAll('*').forEach(el => {
          const r = el.getBoundingClientRect();
          if (r.right > docW + 1) {
            overflowing.push({
              tag: el.tagName,
              cls: el.className ? String(el.className).substring(0, 50) : '',
              id: el.id || '',
              right: Math.round(r.right),
              left: Math.round(r.left),
              width: Math.round(r.width),
              text: (el.innerText || '').substring(0, 30).replace(/\\n/g, ' ')
            });
          }
        });

        // Check cards and buttons
        const issues = [];
        document.querySelectorAll('.service-card, .store-card, .partner-card, .review-card').forEach(c => {
          const r = c.getBoundingClientRect();
          if (r.width > docW - 20) {
            issues.push({ type: 'card_too_wide', cls: c.className, width: r.width });
          }
        });

        return {
          docW,
          windowW,
          bodyScrollW,
          docScrollW,
          hasHorizontalScroll: docScrollW > docW,
          overflowingElements: overflowing,
          issues
        };
      })()`,
      returnByValue: true
    });

    console.log('AUDIT RESULT:', JSON.stringify(evalRes.result.value, null, 2));

    // Capture screenshot of full page
    const screenshot = await send('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: true
    });
    fs.writeFileSync('mobile_full_audit.png', Buffer.from(screenshot.result.data, 'base64'));
    console.log('Saved mobile_full_audit.png');

    ws.close();
  } finally {
    chrome.kill();
  }
}

main().catch(console.error);
