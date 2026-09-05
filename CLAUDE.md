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

- Studio: Smallhead Edit, Vojtěch Malohlava, Brno. Střihová postprodukce.
  Tým: Vojtěch jako hlavní střihač a majitel, plus jeden střihač.
- Cíl webu: získávat poptávky. Hlavní prvek je showreel na úvodní stránce,
  YouTube playlist PLJM97r_zQoqU.
- Barvy: #10443E zelená (pozadí, bloky), #FFD28A medová (akcenty),
  #615035 hnědá (doplňky), #F7F3EC krémová (podklad obsahu).
- Písma: Fraunces na nadpisy, Archivo na text, obojí z Google Fonts
  s podporou české diakritiky.
- Projekty se VŽDY načítají ze `src/data/projects.js`, nikdy se nepíšou
  natvrdo do stránek.
- Náhledy videí se berou z img.youtube.com podle youtubeId, žádné
  obrázky se v repozitáři nehostují.
- Kontakt: vojta.malohlava1@gmail.com, IČO 21636206.
- Web musí být plně funkční na mobilu, mobilní verzi řeš vždy jako první.

STACK: Astro, čisté CSS bez Tailwindu, žádný backend. Výstup musí být
statický a nasaditelný na Cloudflare Pages.

Schválený vizuální návrh úvodní stránky je v `Podklady/smallhead-edit-prototyp.html`
— drž se jeho palety, typografie i rozvržení.

## Pravidla práce, drž se jich po celou dobu

- Dělej malé kroky, po každé změně napiš krátké shrnutí.
- Needituj soubory, o kterých jsme se nebavili.
- Nikdy nedávej do repozitáře klíče, hesla ani velké soubory.
- Když si nejsi jistý zadáním, zeptej se místo hádání.
