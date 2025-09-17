import express from "express";
import authMiddleware from "../middleware/auth.js";

const adminRouter = express.Router();

adminRouter.get("/dashboard", authMiddleware(["admin"]), (req, res) => {
    // Only admins reach here
    res.json({
        success: true,
        message: "Welcome Admin!",
        redirect: "http://localhost:5173/"
    });
});

export default adminRouter;
