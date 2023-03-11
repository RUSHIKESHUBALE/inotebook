// import mongoose from 'mongoose';
const connectToMongo = require('./db');
const express = require('express');

const port = 3000;

const app = express();
connectToMongo();

app.use(express.json());   // For being able to use req body, this is the middleware

//Required routes 
app.use('/api/auth', require('./routes/auth'))
// app.use('/api/notes', require('./routes/notes'))
// app.post('/', (req, res)=>{
//     res.send("Hey I am sending a response!");
// });

// app.get(('/api/signin'), (req, res)=>{
//     res.send("I am signup page")
// })

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
})



// console.log("where am I?")


// db password : 69xmTLuXefecrMqG