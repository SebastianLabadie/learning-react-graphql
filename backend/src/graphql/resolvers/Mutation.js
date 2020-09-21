const message = require('../../models/Message')


const Mutation ={
    createMessage: async (_,{title,content,author})=>{
        const newMessage= new message({title,content,author})
        return await newMessage.save()
    }
}

module.exports=Mutation