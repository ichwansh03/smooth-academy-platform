"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { autoplayMs } from "@/app/data/slides";
import type { CarouselSlide } from "@/app/data/slides";
import { brand } from "@/app/data/content";

type SlideViewProps = {
  slides: CarouselSlide[];
  footer?: ReactNode;
};

export default function SlideView({ slides, footer }: SlideViewProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(0);
  const total = slides.length;

  const goTo = useCallback(
    (next: number) => setIndex(((next % total) + total) % total),
    [total],
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => goTo(index + 1), autoplayMs);
    return () => clearInterval(id);
  }, [paused, index, goTo]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goTo(index + 1);
      if (e.key === "ArrowLeft") goTo(index - 1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [index, goTo]);

  return (
    <div className="slide-view">
      <div className="brand">
        <div className="logo-icon">
          <Image
            src="/smooth_logo.jpeg"
            alt={`${brand.name} ${brand.accent} logo`}
            width={40}
            height={40}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div className="logo-text">
          {brand.name}
          <span>{brand.accent}</span>
        </div>
      </div>

      <div
        className="slider-wrapper"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="slide-container"
          onTouchStart={(e) => {
            touchStartX.current = e.changedTouches[0].screenX;
          }}
          onTouchEnd={(e) => {
            const diff = touchStartX.current - e.changedTouches[0].screenX;
            if (Math.abs(diff) > 40) {
              if (diff > 0) goTo(index + 1);
              else goTo(index - 1);
            }
          }}
        >
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              className={i === index ? "slide active" : "slide"}
            >
              <span className="slide-icon">{slide.icon}</span>
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          ))}
        </div>

        <div className="slide-dots">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Slide ${i + 1}`}
              className={i === index ? "dot active" : "dot"}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <div className="slide-nav">
          <button
            type="button"
            className="prev"
            aria-label="Previous slide"
            onClick={() => goTo(index - 1)}
          >
            ←
          </button>
          <button
            type="button"
            className="next"
            aria-label="Next slide"
            onClick={() => goTo(index + 1)}
          >
            →
          </button>
        </div>

        {footer}
      </div>
    </div>
  );
}
