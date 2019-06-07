import dotenv from 'dotenv'
dotenv.config()

import fetch from 'node-fetch'

const { api_url, api_key } = process.env

class MovieController {
    async upcoming(req, res) {
        const { page } = req.query
        const urlMoviesUpcoming = `${api_url}/movie/upcoming?api_key=${api_key}&language=en-US&page=${page}`;

        let response = await fetch(urlMoviesUpcoming);
        let data = await response.json();

        return res.status(200).send(data.results)
    }

    async details(req, res) {
        const { id } = req.params;
        const url = `${api_url}/movie/${id}?api_key=${api_key}&language=en-US`;

        let response = await fetch(url);
        let data = await response.json();

        return res.status(200).send(data);
    }

    async genres(req, res) {
        const url = `${api_url}/genre/movie/list?api_key=${api_key}&language=en-US`;

        let response = await fetch(url);
        let data = await response.json();

        return res.status(200).send(data.genres);
    }

    async search(req, res) {
        const { query, page } = req.query
        const url = `${api_url}/search/movie?api_key=${api_key}&query=${query}&page=${page}&language=en-US`;

        let response = await fetch(url);
        let data = await response.json();

        return res.status(200).send(data);
    }
}

export default new MovieController()