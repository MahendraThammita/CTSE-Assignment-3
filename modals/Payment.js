const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const paymentSchema = new Schema({

    status: {
        type: Number,
        required: true
        // 1 for : Accepted
        // 2 for : Dispatched
        // 3 for : Delivering
        // 4 for : Confirmed/Closed
    },
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
        ref : 'User',
        required: true
    },
    items:[{
        type : Schema.Types.ObjectId , 
        ref : 'Item',
        required: false
    }]
})

const paymentObj = mongoose.model("Payment", paymentSchema);
module.exports = paymentObj;