const mongoose = require("mongoose");
const { Schema } = mongoose;

const notesSchema = new Schema({
  user : {
    type : Schema.Types.ObjectId,
    ref : 'user'
  },
  title : {
    type: String,
    required : true
  },
  description : {
    type: String,
    required : true
  },
  tag : {
    type: String,
    required : true
  },
  timeStamp: {
    type : Date,
    default : Date.now
  }
});

module.exports = mongoose.model("notes", notesSchema)