import pool from "../config/connection.js";

export const getOrders = () => {
  return pool.query("SELECT * FROM orders;");
};

export const addOrder = (orderDetailsObject) => {
  const { username, phone, location, address, book_title, quantity, notes } =
    orderDetail;

  const query = `
     INSERT INTO orders (username, phone, location, address, book_title, quantity, notes) VALUES

        ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;

  const values = [
    username,
    phone,
    location,
    address,
    book_title,
    quantity,
    notes,
  ];

  return pool.query(query, values);
};

export const deleteOrder = (order_id) => {
  const query = `DELETE FROM orders WHERE order_id = $1;`;
  return pool.query(query, [order_id]);
};

export const updateOrderStatus = (order_id, newStatus) => {
  const query = `UPDATE orders
SET is_new = $1
WHERE order_id = $2;`;
  return pool.query(query, [newStatus, order_id]);
};

export default { getOrders, addOrder, deleteOrder, updateOrderStatus };
