const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const cartSchema = new Schema({

    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    items:[{type : Schema.Types.ObjectId , ref : 'Item'}]
    
})

const cartObj = mongoose.model("Cart", cartSchema);
module.exports = cartObj;
