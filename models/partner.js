const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partnerSchema = new Schema({
   name: {
        type: String,
        require: true,
        unique: true
    },
    image: {
        type: String,
        require: true,
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


const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner;