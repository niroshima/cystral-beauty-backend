import express from "express";
import { createReview, getReviewsByProduct } from "../controllers/reviewController.js";

const reviewRouter = express.Router();

reviewRouter.post("/", createReview);
reviewRouter.get("/:productId", getReviewsByProduct);

export default reviewRouter;

