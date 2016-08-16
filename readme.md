# dubbo-weather

A simple 5 day weather forecast for the sprawling metropolis of Dubbo, NSW, Australia. The demo can be viewed on [Heroku here](https://dubbo-weather.herokuapp.com/).

## Install

Clone repository and run:

```sh
$ npm install
```

## Requirements

node 5+

This app uses the weather API from [openweathermap](http://openweathermap.org/forecast5). Therefore, you will need an API key from that service if you wish to run this app locally. The steps to do this are:

1. [Obtain an API key](http://openweathermap.org/appid)
2. Create a `.env` file in the root of the project and add the line:
`API_KEY=<your_api_key>`
3. start (or restart) the app: `npm start`
4. (Optional) Use `heroku config:set API_KEY=<your_api_key>` if you want to deploy to Heroku

## Development

```sh
$ npm start
```

Go to [http://localhost:3001](http://localhost:3001).

## Tests

```sh
$ npm test
```

```

Coverage

```sh
$ npm test -- --coverage
```

