import mongoose from "mongoose";

const userScheme=new mongoose.Schema({
email:{
    type:String,
    required:true, //emsil is required
    unique:true//this is a primary key
},
firstName:{
    type:String,
    required:true
},
lastName:{
    type:String,
    required:true
},
role:{
    type:String,
    required:true,
    default:"user"
},
password:{
    type:String,
    required:true
},
phone:{
    type:String,
    required:true,
    default:"Not given"

},
isDisabled:{
    type:Boolean,
    required:true,
    default:false
},
//isEmailVerified:{
   // type:Boolean,
    //required:true,
    //defalut:false
//},
}

)

const User=mongoose.model("users",userScheme)
export default User;
