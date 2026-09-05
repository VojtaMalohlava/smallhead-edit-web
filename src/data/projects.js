// Data všech projektů pro web Smallhead Edit.
//
// Jak přidat nový projekt: zkopíruj jeden blok níže, změň hodnoty.
// Pole `ref` je jen tvoje interní orientace, na webu se nikde nezobrazuje.
// Pole `youtubeId` je ta část odkazu za "watch?v=", ne celá adresa.
// Pole `featured: true` znamená, že se projekt objeví na úvodní stránce.

export const categories = [
  "Aftermovie",
  "Reklama",
  "Dokument",
  "Sociální sítě",
  "Svatba",
];

export const projects = [
  // ---------- Horizontální formáty ----------
  {
    ref: "Horizontal #1",
    slug: "cyklisticky-zavod",
    title: "Cyklistický závod",
    client: "North Moravians",
    category: "Aftermovie",
    format: "horizontal",
    youtubeId: "QGLB0hB6mP4",
    featured: false,
    description:
      "Aftermovie, které mělo vygradovat v jednom konkrétním okamžiku. Vrchol jsem postavil na přerušení hudby a nasazení SFX. Ticho těsně před tím momentem udělá víc než sebeostřejší střih. Celá první polovina videa k tomu bodu vědomě směřuje.",
  },
  {
    ref: "Horizontal #2",
    slug: "svatebni-video",
    title: "Svatební video",
    client: "Soukromý klient",
    category: "Svatba",
    format: "horizontal",
    youtubeId: "tt2cqa97wBg",
    featured: false,
    description:
      "Klasická svatba, kde rozhoduje, koho ve výsledku uvidíte. Střih jsem stavěl kolem emocí a hlídal, aby se dostalo na všechny důležité členy rodiny. To je věc, kterou si nevšimnete, když je udělaná dobře, a která chybí, když se na ni zapomene.",
  },
  {
    ref: "Horizontal #3",
    slug: "defenders-games",
    title: "Defenders Games",
    client: "Strongman závod",
    category: "Aftermovie",
    format: "horizontal",
    youtubeId: "ybyOWrqEKHM",
    featured: true,
    description:
      "Silový závod, kde je energie v každém záběru, takže největší výzva byla nevyčerpat diváka hned na začátku. Napětí jsem držel dole a nechal ho vystoupat až k závěrečnému pokusu, který nese celé video.",
  },
  {
    ref: "Horizontal #4",
    slug: "trailer-dokument",
    title: "Trailer k dokumentárnímu filmu",
    client: "",
    category: "Dokument",
    format: "horizontal",
    youtubeId: "rszK0HlwwjY",
    featured: false,
    description:
      "Trailer má jediný úkol: přimět člověka podívat se na film. Nejtěžší nebylo stříhat, ale vybírat. Z celého filmu jsem hledal momenty, které naznačí dost na to, aby to táhlo, a zároveň neprozradí nic podstatného.",
  },
  {
    ref: "Horizontal #5",
    slug: "vesalius",
    title: "Vesalius",
    client: "Lékařská společnost",
    category: "Reklama",
    format: "horizontal",
    youtubeId: "zMP3s14Qbmg",
    featured: true,
    description:
      "Propagační video, které nemělo znít jako reklama. Zvolil jsem dokumentární tón a postavil ho na výpovědích lidí před kamerou, které drží pohromadě B-roll. Věrohodnost tady prodává víc než produkční hodnota.",
  },
  {
    ref: "Horizontal #6",
    slug: "dnb-festival",
    title: "DNB festival",
    client: "pro TMRW Film",
    category: "Reklama",
    format: "horizontal",
    youtubeId: "V88l0I-wYu0",
    featured: true,
    description:
      "Zadání znělo: hodně efektů, co nejrychlejší střih. U takového tempa je klíčové, aby oko mělo v každém záběru kam padnout. Rytmus jsem stavěl přímo na stopu, ne na obraz.",
  },
  {
    ref: "Horizontal #7",
    slug: "hardstyle-festival",
    title: "Hardstyle festival",
    client: "pro TMRW Film",
    category: "Reklama",
    format: "horizontal",
    youtubeId: "aKM5jVf4PEY",
    featured: true,
    description:
      "Další rychlá práce na hranici čitelnosti. Tady jsem šel po jiném druhu energie než u předchozího festivalu, tvrdší nástupy a delší výdrž na klíčových záběrech, aby video mělo vlastní tvář.",
  },

  // ---------- Reels a vertikální formáty ----------
  {
    ref: "Reel #1",
    slug: "realitni-makler",
    title: "Realitní makléř",
    client: "Klient neuveden",
    category: "Sociální sítě",
    format: "vertical",
    youtubeId: "ZVM4EgsWAMk",
    featured: false,
    description:
      "Osobní brand, kde je jediným hercem sám klient. Celé video stojí na titulcích. Navrhl jsem propracovaný systém, který drží pozornost i u diváka, co si video pustí bez zvuku, a zároveň nepřebíjí toho, kdo mluví.",
  },
  {
    ref: "Reel #2",
    slug: "zobej-zivot",
    title: "Zobej život",
    client: "Festival",
    category: "Reklama",
    format: "vertical",
    youtubeId: "lYCgWj32Y_0",
    featured: false,
    description:
      "Hrané video s neherci. To je situace, kdy střih dělá výkon. Ze surového materiálu jsem skládal repliky po částech a hledal ty půlsekundy, kde je člověk před kamerou přirozený. Výsledek působí, jako by šlo o jeden záběr.",
  },
  {
    ref: "Reel #3",
    slug: "pod-prehradou",
    title: "Pod přehradou",
    client: "Festival",
    category: "Reklama",
    format: "vertical",
    youtubeId: "Z650SA-N5uw",
    featured: false,
    description:
      "Znovu neherci, znovu práce s načasováním. Tentokrát jsem šel po uvolněnějším rytmu, který odpovídá atmosféře festivalu. Přirozenost tady nevzniká při natáčení, ale ve střižně.",
  },
  {
    ref: "Reel #4",
    slug: "dotykacka",
    title: "Dotykačka",
    client: "Výkonnostní kampaň",
    category: "Reklama",
    format: "vertical",
    youtubeId: "__uWeFEQYD0",
    featured: true,
    description:
      "Výkonnostní formát, kde se úspěch měří čísly, ne pocitem. Video je postavené tak, aby první dvě sekundy zastavily scrollování a sdělení dorazilo dřív, než divák stihne odejít.",
  },
  {
    ref: "Reel #5",
    slug: "choice",
    title: "Choice",
    client: "se Zdeňkem Polreichem",
    category: "Reklama",
    format: "vertical",
    youtubeId: "shkuKFece08",
    featured: true,
    description:
      "Minimalismus jako zadání i jako řešení. Žádné efekty navíc, jednoduchá grafika a klid mezi záběry. U známé tváře je nejlepší střih ten, který si jí nechá vést a nepřidává nic vlastního.",
  },
  {
    ref: "Reel #6",
    slug: "rozbor-editu",
    title: "Rozbor editu",
    client: "Osobní projekt",
    category: "Sociální sítě",
    format: "vertical",
    youtubeId: "gKw16Veiz6k",
    featured: false,
    description:
      "Vlastní video, ve kterém rozebírám práci světového tvůrce a zkouším ji vylepšit. Celý úkol byl srozumitelnost. Každý krok musel být vysvětlený grafikou tak, aby to pobralo i publikum, které nikdy nesedělo ve střižně.",
  },
  {
    ref: "Reel #7",
    slug: "placement",
    title: "Placement",
    client: "Marketingová agentura",
    category: "Sociální sítě",
    format: "vertical",
    youtubeId: "mo34ZcLp7dg",
    featured: true,
    description:
      "Série reelů pro budování brandu. Designové titulky drží vizuální identitu, ale video muselo zůstat přirozené. Hledal jsem hranici, kde grafika ještě pomáhá a už nepůsobí jako korporátní šablona.",
  },
  {
    ref: "Reel #8",
    slug: "perfectology-brno",
    title: "Perfectology Brno",
    client: "pro TMRW Film",
    category: "Reklama",
    format: "vertical",
    youtubeId: "4OHe9FHkzKc",
    featured: false,
    description:
      "Zakázka zpracovaná pro agenturu TMRW Film. Minimalistický přístup, kde vše slouží jedné message. Odstranit se dalo hodně, a právě proto video funguje.",
  },
  {
    ref: "Reel #9",
    slug: "pokeccce-1-2-mil",
    title: "Pokeccce, 1,2 mil. zhlédnutí",
    client: "YouTube",
    category: "Sociální sítě",
    format: "vertical",
    youtubeId: "aQE5ZHHjApo",
    featured: true,
    description:
      "Zadání bylo maximum efektů kvůli retenci. Efekt tady není ozdoba, ale nástroj: nasazuje se přesně tam, kde by pozornost jinak klesla. Video má přes 1,2 milionu zhlédnutí.",
  },
  {
    ref: "Reel #10",
    slug: "pokeccce-900-tis",
    title: "Pokeccce, 900 tis. zhlédnutí",
    client: "YouTube",
    category: "Sociální sítě",
    format: "vertical",
    youtubeId: "bUyliuvet9Q",
    featured: false,
    description:
      "Stejný princip, jiný materiál. Tempo jsem ladil podle toho, kde v předchozích videích divák odpadal. Výsledek 900 tisíc zhlédnutí.",
  },
];

// Pomocné funkce, které využije stránka Práce i úvodní stránka.
export const featuredProjects = projects.filter((p) => p.featured);
export const horizontalProjects = projects.filter((p) => p.format === "horizontal");
export const verticalProjects = projects.filter((p) => p.format === "vertical");
