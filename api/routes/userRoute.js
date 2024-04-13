import express from "express";
import { getUsers, createUser } from "../Controller/User.js";
import { auth, roleAccess } from "../Middleware/authentication.js";

const router = express.Router();

router.post("/users", createUser);
router.get("/users", auth, roleAccess(["REGULAR", "ADMIN"]), getUsers);

export default router;
