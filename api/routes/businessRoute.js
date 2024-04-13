import express from "express";
import { getScheduler } from "../Controller/Business.js";

const router = express.Router();

router.get("/scheduler", getScheduler);

export default router;
