var Schema = require('../models/cake.js');

// var schemas = require('db');
// var Cat = schemas.Cat;
// var Dog = schemas.Dog;

module.exports = {
    index: (req, res) => {
        Schema.Cake.find()
            .then(cakes => res.json({data: cakes}))
            .catch(err => res.json(err))
            //console.log(persons)
    },
    show_one: (req, res) => {
        Schema.Cake.findOne({_id: req.params.id})
            .then(cake => {res.json(cake);
            })
            .catch(err => res.json(err));
    },
    create: (req, res) => {
        cake = new Schema.Cake();
        cake.baker_name = req.body.baker_name,
        cake.image_url = req.body.image_url,
        cake.save()
            .then(cake => res.json(cake))
            .catch(err => res.json(err));
    },
    update: (req, res) => {
        console.log(req.params.id)
        console.log(req.body, req.body.comment, req.body.rating)
        var review = new Schema.Review();
        review.comment = req.body.comment,
        review.rating = req.body.rating,
        review.save()
        console.log(review)
        // var cake = Cake.findOne({_id: req.params.id});
        //     cake.reviews = review,
        //     cake.save()
        //     .then(cake => res.json({cake: cake}))
        
        updated_cake = Schema.Cake.updateOne({_id: req.params.id}, {$push: {reviews: [{rating: req.body.rating, comment: req.body.comment}]}})
            .then(updated_cake => res.json({cake: updated_cake}))
            //.then((data) => res.json(data))
            .catch(err => res.json(err));
            
    }
    // destroy: (req, res) => {
    //     Task.remove({_id: req.params.id})
    //     .then(deletedTask => res.json({data: deletedTask}))
    //     .catch(err => res.json(err));
    // }
};