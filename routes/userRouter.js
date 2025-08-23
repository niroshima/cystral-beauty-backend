import express from "express";
import { saveUser ,loginUser, googleLogin, getCurrentUser, getUser} from "../controllers/userController.js";

const userRouter=express.Router();

userRouter.post("/",saveUser)
userRouter.post("/login",loginUser)
userRouter.post("/google",googleLogin)
userRouter.get("/current",getCurrentUser)
userRouter.get("/",getUser)

export default userRouter;