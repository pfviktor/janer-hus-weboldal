# 1-Prompt Vibe Coding Generátor Rendszer

Ezzel a prompttal bármilyen vállalkozás Facebook linkjéből, Google Térkép profiljából vagy régi weboldalából **5 perc alatt** vadonatúj, testreszabott demó weboldalt kapsz.

---

## A Másolható Mesterprompt

Másold be az alábbi szöveget az AI-nak (Claude / Gemini / Antigravity), kitöltve a zárójeles részeket:

```markdown
Kérlek, frissítsd a jelenlegi projekt `src/config/site.ts` fájlját az alábbi vállalkozás adataival, és készíts belőle egy elképesztően modern, igényes weboldalt!

VÁLLALKOZÁS ADATAI:
- Cégnév: [Pl. Bella Szépségszalon & Kozmetika Pécs]
- Iparág: [Pl. Kozmetika, arckezelések, sminktetoválás]
- Forrás (weboldal / Google Maps / FB): [Link vagy bemásolt infók]
- Cím: [Pl. 7621 Pécs, Király utca 12.]
- Telefonszám: [Pl. +36 20 123 4567]
- Email: [Pl. info@bellakozmetika.hu]
- Nyitvatartás: [Pl. H-P 8:00 - 19:00, Szo: 9:00 - 14:00]
- Google Értékelés (ha látható): [Pl. 4.9 csillag, 84 vélemény]

SZÍN- ÉS HANGULATVILÁG:
- Válassz az iparághoz illő prémium színpalettát a `theme` objektumban:
  * Kozmetika/Szépség: lágy rózsaszín / meleg bézs / pezsgőarany
  * Szerviz/Ipar/Építőipar: sötétkék / acélszürke / biztonsági sárga vagy narancs
  * Egészségügy/Fogászat: tiszta orvosi kék / mentazöld / fehér
  * Pénzügy/Ügyvéd: mélykék / smaragdzöld / arany

KÖVETELMÉNYEK:
1. Írj ütős, konverzióra optimalizált Hero címsort és leírást.
2. Határozz meg legalább 6 kulcsfontosságú szolgáltatást releváns emojikkal/ikonokkal és rövid, meggyőző leírással.
3. Készíts 3 meggyőző "Miért mi?" érvet (pontosság, garancia, modern technológia).
4. Ha a Google Mapsen voltak pozitív vélemények, foglald össze őket a `reviewsSection`-ben.
5. Állítsd be a FormSubmit emailt az ügyfél email címére.
```

---

## Munkafolyamat 3 lépésben:

1. **Klónozd vagy másold** a `clean-agency-starter` mappát a célcég nevére:
   ```bash
   cp -r /Users/pfviktor/clean-agency-starter /Users/pfviktor/[cegnev]-weboldal
   ```
2. **Futtasd le a fenti promptot** az AI-val az új mappában (az AI átírja a `src/config/site.ts`-t).
3. **Deploy Vercelre 1 paranccsal:**
   ```bash
   npx vercel@latest --yes
   ```
   *Eredmény: 60 másodperc múlva a kezedben van egy működő, élő link (`cegnev.vercel.app`), amit közvetlenül elküldhetsz a tulajdonosnak!*

