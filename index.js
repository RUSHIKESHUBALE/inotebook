// import mongoose from 'mongoose';
const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors')

const port = 5000;

const app = express();
connectToMongo();

app.use(cors())            // For allowing browser to make API calls
app.use(express.json());   // For being able to use req body, this is the middleware

//Required routes 
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

// app.get(('/api/signin'), (req, res)=>{
//     res.send("I am signup page")
// })
    
// app.use('/', (req, res)=>{
//     res.send("Hey I am sending a response!");
// });

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
})


// db password : 69xmTLuXefecrMqG