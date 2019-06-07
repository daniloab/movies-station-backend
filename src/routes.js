import express from 'express'
import MovieController from './controllers/MovieController'

const routes = express.Router();

routes.get("/movies/upcoming", MovieController.upcoming)
routes.get("/movies/genres", MovieController.genres)
routes.get("/movies/search", MovieController.search)
routes.get("/movies/details/:id", MovieController.details)

export default routes