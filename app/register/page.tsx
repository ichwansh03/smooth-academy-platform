import type { Metadata } from "next";
import SlideView from "@/app/components/login/SlideView";
import RegisterForm from "@/app/components/register/RegisterForm";
import SlideStats from "@/app/components/register/SlideStats";
import { registerSlides } from "@/app/data/register";

export const metadata: Metadata = {
  title: "SmoothAcademy – Daftar",
};

export default function RegisterPage() {
  return (
    <div className="login-shell register-shell">
      <div className="login-container">
        <SlideView slides={registerSlides} footer={<SlideStats />} />
        <RegisterForm />
      </div>
    </div>
  );
}
