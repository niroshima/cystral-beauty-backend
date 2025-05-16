import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()

export default function verifyJwT(req, res, next) {
    const header = req.header("Authorization");//Authorization eke header eke dala ewwe kiyanawa
    if (header != null) {
        const token = header.replace("Bearer ", "");
        //console.log(token);//print that header
        jwt.verify(token, "process.env.JWT_KEY", (err, decoded) => {
            //if(err){
            // console.error("JWT verification failed:", err.message); 
            //}else{
            console.log(decoded)
            if (decoded != null) {
                req.user = decoded
            }
        })

    }
      next()//next ekata yawannako 
      // you need to put next() function. it will work if  above  if (header != null)  is false. 
}