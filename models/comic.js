var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user.js');//maybe?

var comicSchema = new Schema({
  userId: {type: Schema.ObjectId, ref: 'User'},//maybe?
  name: {type: String, required: true},
  issues: {type: Number},
  purchased: {type: Boolean, default: false},
  alreadyRead: {type: Boolean, default: false},
  rating: {type: [Number]}
});

var Comic = mongoose.model('comic', comicSchema);

exports.model = Comic;
exports.schema = comicSchema;
