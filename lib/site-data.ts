export type Program = {
  code: string
  name: string
  short: string
  image: string
  description: string
  careers: string[]
}

export const programs: Program[] = [
  {
    code: 'BSAB',
    name: 'BS in Agricultural Business',
    short: 'Agricultural Business',
    image: '/images/program-agribusiness.png',
    description:
      'Blend agriculture with modern business — supply chains, agri-finance, and enterprise management for a food-secure future.',
    careers: ['Agribusiness Manager', 'Farm Enterprise Owner', 'Agri-Finance Officer', 'Supply Chain Analyst'],
  },
  {
    code: 'BTVTEd',
    name: 'B. Technical-Vocational Teacher Education',
    short: 'Tech-Voc Teacher Education',
    image: '/images/program-tvted.png',
    description:
      'Train to teach the skilled trades — hands-on pedagogy that prepares the next generation of technical educators.',
    careers: ['TVL Teacher', 'Training Facilitator', 'Skills Assessor', 'Curriculum Developer'],
  },
  {
    code: 'BSE',
    name: 'BS in Entrepreneurship',
    short: 'Entrepreneurship',
    image: '/images/program-entrep.png',
    description:
      'Turn ideas into ventures — innovation, finance, and management skills to build and scale your own business.',
    careers: ['Business Owner', 'Startup Founder', 'Business Development Officer', 'Franchise Manager'],
  },
  {
    code: 'BPA',
    name: 'Bachelor of Public Administration',
    short: 'Public Administration',
    image: '/images/program-pubad.png',
    description:
      'Lead in public service — governance, policy, and administration for effective and ethical institutions.',
    careers: ['Government Officer', 'Policy Analyst', 'Local Administrator', 'NGO Program Manager'],
  },
  {
    code: 'BSTM',
    name: 'BS in Tourism Management',
    short: 'Tourism Management',
    image: '/images/program-tourism.png',
    description:
      'Shape memorable experiences — tourism operations, hospitality, and destination management for a growing industry.',
    careers: ['Tourism Officer', 'Travel Consultant', 'Events Manager', 'Hospitality Supervisor'],
  },
]

export type Announcement = {
  date: string
  title: string
  tag: string
}

export const announcements: Announcement[] = [
  { date: 'Aug 18, 2026', title: 'Enrollment for 1st Semester A.Y. 2026–2027 is now open', tag: 'Enrollment' },
  { date: 'Aug 25, 2026', title: 'Freshmen Orientation Program schedule released', tag: 'Academics' },
  { date: 'Sep 01, 2026', title: 'Start of Classes — First Semester', tag: 'Calendar' },
  { date: 'Sep 05, 2026', title: 'Scholarship application deadline for new students', tag: 'Scholarship' },
  { date: 'Sep 12, 2026', title: 'Deadline for submission of admission requirements', tag: 'Admissions' },
  { date: 'Sep 20, 2026', title: 'Foundation Week 2026 — activities announced', tag: 'Events' },
]

export type NewsItem = {
  title: string
  excerpt: string
  date: string
  image: string
  category: string
}

export const news: NewsItem[] = [
  {
    title: 'Colegio De Loreto opens enrollment for its inaugural academic year',
    excerpt:
      'The college welcomes its pioneer batch of students across five degree programs, marking a milestone for higher education in Loreto, Agusan del Sur.',
    date: 'Aug 10, 2026',
    image: '/images/news-1.png',
    category: 'Admissions',
  },
  {
    title: 'Building future leaders: CDL commits to community-rooted education',
    excerpt:
      'With the motto Scientia ad Excellentiam, the college anchors its programs on academic rigor, character, and service to the local community.',
    date: 'Aug 02, 2026',
    image: '/images/news-2.png',
    category: 'Community',
  },
  {
    title: 'Research and innovation take center stage at CDL',
    excerpt:
      'Students showcase agri-enterprise and tourism projects designed to address real needs in Agusan del Sur and the CARAGA region.',
    date: 'Jul 28, 2026',
    image: '/images/news-3.png',
    category: 'Research',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'News', href: '#news' },
  { label: 'Announcements', href: '#announcements' },
  { label: 'Contact', href: '#contact' },
]
