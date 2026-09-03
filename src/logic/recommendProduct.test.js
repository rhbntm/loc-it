/**
 * LOC IT — Recommendation Engine Tests
 *
 * Run these independently of any UI.
 * Uses the recommendProduct() function and the prototype product catalog.
 *
 * Test cases match the acceptance criteria defined in the implementation plan.
 */

import { recommendProduct } from "../logic/recommendProduct.js";
import { products } from "../data/products.js";

function assert(condition, message) {
  if (!condition) {
    console.error(`  ❌ FAIL: ${message}`);
    return false;
  }
  console.log(`  ✅ PASS: ${message}`);
  return true;
}

function runTest(label, request, expectedProductId, expectedStatus) {
  console.log(`\n📋 ${label}`);
  console.log(`   Input: ${JSON.stringify(request)}`);

  const result = recommendProduct(products, request);

  console.log(
    `   Status: ${result.status} | Product: ${result.product?.id ?? "none"} | Score: ${result.score}`
  );

  let passed = true;

  if (expectedStatus) {
    passed = assert(result.status === expectedStatus, `status === "${expectedStatus}"`) && passed;
  }

  if (expectedProductId) {
    passed =
      assert(
        result.product?.id === expectedProductId,
        `product.id === "${expectedProductId}" (got: "${result.product?.id ?? "none"}")`
      ) && passed;
  }

  if (result.reasons && result.reasons.length > 0) {
    console.log(`   Reasons:`);
    result.reasons.forEach((r) => console.log(`     - ${r}`));
  }

  return passed;
}

console.log("=".repeat(60));
console.log("LOC IT — Recommendation Engine Test Suite");
console.log("=".repeat(60));

const results = [];

// Test 1: Model / plastic / precision → Gel Control
results.push(
  runTest(
    "Test 1 — Model, plastic, precision",
    { category: "model", material: "plastic", repairType: "precision" },
    "super-glue-gel-control",
    "recommended"
  )
);

// Test 2: Home / metal / fast → Liquid Control
results.push(
  runTest(
    "Test 2 — Home, metal, fast",
    { category: "home", material: "metal", repairType: "fast" },
    "super-glue-liquid-control",
    "recommended"
  )
);

// Test 3: Automotive / rubber / durable → Ultra Gel Control
results.push(
  runTest(
    "Test 3 — Automotive, rubber, durable",
    { category: "automotive", material: "rubber", repairType: "durable" },
    "super-glue-ultra-gel-control",
    "recommended"
  )
);

// Test 4: Home / unknown / unknown → needs-more-information
results.push(
  runTest(
    "Test 4 — Home, unknown material, unknown repairType",
    { category: "home", material: "unknown", repairType: "unknown" },
    null,
    "needs-more-information"
  )
);

// Extra: Material incompatibility with no valid product
results.push(
  runTest(
    "Test 5 — Material completely unknown, no repairType",
    { category: "other", material: "unknown", repairType: "fast" },
    null,
    "needs-more-information"
  )
);

console.log("\n" + "=".repeat(60));
const passed = results.filter(Boolean).length;
const total = results.length;
console.log(`Results: ${passed}/${total} tests passed`);
if (passed === total) {
  console.log("✅ All tests passed.");
} else {
  console.log("❌ Some tests failed — review recommendation engine.");
}
console.log("=".repeat(60));
