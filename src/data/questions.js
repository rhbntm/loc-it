/**
 * LOC IT — Questionnaire Question Definitions
 *
 * Machine-readable values are stored separately from display labels.
 * This is a prototype taxonomy — not an official LOCTITE classification.
 */

export const questions = [
  {
    id: "category",
    step: 1,
    question: "What are you fixing?",
    hint: "Choose the option that best describes your project.",
    options: [
      { value: "home", label: "Home / Household", icon: "🏠" },
      { value: "diy", label: "DIY / Craft", icon: "🔨" },
      { value: "model", label: "Model / Collectible", icon: "🎨" },
      { value: "automotive", label: "Automotive", icon: "🚗" },
      { value: "school-work", label: "School / Work Project", icon: "📐" },
      { value: "other", label: "Other", icon: "🔧" },
    ],
  },
  {
    id: "material",
    step: 2,
    question: "What materials are you joining?",
    hint: "Select the material of the parts you're bonding.",
    options: [
      { value: "plastic", label: "Plastic", icon: "🧴" },
      { value: "metal", label: "Metal", icon: "⚙️" },
      { value: "wood", label: "Wood", icon: "🪵" },
      { value: "rubber", label: "Rubber", icon: "⚫" },
      { value: "ceramic", label: "Ceramic", icon: "🏺" },
      { value: "glass", label: "Glass", icon: "🪟" },
      { value: "unknown", label: "I'm not sure", icon: "❓" },
    ],
  },
  {
    id: "repairType",
    step: 3,
    question: "What's your repair like?",
    hint: "Describe the nature of the repair.",
    options: [
      { value: "close-fitting", label: "The pieces fit together closely", icon: "🔗" },
      { value: "gap", label: "There's a gap between them", icon: "↔️" },
      { value: "precision", label: "I need very precise application", icon: "🎯" },
      { value: "fast", label: "I need it fixed quickly", icon: "⚡" },
      { value: "durable", label: "I need a durable hold", icon: "💪" },
      { value: "unknown", label: "I'm not sure", icon: "❓" },
    ],
  },
];

export const TOTAL_STEPS = questions.length;

export default questions;
