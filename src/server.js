import "@babel/polyfill";

import express from 'express'
import cors from 'cors'
import routes from './routes'

const app = express()

app.use(cors())

const server = require('http').Server(app)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)

server.listen(process.env.PORT || 8080, () => {
    console.log(`server running and listening on ${process.env.URL}`)
})

