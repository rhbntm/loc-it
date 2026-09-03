/**
 * LOC IT — Recommendation Engine
 *
 * Pure functions — no React dependencies, no side effects.
 * Can be tested independently of any UI.
 *
 * Scoring model:
 *   - Material must match (non-matching = score 0, disqualified)
 *   - Base score awarded for any material match
 *   - Bonus for repairType match
 *   - Bonus for useCase (category) match
 *   - Unknown material/repairType triggers needs-more-information status
 *
 * CONFIDENCE_THRESHOLD: minimum score required to return a "recommended" status.
 * Below this, the system returns "no-confident-match".
 */

const BASE_SCORE = 3;
const REPAIR_TYPE_BONUS = 4;
const USE_CASE_BONUS = 2;
const CONFIDENCE_THRESHOLD = 3; // must at least match material

const UNKNOWN_VALUES = new Set(["unknown", null, undefined, ""]);

/**
 * Score a single product against a repair request.
 *
 * @param {Object} product - A product from the catalog
 * @param {Object} request - { category, material, repairType }
 * @returns {number} score (0 = disqualified)
 */
function scoreProduct(product, request) {
  const { material, repairType, category } = request;

  // Unknown material → system cannot confidently match
  if (UNKNOWN_VALUES.has(material)) {
    return 0;
  }

  // Material incompatibility → hard disqualification
  if (!product.materials.includes(material)) {
    return 0;
  }

  let score = BASE_SCORE;

  // Repair type match bonus
  if (!UNKNOWN_VALUES.has(repairType) && product.repairTypes.includes(repairType)) {
    score += REPAIR_TYPE_BONUS;
  }

  // Use case (category) match bonus
  if (!UNKNOWN_VALUES.has(category) && product.useCases.includes(category)) {
    score += USE_CASE_BONUS;
  }

  return score;
}

/**
 * Determine whether the repair request has enough information to proceed.
 *
 * @param {Object} request - { category, material, repairType }
 * @returns {boolean}
 */
function hasEnoughInformation(request) {
  const { material, repairType } = request;
  // Both material and repairType must be known for a confident recommendation
  return !UNKNOWN_VALUES.has(material) && !UNKNOWN_VALUES.has(repairType);
}

/**
 * Recommend a product based on the repair request.
 *
 * @param {Array} products - Product catalog array
 * @param {Object} request - { category, material, repairType }
 * @returns {{ product: Object|null, score: number, reasons: string[], status: string }}
 */
export function recommendProduct(products, request) {
  if (!hasEnoughInformation(request)) {
    return {
      product: null,
      score: 0,
      reasons: [],
      status: "needs-more-information",
    };
  }

  // Score all products
  const scored = products
    .map((product) => ({
      product,
      score: scoreProduct(product, request),
    }))
    .filter(({ score }) => score >= CONFIDENCE_THRESHOLD)
    .sort((a, b) => b.score - a.score);

  if (scored.length === 0) {
    return {
      product: null,
      score: 0,
      reasons: [],
      status: "no-confident-match",
    };
  }

  const best = scored[0];
  const reasons = buildReasons(best.product, request);

  return {
    product: best.product,
    score: best.score,
    reasons,
    status: "recommended",
  };
}

/**
 * Generate human-readable reasons explaining the recommendation.
 * Does NOT expose numerical scores.
 *
 * @param {Object} product
 * @param {Object} request
 * @returns {string[]}
 */
function buildReasons(product, request) {
  const reasons = [];

  const { material, repairType, category } = request;

  // Material reason
  if (!UNKNOWN_VALUES.has(material) && product.reasons?.material?.[material]) {
    reasons.push(product.reasons.material[material]);
  }

  // Repair type reason
  if (!UNKNOWN_VALUES.has(repairType) && product.reasons?.repairType?.[repairType]) {
    reasons.push(product.reasons.repairType[repairType]);
  }

  // Use case reason
  if (!UNKNOWN_VALUES.has(category) && product.reasons?.useCase?.[category]) {
    reasons.push(product.reasons.useCase[category]);
  }

  return reasons;
}

export default recommendProduct;
