import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    productId:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    altName:{
        type:[String], //Array hadagannawa
        default:[]
    },
    price:{
        type:Number,
        required:true
    },
    labeledPrice:{
        type:Number,
        required:true
    },
description:{
    type:String,
    required:true
},
images:{
    type:[String],
    required:true,
    default:["https://img.freepik.com/premium-photo/beuty-product-mockup_1003030-4450.jpg?w=826"] //image link adderess danawa
},
stock:{
    type:Number,
    required:true
},
})

const Product=mongoose.model("products", productSchema);
export default Product;