import Product from "../Models/product.js";
export async function createProduct(req,res){
    if(req.user==null)
    {
        res.status(403).json({
            message:"you need to login first"
        })
        return;
    }
    if(req.user.role !="admin")
    {
        res.status(403).json({
            message:"you are not authorized to create a product"
        })
        return;
    }
    const product=new Product(req.body);
    try{
        await product.save()
        res.json({message:"Product saved successfully"})
    }catch(err){
        res.status(500).json({message:"Product not saved"})
    }
    
}

export function getProduct(req,res){
    Product.find().then(
        (products)=>{
            res.json(products)
        }
    ).catch(
        (err)=>{
            res.status(500).json({
                message:"Products not found"
            })
        }
    )
}

//get product ID for overview page
export async function getProductById(req,res){
    const productId=req.params.id
    const product=await Product.findOne({productId:productId})
    if(product==null)
    {
        res.status(404).json({message:"Product not found"})
          return
    }
  res.json({
    product:product
  })
}
export function deleteProduct(req,res){
    if(req.user==null)
        {
            res.status(403).json({
                message:"you need to login first"
            })
            return;
        }
        if(req.user.role !="admin")
        {
            res.status(403).json({
                message:"you are not authorized to delete a product"
            })
            return;
        }
        Product.findOneAndDelete({
            productId:req.params.productId

        }).then(
            ()=>{
                res.json({
                    message:"Product deleted successfully"})
            }
        ).catch(
            (err)=>{
                res.status(500).json({
                    message:"Product not deleted"
                })
    
            }
        )  
}

// this is upadate product function

export function updateProduct(req,res){
    if(req.user==null)
        {
            res.status(403).json({
                message:"you need to login first"
            })
            return;
        }
        if(req.user.role !="admin")
        {
            res.status(403).json({
                message:"you are not authorized to update a product"
            })
            return;
        }
        Product.findOneAndUpdate({
            productId:req.params.productId

        },req.body).then(
            ()=>{
                res.json({
                    message:"Product updated successfully"})
            }
        ).catch(
            (err)=>{
                res.status(500).json({
                    message:"Product not updated"
                })
    
            }
        )   
}

//Search product Function

export async function searchProduct(req,res){
      const search = req.params.query;
    try{
        const products=await Product.find({$or:[
            {name:{$regex: search,$options:"i"}},
            {altName:{$elemMatch: {$regex: search,$options:"i"}}},
        ],
    });
    res.json({
        products:products,});
    }catch(err)
    {
        res.status(500).json({
            message:"Error in searching product",
        });
return;
}
}

// Search products by category
export async function searchByCategory(req, res) {
  const category = req.params.category;
  try {
    const products = await Product.find({
      category: { $regex: category, $options: "i" }  // case-insensitive
    });

    res.json({ products });
  } catch (err) {
    res.status(500).json({
      message: "Error in searching products by category",
    });
  }
}



