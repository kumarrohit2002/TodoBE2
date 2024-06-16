//import model
const Todo=require('../models/Todo');

//defind route handler

exports.getTodo= async (req,res)=>{
    try{
        // fetch all todo items from database
        const todos=await Todo.find({})

        //response
        res.status(200).json({
            success: true,
            data: todos,
            message: 'Entry todo data is fetched'
        });

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


exports.getTodoById= async (req,res)=>{
    try{
        // extract todo item basis of id
        const id = req.params.id;
        const todo = await Todo.findById({_id:id});

        // data for given id not found
        if(!todo){
            return res.status(404).json({
                success: false,
                message:"No data found with given id",

            })
        }

        res.status(200).json({
            success: true,
            data:todo,
            message:`Todo id: ${id} data successfully fetched`
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