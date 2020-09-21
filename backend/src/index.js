const server= require('./server')
require('./databse')


server.start({port:4000},({port})=>{
    console.log('Server on port ',port)
})