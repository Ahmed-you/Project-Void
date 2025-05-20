import {
  addOrder as addOrderQuery,
  getOrders as getOrdersQuery,
  deleteOrder as deleteOrderQuery,
  updateOrderStatus,
} from "../database/queries/orders.js";

export const getOrders = (req, res) => {
  getOrdersQuery()
    .then((result) => res.json(result.rows))
    .catch((err) => {
      console.error("DB error:", err);
      res
        .status(500)
        .json({ error: "Internal Server Error", details: err.message });
    });
};

export const addOrder = (req, res) => {
  addOrderQuery(req.body[0])
    .then((result) => res.json(result))
    .catch((err) => {
      console.error("DB error:", err);
      res
        .status(500)
        .json({ error: "Internal Server Error", details: err.message });
    });
};

export const deleteOrder = (req, res) => {
  deleteOrderQuery(req.params.order_id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error("DB error:", err);
      res
        .status(500)
        .json({ error: "Internal Server Error", details: err.message });
    });
};

export const changeOrderNewStatus = (req, res) => {
  const { id } = req.params;
  let { newStatus } = req.body;

  if (isNaN(Number(id))) {
    return res.status(400).json({ error: `ID '${id}' must be an integer.` });
  }
  if (typeof newStatus !== "boolean") {
    return res.status(400).json({
      error: `newStatus '${typeof newStatus}' must be a Boolean.`,
    });
  }
  updateOrderStatus(id, newStatus)
    .then(() => res.status(200).json({ message: "Order status updated" }))

    .catch((err) => {
      console.error("Update error:", err);
      res.status(500).json({ error: "Failed to update order" });
    });
};
