import express from "express";

const router = express.Router();

//controllers
import { register } from "../controllers/auth";
import { showMessage } from "../controllers/showMessage";

router.get("/:message", showMessage);
router.post("/register", register);

module.exports = router;
