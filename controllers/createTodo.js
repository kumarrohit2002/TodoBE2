//import model
const Todo=require('../models/Todo');

//defind route handler

exports.createTodo= async (req,res)=>{
    try{
        //extract title and description from reaqest body
        const {title,description}=req.body;

        // create new todo object and insert in DB
        const responce = await Todo.create({title,description});
        // send a json response with a success flags
        res.status(200).json({  
            success: true,
            data: responce,
            message:'Entry Created Successfully.',
        })

    }catch(error){
        console.error(error);
        console.log(error);
        res.status(500).json({
            success: false,
            data:'internal server error',
            message:error.message
        })
    }
}