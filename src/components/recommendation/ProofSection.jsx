/**
 * ProofSection — "SEE IT IN ACTION" demonstration area
 *
 * Contains an interactive 5-stage proof flow:
 * Problem → Apply → Set → Test → Result
 * and a high-fidelity lab demonstration video card.
 */

import { useState } from "react";

const STAGE_ICONS = {
  Problem: "🔍",
  Apply: "💧",
  Set: "⏱️",
  Test: "🔬",
  Result: "🏆",
};

export function ProofSection({ proof }) {
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);

  if (!proof) return null;

  const demoSteps = proof.demoSteps || [];
  const currentStep = demoSteps[activeStageIdx] || demoSteps[0];

  return (
    <div className="rec-section-card">
      <div className="rec-section-header">
        <h3 className="rec-section-title">
          <span>🎬</span>
          <span>See It In Action</span>
        </h3>
        <span className="badge badge--red">Henkel Lab Tested</span>
      </div>

      <p className="body-md text-muted" style={{ marginBottom: "20px" }}>
        {proof.description || "Watch how this adhesive creates a fast, durable bond under real-world stress."}
      </p>

      {/* Interactive 5-Stage Demo Tabs */}
      {demoSteps.length > 0 && (
        <div style={{ marginBottom: "20px" }}>
          <div className="proof-tabs-row" role="tablist" aria-label="Demonstration stages">
            {demoSteps.map((step, idx) => {
              const isActive = idx === activeStageIdx;
              return (
                <button
                  key={step.label}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`proof-tab-btn ${isActive ? "proof-tab-btn--active" : ""}`}
                  onClick={() => setActiveStageIdx(idx)}
                >
                  <span style={{ marginRight: "4px" }}>{STAGE_ICONS[step.label] || "•"}</span>
                  <span>{step.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Callout Box */}
          {currentStep && (
            <div className="proof-stage-display animate-fade-up" key={currentStep.label}>
              <div className="proof-stage-icon" aria-hidden="true">
                {STAGE_ICONS[currentStep.label] || "🔬"}
              </div>
              <div className="proof-stage-info">
                <div className="proof-stage-label">STAGE {activeStageIdx + 1}: {currentStep.label}</div>
                <div className="proof-stage-desc">{currentStep.desc}</div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Video Preview Player Mockup */}
      <div
        className="video-preview-card"
        onClick={() => setIsPlayingDemo((p) => !p)}
        role="button"
        tabIndex={0}
        aria-label="Play demonstration video"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsPlayingDemo((p) => !p);
          }
        }}
      >
        <div className="video-preview-overlay">
          <div className="video-play-disc" aria-hidden="true">
            {isPlayingDemo ? "❚❚" : "▶"}
          </div>
          <div style={{ textAlign: "center", padding: "0 16px" }}>
            <strong style={{ fontSize: "16px", letterSpacing: "0.02em" }}>
              {isPlayingDemo ? "Simulation Playing: Adhesive Bond Tensile Test" : "Official LOCTITE® Stress Demonstration"}
            </strong>
            <p style={{ fontSize: "12px", opacity: 0.8, marginTop: "4px" }}>
              {isPlayingDemo ? "Simulating 24h stress test load... Bond holds firm." : "Click to view full application & tensile hold proof"}
            </p>
          </div>
        </div>
        <div className="video-badge-pill">0:45 HD • LAB PROOF</div>
      </div>
    </div>
  );
}

export default ProofSection;

