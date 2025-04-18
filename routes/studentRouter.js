import express from 'express';
import { deleteStudent, getAllStudent, saveStudent, searchStudent, updateStudent } from '../controllers/studentController.js';

const studentRouter=express.Router();

//methanata dan studentController sambanda wela code eka adu wenawa
studentRouter.get("/",getAllStudent)

studentRouter.post("/",saveStudent)

studentRouter.put("/",updateStudent)

studentRouter.delete("/",deleteStudent)

//body eken serach karanna paarameters ewana widiya -1st method

// studentRouter.get("/search",searchStudent)

//localhost ekema ewan widiya -2nd method
studentRouter.get("/:name",searchStudent)


export default studentRouter//eka dekata witharak use karana nisa default danawa