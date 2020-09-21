const {Schema,model} = require('mongoose')

const messageSchema= new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
})

module.exports=model('message',messageSchema)