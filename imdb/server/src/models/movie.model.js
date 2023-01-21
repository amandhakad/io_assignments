const mongoose = require("mongoose")

const MovieSchema = new mongoose.Schema({
  "movieId": {type: String, index: true},
});

const MemberSchema = new mongoose.Schema({
  "memberId":  {type: String, index: true},
});

const Movie = mongoose.model("Movie", MovieSchema);
const Member = mongoose.model("Member", MemberSchema);

module.exports = {
 Movie,
 Member
}