const mongoose = require("mongoose")
const User = require('./../models/user.model')
const jwt = require('jsonwebtoken');

function generateAccessToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '1800s' });
}

function payloadForJWT(user) {
	return { username: user.username, email: user.email};
}

async function register(req) {	
	const body = req.body;

	let userObj = {
		username: body.username,
		password: body.password,
		name: body.name,
		email: body.email,
	}

	// existing check
	const check = await User.findOne({ $or: [{email: userObj.email}, {username: userObj.username}], status: "active" });
	if(check) {
		return { status: false, message: "Email or username already exists!" };
	}

	userObj.userId = new mongoose.Types.ObjectId().str;
	
	const res = await User(userObj).save();
	if(res) {
		// login here
		const authToken = generateAccessToken(payloadForJWT(userObj));
		return { status: true, message: "Successfully registered!", data: { authToken: authToken } };
	} else {
		return { status: false, message: "Registration failed, please try later or contact support!" };
	}
}

async function login(req) {
	const { username, password } = req.body;

	const user = await User.findOne({ username: username, status: "active"});
	if(!user) {
		return { status: false, message: "User not found!" };
	}
	try {
		const passwordCheck = await user.comparePassword(password);

		if(!passwordCheck) {
			throw new Error("Something went wrong!");
		}

		if(passwordCheck.isMatch) {
			const authToken = generateAccessToken(payloadForJWT(user));
			return { status: true, message: "Logged in successfully!", data: { authToken: authToken }  };
		} else {
			return { status: false, message: "Wrong password!" };
		}

	} catch(e) {
		console.log("Login error", e);
		return { status: false, message: "Something went wrong, please try later or contact support!" }
	}
}

async function logout(req) {
	// delete req.session.user;
	return { status: true, message: "Logged out successfully!" };
}

module.exports = {
	register,
	login,
	logout
}