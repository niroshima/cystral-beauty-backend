import express from "express";
import { saveUser ,loginUser} from "../controllers/userController.js";

const userRouter=express.Router();
userRouter.post("/",saveUser)

userRouter.post("/login",loginUser)

export default userRouter;