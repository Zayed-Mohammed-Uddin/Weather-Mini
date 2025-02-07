"use strict";
import {
	AJAX,
	WEATHER_API_KEY,
	WEATHER_API_URL,
	LOCATION_API_KEY,
	LOCATION_API_URL,
	list_icons,
} from "./config.js";

export const state = {
	query: "",
	location: {},
	results: [],
};

export const loadGeoLocation = async function () {
	try {
		const position = await new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(resolve, reject, {
				enableHighAccuracy: true,
			});
		});

		const data = await AJAX(
			`${WEATHER_API_URL}forecast.json?key=${WEATHER_API_KEY}&q=${position.coords.latitude},${position.coords.longitude}`
		);

		const { current, location, forecast } = data;

		console.log(current, forecast);

		state.location = {
			city: location.name,
			region: location.region,
			country: location.country,
			lat: position.coords.latitude,
			lon: position.coords.longitude,
			date: new Date(),
			localTime:
				new Date().getHours().toString().padStart(2, 0) +
				":" +
				new Date().getMinutes().toString().padEnd(2, 0),
			humidity: current.humidity,
			dewpoint: {
				celsius: current.dewpoint_c,
				fahrenheit: current.dewpoint_f,
			},
			feels_like: {
				celsius: current.feelslike_c,
				fahrenheit: current.feelslike_f,
			},
			temp: {
				celsius: current.temp_c,
				fahrenheit: current.temp_f,
			},
			windSpeed: {
				kph: current.wind_kph,
				mph: current.wind_mph,
			},
			icons: list_icons,
		};

		forecast.forecastday.forEach((weather) => {
			state.location.astro = {
				moon_rise: weather.astro.moonrise,
				moon_set: weather.astro.moonset,
				sun_rise: weather.astro.sunrise,
				sun_set: weather.astro.sunset,
			};
			state.location.rain_chance = weather.day.daily_chance_of_rain;
			state.location.temp.maxtemp_celsius = weather.day.maxtemp_c;
			state.location.temp.maxtemp_fahrenheit = weather.day.maxtemp_f;
			state.location.temp.mintemp_celsius = weather.day.mintemp_c;
			state.location.temp.mintemp_fahrenheit = weather.day.mintemp_f;
			state.location.condition = weather.day.condition;
			state.location.hours = weather.hour;
		});
	} catch (error) {
		console.error(error);
	}
};

export const loadRequestedLocation = async function () {};
