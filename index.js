import express from 'express'; //import express folder from node module folder
import bodyParser from 'body-parser';//use as moddleware to properly arrange request from postman 
import mongoose from 'mongoose';//import mongoose database
import studentModel from './Models/student.js';
import studentRouter from './routes/studentRouter.js';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';
import verifyJwT from './middleware/auth.js';
import dotenv from 'dotenv';
dotenv.config()


//mongodb+srv://admin:123@cluster0.c8vfl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

let app=express();  // start to run express function for app.in here app will be became as backend sofware.
mongoose.connect(process.env.MONGO_URL).then(
()=>{
    console.log("Connected to the database")

} 
).catch(
    ()=>{
        console.log("Connection failed")
    
    }  
)
//function taskComplete(){
    //console.log("Task Completed")
//}
//app.listen(5000,taskComplete)

app.use(bodyParser.json());//atharamadiya danawa madata
app.use(verifyJwT)//middleware for token handling

app.use("/api/user",userRouter);
app.use("/api/product",productRouter);
app.use("/api/student",studentRouter);//student kenek hoyagena awoth e wadeta StudentRouter sambanda karanna
//Day 4 ekedi mewa route ekata dala kala
//app.get("/",
 //   (req,res)=>{ //take details of reuest and response 

        //example 1 for test it
//console.log(req.body)
//console.log("Get request recieved");
//res.json({message:"Hello world"}); //res.json..meken yanawa apu thanata.ekata msg ekak dala yawannath puluwan
   
//example 2 to model to connect code and collection
//studentModel.find().then(
  //  (students)=>{
   //     res.json(students)
  //  }
//).catch(
  //  ()=>{
   //     res.json({message:"An error occured"})
    //}
//)

//}

    //)

//app.post("/",
      //  (req,res)=>{ //take details of reuest and response 
    //console.log(req.body)
    //console.log("Post request recieved");
    //res.json({message:"This is a post reuest"}); 

    //above code for 1st example to check the request and respond.Here is the create student in the database
    
    //const student=new studentModel(req.body);//database eke save karanna puluwan student kenek hadagaththa
     // student.save().then(//student save karanna db
      //  ()=>{
          //  res.json({message:"student saved successfully"})
      //  }
   // )

       // .catch(
//()=>{
//res.json(
    //{message:"Student save failed"}
//)
//}
       // )    
//}
       // )

 //app.delete("/",
          //  (req,res)=>{ //take details of reuest and response 
        //console.log(req.body)
        //console.log("delete request recieved");
        //res.json({message:"This is a delete reuest"}); 
          //  }
        
           // )

  //app.put("/",
               // (req,res)=>{ //take details of reuest and response 
            //console.log(req.body)
           // console.log("put request recieved");
            //res.json({message:"This is a put reuest"}); 
            //    }
            
              //  )


app.listen(5000,
    ()=>{ //app start and listen to run alone
 console.log("Server is running on port 5000");
 }) 