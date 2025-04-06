import express from "express";
const router = express.Router();
import UserData from "../Models/UserModels.js";
import jwt from 'jsonwebtoken'




const secretCode = process.env.SECRET_CODE

router.post("/api", async (req, res) => {
  res.json("Server Running");
});

//-----------------------------Sign Up-------------------------------------------

router.post("/register", async (req, res) => {
  const { name, number, email, password } = req.body;

  const existingUser = await UserData.findOne({
    $or: [{ pNumber: number }, { email }],
  });

  if (existingUser) {
    return res
      .status(409)
      .json({ status: false, message: "User already exists" });
  }

  const newUser = new UserData({
    name,
    pNumber: number,
    email,
    password,
  });
  await newUser.save();
  return res
    .status(202)
    .json({ status: true, message: "Registration Successful" });
});

//-----------------------------------Log in---------------------------------------

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserData.findOne({ email });
  if (user) {
    if (user.password === password) {
      const accessToken = jwt.sign({ email: user.email }, secretCode);
      return res.status(200).json({ status: true, message: "Login Successful!", accessToken });
    } else {
      return res
        .status(409)
        .json({ status: false, message: "Password did not matched" });
    }
  } else {
    return res
      .status(404)
      .json({ status: false, message: "User does not exist" });
  }
});



export default router;
