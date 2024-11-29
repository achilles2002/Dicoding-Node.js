import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

// Test case 1: Penjumlahan dua angka positif
test('Menjumlahkan dua angka positif', () => {
  const result = sum(3, 7);
  assert.strictEqual(result, 10, 'Penjumlahan dua angka positif gagal.');
});

// Test case 2: Salah satu atau kedua angka negatif
test('Mengembalikan 0 jika salah satu angka negatif', () => {
  const result1 = sum(-3, 7);
  const result2 = sum(3, -7);
  const result3 = sum(-3, -7);
  assert.strictEqual(result1, 0, 'Harus mengembalikan 0 jika angka pertama negatif.');
  assert.strictEqual(result2, 0, 'Harus mengembalikan 0 jika angka kedua negatif.');
  assert.strictEqual(result3, 0, 'Harus mengembalikan 0 jika kedua angka negatif.');
});

// Test case 3: Salah satu atau kedua input bukan angka
test('Mengembalikan 0 jika salah satu input bukan angka', () => {
  const result1 = sum('3', 7);
  const result2 = sum(3, '7');
  const result3 = sum('3', '7');
  const result4 = sum(null, 7);
  const result5 = sum(3, undefined);
  assert.strictEqual(result1, 0, 'Harus mengembalikan 0 jika angka pertama bukan number.');
  assert.strictEqual(result2, 0, 'Harus mengembalikan 0 jika angka kedua bukan number.');
  assert.strictEqual(result3, 0, 'Harus mengembalikan 0 jika kedua angka bukan number.');
  assert.strictEqual(result4, 0, 'Harus mengembalikan 0 jika angka pertama null.');
  assert.strictEqual(result5, 0, 'Harus mengembalikan 0 jika angka kedua undefined.');
});

// Test case 4: Kedua angka adalah nol
test('Mengembalikan 0 jika kedua angka adalah nol', () => {
  const result = sum(0, 0);
  assert.strictEqual(result, 0, 'Penjumlahan dua angka nol gagal.');
});

// Test case 5: Kombinasi nol dan angka positif
test('Penjumlahan dengan nol', () => {
  const result1 = sum(0, 7);
  const result2 = sum(3, 0);
  assert.strictEqual(result1, 7, 'Penjumlahan dengan angka kedua nol gagal.');
  assert.strictEqual(result2, 3, 'Penjumlahan dengan angka pertama nol gagal.');
});
