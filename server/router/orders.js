import express from "express";
import {
  addOrder,
  getOrders,
  deleteOrder,
  changeOrderNewStatus,
} from "../controllers/orders.js";

const router = express.Router();

router.get("/", getOrders);

router.post("/", addOrder);

router.delete("/:id", deleteOrder);
router.patch("/status/:id", changeOrderNewStatus);
export default router;
