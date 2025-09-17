import jwt from "jsonwebtoken";

const authMiddleware = (roles = []) => {
    return (req, res, next) => {
        try {
            // read token directly (no Bearer split)
            const token = req.headers.authorization;
            if (!token) {
                return res.status(401).json({ success: false, message: "Not Authorized, token missing" });
            }

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded; // contains { id, role }

            if (roles.length && !roles.includes(decoded.role)) {
                return res.status(403).json({ success: false, message: "Access denied" });
            }

            next();
        } catch (error) {
            console.log(error);
            res.status(401).json({ success: false, message: "Invalid Token" });
        }
    };
};

export default authMiddleware;
