export type SocialKey =
  | "linkedin"
  | "twitter"
  | "github"
  | "youtube"
  | "website"
  | "instagram";

export type Mentor = {
  id: number;
  name: string;
  role: string;
  bio: string;
  photo: string;
  socials: Partial<Record<SocialKey, string>>;
};

export const socialOrder: SocialKey[] = [
  "linkedin",
  "twitter",
  "github",
  "youtube",
  "website",
  "instagram",
];

export const mentors: Mentor[] = [
  {
    id: 1,
    name: "Dr. Prayoga",
    role: "Lead Instructor, Web Development",
    bio: "PhD in Computer Science with 12+ years of experience in full-stack development. Passionate about making complex concepts simple and accessible.",
    photo: "https://i.pravatar.cc/300?img=1",
    socials: {
      linkedin: "https://linkedin.com/in/sarahjohnson",
      twitter: "https://twitter.com/sarahjohnson",
      github: "https://github.com/sarahjohnson",
      instagram: "https://instagram.com/sarahjohnson",
    },
  },
  {
    id: 2,
    name: "Prof. Yoga",
    role: "Senior Mentor, Data Science",
    bio: "Data scientist with 10 years of industry experience. Former lead at Google AI. Specializes in machine learning and big data.",
    photo: "https://i.pravatar.cc/300?img=1",
    socials: {
      linkedin: "https://linkedin.com/in/michaelchen",
      twitter: "https://twitter.com/michaelchen",
      github: "https://github.com/michaelchen",
      youtube: "https://youtube.com/michaelchen",
    },
  },
  {
    id: 3,
    name: "Dr. Pascayoga",
    role: "UX Design Mentor",
    bio: "Design thinking expert with 8 years of experience in product design. Has worked with Fortune 500 companies to create user-centered products.",
    photo: "https://i.pravatar.cc/300?img=1",
    socials: {
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      instagram: "https://instagram.com/emilyrodriguez",
      website: "https://emilyrodriguez.design",
    },
  },
  {
    id: 4,
    name: "Prof. Omar Patel",
    role: "Mobile Development Mentor",
    bio: "Senior mobile developer with 9 years of experience in iOS and Android. Led the development of 15+ apps with millions of downloads.",
    photo: "https://i.pravatar.cc/300?img=1",
    socials: {
      linkedin: "https://linkedin.com/in/davidkim",
      twitter: "https://twitter.com/davidkim",
      github: "https://github.com/davidkim",
      instagram: "https://instagram.com/davidkim",
    },
  },
  {
    id: 5,
    name: "Dr. Lisa Patel",
    role: "AI & Machine Learning Mentor",
    bio: "AI researcher with a PhD from MIT. Published 20+ papers on deep learning and computer vision. Dedicated to advancing ethical AI education.",
    photo: "https://i.pravatar.cc/300?img=1",
    socials: {
      linkedin: "https://linkedin.com/in/lisapatel",
      twitter: "https://twitter.com/lisapatel",
      youtube: "https://youtube.com/lisapatel",
      website: "https://lisapatel.ai",
    },
  },
  {
    id: 6,
    name: "Prof. James Patel",
    role: "Full Stack Mentor",
    bio: "Full-stack developer with 14 years of experience. Expert in JavaScript, Python, and cloud architecture. Mentor to 1000+ students worldwide.",
    photo: "https://i.pravatar.cc/300?img=1",
    socials: {
      linkedin: "https://linkedin.com/in/jamesokafor",
      github: "https://github.com/jamesokafor",
      instagram: "https://instagram.com/jamesokafor",
      website: "https://jamesokafor.dev",
    },
  },
];