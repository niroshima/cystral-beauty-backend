import User from "../Models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import dotenv from 'dotenv';
dotenv.config()

export function saveUser(req,res)
{
const hashedPassword=bcrypt.hashSync(req.body.password,10) //request eke ena password ekata hashpassword ekak hadanawa
const user=new User({
    email:req.body.email,
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    password:hashedPassword
})
user.save().then(()=>{
    res.json({
        message:"User saved successfull"
    })
}).catch((err)=>{
    console.log(err)
    res.status(500).json({ // due to server error use 500
        message:"User not saved"
    })
})
}

//user kenek log kirima
export function loginUser(req,res){
    const email=req.body.email;
    const password=req.body.password;
    User.findOne({
        email:email
    }).then((user)=>{
        if(user==null){
        res.status(404).json({message:"Invalid Email"})
        }else{
            const isPasswordCorrect=bcrypt.compareSync(password,user.password)
        if(isPasswordCorrect){
           
           const userData={
            email:user.email,
            firstName:user.firstName,
            lastName:user.lastName,
            role:user.role,
            phone:user.phone,
            isDisabled:user.isDisabled,
            isEmailVerified:user.isEmailVerified
           }
           console.log(userData)
           const token=jwt.sign(userData,process.env.JWT_KEY)//making a token with content and our key
         res.json({
                message:"Login successful",
                token: token,
                user:userData
           });
        
        }else{
           res.status(403).json({
                message:"invalid password"
            })
        }
        }

    }).catch((error) => {
            console.error("❌ Login error:", error);
            return res.status(500).json({
                message: "Internal Server Error"
            });
        });
}