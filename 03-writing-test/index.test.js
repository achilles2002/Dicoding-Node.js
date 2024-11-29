import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('sum should return the sum of two numbers', () => {
  // Uji penjumlahan dua angka positif
  assert.strictEqual(sum(2, 3), 5);

  // Uji penjumlahan angka negatif
  assert.strictEqual(sum(-2, -3), -5);

  // Uji penjumlahan angka positif dan negatif
  assert.strictEqual(sum(-2, 3), 1);

  // Uji penjumlahan dengan nol
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(0, 0), 0);
});
