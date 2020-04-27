'use strict'

const weather = require('./weather');
const renderer = require('./renderer');

const rawInputs = process.argv;
const cleanedInputs = rawInputs.slice(2);

const inputCity = cleanedInputs[0];

weather.getWeatherForCity(inputCity)
    .then(weatherData => {

        if (!weatherData.success) {
            renderer.renderError(weatherData.error);
            return
        }

        const location = weatherData.data.location;
        const current = weatherData.data.current;

        renderer.renderSuccess(
            `${location.name}, ${location.country}`,
            `${current.condition.text}`
        );
    })
    .catch(error => {
        renderer.renderError(error.message);
    })
