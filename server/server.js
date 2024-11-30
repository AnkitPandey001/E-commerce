import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from "./routes/AuthRoutes.js"
import { dbConnect } from "./config/dbConnection.js";
import cookieParser from 'cookie-parser';

dotenv.config();
dbConnect();

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true                 
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/auth',authRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.PORT}`)
})
