export const site = {
  name: "Autumn Rheault",
  tagline: "Triple Threat Performer",
  playingAge: "Plays 9–13",
  age: "[Age]",
  height: '[Height — e.g. 4\'10"]',
  location: "[City, State]",
  bio: "Autumn is a young triple-threat performer with training in acting, voice, and dance. She brings warmth, humor, and strong stage presence to every role.",
  email: "booking@autumnrheault.com",
  reelUrl: "",
  resumeUrl: "",
  social: {
    instagram: "",
    youtube: "",
  },
  training: [
    { discipline: "Acting", detail: "[Studio / instructor — placeholder]" },
    { discipline: "Voice", detail: "[Studio / instructor — placeholder]" },
    { discipline: "Dance", detail: "[Styles & studio — placeholder]" },
  ],
  credits: [
    {
      show: "[Show Title]",
      role: "[Role]",
      venue: "[Theater / Company]",
      year: "[Year]",
    },
    {
      show: "[Show Title]",
      role: "[Role]",
      venue: "[Theater / Company]",
      year: "[Year]",
    },
  ],
  skills: [
    "Acting",
    "Musical Theater",
    "Jazz Dance",
    "Ballet",
    "Tap",
    "Piano",
  ],
} as const;

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Reel", href: "#reel" },
  { label: "Résumé", href: "#resume" },
  { label: "Contact", href: "#contact" },
] as const;
