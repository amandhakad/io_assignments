const { Movie, Actor } = require('./../models/movie.model')

async function getMovies(req) {  

    const result = await Movie.aggregate([]);

    if(result) {
        return { status: true, message: "Movies fetched!", data: result };
    } else {
        return { status: false, message: "Failed to fetch movies, please try later or contact support!" };
    }
}

module.exports = {
    getMovies
}
