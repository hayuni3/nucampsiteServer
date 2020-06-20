const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;


const favoriteSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique: true
    },

    campsites: [ {
        type: mongoose.Schema.Types.ObjectId,
        default: 'Campsite'
    }],
}, {
    timestamp: true
  
});

favoriteSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Favorite', favoriteSchema);