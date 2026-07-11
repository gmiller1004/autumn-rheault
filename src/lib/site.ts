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
  resumeUrl: "/resume.pdf",
  social: {
    instagram: "",
    youtube: "",
  },
  training: [
    {
      discipline: "Norris Performing Arts Center",
      detail:
        "August 2023–Present · Triple Threat Competition Team · Acting and vocal classes · Dance: Broadway Jazz, Contemporary Jazz, Tap, Hip-Hop, Lyrical",
    },
    {
      discipline: "Taylor Kunysz",
      detail:
        "August 2022–Present · Private voice coach and piano instructor · Music theory",
    },
  ],
  credits: [
    {
      show: "Alice in Wonderland Jr.",
      role: "4 of Hearts",
      venue: "Norris Performing Arts Center",
      year: "May 2026",
    },
    {
      show: "Shrek Jr.",
      role: "Duloc Dancer, Skeleton Dancer, Chorus",
      venue: "Norris Performing Arts Center",
      year: "May 2025",
    },
    {
      show: "Frozen Jr.",
      role: "Hidden Folk, Chorus",
      venue: "Norris Performing Arts Center",
      year: "December 2024",
    },
    {
      show: "Matilda Jr.",
      role: "Matilda",
      venue: "Norris Performing Arts Center",
      year: "October 2024",
    },
    {
      show: "Seussical Jr.",
      role: "Bird Girl, Chorus",
      venue: "Norris Performing Arts Center",
      year: "July 2024",
    },
    {
      show: "Annie Jr.",
      role: "Orphan Girl, Chorus",
      venue: "Norris Performing Arts Center",
      year: "March 2024",
    },
    {
      show: "Willy Wonka Junior",
      role: "Candy Kid, Oompa Loompa",
      venue: "Norris Performing Arts Center",
      year: "October 2023",
    },
  ],
  awards: ["Musical Theater Triple Threat Award"],
  skills: [
    "Intermediate Pianist",
    "Cartwheel, Round-Off & Handstand",
  ],
} as const;

export const navItems = [
  { label: "About", href: "#about" },
  { label: "On Stage", href: "#gallery" },
  { label: "Reel", href: "#reel" },
  { label: "Résumé", href: "#resume" },
  { label: "Contact", href: "#contact" },
] as const;
