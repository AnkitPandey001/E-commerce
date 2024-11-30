import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { generateJwtToken } from "../middleware/generateToken.js";

export const Login = async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  try {
    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Password not matched",
      });
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({
        message: "No Userfound",
      });
    }

    const validPassword = await bcrypt.compare(password, existingUser.password);
    if (!validPassword) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }

    const token = generateJwtToken(existingUser._id, res);

    res.status(200).json({
      user: existingUser,
      message: "Login Sucess",
      token: token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const Signup = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  try {
    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Password not matched",
      });
    }

    // Check if the email is already registered (use findOne to get a single user)
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create and save the new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Send success response
    if (user) {
      return res.status(201).json({
        message: "Account registered",
      });
    } else {
      return res.status(500).json({
        message: "Error while registering",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
