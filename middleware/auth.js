export default function verifyJwT(req,res,next){
    const header=req.header("Authorization");//Authorization eke header eke dala ewwe kiyanawa
    if(header != null){
        const token=header.replace("Bearer ","");
        //console.log(token);//print that header
       jwt.verify(token,"randon456",(err,decoded)=>{
        //if(err){
           // console.error("JWT verification failed:", err.message); 
        //}else{
                console.log(decoded)
                if(decoded!=null)
                {
                    req.user=decoded
                }
       next()//next ekata yawannako 

            })
        
    }
}