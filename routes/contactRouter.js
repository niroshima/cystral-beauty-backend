import express from 'express';
import { createContactMessage, deleteContactMessage, getContactMessages, markContactRead } from '../controllers/contactController.js';


const contactRouter=express.Router();

contactRouter.post("/",createContactMessage)
contactRouter.get("/", getContactMessages);
contactRouter.patch("/:id/read", markContactRead);
contactRouter.delete("/:id", deleteContactMessage);

export default contactRouter;