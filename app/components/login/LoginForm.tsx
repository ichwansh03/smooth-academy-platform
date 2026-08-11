"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { loginForm } from "@/app/data/login";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      alert(loginForm.errors.empty);
      return;
    }
    alert(`✅ Login berhasil! (demo) Selamat datang, ${username}!`);
  };

  return (
    <div className="login-form">
      <div className="form-header">
        <h2>
          {loginForm.title} <span>{loginForm.titleEmoji}</span>
        </h2>
        <p>{loginForm.subtitle}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">{loginForm.usernameLabel}</label>
          <input
            type="text"
            id="username"
            placeholder={loginForm.usernamePlaceholder}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">{loginForm.passwordLabel}</label>
          <input
            type="password"
            id="password"
            placeholder={loginForm.passwordPlaceholder}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-options">
          <label>
            <input type="checkbox" /> {loginForm.rememberLabel}
          </label>
          <a href="#">{loginForm.forgotLabel}</a>
        </div>

        <button type="submit" className="btn-login">
          {loginForm.submitLabel}
        </button>
      </form>

      <div className="divider">
        <span>{loginForm.dividerLabel}</span>
      </div>

      <div className="social-login">
        {loginForm.socials.map((social) => (
          <button key={social.id} type="button">
            {social.icon} {social.label}
          </button>
        ))}
      </div>

      <div className="form-footer">
        {loginForm.footerText}{" "}
        <Link href="/register">{loginForm.footerLinkLabel}</Link>
      </div>
    </div>
  );
}
