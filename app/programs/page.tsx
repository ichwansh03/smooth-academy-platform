"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Icon from "@/app/components/Icon";

type VideoStatus = "watched" | "current" | "upcoming";

type VideoGroup = "penjumlahan" | "pengurangan" | "perkalian" | "pembagian";

type VideoItem = {
  id: number;
  title: string;
  duration: string;
  desc: string;
  youtube: string;
  group: VideoGroup;
  status: VideoStatus;
};

const videoData: VideoItem[] = [
  {
    id: 1,
    title: "Pengenalan Pemrograman Web",
    duration: "12:34",
    desc: "Pelajari dasar-dasar pemrograman web, termasuk HTML, CSS, dan JavaScript untuk memulai karir sebagai web developer.",
    youtube: "https://www.youtube.com/embed/1Rs2ND1ryYc?si=4hiGjN_c4qX9FfiX",
    group: "penjumlahan",
    status: "watched",
  },
  {
    id: 2,
    title: "HTML Dasar & Struktur",
    duration: "18:45",
    desc: "Pahami elemen-elemen dasar HTML, semantic markup, dan cara menyusun struktur halaman web yang baik.",
    youtube: "https://www.youtube.com/embed/salY_Sm6mv4?si=H7AQhHvFltL8hbAe",
    group: "penjumlahan",
    status: "watched",
  },
  {
    id: 3,
    title: "CSS Styling & Layout",
    duration: "22:10",
    desc: "Pelajari CSS untuk mendesain tampilan web yang menarik, termasuk flexbox, grid, dan responsive design.",
    youtube: "https://www.youtube.com/embed/1Rs2ND1ryYc?si=4hiGjN_c4qX9FfiX",
    group: "penjumlahan",
    status: "current",
  },
  {
    id: 4,
    title: "JavaScript Fundamentals",
    duration: "25:30",
    desc: "Kuasi dasar-dasar JavaScript: variabel, fungsi, loop, dan konsep penting lainnya untuk pemrograman interaktif.",
    youtube: "https://www.youtube.com/embed/salY_Sm6mv4?si=H7AQhHvFltL8hbAe",
    group: "pengurangan",
    status: "upcoming",
  },
  {
    id: 5,
    title: "DOM Manipulation",
    duration: "20:15",
    desc: "Belajar mengakses dan memanipulasi elemen HTML menggunakan DOM API untuk membuat halaman web yang dinamis.",
    youtube: "https://www.youtube.com/embed/1Rs2ND1ryYc?si=4hiGjN_c4qX9FfiX",
    group: "pengurangan",
    status: "upcoming",
  },
  {
    id: 6,
    title: "Event Handling",
    duration: "15:40",
    desc: "Pelajari cara menangani event seperti klik, hover, dan submit untuk membuat aplikasi web yang responsif.",
    youtube: "https://www.youtube.com/embed/salY_Sm6mv4?si=H7AQhHvFltL8hbAe",
    group: "perkalian",
    status: "upcoming",
  },
  {
    id: 7,
    title: "Fetch API & AJAX",
    duration: "28:20",
    desc: "Pelajari cara mengambil dan mengirim data dari server menggunakan Fetch API dan AJAX untuk aplikasi modern.",
    youtube: "https://www.youtube.com/embed/1Rs2ND1ryYc?si=4hiGjN_c4qX9FfiX",
    group: "perkalian",
    status: "upcoming",
  },
  {
    id: 8,
    title: "React.js Introduction",
    duration: "30:00",
    desc: "Mulai belajar React.js, library populer untuk membangun user interface yang interaktif dan reusable.",
    youtube: "https://www.youtube.com/embed/salY_Sm6mv4?si=H7AQhHvFltL8hbAe",
    group: "perkalian",
    status: "upcoming",
  },
  {
    id: 9,
    title: "State Management",
    duration: "24:50",
    desc: "Pelajari manajemen state di React menggunakan hooks dan context API untuk aplikasi yang scalable.",
    youtube: "https://www.youtube.com/embed/1Rs2ND1ryYc?si=4hiGjN_c4qX9FfiX",
    group: "pembagian",
    status: "upcoming",
  },
  {
    id: 10,
    title: "Deploy Aplikasi Web",
    duration: "19:30",
    desc: "Pelajari cara mendeploy aplikasi web ke production menggunakan platform seperti Vercel atau Netlify.",
    youtube: "https://www.youtube.com/embed/salY_Sm6mv4?si=H7AQhHvFltL8hbAe",
    group: "pembagian",
    status: "upcoming",
  },
];

const statusBadge: Record<VideoStatus, { label: string; className: string }> = {
  watched: { label: "✓ Watched", className: "watched" },
  current: { label: "▶ Playing", className: "current" },
  upcoming: { label: "Upcoming", className: "upcoming" },
};

const groups: { id: VideoGroup; label: string }[] = [
  { id: "penjumlahan", label: "Penjumlahan" },
  { id: "pengurangan", label: "Pengurangan" },
  { id: "perkalian", label: "Perkalian" },
  { id: "pembagian", label: "Pembagian" },
];

export default function ProgramsPage() {
  const [currentId, setCurrentId] = useState(3);
  const [playing, setPlaying] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  const current = videoData.find((v) => v.id === currentId) ?? videoData[0];
  const watchedCount = videoData.filter((v) => v.status === "watched").length;
  const pct = Math.round((watchedCount / videoData.length) * 100);

  const playVideo = (id: number) => {
    setCurrentId(id);
    setPlaying(true);
  };

  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-id="${currentId}"]`);
    el?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [currentId]);

  return (
    <>
      <div className="app">
        <Header />
        <div className="video-page">
          <div className="page-header">
            <div>
              <h2>
                <Icon name="tv" /> <span>Video Education</span>
              </h2>
              <div className="course-sub">
                <span>Web Development Bootcamp</span>
                <span className="badge">{videoData.length} videos</span>
              </div>
            </div>
            <div className="course-meta">
              <span>
                <Icon name="star" /> 4.8 (1.2k reviews)
              </span>
              <span>•</span>
              <span>
                <Icon name="book" /> {pct}% completed
              </span>
            </div>
          </div>

          <div className="video-layout">
            <div className="video-player-wrapper">
              <div className="video-player">
                {playing ? (
                  <iframe
                    src={`${current.youtube}&autoplay=1`}
                    title={current.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    className="video-placeholder"
                    onClick={() => setPlaying(true)}
                  >
                    <div className="play-icon">
                      <Icon name="play" />
                    </div>
                    <h3>{current.title}</h3>
                    <p>Klik untuk memulai video</p>
                  </button>
                )}
              </div>

              <div className="video-info">
                <h3>{current.title}</h3>
                <p className="video-description">{current.desc}</p>
                <div className="video-progress">
                  <div className="progress-bar">
                    <div className="fill" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="progress-text">{pct}%</span>
                </div>
              </div>
            </div>

            <div className="video-playlist">
              <div className="playlist-header">
                <h4>
                <Icon name="list" /> Course Content
              </h4>
                <span className="playlist-count">{videoData.length} lessons</span>
              </div>
              <div className="playlist-scroll" ref={listRef}>
                {groups.map((group) => (
                  <div key={group.id} className="playlist-group">
                    <div className="playlist-group-title">{group.label}</div>
                    {videoData
                      .filter((video) => video.group === group.id)
                      .map((video, index) => {
                        const isActive = video.id === currentId;
                        const status =
                          isActive && playing ? "current" : video.status;
                        const thumbIcon =
                          status === "watched"
                            ? "check"
                            : isActive
                              ? "play"
                              : null;
                        const badge = statusBadge[status];
                        return (
                          <button
                            key={video.id}
                            type="button"
                            data-id={video.id}
                            className={`playlist-item${isActive ? " active" : ""}`}
                            onClick={() => playVideo(video.id)}
                          >
                            <span className="thumb">
                              {thumbIcon ? (
                                <Icon name={thumbIcon} />
                              ) : (
                                index + 1
                              )}
                            </span>
                            <span className="info">
                              <span className="title">{video.title}</span>
                              <span className="duration">{video.duration}</span>
                            </span>
                            <span className={`status ${badge.className}`}>
                              {badge.label}
                            </span>
                          </button>
                        );
                      })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <a
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
        className="games-fab"
      >
        <Icon name="gamepad" /> Try Games
      </a>
    </>
  );
}
