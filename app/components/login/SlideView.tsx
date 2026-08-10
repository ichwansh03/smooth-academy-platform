"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { autoplayMs, loginSlides } from "@/app/data/login";
import { brand } from "@/app/data/content";

export default function SlideView() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(0);
  const total = loginSlides.length;

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
        <div className="logo-icon">{brand.icon}</div>
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
          {loginSlides.map((slide, i) => (
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
          {loginSlides.map((slide, i) => (
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
      </div>
    </div>
  );
}
