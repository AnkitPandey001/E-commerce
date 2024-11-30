import jwt from "jsonwebtoken";

export const generateJwtToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '10m'
  });

//   console.log(process.env.NODE_ENV)

  res.cookie("jwt", token, {
    maxAge: 10 * 60 * 1000,
    httpOnly: false,
    sameSite: false,
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });

  return token;
};
