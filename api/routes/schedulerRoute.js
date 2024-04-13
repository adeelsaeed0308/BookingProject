import express from "express";
import { auth, roleAccess } from "../Middleware/authentication.js";

import { getScheduler } from "../Controller/Scheduler.js";

const router = express.Router();
router.get("/scheduler", auth, roleAccess(["REGULAR", "ADMIN"]), getScheduler);

export default router;
