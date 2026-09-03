/**
 * LOC IT — Analytics Abstraction
 *
 * Currently logs to console only.
 * Replace the body of trackEvent() to connect a real analytics provider
 * (e.g. Google Analytics, Mixpanel, Meta Pixel) without changing call sites.
 *
 * Events tracked:
 *   landing_view           - Landing page loaded
 *   guide_started          - User clicked Start Repair Guide
 *   question_answered      - User selected an answer on any step
 *   guide_completed        - User submitted all 3 questions
 *   recommendation_generated - Recommendation result computed
 *   purchase_cta_clicked   - User clicked a purchase channel button
 *
 * Future events (not yet implemented):
 *   purchase
 *   review_submitted
 *   ugc_submitted
 */

/**
 * Track an analytics event.
 *
 * @param {string} eventName - The event identifier
 * @param {Object} [payload={}] - Optional event properties
 */
export function trackEvent(eventName, payload = {}) {
  const event = {
    event: eventName,
    timestamp: new Date().toISOString(),
    ...payload,
  };

  // Console logging only for prototype
  console.log("[LOC IT Analytics]", event);

  // Future: window.gtag?.("event", eventName, payload);
  // Future: mixpanel?.track(eventName, payload);
}

export default trackEvent;
