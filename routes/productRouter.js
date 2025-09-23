import express from 'express';
import { createProduct, deleteProduct, getProduct, getProductById, searchByCategory, searchProduct, updateProduct } from '../controllers/productController.js';

const productRouter=express.Router();

productRouter.post("/",createProduct)
productRouter.get("/",getProduct)
productRouter.get("/search/:query", searchProduct);
productRouter.get("/category/:category", searchByCategory);
productRouter.get("/:id",getProductById)
productRouter.delete("/:productId",deleteProduct)
productRouter.put("/:productId",updateProduct)


export default productRouter;

