/**
 * LoctiteAIWidget.jsx — Floating LOCTITE.AI (beta) Assistant
 *
 * Implements the floating frosted-glass AI widget shown in both
 * the mobile and desktop reference screenshots:
 * - Floating prompt chips: "Product Recommendation", "Where to Buy", "Something else"
 * - Search bar pill: "✦ Hi! I'm LOCTITE.AI (beta). How can I help?"
 * - Interactive dialog for instant adhesive advice and quick routing
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoctiteAIWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [query, setQuery] = useState("");
  const [aiResponse, setAiResponse] = useState(null);
  const navigate = useNavigate();

  if (isDismissed) {
    return (
      <button
        onClick={() => setIsDismissed(false)}
        aria-label="Open LOCTITE.AI"
        style={{
          position: "fixed",
          bottom: "16px",
          left: "16px",
          zIndex: 899,
          backgroundColor: "#FFFFFF",
          border: "1.5px solid var(--color-border)",
          boxShadow: "var(--shadow-md)",
          borderRadius: "50%",
          width: "44px",
          height: "44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--color-brand-red)",
          fontSize: "18px",
          cursor: "pointer",
        }}
        title="LOCTITE.AI (beta)"
      >
        ✦
      </button>
    );
  }

  function handleChipClick(topic) {
    if (topic === "Product Recommendation") {
      navigate("/guide");
    } else if (topic === "Where to Buy") {
      navigate("/where-to-buy");
    } else {
      setIsOpen(true);
      setAiResponse(
        "I can help you select the exact LOCTITE product for metals, plastics, ceramics, wood, or high-stress repairs. What are you looking to bond or fix?"
      );
    }
  }

  function handleQuerySubmit(e) {
    e.preventDefault();
    if (!query.trim()) return;

    const q = query.toLowerCase();
    if (q.includes("buy") || q.includes("store") || q.includes("shopee") || q.includes("tiktok")) {
      setAiResponse(
        "You can buy genuine LOCTITE products through our official Shopee and TikTok Shop stores, as well as Ace Hardware, Handyman, and authorized retail distributors."
      );
    } else if (q.includes("plastic") || q.includes("toy") || q.includes("acrylic")) {
      setAiResponse(
        "For precision plastic bonds, LOCTITE Super Glue Gel Control is best. It provides a no-drip gel that grips clean plastic surfaces without running."
      );
    } else if (q.includes("car") || q.includes("automotive") || q.includes("rubber") || q.includes("vibration")) {
      setAiResponse(
        "For automotive and high-vibration applications, LOCTITE Super Glue Ultra Gel Control offers shock-resistant rubber-toughened bonding."
      );
    } else {
      setAiResponse(
        `For "${query}", our 3-question Repair Guide will compute the highest-strength adhesive match. Would you like to run the guide now?`
      );
    }
  }

  return (
    <>
      <div className="loctite-ai-container">
        {/* Chips */}
        <div className="loctite-ai-chips">
          <button
            className="loctite-ai-chip"
            onClick={() => handleChipClick("Product Recommendation")}
          >
            Product Recommendation
          </button>
          <button
            className="loctite-ai-chip"
            onClick={() => handleChipClick("Where to Buy")}
          >
            Where to Buy
          </button>
          <button
            className="loctite-ai-chip"
            onClick={() => handleChipClick("Something else")}
          >
            Something else
          </button>
        </div>

        {/* Input Bar */}
        <div
          className="loctite-ai-bar"
          onClick={() => setIsOpen(true)}
          role="button"
          tabIndex={0}
          aria-label="Open LOCTITE.AI Assistant"
        >
          <div className="loctite-ai-prompt">
            <span className="loctite-ai-sparkle">✦</span>
            <span>Hi! I'm LOCTITE.AI (beta). How can I help?</span>
          </div>
          <button
            className="loctite-ai-close"
            onClick={(e) => {
              e.stopPropagation();
              setIsDismissed(true);
            }}
            aria-label="Dismiss LOCTITE.AI"
            title="Dismiss"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Interactive Modal */}
      {isOpen && (
        <div className="ai-modal-backdrop" onClick={() => setIsOpen(false)}>
          <div
            className="ai-modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="LOCTITE.AI Assistant"
          >
            <div className="ai-modal-header">
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "var(--color-brand-red)", fontSize: "20px" }}>✦</span>
                <strong style={{ fontFamily: "var(--font-display)", letterSpacing: "0.02em" }}>
                  LOCTITE.AI (beta)
                </strong>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{ color: "#FFFFFF", fontSize: "18px" }}
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            <div className="ai-modal-body">
              <p className="body-md">
                Ask any question about LOCTITE glues, threadlockers, surface preparation, or store availability:
              </p>

              <form onSubmit={handleQuerySubmit} style={{ display: "flex", gap: "8px" }}>
                <input
                  type="text"
                  placeholder="e.g. Best glue for ceramic mug or car bumper?"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  style={{
                    flex: 1,
                    padding: "10px 14px",
                    border: "1.5px solid var(--color-border)",
                    borderRadius: "var(--radius-sm)",
                    fontSize: "14px",
                    outline: "none",
                  }}
                  autoFocus
                />
                <button type="submit" className="btn btn--primary btn--sm">
                  Ask
                </button>
              </form>

              {aiResponse && (
                <div
                  style={{
                    backgroundColor: "#F8F9FA",
                    borderLeft: "4px solid var(--color-brand-red)",
                    padding: "14px 16px",
                    borderRadius: "0 8px 8px 0",
                    marginTop: "8px",
                  }}
                >
                  <p className="body-sm" style={{ color: "var(--color-text-primary)", lineHeight: 1.5 }}>
                    {aiResponse}
                  </p>
                </div>
              )}

              <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
                <button
                  className="btn btn--secondary btn--sm"
                  onClick={() => {
                    setIsOpen(false);
                    navigate("/guide");
                  }}
                >
                  Launch 3-Step Guide →
                </button>
                <button
                  className="btn btn--outline btn--sm"
                  onClick={() => {
                    setIsOpen(false);
                    navigate("/where-to-buy");
                  }}
                >
                  View Where to Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LoctiteAIWidget;
