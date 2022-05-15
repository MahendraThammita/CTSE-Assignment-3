const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const cardSchema = new Schema({

    cardNumber: {
        type: String,
        required: true
    },
    expiryDate:{
        type:String,
        required: true
    },
    cardHolderName:{
        type: String, 
        required: true, 
    },
    cvvCode:{
        type: String, 
        required: true, 
    },
    user: {
        type : Schema.Types.ObjectId,
        required: true, 
    },
    
})

const card = mongoose.model("Card", cardSchema);
module.exports = card;