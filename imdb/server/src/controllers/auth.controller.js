const AuthService = require('./../services/auth.service')
const {success, failure} = require('./../common/common')

async function register(req, res, next) {
	const result = await AuthService.register(req);

	if(result.status) {
		success(res, result)
	} else {
		failure(res, result)
	}
}

async function login(req, res, next) {
	const result = await AuthService.login(req);

	if(result.status) {
		success(res, result)
	} else {
		failure(res, result)
	}
}

async function logout(req, res, next) {
	const result = await AuthService.logout(req);

	if(result.status) {
		success(res, result)
	} else {
		failure(res, result)
	}
}

module.exports = {
	register,
	login,
	logout
}