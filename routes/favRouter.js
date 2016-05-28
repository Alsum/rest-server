var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Verify    = require('./verify');
var Favorites = require('../models/favorites');

var FavoritesRouter = express.Router();
FavoritesRouter.use(bodyParser.json());

FavoritesRouter.route('/')
.all(Verify.verifyOrdinaryUser)
.get(function (req, res, next) {
    Favorites.find({})
        .populate('postedBy dishes')
        .exec(function (err, fav) {
        if (err) throw err;
        res.json(fav);
    });
})

.post(Verify.verifyAdmin,function (req, res, next) {
    /* we should first check if user already has created fav
       other wise we push new one to the old fav
    */

    Favorites.findOne({postedBy:req.decoded._doc._id}, function (err, fav) {
    if (fav == null){
    fav = new Favorites();
    fav.postedBy=req.decoded._doc._id;
    console.log("New Fav object has been created");
    }
    Favorites.update({postedBy:req.decoded._doc._id}, {$addToSet: {dishes: req.body}})
    //fav.dishes.push(req.body);
    fav.save(function (err, result) {
        if (err) throw err;
        res.json(result);
    });
    });

})

.delete(Verify.verifyAdmin, function (req, res, next) {
    Favorites.remove({}, function (err, resp) {
        if (err) throw err;
        res.json(resp);
    });
});


module.exports = FavoritesRouter;