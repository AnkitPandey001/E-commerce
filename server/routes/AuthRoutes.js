
import express from 'express';
import { Login ,Signup } from '../controllers/authControllers.js';
import {isVerifyed} from "../middleware/isVerifyed.js"
const authRoutes = express.Router();


authRoutes.post('/login',Login);
authRoutes.post('/signup',Signup);

export default authRoutes;