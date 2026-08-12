// Central place for brewery facts. Most of this was pulled directly from
// crabtreebrewing.com (beer-menu, our-story, contact pages) on 2026-08-10.
// A few fields are third-party-sourced best guesses — search "UNVERIFIED" to
// find every one and confirm before this goes live.

export const site = {
  name: "Crabtree Brewing Company",
  shortName: "Crabtree",
  tagline: "Greeley's Finest Beer Experience",
  established: 2006,
  description:
    "Established in 2006, Crabtree Brewing Company is proud to be Greeley's original production brewery. We're dedicated to quality beer, genuine community, and creating a taphouse environment where everyone feels at home. With more than 20 beers on tap, there's something here for every palate.",
  phone: "(970) 356-0516",
  phoneHref: "tel:+19703560516",
  // UNVERIFIED — third-party sourced (SignalHire), not pulled directly from
  // the site. Confirm the real inbox before publishing.
  email: "info@crabtreebrewing.com",
  address: {
    line1: "2961 29th St",
    city: "Greeley",
    state: "CO",
    zip: "80631",
    mapsHref: "https://maps.google.com/?q=2961+29th+St,+Greeley,+CO+80631",
  },
  social: {
    // UNVERIFIED handles — confirm these are still the live accounts.
    instagram: "https://instagram.com/crabtreebrewing",
    facebook: "https://facebook.com/crabtreebrewingco",
    untappd: "https://untappd.com/crabtreebrewing",
  },
  // 0 = Sunday ... 6 = Saturday, 24h time. Pulled from the current
  // crabtreebrewing.com homepage copy.
  hours: [
    { day: "Sunday", open: 14, close: 19 },
    { day: "Monday", open: null, close: null },
    { day: "Tuesday", open: 14, close: 21 },
    { day: "Wednesday", open: 14, close: 21 },
    { day: "Thursday", open: 14, close: 21 },
    { day: "Friday", open: 12, close: 21 },
    { day: "Saturday", open: 12, close: 21 },
  ],
} as const;

export type Beer = {
  slug: string;
  name: string;
  style: string;
  category: string;
  abv: string;
  description: string;
  featured?: boolean;
};

// Pulled from the live tap list at crabtreebrewing.com/beer-menu, grouped
// the same way the source page groups them. Descriptions are kept to plain
// facts (ingredients/style) rather than invented tasting notes — brewery
// staff should punch these up with real copy.
export const beers: Beer[] = [
  {
    slug: "dearfield",
    name: "Dearfield Ale",
    style: "Strawberry Blonde Ale",
    category: "Blondes, Pilsners & Wheats",
    abv: "5.0%",
    description: "A blonde ale brewed with real strawberry. One of the taproom's best sellers.",
    featured: true,
  },
  {
    slug: "strawberry-rhubarb",
    name: "Strawberry Rhubarb",
    style: "Fruit Sour Beer",
    category: "Sour Ales",
    abv: "5.8%",
    description: "A tart, fruited sour built on strawberry and rhubarb. Taproom favorite.",
    featured: true,
  },
  {
    slug: "chela-vida",
    name: "Chela Vida",
    style: "Mexican Lager",
    category: "Blondes, Pilsners & Wheats",
    abv: "5.4%",
    description: "Crisp, clean Mexican-style lager.",
    featured: true,
  },
  {
    slug: "chronic-haze",
    name: "Chronic Haze",
    style: "Hazy IPA",
    category: "Pale Ales",
    // UNVERIFIED — sourced from a third-party bottle shop listing, not the
    // brewery's own beer-menu page (which doesn't currently list this one).
    abv: "7.5%",
    description: "Hazy, juicy IPA. Confirm this is still in rotation — it's a homepage best seller but wasn't on the current beer-menu page.",
    featured: true,
  },
  {
    slug: "cherry-lemon-sour",
    name: "Cherry Lemon Sour",
    style: "Fruit Sour Beer",
    category: "Sour Ales",
    abv: "5.32%",
    description: "A fruited sour brewed with cherry and lemon.",
  },
  {
    slug: "sundrop",
    name: "Sundrop",
    style: "Blood Orange American Pale Ale",
    category: "Pale Ales",
    abv: "6.2%",
    description: "American pale ale brewed with blood orange.",
  },
  {
    slug: "beerly-pilsner",
    name: "Beerly Pilsner",
    style: "Czech Style Pilsner",
    category: "Blondes, Pilsners & Wheats",
    abv: "4.6%",
    description: "A traditional Czech-style pilsner.",
  },
  {
    slug: "livin-is-ez",
    name: "Livin' is EZ",
    style: "American Wheat",
    category: "Blondes, Pilsners & Wheats",
    abv: "6.4%",
    description: "Easy-drinking American wheat ale.",
  },
  {
    slug: "sunshine-rainbows",
    name: "Sunshine & Rainbows",
    style: "Blueberry & Raspberry Blonde Ale",
    category: "Blondes, Pilsners & Wheats",
    abv: "4.8%",
    description: "Blonde ale brewed with blueberry and raspberry.",
  },
  {
    slug: "cherry-blossom",
    name: "Cherry Blossom",
    style: "Cherry & Vanilla Blonde Ale",
    category: "Blondes, Pilsners & Wheats",
    abv: "6.4%",
    description: "Blonde ale brewed with cherry and vanilla.",
  },
  {
    slug: "serenity",
    name: "Serenity",
    style: "Seasonal Amber Ale",
    category: "Ambers & Reds",
    abv: "6.7%",
    description: "Seasonal amber ale.",
  },
  {
    slug: "chunkin-pumpkin",
    name: "Chunkin' Pumpkin",
    style: "Seasonal Pumpkin Ale",
    category: "Ambers & Reds",
    abv: "6.7%",
    description:
      "Annual fall release — real pumpkin added directly into the mash tun with a mix of spices.",
  },
  {
    slug: "crab-me-a-marzen",
    name: "Crab Me A Märzen",
    style: "Oktoberfest Märzen",
    category: "Ambers & Reds",
    abv: "5.7%",
    description: "Malty Oktoberfest-style Märzen.",
  },
  {
    slug: "rocky-mountain-red",
    name: "Rocky Mountain Red",
    style: "Irish Red",
    category: "Ambers & Reds",
    abv: "5.0%",
    description: "Irish-style red ale.",
  },
  {
    slug: "cali-steam",
    name: "Cali Steam",
    style: "Steam Beer",
    category: "Ambers & Reds",
    abv: "5.0%",
    description: "California common / steam beer.",
  },
  {
    slug: "oatmeal-stout",
    name: "Oatmeal Stout",
    style: "Oatmeal Stout",
    category: "Stouts & Porters",
    abv: "7.0%",
    description: "Full-bodied oatmeal stout.",
  },
  {
    slug: "headless-horseman",
    name: "Headless Horseman",
    style: "Pumpkin Ale / Stout Blend",
    category: "Stouts & Porters",
    abv: "6.8%",
    description: "A 50/50 blend of Chunkin' Pumpkin and Oatmeal Stout. Seasonal.",
  },
  {
    slug: "velvet-nitro",
    name: "Velvet Nitro",
    style: "Nitro Stout",
    category: "Stouts & Porters",
    abv: "4.5%",
    description: "Nitro-poured stout, silky and smooth. Please allow a bit of extra time for this pour.",
  },
  {
    slug: "blank-slate",
    name: "Blank Slate",
    style: "Hard Seltzer",
    category: "Hard Seltzers",
    abv: "5.0%",
    description: "Choose your own adventure — pick from over 12 syrup flavors.",
  },
  {
    slug: "hop-water",
    name: "Hop Water",
    style: "Non-Alcoholic",
    category: "Non-Alcoholic",
    abv: "0%",
    description:
      "Sparkling water with mosaic hops and butterfly pea flower. Optional: choose your own flavor.",
  },
];

export const beerCategoryOrder = [
  "Blondes, Pilsners & Wheats",
  "Pale Ales",
  "Sour Ales",
  "Ambers & Reds",
  "Stouts & Porters",
  "Hard Seltzers",
  "Non-Alcoholic",
];

export type BrewEvent = {
  slug: string;
  title: string;
  date: string;
  time: string;
  description: string;
  recurring?: boolean;
};

export const events: BrewEvent[] = [
  {
    slug: "trivia-night",
    title: "Trivia Night",
    date: "Every Wednesday",
    time: "7:00 PM",
    description: "Grab a brew and join us for trivia night in the taproom.",
    recurring: true,
  },
  {
    slug: "poker-night",
    title: "Poker Night",
    date: "Every Thursday",
    time: "6:30 PM",
    description: "Pull up a seat for poker night in the taproom.",
    recurring: true,
  },
  {
    slug: "teacher-faculty-appreciation-night",
    title: "Teacher & Faculty Appreciation Night",
    date: "Friday, August 21",
    time: "6:00 PM – 9:00 PM",
    description:
      "Back-to-school trivia, a build-your-own bookmark bar, a cafeteria-special dinner from Rubbin' Butts BBQ, and $5 pints for teachers & faculty with a current school ID.",
  },
  {
    slug: "boots-and-brews-line-dancing",
    title: "Boots & Brews Line Dancing",
    date: "Friday, August 28",
    time: "7:00 PM",
    description: "Line dancing in the taproom. $20 early bird tickets.",
  },
];
