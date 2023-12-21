const server = require('./app')
const PORT = 3001;
const {conn} = require('./DB_conection')

conn.sync({force:true})
.then(() => {
    server.listen(PORT, ()=> console.log(`esta vivoooo => &{PORT}`))
})