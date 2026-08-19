// Centralized content for the landing page.
// Presentation lives in components; copy/structure lives here.

export const brand = {
  name: "Smooth",
  accent: "Academy",
  icon: "SA",
  tagline:
    "Your trusted partner for online learning. Empowering students worldwide with expert-led courses and personalized mentorship.",
};

export type NavLink = {
  label: string;
  href: string;
  active?: boolean;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/", active: true },
  { label: "Programs", href: "/programs" },
  { label: "Mentors", href: "/mentors" },
  { label: "Pricing", href: "#" },
  { label: "Contact", href: "#" },
];

export const headerActions = [{ label: "Login" }];

export const hero = {
  badge: "Your Online Learning Partner",
  title: {
    line1: "Learn, Grow, and Achieve",
    line2Prefix: "with ",
    highlight: "Expert Guidance",
  },
  description:
    "Access high-quality courses anytime, anywhere, and take control of your learning journey with ease.",
  cta: "Get Started Now",
};

export type Stat = {
  id: string;
  value: string;
  suffix?: string;
  label: string;
  rating?: boolean;
  note?: string;
  noteStrong?: string;
  noteEnd?: string;
};

export const stats: Stat[] = [
  { id: "students", value: "20,000", suffix: "+", label: "Total Students" },
  { id: "instructors", value: "400", suffix: "+", label: "Total Instructors" },
  {
    id: "rating",
    value: "4.8",
    label: "Student Review",
    rating: true,
    note: "Based on more than",
    noteStrong: "10,000",
    noteEnd: "feedbacks",
  },
];

export type Feature = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    id: "mentors",
    icon: "trophy",
    title: "Best Mentors",
    description:
      "Our top mentors bring valuable knowledge and experience to guide you on your journey.",
  },
  {
    id: "price",
    icon: "cash",
    title: "Best Price",
    description:
      "We offer competitive pricing on all our courses, ensuring you receive the best value for money.",
  },
  {
    id: "learning",
    icon: "book",
    title: "Easy to Learn",
    description:
      "With user-friendly navigation and engaging materials, you can dive into your studies hassle-free.",
  },
  {
    id: "discussion",
    icon: "chat",
    title: "1 to 1 Discussion",
    description:
      "Our 1-to-1 mentoring connects you with dedicated professionals for your queries.",
  },
];

export type FooterLink = { label: string; href: string };
export type FooterColumn = { title: string; links: FooterLink[] };

export const footerColumns: FooterColumn[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Programs", href: "/programs" },
      { label: "Mentors", href: "/mentors" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Blog", href: "#" },
      { label: "Events", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Become a Mentor", href: "#" },
    ],
  },
];

export const socials = [
  { label: "Twitter", icon: "twitter", href: "#" },
  { label: "LinkedIn", icon: "linkedin", href: "#" },
  { label: "YouTube", icon: "youtube", href: "#" },
  { label: "Instagram", icon: "instagram", href: "#" },
];

export const copyright = "© 2026 Smooth Academy. All rights reserved.";
