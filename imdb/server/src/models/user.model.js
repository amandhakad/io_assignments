const mongoose = require("mongoose")
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
	userId: {type: String, index: true},
	username: String,
	password: String,
	email: String,
	name: String,
	status: { type: String, enum: ["active","inactive","deleted"], default: "active"}
});

// pre hash pwd
UserSchema.pre('save', function save(next) {
	const user = this;

	if (!user.isModified('password')) return next();

	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(user.password, salt, (err, hash) => {
			if (err) return err;

			user.password = hash;
			next();
		});
	});
});

UserSchema.methods.comparePassword = function(candidatePassword) {
    return new Promise((resolve, reject) => {
    	 bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
	        if (err) reject(err);
	        resolve({isMatch: isMatch});
	    });
    });
};

module.exports = mongoose.model("User", UserSchema)