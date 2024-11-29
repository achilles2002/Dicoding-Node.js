/**
 * Fungsi untuk menghitung faktorial menggunakan rekursi.
 * @param {number} n - Bilangan bulat positif.
 * @returns {number} - Hasil faktorial dari `n`.
 */
 function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // Basis kasus: faktorial 0 dan 1 adalah 1
  }
  return n * factorial(n - 1); // Rekursi
}

// Jangan hapus kode di bawah ini!
export default factorial;
