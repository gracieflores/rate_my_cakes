const mongoose = require('mongoose');
//const flash = require('express-flash');


const ReviewSchema = new mongoose.Schema({
    comment: {
        type: String,
        minlength: 5
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
}, {timestamps: true});

const CakeSchema = new mongoose.Schema({
    baker_name: {
        type: String,
        required: true,
        minlength: 3
    },
    image_url: {
        type: String,
        required: true,
    },
    reviews: [ReviewSchema]
}, {timestamps: true});
    


const Review = mongoose.model('Review', ReviewSchema);
const Cake = mongoose.model('Cake', CakeSchema);
// module.exports = Review;
// module.exports = Cake;

module.exports = {
    Cake: Cake,
    Review: Review
};
