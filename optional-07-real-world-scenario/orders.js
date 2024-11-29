// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// Variabel untuk menampung data pesanan
let orders = [];

// Fungsi untuk menambahkan pesanan baru
function addOrder(customerName, items) {
  const totalPrice = items.reduce((total, item) => total + item.price, 0);
  const newOrder = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice,
    status: 'Menunggu', // Status default untuk pesanan baru
  };
  orders.push(newOrder);
}

// Fungsi untuk memperbarui status pesanan
function updateOrderStatus(orderId, status) {
  const order = orders.find((order) => order.id === orderId);
  if (order) {
    order.status = status;
  }
}

// Fungsi untuk menghitung total pendapatan dari pesanan dengan status 'Selesai'
function calculateTotalRevenue() {
  return orders
    .filter((order) => order.status === 'Selesai')
    .reduce((total, order) => total + order.totalPrice, 0);
}

// Fungsi untuk menghapus pesanan berdasarkan ID
function deleteOrder(id) {
  orders = orders.filter((order) => order.id !== id);
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };