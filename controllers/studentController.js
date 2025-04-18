import Student from "../Models/student.js"

export function getAllStudent(req,res){ //me function defualt kiyala ganne na kihipayak use wena nisa
  Student.find().then(
    (students)=>
    {
    res.json(students)
}
).catch(
   ()=>{
    res.json({message:"Error is occured"})
   }
)
}


export function saveStudent(req,res){
    console.log(req.user)
    if(req.user.role!="admin")
    {
        res.status(403).json({
            message:"You caanot add items"
        })
        return;
    }

    const student=new Student(req.body)
    student.save().then(
       ()=>{
       res.json({message:"Student saved"})
}
).catch(
       ()=>{
           res.json({message:"Error"})  
       }
   )}



export function updateStudent(req,res){
    res.json({message:"student updated"})
}

export function deleteStudent(req,res){
    res.json({message:"student deteted"})
}

export function searchStudent(req,res)
{
   //const studentname=req.body.name; 1st method eka
   const studentname=req.params.name; //2nd method
   Student.find(
    {
        name:studentname
    }
   ).then(
    (students)=>{
        res.json(students)
    }
   ).catch(
    ()=>{
        res.json({message:"Error"})
    }
   )
}
