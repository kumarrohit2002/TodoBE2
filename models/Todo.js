const mongoose=require('mongoose')

const todoSchama=new mongoose.Schema(
    {
        title:{
            type: 'string',
            required: true,
            maxLength:60
        },
        description:{
            type: 'string',
            required: true,
            maxLength:60
        },
        createdAt:{
            type: Date,
            required: true,
            default:Date.now(),
        },
        updatedAt:{
            type: Date,
            required: true,
            default:Date.now(),
        }

    }
);


module.exports=mongoose.model('Todo',todoSchama);