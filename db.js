// "mongodb://localhost:27017" mongodb://localhost:27017/?readPreference=primary
const mongoose = require("mongoose");
mongoose.set('strictQuery', true); // To suppres the warning
// const mongoURI = "mongodb+srv://ubalerushikesh99:69xmTLuXefecrMqG@cluster0.w9zzg2v.mongodb.net/test";
const mongoURI = "mongodb://localhost:27017/inotebook";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("*********Connected to mongoose*********");
    })
}

module.exports = connectToMongo;

// db password : 69xmTLuXefecrMqG