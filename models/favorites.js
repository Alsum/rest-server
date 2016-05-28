// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var favSchema = new Schema({
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    dishes:[{type: mongoose.Schema.Types.ObjectId,ref: 'Dish',unique: true}]
}, {
    timestamps: true
});

// we need to create a model using it
var Fav = mongoose.model('Fav', favSchema);
module.exports = Fav;