export const site = {
  name: "Autumn Rheault",
  tagline: "Triple Threat Performer",
  age: "12",
  playingAge: "Plays 9–13",
  height: `4'3"`,
  location: "Murrieta, California",
  bio: "Autumn is a young triple-threat performer trained at Norris Performing Arts Center (NPAC) in acting, voice, and dance. She brings warmth, humor, and strong stage presence to every role.",
  email: "booking@autumnrheault.com",
  parentEmail: "kcwaters1014@gmail.com",
  phone: "714-336-1481",
  contactLabel: "Parent / Guardian",
  /** Optional Vimeo/YouTube embed URL (leave empty if using Vercel Blob MP4). */
  reelEmbedUrl: "",
  resumeUrl: "",
  social: {
    instagram: "",
    youtube: "",
  },
  training: [
    {
      discipline: "Voice",
      detail:
        "4+ years private voice lessons · Norris Performing Arts Center (NPAC)",
    },
    {
      discipline: "Dance",
      detail:
        "3 years tap, jazz, and hip hop · Norris Performing Arts Center (NPAC)",
    },
    {
      discipline: "Acting",
      detail:
        "3 years group acting classes, 1 year private acting · Norris Performing Arts Center (NPAC)",
    },
    {
      discipline: "Piano",
      detail: "4+ years private piano lessons (intermediate)",
    },
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
    "Voice",
    "Intermediate Piano",
    "Tap",
    "Jazz",
    "Hip Hop",
  ],
} as const;

export const navItems = [
  { label: "About", href: "#about" },
  { label: "On Stage", href: "#gallery" },
  { label: "Reel", href: "#reel" },
  { label: "Résumé", href: "#resume" },
  { label: "Contact", href: "#contact" },
] as const;
