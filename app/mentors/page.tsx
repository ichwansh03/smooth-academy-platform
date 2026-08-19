"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Icon from "@/app/components/Icon";
import { mentors, socialOrder } from "@/app/data/mentors";
import type { Mentor } from "@/app/data/mentors";

function Avatar({ mentor }: { mentor: Mentor }) {
  const [failed, setFailed] = useState(false);
  const initials = mentor.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <div className="avatar">
      {failed ? (
        <div className="fallback">{initials}</div>
      ) : (
        <Image
          src={mentor.photo}
          alt={mentor.name}
          width={104}
          height={104}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export default function MentorsPage() {
  return (
    <>
      <div className="app">
        <Header />
        <div className="mentors-page">
          <div className="page-header">
            <h2>
              <Icon name="user" /> Meet Our <span>Expert Mentors</span>
            </h2>
            <p>
              Learn from industry professionals with years of real-world
              experience and a passion for teaching.
            </p>
          </div>

          <div className="mentors-grid">
            {mentors.map((mentor) => (
              <div key={mentor.id} className="mentor-card">
                <Avatar mentor={mentor} />
                <h3>{mentor.name}</h3>
                <span className="role">{mentor.role}</span>
                <p className="bio">{mentor.bio}</p>
                <div className="social-links">
                  {socialOrder.map((key) => (
                    <a
                      key={key}
                      href={mentor.socials[key] ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={key}
                      aria-label={key}
                    >
                      <Icon name={key === "website" ? "globe" : key} />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}