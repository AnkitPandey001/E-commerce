import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

export const isVerifyed = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    // console.log(token)

    if (!token) {
      return res.status(401).json({
        error: 'Unauthorized User: No token provided'
      });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      return res.status(401).json({
        error: 'Unauthorized User: Invalid token'
      });
    }

    const user = await User.findById(decode.userId).select('-password');
    if (!user) {
      return res.status(401).json({
        error: 'Unauthorized User: User not found'
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Internal Server Error'
    });
  }
};