// ===== EDIT YOUR CONTENT HERE =====
export const PROFILE = {
  name: "Waseem Abbas",
  first: "Waseem",
  last: "Abbas",
  eyebrow: "Building modern web experiences",
  role: "Frontend Developer",
  location: "Islamabad, Pakistan",
  phone: "0315 5822511",
  whatsapp: "923155822511", // no + or spaces
  email: "waseembayi0315@gmail.com",
  intro:
    "Frontend developer  with 2+ years of experience. I build fast websites and full web apps with Next.js, React and Supabase, and I'm currently working on FintaxGPT at Fintax Global.",
  facts: [
    { icon: "code", value: "2+ years", label: "Experience" },
    { icon: "box", value: "FintaxGPT", label: "Current product" },
    { icon: "figma", value: "Figma to code", label: "Pixel-accurate" },
  ],
};

export const SOCIALS = [
  { name: "GitHub", url: "https://github.com/WaseemAbbas5822" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/waseem-abbas-6251143ab/" },
  { name: "Facebook", url: "https://www.facebook.com/WaseemAbbass45" },
];

// status: "done" or "wip" (in progress). Naya project isi list ke andar add karein.
export const PROJECTS = [
  {
    title: "FintaxGPT",
    status: "wip",
    desc: "AI product for tax and finance questions at Fintax Global. I build the frontend.",
    tech: ["React", "Next.js"],
    image: "/projects/fintaxgpt.png",
    live: "https://www.fintaxgpt.com",
    code: "",
  },
  {
    title: "Padho Ya Parhao",
    status: "done",
    desc: "Tuition platform where students find verified home and online teachers by city and subject, and contact them directly on WhatsApp or call.",
    tech: ["Next.js", "Supabase"],
    image: "/projects/padhoyaparhao.png",
    live: "https://padhoyaparhao.vercel.app/",
    code: "",
  },
  {
    title: "Nagar Fruits",
    status: "done",
    desc: "E-commerce website for ordering fresh fruits from Nagar Valley, with a shop, cart and WhatsApp ordering.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/nagarfruits.png",
    live: "https://nagar-fruits.vercel.app/",
    code: "",
  },
 
  // agla project 
];

const dev = (name, v = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${v}.svg`;

export const SKILLS = [
  {
    id: "frontend", group: "Frontend", icon: "code",
    desc: "Building responsive and interactive user interfaces.",
    items: [
      { name: "HTML", logo: dev("html5") },
      { name: "CSS", logo: dev("css3") },
      { name: "JavaScript", logo: dev("javascript") },
      { name: "React", logo: dev("react") },
      { name: "Next.js", logo: dev("nextjs"), mono: true },
      { name: "Vue", logo: dev("vuejs") },
      { name: "Nuxt", logo: dev("nuxtjs") },
    ],
  },
  {
    id: "backend", group: "Backend", icon: "database",
    desc: "Building secure and scalable server-side solutions.",
    items: [
      { name: "Supabase", logo: dev("supabase") },
      { name: "Python", logo: dev("python") },
    ],
  },
  {
    id: "tools", group: "Tools", icon: "wrench",
    desc: "Essential tools for development, collaboration and productivity.",
    items: [
      { name: "Git", logo: dev("git") },
      { name: "GitHub", logo: dev("github"), mono: true },
      { name: "Figma to code", logo: dev("figma") },
      { name: "Contentful", logo: "https://cdn.simpleicons.org/contentful" },
      { name: "Jira", logo: dev("jira") },
      { name: "Chrome DevTools", logo: dev("chrome") },
    ],
  },
  {
    id: "strengths", group: "Strengths", icon: "star",
    desc: "Key qualities that help me deliver great results.",
    items: [
      { name: "Bug fixing", icon: "bug" },
      { name: "Understanding client requirements", icon: "users" },
      { name: "Team work in Microsoft Teams", logo: "https://cdn.simpleicons.org/microsoftteams" },
    ],
  },
];

export const SERVICES = [
  { title: "Website development", icon: "window", tint: "#4d8bff", desc: "Business sites, landing pages and portfolios that load fast and work on phones." },
  { title: "Figma to code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", desc: "Your Figma design turned into clean, responsive HTML/CSS, React or Next.js." },
  { title: "Web app with Supabase", icon: "database", tint: "#3ecf8e", desc: "Login, database and dashboards with React/Next.js or Vue/Nuxt and Supabase." },
  { title: "Blog and CMS setup", icon: "filetext", tint: "#9a8bff", desc: "Contentful connected to your site so you can edit content without code." },
  { title: "Bug fixing", icon: "bug", tint: "#ff5a5a", desc: "I find the cause with DevTools and console, fix it, and explain what went wrong." },
];

export const EXPERIENCE = [
  {
    when: "June 2026 - Present",
    title: "Frontend Developer",
    org: "Fintax Global",
    text: "Working on FintaxGPT. Daily work with the team on Jira and Microsoft Teams.",
    letter: "F",
    tech: [
      { name: "React", logo: dev("react") },
      { name: "Next.js", logo: dev("nextjs"), mono: true },
      { name: "Jira", logo: dev("jira") },
      { name: "Teams", logo: "https://cdn.simpleicons.org/microsoftteams" },
    ],
  },
  {
    when: "2 Years Total",
    title: "Freelance & Personal Projects",
    org: "",
    text: "Built many projects on my own, from client sites to Supabase apps.",
    icon: "code",
    tech: [
      { name: "Next.js", logo: dev("nextjs"), mono: true },
      { name: "React", logo: dev("react") },
      { name: "Supabase", logo: dev("supabase") },
    ],
  },
];

export const EDUCATION = [
  {
    when: "Ongoing",
    title: "BS Software Engineering",
    org: "NUST University",
    text: "Currently studying in the 5th semester.",
    logo: "/logos/nust.png",
    art: "code",
  },
  {
    when: "7 Months",
    title: "Full Stack Web Development",
    org: "PNY Training Center",
    text: "Course completed at PNY Training Center.",
    logo: "/logos/pny.png",
    art: "cap",
  },
];

// Sample reviews. Replace with real ones when you get them.
export const TESTIMONIALS = [
  { name: "Ahmed Raza", role: "Business Owner", country: "Pakistan", service: "Website development", text: "Waseem turned our Figma design into a clean, fast website. He understood what we needed without long explanations." },
  { name: "James Carter", role: "Startup Founder", country: "United Kingdom", service: "Web app with Supabase", text: "Waseem built our dashboard with login and a database using Supabase. Communication was clear and the first release worked smoothly." },
  { name: "Sara Khan", role: "Product Manager", country: "Pakistan", service: "Frontend development", text: "Great to work with on Jira and Teams. He delivers on time and keeps the team updated at every step." },
  { name: "Emily Johnson", role: "Marketing Lead", country: "United States", service: "Blog and CMS setup", text: "Our team now publishes posts without any developer help. The Contentful setup was simple and he explained everything well." },
  { name: "Bilal Ahmed", role: "Freelance Client", country: "Pakistan", service: "Bug fixing", text: "He found the bug in minutes using DevTools and explained clearly what caused it. Very professional." },
];