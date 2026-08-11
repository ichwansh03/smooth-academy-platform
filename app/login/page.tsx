import type { Metadata } from "next";
import SlideView from "@/app/components/login/SlideView";
import LoginForm from "@/app/components/login/LoginForm";
import { loginSlides } from "@/app/data/login";

export const metadata: Metadata = {
  title: "Zisaa – Login",
};

export default function LoginPage() {
  return (
    <div className="login-shell">
      <div className="login-container">
        <SlideView slides={loginSlides} />
        <LoginForm />
      </div>
    </div>
  );
}
