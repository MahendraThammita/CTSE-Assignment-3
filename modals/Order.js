const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const Order = new Schema({

    status: {
        type: Number,
        required: true
        // 1 for : Accepted
        // 2 for : Dispatched
        // 3 for : Delivering
        // 4 for : Confirmed/Closed
    },
    payment:{
        type : String, 
        required: true
    },
    user:{
        type : String, 
        required: true
    },
    items:[{    
        type: Schema.Types.ObjectId,
        required: true  
    }],
})

const OrderObj = mongoose.model("Order", Order);
module.exports = OrderObj;