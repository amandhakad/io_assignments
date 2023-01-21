const express = require('express')
const router = express.Router()
const MovieController = require('./../controllers/movie.controller')

const AuthGuard = require('./../middlewares/AuthGuard')
router.use(AuthGuard)

router.get('/', MovieController.getMovies)

module.exports = router