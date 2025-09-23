import Review from "../Models/review.js";
import Product from "../Models/product.js";

// create review
export async function createReview(req, res) {
  const { productId, customerName, rating, comment } = req.body;

  if (!productId || !customerName || !rating || !comment) {
    res.status(400).json({ message: "All fields are required" });
    return;
  }

  try {
    let productName = "";
    const product = await Product.findOne({ productId: productId });
    if (product) {
      productName = product.name;
    }

    const review = new Review({
      productId,
      productName,
      customerName,
      rating,
      comment,
    });

    await review.save();
    res.json({ message: "Review saved successfully", review: review });
  } catch (err) {
    res.status(500).json({ message: "Review not saved" });
  }
}

// get reviews by productId
export async function getReviewsByProduct(req, res) {
  const productId = req.params.productId;
  try {
    const reviews = await Review.find({ productId: productId }).sort({
      createdAt: -1,
    });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: "Error fetching reviews" });
  }
}
