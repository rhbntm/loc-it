/**
 * FeedbackTab.jsx — Pinned Red "Feedback" Tab
 *
 * Implements the signature vertical red Feedback tab seen pinned on
 * the right screen edge of loctiteproducts.com and in both reference screenshots.
 */

import { useState } from "react";

export function FeedbackTab() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [rating, setRating] = useState(5);

  function handleSubmit(e) {
    e.preventDefault();
    if (!feedbackText.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
      setFeedbackText("");
    }, 2000);
  }

  return (
    <>
      <button
        className="feedback-tab-btn"
        onClick={() => setIsOpen(true)}
        aria-label="Give Website Feedback"
      >
        Feedback
      </button>

      {isOpen && (
        <div className="ai-modal-backdrop" onClick={() => setIsOpen(false)}>
          <div
            className="ai-modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="LOCTITE Feedback"
          >
            <div className="ai-modal-header">
              <strong style={{ fontFamily: "var(--font-display)", fontSize: "16px" }}>
                LOCTITE Website Feedback
              </strong>
              <button
                onClick={() => setIsOpen(false)}
                style={{ color: "#FFFFFF", fontSize: "18px" }}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="ai-modal-body">
              {submitted ? (
                <div style={{ textAlign: "center", padding: "24px 0" }}>
                  <div style={{ fontSize: "40px", marginBottom: "12px" }}>✓</div>
                  <h3 className="heading-md" style={{ color: "var(--color-brand-red)" }}>
                    Thank You!
                  </h3>
                  <p className="body-sm text-muted">
                    Your feedback helps us continuously improve the LOCTITE consumer experience.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <p className="body-sm" style={{ color: "var(--color-text-secondary)" }}>
                    How would you rate your experience with the LOCTITE Product Finder today?
                  </p>

                  {/* Rating Stars */}
                  <div style={{ display: "flex", gap: "8px" }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        style={{
                          fontSize: "24px",
                          color: star <= rating ? "#EAB308" : "#D1D5DB",
                          cursor: "pointer",
                        }}
                      >
                        ★
                      </button>
                    ))}
                  </div>

                  <textarea
                    rows={4}
                    placeholder="Tell us what you liked or what we can improve..."
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      border: "1.5px solid var(--color-border)",
                      borderRadius: "var(--radius-sm)",
                      fontSize: "14px",
                      fontFamily: "var(--font-body)",
                      resize: "vertical",
                    }}
                    required
                  />

                  <button type="submit" className="btn btn--primary" style={{ alignSelf: "flex-start" }}>
                    Submit Feedback
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FeedbackTab;
