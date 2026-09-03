/**
 * Home — Landing page
 *
 * Screen 1 of the consumer journey.
 * Headline: WHAT ARE YOU FIXING?
 * CTA: Start Repair Guide
 */

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { trackEvent } from "../utils/analytics.js";

export function Home({ onStart }) {
  const navigate = useNavigate();

  useEffect(() => {
    trackEvent("landing_view");
  }, []);

  function handleStart() {
    trackEvent("guide_started");
    onStart();
    navigate("/guide");
  }

  return (
    <div className="page">
      {/* Minimal nav */}
      <nav className="navbar">
        <span className="navbar__brand">
          <span className="text-red">LOC</span> IT
        </span>
        <span className="badge badge--red">Repair Guide</span>
      </nav>

      {/* Hero */}
      <main className="hero" id="main-content">
        <div className="hero__bg-glow" aria-hidden="true" />

        {/* Eyebrow */}
        <div className="hero__eyebrow animate-fade-up">
          LOC IN WITH LOCTITE
        </div>

        {/* Headline */}
        <div className="animate-fade-up animate-fade-up--delay-1">
          <h1 className="display-xl">
            WHAT ARE
            <br />
            <span className="gradient-text">YOU FIXING?</span>
          </h1>
        </div>

        {/* Supporting copy */}
        <p
          className="body-lg text-muted animate-fade-up animate-fade-up--delay-2"
          style={{ maxWidth: "300px", textAlign: "center" }}
        >
          Tell us a little about your repair and we'll help you find the right LOCTITE.
        </p>

        {/* Flow indicator */}
        <div className="hero__flow animate-fade-up animate-fade-up--delay-3">
          <span>Find</span>
          <span className="hero__flow-sep">→</span>
          <span>Fix</span>
          <span className="hero__flow-sep">→</span>
          <span>Hold</span>
        </div>

        {/* CTA group */}
        <div className="hero__cta-group animate-fade-up animate-fade-up--delay-4">
          <button
            id="btn-start-guide"
            className="btn btn--primary"
            onClick={handleStart}
          >
            Start Repair Guide &nbsp;→
          </button>
        </div>

        {/* Prototype disclaimer */}
        <p className="hero__disclaimer animate-fade-up animate-fade-up--delay-5">
          This is a prototype guide. Product recommendations are for demonstration
          purposes and must be verified against official LOCTITE product information.
        </p>
      </main>
    </div>
  );
}

export default Home;
