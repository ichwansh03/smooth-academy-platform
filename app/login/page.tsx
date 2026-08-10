import type { Metadata } from "next";
import SlideView from "@/app/components/login/SlideView";
import LoginForm from "@/app/components/login/LoginForm";

export const metadata: Metadata = {
  title: "Zisaa – Login",
};

export default function LoginPage() {
  return (
    <div className="login-shell">
      <div className="login-container">
        <SlideView />
        <LoginForm />
      </div>
    </div>
  );
}
