import { products } from '../data/products.js';
import { recommendProduct } from '../logic/recommendProduct.js';

function assert(condition, message) {
  if (!condition) { console.error(`  FAIL: ${message}`); return false; }
  console.log(`  PASS: ${message}`); return true;
}

function runTest(label, request, expectedId, expectedStatus) {
  console.log(`\n[${label}]`);
  const result = recommendProduct(products, request);
  console.log(`  status=${result.status}  product=${result.product?.id ?? 'none'}  score=${result.score}`);
  let ok = true;
  if (expectedStatus) ok = assert(result.status === expectedStatus, `status === "${expectedStatus}"`) && ok;
  if (expectedId)     ok = assert(result.product?.id === expectedId, `product.id === "${expectedId}" (got: "${result.product?.id ?? 'none'}")`) && ok;
  if (result.reasons?.length) result.reasons.forEach(r => console.log(`  - ${r}`));
  return ok;
}

console.log('LOC IT - Recommendation Engine Tests');
console.log('====================================');

const results = [
  runTest('Test 1: model/plastic/precision',   { category:'model',      material:'plastic', repairType:'precision' }, 'super-glue-gel-control',       'recommended'),
  runTest('Test 2: home/metal/fast',            { category:'home',       material:'metal',   repairType:'fast'      }, 'super-glue-liquid-control',    'recommended'),
  runTest('Test 3: automotive/rubber/durable',  { category:'automotive', material:'rubber',  repairType:'durable'   }, 'super-glue-ultra-gel-control', 'recommended'),
  runTest('Test 4: home/unknown/unknown',        { category:'home',       material:'unknown', repairType:'unknown'   }, null,                           'needs-more-information'),
];

console.log('\n====================================');
const passed = results.filter(Boolean).length;
console.log(`Results: ${passed}/${results.length} passed`);
console.log(passed === results.length ? 'All tests passed.' : 'Some tests FAILED.');
