import mongoose from "mongoose";

const orderSchema=new mongoose.Schema({
    orderId:{
        type:String,
        required:true,
        unique:true
    },
    date:{
        type:Date,
        required:true,
        default:Date.now
        //Date now to inpute crrent date and time
    },
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        default:"Pending"
    },
    phoneNumber:{
        type:String,
        required:true
    },
    billItems:{
        type:[
            {
                productId:String,
                productName:String,
                image:String,
                qquantity:Number,
                price:Number

            }
        ],
        required:true
    },
total:{
    type:Number,
    required:true
},

})
const Order=mongoose.model("orders", orderSchema);
export default Order;
