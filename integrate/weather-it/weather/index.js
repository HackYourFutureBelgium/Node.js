'use strict'

const request = require('request-promise');

const weatherAPIKey = require('../config.json').weatherAPIKey

/**
* @param {string} cityName
* @returns {Promise}
*/
function getWeatherForCity(cityName) {
    return request({
        uri: 'https://api.weatherapi.com/v1/current.json?key=299ac9b5a9d34d46a59142847202604&q=antwerp',
        qs: {
            q: cityName,
            key: weatherAPIKey
        },
        json: true
    })
    .then(response => {
        return {
            success: true,
            data: response
        };
    })
    .catch(err => {
        if (!err.error) {
            throw error;
        }

        const returnedError = JSON.parse(err.error);

        if (returnedError.error.code === 1006) {
            return {
                success: false,
                error: `City ${cityName} not found, please check input.`
            }
        }
    });
}

module.exports = {
    getWeatherForCity
}
