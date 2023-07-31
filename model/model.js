const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    message: {
        required: true,
        type: String
    },
    username: {
        required: true,
        type: String,
        maxLength: 20
    },
    college:{
        required: true,
        type: String
    },
    avatarimg:{
        required:true,
        type: Number
    },
     timestamp: {
    type: Date, // The type of the property is Date
  //  default: Date.now // The default value will be the current timestamp when the document is created
  }
})
module.exports = mongoose.model('Data', dataSchema)
