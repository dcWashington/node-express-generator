const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Currency = mongoose.Types.Currency;

const promotionSchema = new Schema({
   name: {
        type: String,
        require: true,
        unique: true
    },
    image: {
        type: String,
        require: true
    },
    cost: {
        type: Currency,
        required: true,
        min: 0
    },
    feature: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
);


const Promotion = mongoose.model('Promotion', promotionSchema);

module.exports = Promotion;