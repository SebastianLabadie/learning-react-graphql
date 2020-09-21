const message = require('../../models/Message')

const Query ={
    ping: ()=>{
        return 'pong!'
    },
    messages:async ()=>{
        return await message.find()
    }
}

module.exports=Query