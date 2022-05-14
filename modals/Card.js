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
    cardHolder: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true, 
    },
    
})

const card = mongoose.model("Card", cardSchema);
module.exports = card;