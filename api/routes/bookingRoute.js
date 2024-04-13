import express from "express";
import { auth, roleAccess } from "../Middleware/authentication.js";

import { createBooking, deleteBooking } from "../Controller/Booking.js";

const router = express.Router();
router.post("/bookings", roleAccess(["Admin"]), createBooking);
router.delete(
  "/bookings/:id",
  auth,
  roleAccess(["Admin", "Agent"]),
  deleteBooking
);
export default router;
