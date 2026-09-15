## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Zadání projektu

- Studio: Smallhead Edit, Vojtěch Malohlava. Střihová postprodukce.
  Spolupráce probíhá na dálku pro klienty v celém Česku a na Slovensku,
  lokalita studia není součástí pozicování webu.
  Tým: Vojtěch jako hlavní střihač a majitel, plus jeden střihač.
- Cíl webu: získávat poptávky.
- Barvy: #10443E zelená (pozadí, bloky), #FFD28A medová (akcenty),
  #615035 hnědá (doplňky), #F7F3EC krémová (téměř nepoužívaná, web je
  celkově tmavý).
- Písma: Space Grotesk na nadpisy a logo (bezpatkový, moderní), Archivo
  na běžný text. Obojí z Google Fonts s podporou české diakritiky.
  Fraunces (serif) se už nepoužívá.
- Logo v hlavičce je jen "Smallhead" (bez ".Edit").
- Projekty se VŽDY načítají ze `src/data/projects.js`, nikdy se nepíšou
  natvrdo do stránek.
- Náhledy videí se berou z img.youtube.com podle youtubeId, žádné
  obrázky se v repozitáři nehostují.
- Kontakt: vojta.malohlava1@gmail.com, IČO 21636206.
- Web musí být plně funkční na mobilu, mobilní verzi řeš vždy jako první.

STACK: Astro, čisté CSS bez Tailwindu, žádný backend. Výstup musí být
statický a nasaditelný na Cloudflare Pages.

Schválený vizuální návrh v `Podklady/smallhead-edit-prototyp.html` je jen
výchozí inspirace pro barvy — rozvržení i typografie se od něj už liší
(viz níže). Návrh inspirovaný webem pfx.teamtailor.com je odložený, neřešit.

## Struktura webu (aktuální rozhodnutí)

- **/** — jedna scrollovací landing page se sekcemi: hero, "Ukázky práce"
  (3 náhodně vybraná videa), Klienti, Služby, Reference, Kontakt, O mně.
  Menu na tyto sekce odkazuje kotvami (`/#o-mne`, `/#sluzby`, `/#kontakt`)
  a zároveň se k nim dá doscrollovat.
- **/portfolio** — samostatná stránka se všemi projekty (Horizontální
  formáty + Reels a vertikální formáty), viz `src/data/projects.js`.
- Sekce "Ukázky práce" na úvodní stránce vykreslí do HTML karty všech
  featured projektů obou formátů (kvůli SEO), CSS ve výchozím stavu
  ukáže jen 1 horizontální a 2 vertikální a inline skript hned za
  mřížkou (běží synchronně, ne přes JSON+innerHTML) mezi nimi NÁHODNĚ
  přepne při každém načtení stránky, ještě před prvním vykreslením.
  Personalizace podle cookies/zájmů uživatele byla zvážena a zamítnuta —
  web nemá backend ani sledování chování, takže by nebylo z čeho odvodit
  zájem uživatele, a cookies pro tento účel by navíc vyžadovaly cookie
  lištu (GDPR).
- O mně a Služby mají hotový reálný text od klienta.
- Kontakt má poptávkový formulář (`src/components/ContactForm.astro`),
  odesílá se přes Formcarry (endpoint a doména webu jsou v
  `src/data/site.js`). Pod formulářem zůstává i degradovaný textový
  odkaz na e-mail pro klienty, kteří chtějí napsat rovnou.
- Video karty (na úvodní stránce i na /portfolio) reagují na najetí myší:
  náhled se jemně přiblíží, tlačítko přehrát zvětší a nadpis zbarví do
  medové — všechno současně, ať to působí jako jedna interakce.
- V `src/layouts/Layout.astro` je vlastní JS na plynulé scrollování ke
  kotvám (`scrollIntoView`), NE CSS `scroll-behavior: smooth` na `html` —
  ta vlastnost v kombinaci s odkazem na kotvu občas úplně shodí skok na
  cílovou sekci (known Chromium bug). Neřeš to zpátky přes CSS.

## Pravidla práce, drž se jich po celou dobu

- Dělej malé kroky, po každé změně napiš krátké shrnutí.
- Needituj soubory, o kterých jsme se nebavili.
- Nikdy nedávej do repozitáře klíče, hesla ani velké soubory.
- Když si nejsi jistý zadáním, zeptej se místo hádání.
