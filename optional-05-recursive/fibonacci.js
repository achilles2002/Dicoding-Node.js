/**
 * Fungsi untuk menghasilkan elemen Fibonacci ke-n menggunakan rekursi.
 * @param {number} n - Elemen ke-n dari deret Fibonacci.
 * @returns {number} - Nilai Fibonacci ke-n.
 */
 function fibonacci(n) {
  if (n === 0) {
    return 0; // Basis kasus 1: Fibonacci ke-0 adalah 0
  }
  if (n === 1) {
    return 1; // Basis kasus 2: Fibonacci ke-1 adalah 1
  }
  return fibonacci(n - 1) + fibonacci(n - 2); // Rekursi
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
