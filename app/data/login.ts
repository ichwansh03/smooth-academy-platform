// Login page content: carousel slides + form copy.

import type { CarouselSlide } from "@/app/data/slides";

export const loginSlides: CarouselSlide[] = [
  {
    id: "anytime",
    icon: "📚",
    title: "Learn Anytime, Anywhere",
    description:
      "Access high-quality courses from anywhere in the world, at your own pace.",
  },
  {
    id: "expert-led",
    icon: "🎯",
    title: "Expert-Led Programs",
    description:
      "Learn from industry professionals with real-world experience and proven expertise.",
  },
  {
    id: "mentorship",
    icon: "🤝",
    title: "1-to-1 Mentorship",
    description:
      "Get personalized guidance and support from dedicated mentors who care about your growth.",
  },
  {
    id: "community",
    icon: "🏆",
    title: "Join 20,000+ Students",
    description:
      "Become part of a thriving community of learners and achievers worldwide.",
  },
];

export const loginForm = {
  title: "Masuk",
  titleEmoji: "👋",
  subtitle: "Silakan masuk ke akun Anda untuk melanjutkan",
  usernameLabel: "Username",
  usernamePlaceholder: "Masukkan username Anda",
  passwordLabel: "Password",
  passwordPlaceholder: "Masukkan password Anda",
  rememberLabel: "Ingat saya",
  forgotLabel: "Lupa password?",
  submitLabel: "Login",
  dividerLabel: "atau",
  socials: [
    { id: "google", icon: "🔗", label: "Google" },
    { id: "linkedin", icon: "💼", label: "LinkedIn" },
  ],
  footerText: "Belum punya akun?",
  footerLinkLabel: "Daftar",
  errors: {
    empty: "Harap isi username dan password terlebih dahulu.",
  },
};
