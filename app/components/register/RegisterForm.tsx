"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import Icon from "@/app/components/Icon";
import { registerForm } from "@/app/data/register";

export default function RegisterForm() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [terms, setTerms] = useState(false);

  const update =
    (id: string) =>
    (e: ChangeEvent<HTMLInputElement>) =>
      setValues((prev) => ({ ...prev, [id]: e.target.value }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const missing = registerForm.fields.some(
      (field) => (values[field.id] ?? "").trim() === "",
    );
    if (missing) {
      alert(registerForm.errors.empty);
      return;
    }
    if ((values.password ?? "").length < 6) {
      alert(registerForm.errors.passwordTooShort);
      return;
    }
    if (values.password !== values.confirmPassword) {
      alert(registerForm.errors.passwordMismatch);
      return;
    }
    if (!terms) {
      alert(registerForm.errors.termsRequired);
      return;
    }

    alert(
      `✅ Pendaftaran berhasil! Selamat datang, ${values.firstName} ${values.lastName}!`,
    );
  };

  return (
    <div className="register-form">
      <div className="form-header">
        <h2>
          {registerForm.title} <Icon name={registerForm.titleEmoji} />
        </h2>
        <p>{registerForm.subtitle}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          {registerForm.fields.map((field) => (
            <div
              key={field.id}
              className={field.fullWidth ? "form-group full-width" : "form-group"}
            >
              <label htmlFor={field.id}>{field.label}</label>
              <input
                type={field.type}
                id={field.id}
                placeholder={field.placeholder}
                value={values[field.id] ?? ""}
                onChange={update(field.id)}
              />
            </div>
          ))}
        </div>

        <div className="form-options">
          <label>
            <input
              type="checkbox"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />{" "}
            {registerForm.termsPrefix}{" "}
            <a href="#">{registerForm.termsLinkLabel}</a>
          </label>
        </div>

        <button type="submit" className="btn-register">
          {registerForm.submitLabel}
        </button>
      </form>

      <div className="divider">
        <span>{registerForm.dividerLabel}</span>
      </div>

      <div className="social-login">
        {registerForm.socials.map((social) => (
          <button key={social.id} type="button">
            <Icon name={social.icon} /> {social.label}
          </button>
        ))}
      </div>

      <div className="form-footer">
        {registerForm.footerText}{" "}
        <Link href="/login">{registerForm.footerLinkLabel}</Link>
      </div>
    </div>
  );
}
