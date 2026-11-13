export interface ServiceItem {
  title: string;
  description: string;
  image?: string;
  icon?: string;
  price?: string;
  badge?: string;
}

export interface ReviewItem {
  author: string;
  role?: string;
  rating: number;
  comment: string;
  date?: string;
}

export interface WhyUsItem {
  title: string;
  description: string;
  iconType: 'flag' | 'factory' | 'shield' | 'handshake';
}

export interface StoreItem {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  phoneClean: string;
  email: string;
  image: string;
  hours: { days: string; time: string }[];
  highlight: string;
  badge?: string;
  isFlagship?: boolean;
}

export const siteConfig = {
  // Alapadatok
  businessName: 'Jáner-Hús Zrt.',
  legalName: 'Jáner-Hús Feldolgozó és Kereskedelmi Zrt.',
  tagline: 'Frissen a legjobb! · Minőségi húsáru és kézműves füstöltek 1992 óta',
  seoDescription: 'Jáner-Hús Zrt. – Húsfeldolgozás, húsnagykereskedés és 4 saját mintabolt Budapesten és Pest megyében. Hagyományos TRADÍCIÓ termékek, konyhakész húsbontás séfeknek és 4.8★ óbudai mintabolt grillpulttal.',
  siteUrl: 'https://janer-hus-weboldal.vercel.app',

  // Cégadatok (B2B bizalom és transzparencia)
  companyData: {
    registrationNumber: '01 10 046732',
    taxNumber: '22905611-2-41',
    euPlantBudapest: 'HU 387 EK',
    euPlantSzigetszentmiklos: 'HU 495 EK',
    iso: 'ISO 9001:2015',
    founded: '1992',
    ownership: '100% Magyar Tulajdon',
  },

  // Márka színek (Prémium húsipari mélybordó, meleg arany akcentus, természetes háttér)
  theme: {
    primary: '#8B1E1E',       // Prémium mély marhabordó
    primaryHover: '#701515',  // Sötétebb telt bordó
    accent: '#C2410C',        // Meleg sült arany / fűszer narancs
    bg: '#FAF8F5',            // Meleg törtfehér háttér
    bgAlt: '#F4EFEA',         // Finom meleg kontrasztos szekció háttér
    text: '#1C1917',          // Mély kőszürke / fekete betűk
    textSoft: '#57534E',      // Finom másodlagos szövegszín
    border: '#E7DFD5',        // Meleg természetes szegélyszín
  },

  // Hero szekció
  hero: {
    badge: '4.8 Google Értékelés (170+ vélemény) · 100% Magyar Tulajdon · 1992 Óta',
    titleStart: 'Friss minőségi húsáru és hagyományos füstöltek',
    titleHighlight: 'egyenesen a hazai termelőktől',
    lead: 'Több mint 30 éve szolgáljuk ki a lakosságot és Magyarország vezető séfjeit, éttermeit és szállodáit. Két európai uniós engedéllyel rendelkező üzem, 4 saját mintabolt és szigorú ISO 9001 minőségirányítás Óbudától Szigetszentmiklósig.',
    ctaPrimary: 'Mintaboltjaink és Grillpult ↓',
    ctaPrimaryLink: '#mintaboltok',
    ctaSecondary: 'B2B Húsnagykereskedés →',
    ctaSecondaryLink: '#nagykereskedes',
    image: '/images/hero-meat.jpg',
  },

  // Mintaboltok szekció
  storesSection: {
    badge: 'Lakossági kiszolgálás & Frissensültek',
    title: 'Saját Mintaboltjaink & Retro Grillpult',
    subtitle: 'Látogasson el hozzánk! Szakképzett henteseink személyre szabott tanácsokkal, a legfrissebb húsáruval és helyben sült finomságokkal várják Önt.',
    stores: [
      {
        id: 'obuda',
        name: '1. sz. Óbudai Zászlóshajó Mintabolt',
        city: 'Budapest III. kerület',
        address: '1036 Budapest, Pacsirtamező utca 22.',
        phone: '(06 1) 367 5630',
        phoneClean: '+3613675630',
        email: 'rendeles@janerhus.hu',
        image: '/images/store-obuda.jpg',
        hours: [
          { days: 'Hétfő', time: '07:00 – 14:00' },
          { days: 'Kedd – Péntek', time: '07:00 – 18:00' },
          { days: 'Szombat', time: '07:00 – 13:00' },
          { days: 'Vasárnap', time: 'Zárva' },
        ],
        highlight: '1992 óta működő legendás üzletünk szakképzett hentesekkel. A retro grillpultban saját készítésű főtt és sült kolbászok, frissen sült csirke- és sertéshúsok, valamint a kihagyhatatlan ropogós sült pörc kapható!',
        badge: '★ 4.8 Google (170+ vélemény)',
        isFlagship: true,
      },
      {
        id: 'isaszeg',
        name: '2. sz. Isaszegi Mintabolt',
        city: 'Isaszeg',
        address: '2117 Isaszeg, Kossuth Lajos u. 9.',
        phone: '(06 20) 349 8897',
        phoneClean: '+36203498897',
        email: 'rendeles@janerhus.hu',
        image: '/images/store-isaszeg.jpg',
        hours: [
          { days: 'Hétfő', time: '07:00 – 14:00' },
          { days: 'Kedd – Péntek', time: '07:00 – 18:00' },
          { days: 'Szombat', time: '07:00 – 13:00' },
          { days: 'Vasárnap', time: '07:00 – 13:00 (Vasárnap is nyitva!)' },
        ],
        highlight: '75 éves henteshagyomány megújult formában! Napi friss sertés, marha és baromfi húsok mellett Cserpes házi tejtermékek, vecsési savanyúságok és bio-/gluténmentes termékek várják a vásárlókat.',
        badge: 'Vasárnap is nyitva!',
      },
      {
        id: 'monor',
        name: '3. sz. Monori Mintabolt',
        city: 'Monor',
        address: '2200 Monor, 4-es főút mellett (Tesco Üzletsor)',
        phone: '(06 20) 599 2020',
        phoneClean: '+36205992020',
        email: 'rendeles@janerhus.hu',
        image: '/images/store-monor.jpg',
        hours: [
          { days: 'Hétfő – Péntek', time: '08:00 – 20:00' },
          { days: 'Szombat', time: '08:00 – 13:00' },
          { days: 'Vasárnap', time: '08:00 – 18:00' },
        ],
        highlight: 'Hosszított nyitvatartás a hét minden napján, ingyenes parkolással. Teljes tőkehús választék és a szigetszentmiklósi TRADÍCIÓ termékcsalád kényelmes elérhetősége.',
        badge: 'Hétvégén is nyitva',
      },
      {
        id: 'dunakeszi',
        name: '4. sz. Dunakeszi Mintabolt',
        city: 'Dunakeszi',
        address: '2120 Dunakeszi, Fő út 190. (Tesco Áruház)',
        phone: '(06 20) 589 6453',
        phoneClean: '+36205896453',
        email: 'rendeles@janerhus.hu',
        image: '/images/store-dunakeszi.jpg',
        hours: [
          { days: 'Hétfő – Péntek', time: '08:00 – 19:00' },
          { days: 'Szombat', time: '08:00 – 16:00' },
          { days: 'Vasárnap', time: '08:00 – 14:00' },
        ],
        highlight: 'Hazai gazdáktól származó tőkehúsok és tradicionális készítmények a Dunakeszi Tescóban. Gyors és kényelmes vásárlási lehetőség a hét bármely napján.',
      },
    ] as StoreItem[],
  },

  // Termékek szekció
  servicesSection: {
    badge: 'Kínálatunk & Saját márkáink',
    title: 'Hústermékek & TRADÍCIÓ Készítmények',
    subtitle: 'Saját bontású, prémium minőségű alapanyagok és a szigetszentmiklósi húsfeldolgozó üzemünk (HU 495 EK) saját receptúra alapján készült termékei.',
    allergenPdfUrl: 'http://www.janerhus.hu/dokumentumok/JanerHus%20-%20Allergen%20tablazat.pdf',
    items: [
      {
        title: 'Friss Tőkehúsok',
        description: 'Sertés, marha, borjú, bárány, birka és bőrös malac húsok napi friss vágásból, szigorú higiéniai ellenőrzés mellett.',
        image: '/images/product-tokehus.jpg',
        badge: 'Hazai gazdáktól',
      },
      {
        title: 'Friss Baromfi Kínálat',
        description: 'Csirke, kacsa, liba és pulyka teljes bontásban: mellehúsa, combok, szárnyak, bőr és belsőségek a legmagasabb minőségben.',
        image: '/images/product-baromfi.jpg',
      },
      {
        title: 'TRADÍCIÓ Füstölt Áruk & Szalonnák',
        description: 'Hagyományos keményfán füstölt csülkök, tarják, oldalasok és szalonnafélék a megszokott, felejthetetlen magyar ízvilággal.',
        image: '/images/product-fustolt.jpg',
        badge: 'Saját márka',
      },
      {
        title: 'Kézműves Kolbász- és Hurkafélék',
        description: 'Sütni való, főtt és érlelt szárazkolbászok és hurkák generációs receptek szerint, adalékanyag-minimalizálással.',
        image: '/images/product-kolbasz.jpg',
      },
      {
        title: 'Prémium Sonkafélék & Felvágottak',
        description: 'Főtt és füstölt-főtt sonkák, minőségi felvágottak, szalámik és kenyérre valók a mindennapi és ünnepi asztalra.',
        image: '/images/product-sonka.jpg',
      },
      {
        title: 'Májasok, Kenősök & Vörösáruk',
        description: 'Finom házi kenőmájasok, roppanós virslik és szafaládék garantált hústartalommal, gyerekbarát összetételben.',
        image: '/images/product-majas.jpg',
      },
      {
        title: 'Óbudai Retro Grillpult',
        description: 'Helyben sült kolbászok, sült csirke és sertéshúsok, és a legendás ropogós sült pörc elvitelre vagy azonnali fogyasztásra.',
        image: '/images/product-grill.jpg',
        badge: 'Óbudai sláger',
      },
      {
        title: 'Konyhakész Előkészítés',
        description: 'Szeletelt, kockázott, csíkozott, darált vagy pácolt húsok pontos méretben és adagolásban éttermeknek és családoknak.',
        image: '/images/product-elokeszites.jpg',
      },
    ] as ServiceItem[],
  },

  // Húsnagykereskedés & Séfek kiszolgálása (B2B szekció)
  wholesale: {
    badge: 'B2B Partnerség & HORECA',
    title: 'Húsnagykereskedés & Húsbontó a Séfek Szolgálatában',
    subtitle: 'Több mint 500 szálloda, étterem, bisztró és üzemi konyha megbízható beszállítója vagyunk országszerte.',
    phone: '(06 1) 420 1834',
    phoneClean: '+3614201834',
    orderPhone2: '(06 1) 427 0233',
    orderMobile: '(06 20) 388 7652',
    email: 'rendeles@janerhus.hu',
    plantBudapest: '1138 Budapest, Dugonics utca 15. (HU 387 EK)',
    plantProcessing: '2310 Szigetszentmiklós, Lehel út 9. (HU 495 EK)',
    features: [
      {
        title: 'Szombaton is szállítunk',
        description: 'A hétvégi csúcsforgalom sem jelenthet fennakadást a konyháján – szombati kiszállítást is vállalunk.',
        iconType: 'truck',
      },
      {
        title: 'NON-STOP rendelésleadás',
        description: 'Rendeléseit telefonon, emailben (rendeles@janerhus.hu) vagy faxon bármikor leadhatja. Du. 16:00 után érkező tételeket másnap reggel indítjuk.',
        iconType: 'clock',
      },
      {
        title: 'Ingyenes kiszállítás 20.000 Ft-tól',
        description: 'Már 20 ezer forintos rendelési érték felett díjmentesen, hűtőláncban juttatjuk el az árut az Ön konyhájára.',
        iconType: 'box',
      },
      {
        title: 'Janer Express Budapest',
        description: 'Sürgős, fix időpontra kért szállítás a főváros területén rugalmas expressz futárszolgálatunkkal.',
        iconType: 'bolt',
      },
      {
        title: 'Két EU-engedélyes saját üzem',
        description: 'HU 387 EK budapesti húsbontó és HU 495 EK szigetszentmiklósi feldolgozó garantálja a folyamatos alapanyag-ellátást.',
        iconType: 'factory',
      },
      {
        title: 'ISO 9001 minőségbiztosítás',
        description: 'Nemzetközileg tanúsított élelmiszerbiztonsági és higiéniai rendszer a vágástól a konyhaajtóig.',
        iconType: 'clipboard',
      },
    ],
    prepServices: [
      { name: 'Szeletelés', desc: 'Grammra pontos adagok (pl. 12 dkg szeletek étlap szerinti tálaláshoz)' },
      { name: 'Kockázás', desc: 'Uniform 2x2 cm-es méret pörköltekhez, ragukhoz, egytálételekhez' },
      { name: 'Csíkozás', desc: 'Egyenletes vágás tokányokhoz, wok és ázsiai fogásokhoz' },
      { name: 'Darálás', desc: 'Friss, ellenőrzött zsírtartalmú darált hús burgerpogácsákhoz és töltelékekhez' },
      { name: 'Pácolás & Fűszerezés', desc: 'Konyhakész fűszerezés egyedi éttermi receptúra szerint' },
      { name: 'Sokkoló fagyasztás & Vákuumozás', desc: 'Azonnali frissességmegőrzés a kívánt adagméretben' },
    ],
  },

  // Miért a Jáner-Hús (Trust & Minőség)
  whyUs: {
    title: 'Miért választják a séfek és a családok a Jáner-Húst?',
    subtitle: '1992 óta a minőség, a megbízhatóság és a tisztelet a szakma és a vásárlóink iránt.',
    items: [
      {
        title: '30+ év tapasztalat, 100% magyar tulajdon',
        description: 'Nem multinacionális közvetítőkkel dolgozunk. Hazai gazdák állatállományát dolgozzuk fel saját üzemeinkben.',
        iconType: 'flag',
      },
      {
        title: 'Két EU-engedélyes üzem (HU 387 & HU 495 EK)',
        description: 'Budapesti húsbontónk és szigetszentmiklósi feldolgozónk a legszigorúbb európai higiéniai szabványoknak felel meg.',
        iconType: 'factory',
      },
      {
        title: 'ISO 9001 minőségirányítás',
        description: '2011 óta tanúsított rendszer biztosítja a hibátlan hűtőláncot, a pontos nyomonkövethetőséget és a garantált frissességet.',
        iconType: 'shield',
      },
      {
        title: 'Személyre szabott rugalmasság',
        description: 'Legyen szó a vasárnap is nyitva tartó mintaboltjainkról vagy az éttermek egyedi húsbontási kéréseiről, nálunk a vevő az első.',
        iconType: 'handshake',
      },
    ] as WhyUsItem[],
  },

  // Valós Google értékelések
  reviewsSection: {
    badge: 'Valós vásárlói vélemények',
    title: 'Vásárlóink mondták rólunk a Google Térképen',
    googleScore: '4.8',
    googleCount: '170+',
    items: [
      {
        author: 'Kovács Ferenc',
        role: 'Óbudai törzsvásárló',
        rating: 5,
        comment: 'Évtizedek óta ide járunk húsért a Pacsirtamező utcába. Mindig makulátlanul friss az áru, a hentesek rendkívül segítőkészek, és a grillpultból a sült pörcöt egyszerűen kötelező megkóstolni!',
      },
      {
        author: 'Tóth Andrea',
        role: 'Vásárló (Google Maps)',
        rating: 5,
        comment: 'Tiszta, kulturált üzlet, hatalmas választékkal. Hétvégére innen rendeltem a húsokat a családi sütögetéshez, gyönyörűen előkészítették. Nagyon örülök, hogy SZÉP kártyát is elfogadnak!',
      },
      {
        author: 'Molnár Gábor',
        role: 'Étteremvezető partner',
        rating: 5,
        comment: 'A konyhánkra a Jáner-Hús szállítja az előkészített húsárut. A szombati szállítás és a grammra pontos szeletelés hatalmas segítség a hétvégi rohamnál. Korrekt, pontos partner!',
      },
    ] as ReviewItem[],
  },

  // Elérhetőségek & Kapcsolat
  contact: {
    badge: 'Lépjen kapcsolatba velünk',
    title: 'Központi Elérhetőségek & Rendelésfelvétel',
    subtitle: 'Rendeljen telefonon vagy online, látogasson el mintaboltjainkba, vagy kérjen B2B nagykereskedelmi árajánlatot.',
    address: '1036 Budapest, Pacsirtamező utca 22.',
    phone: '(06 1) 420 1834',
    phoneClean: '+3614201834',
    phoneSecondary: '(06 1) 427 0233',
    phoneSecondaryClean: '+3614270233',
    phoneMobile: '(06 20) 388 7652',
    phoneMobileClean: '+36203887652',
    email: 'rendeles@janerhus.hu',
    emailSupport: 'ugyfelszolgalat@janerhus.hu',
    hours: [
      { days: 'Óbudai Mintabolt (Pacsirtamező u. 22.)', time: 'H: 07–14 | K–P: 07–18 | Szo: 07–13' },
      { days: 'Nagykereskedés Rendelésfelvétel', time: 'Hétköznap: 06:00 – 16:00 (utána email/fax NON-STOP)' },
      { days: 'Nagyker Szombati Kiszállítás', time: '06:00 – 12:00' },
    ],
    // FormSubmit cél email cím
    formSubmitEmail: 'rendeles@janerhus.hu',
  },

  // Lábléc
  agencyCredit: {
    enabled: true,
    name: 'Farkas Web Studio',
    url: 'https://farkaswebstudio.hu',
  },
};
