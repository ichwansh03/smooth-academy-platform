// Register page content: carousel slides + form copy.

import type { CarouselSlide } from "@/app/data/slides";

export const registerSlides: CarouselSlide[] = [
  {
    id: "start",
    icon: "rocket",
    title: "Mulai Perjalanan Belajarmu",
    description:
      "Daftar sekarang dan akses ribuan kursus berkualitas dari mentor terbaik.",
  },
  {
    id: "courses",
    icon: "book",
    title: "Akses Kursus Berkualitas",
    description:
      "Pelajari keterampilan baru dengan materi terkini dan studi kasus nyata.",
  },
  {
    id: "mentor",
    icon: "handshake",
    title: "Bimbingan 1-on-1 dari Mentor",
    description: "Dapatkan pendampingan personal dari para ahli di bidangnya.",
  },
  {
    id: "community",
    icon: "trophy",
    title: "Bergabung dengan 20.000+ Siswa",
    description: "Jadilah bagian dari komunitas pembelajar yang berkembang pesat.",
  },
];

export type RegisterField = {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  fullWidth: boolean;
};

export type RegisterStat = {
  id: string;
  value: string;
  label: string;
};

export const registerStats: RegisterStat[] = [
  { id: "students", value: "20.000+", label: "Siswa" },
  { id: "mentors", value: "400+", label: "Mentor" },
  { id: "rating", value: "4.8/5", label: "Rating" },
];

export const registerForm = {
  title: "Buat Akun",
  titleEmoji: "sparkles",
  subtitle: "Daftar untuk memulai perjalanan belajar Anda",
  fields: [
    { id: "firstName", label: "First Name", placeholder: "Nama depan", type: "text", fullWidth: false },
    { id: "lastName", label: "Last Name", placeholder: "Nama belakang", type: "text", fullWidth: false },
    { id: "username", label: "Username", placeholder: "Pilih username", type: "text", fullWidth: true },
    { id: "email", label: "Email", placeholder: "your@email.com", type: "email", fullWidth: true },
    { id: "phone", label: "Phone", placeholder: "Nomor telepon", type: "tel", fullWidth: true },
    { id: "birthDate", label: "Birth Date", placeholder: "", type: "date", fullWidth: true },
    { id: "password", label: "Password", placeholder: "Buat password", type: "password", fullWidth: false },
    { id: "confirmPassword", label: "Confirm Password", placeholder: "Konfirmasi password", type: "password", fullWidth: false },
  ] satisfies RegisterField[],
  termsPrefix: "Saya setuju dengan",
  termsLinkLabel: "Syarat & Ketentuan",
  submitLabel: "Daftar",
  dividerLabel: "atau",
  socials: [
    { id: "google", icon: "google", label: "Google" },
    { id: "linkedin", icon: "linkedin", label: "LinkedIn" },
  ],
  footerText: "Sudah punya akun?",
  footerLinkLabel: "Masuk",
  errors: {
    empty: "Harap isi semua field yang tersedia.",
    passwordTooShort: "Password harus terdiri dari minimal 6 karakter.",
    passwordMismatch: "Password dan Confirm Password tidak cocok.",
    termsRequired: "Harap setujui Syarat & Ketentuan terlebih dahulu.",
  },
};
