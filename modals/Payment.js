const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const paymentSchema = new Schema({
    paymentDateTime:{
        type:String,
        required: true
    },
    totalAmmount:{
        type: Number, 
        required: true, 
    },
    deliveryCost:{
        type: Number, 
        required: true, 
    },
    discount:{
        type: Number, 
        required: true, 
    },
    PaymentCard:{
        type : Schema.Types.ObjectId , ref : 'Card',
        required: true
    },
    user:{
        type : Schema.Types.ObjectId , 
        required: true
    },
})

const paymentObj = mongoose.model("Payment", paymentSchema);
module.exports = paymentObj;