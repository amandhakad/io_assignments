const MovieService = require('./../services/movie.service')
const {success, failure} = require('./../common/common')

async function getMovies(req, res, next) {
	const result = await MovieService.getMovies(req);

	if(result.status) {
		success(res, result)
	} else {
		failure(res, result)
	}
}

module.exports = {
	getMovies
}