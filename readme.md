# Movies TMDb REST API
NodeJs REST Api created to consume TMDb REST API. You can use the api with this link below:

[https://movies-station-backend.herokuapp.com/](https://movies-station-backend.herokuapp.com/) 

## Getting Started
```
# clone repo
$ git clone https://github.com/daniloab/movies-station-backend.git
$ cd movies-station-backend

# install dependencies
$ yarn install

# build and start project 
$ yarn start

# to see on any environment api or browser
$ yarn dev and open the link below with some route
http://localhost:8080/
```

## Routes
- Movies Upcoming
```
/movies/upcoming?page={page}
```

- Movie Details
```
/movies/details/:id
```

- Movies Search
```
/movies/search?query={query}&page={page}
```

- Movies Genres
```
/movies/genres
```

## Tools and Frameworks
- NodeJs - JavaScript runtime built on Chrome's V8 JavaScript engine.
- Express Framework - minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- Babel Transpiler - JavaScript compiler
- Dotenv - zero-dependency module that loads environment variables from a .env file into process.env .