import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"

// -------------------- CREATE TOKEN --------------------
const createToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// -------------------- LOGIN USER --------------------
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "User does not exist" })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid credentials" })
        }

        const token = createToken(user._id, user.role);
        res.json({ success: true, token, role: user.role })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

// -------------------- REGISTER USER --------------------
const registerUser = async (req, res) => {
    const { name, password, email, role } = req.body; // ✅ Accept role

    try {
        // Check if user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" })
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }

        if (password.length < 6) {
            return res.json({ success: false, message: "Password must be at least 6 characters" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
            role: role || "user"   // ✅ default user unless admin assigned
        })

        const user = await newUser.save()
        const token = createToken(user._id, user.role)
        res.json({ success: true, token, role: user.role })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

export { loginUser, registerUser }
