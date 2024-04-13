import express from "express";
import { getAgents, createAgent } from "../Controller/User.js";
import { auth, roleAccess } from "../Middleware/authentication.js";
const router = express.Router();
router.post("/agents", createAgent);

router.get("/agents", auth, roleAccess(["Admin"]), getAgents);

export default router;
