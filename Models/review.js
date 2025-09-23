import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  productId: { 
    type: String, 
    required: true 
  },
  productName: { 
    type: String 
  },

  customerName: { 
    type: String, 
    required: true 
  },
  rating: { 
    type: Number, 
    required: true, 
    min: 1, 
    max: 5 
  },
  comment: { 
    type: String, 
    required: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
});

export default mongoose.model("Review", reviewSchema);
