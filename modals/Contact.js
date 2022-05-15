const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const contactSchema = new Schema({

    Name: {
        type: String,
        required: true
    },
    Address_line_1:{
        type:String,
        required: true
    },
    Address_line_2:{
        type: String, 
        required: false, 
    },
    zip_code:{
        type: String, 
        required: true, 
    },
    city: {
        type: String, 
        required: true, 
    },
    state: {
        type: String, 
        required: false, 
    },
    phone: {
        type: String, 
        required: false, 
    },
    user: {
        type : Schema.Types.ObjectId,
        required: true, 
    },
})

const contact = mongoose.model("Contact", contactSchema);
module.exports = contact;