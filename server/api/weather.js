var rp = require('request-promise');
var _ = require('lodash');
var moment = require('moment');

var WEATHER_API_ENDPOINT = 'http://api.openweathermap.org/data/2.5/forecast';
var API_KEY = process.env.API_KEY;
var DEFAULT_PARAMS = {
  id: '2168305',
  mode: 'json',
  units: 'metric',
  APPID: API_KEY
};
var TZ_OFFSET_HOURS = 8;

function getData() {
  return rp({
    uri: WEATHER_API_ENDPOINT,
    qs: DEFAULT_PARAMS,
    json: true
  })
  .then(function (resp) {
    return resp;
  })
  .error(function (err) {
    res.status(500).send('Error getting weather: ' + err)
  })
}

function weather (req, res) {
  getData().then(function (resp) {
    res.json(_.groupBy(resp.list, function (item) {
      return getLocalTime(item.dt_txt);
    }))
  })
}

function weatherByDay (req, res) {
  getData()
  .then(function (data) {
    var result = _.chain(data.list)
    .groupBy(function (item) {
      return getLocalTime(item.dt_txt);
    })
    .map(function (group, key) {
      return _.assign({
        date: key
      }, _.reduce(group, function (last, interval) {
        var wProp = interval.weather[0].description;
        last.min = getMin(last.min, interval.main.temp_min);
        last.max = getMax(last.max, interval.main.temp_max);
        last.weatherMap[wProp] = last.weatherMap[wProp] ? last.weatherMap[wProp] + 1 : 1;
        return last;
      }, {weatherMap:{}}))
    })
    .map(function(day) {
      day.weather = getWeatherMode(day.weatherMap);
      return day;
    })
    .value();
    res.json(result);
  })
}

function comparator (func) {
  return function (current, compare) {
    return current ? func(current, compare) : compare;
  }
}

function getLocalTime(timeStr) {
  return moment(timeStr).add(TZ_OFFSET_HOURS, 'hours').format('ddd DD MMM');
}

function getWeatherMode(weatherMap) {
  return _.reduce(weatherMap, function (last, count, weatherType) {
    if (count > last[1]) {
      last[0] = weatherType;
      last[1] = count;
    }
    return last;
  }, ['', 0])[0];
}

var getMin = comparator(Math.min);
var getMax = comparator(Math.max);

module.exports = {
  weather: weather,
  weatherByDay: weatherByDay
};
