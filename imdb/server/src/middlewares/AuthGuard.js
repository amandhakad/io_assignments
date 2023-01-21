const AuthGuard = (req, res, next) => {
	// TD: check sess user in mongodb
	if(!req.session.user) {
		res.sendStatus(401)
		return;
	}
	next()
}

module.exports = AuthGuard;