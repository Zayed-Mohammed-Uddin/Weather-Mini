"use strict";
import {
	AJAX,
	WEATHER_API_KEY,
	WEATHER_API_URL,
	LOCATION_API_URL,
	list_icons,
} from "./config.js";

export const state = {
	query: "",
	availableLocation: {},
	requestedLocations: [],
	savedLocations: [],
};

const getDayName = function (dateString) {
	const date = new Date(dateString);
	return date.toLocaleDateString("en-US", {
		weekday: "long",
		timeZone: "UTC",
	});
};

const loadLocationData = async function (lat, lon) {
	try {
		const data = await AJAX(
			`${WEATHER_API_URL}forecast.json?key=${WEATHER_API_KEY}&q=${lat},${lon}&days=5`
		);

		const { current, location, forecast } = data;

		state.availableLocation = {
			city: location.name,
			region: location.region,
			country: location.country,
			latitude: lat,
			longitude: lon,
			date: new Date(),
			localDate: location.localtime.split(" ")[0],
			localTime: location.localtime.split(" ")[1],
			isBookmarked:
				state.savedLocations.length > 0
					? state.savedLocations.find(
							(l) =>
								l.city === location.name &&
								l.country === location.country
					  )?.isBookmarked || null
					: null,
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
		};

		state.availableLocation.forecastDays = [];
		state.availableLocation.hours = [];

		forecast.forecastday.forEach((weather, i) => {
			if (i === 0) {
				state.availableLocation.astro = {
					moon_rise: weather.astro.moonrise,
					moon_set: weather.astro.moonset,
					sun_rise: weather.astro.sunrise,
					sun_set: weather.astro.sunset,
				};

				state.availableLocation.rain_chance =
					weather.day.daily_chance_of_rain;

				state.availableLocation.temp.maxtemp_celsius =
					weather.day.maxtemp_c;
				state.availableLocation.temp.maxtemp_fahrenheit =
					weather.day.maxtemp_f;

				state.availableLocation.temp.mintemp_celsius =
					weather.day.mintemp_c;
				state.availableLocation.temp.mintemp_fahrenheit =
					weather.day.mintemp_f;

				state.availableLocation.state =
					weather.day.condition.text.trim();
				state.availableLocation.icon = list_icons.find(
					(icon) => icon.code === weather.day.condition.code
				).icon;

				weather.hour.forEach((h) => {
					state.availableLocation.hours.push({
						time: h.time.split(" ")[1],
						temp_c: h.temp_c,
						temp_f: h.temp_f,
						rain_chance: h.chance_of_rain,
						icon: list_icons.find(
							(i) => i.code === h.condition.code
						).icon,
					});
				});
			}
			state.availableLocation.forecastDays.push({
				date: weather.date,
				dayName: getDayName(weather.date),
				maxtemp_c: weather.day.maxtemp_c,
				maxtemp_f: weather.day.maxtemp_f,
				mintemp_c: weather.day.mintemp_c,
				mintemp_f: weather.day.mintemp_f,
				icon: list_icons.find(
					(icon) => icon.code === weather.day.condition.code
				).icon,
				rain_chance: weather.day.daily_chance_of_rain,
			});
		});
	} catch (error) {
		throw error;
	}
};

export const loadGeoLocation = async function () {
	try {
		const position = await new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(resolve, reject, {
				enableHighAccuracy: true,
			});
		});
		const { latitude: lat, longitude: lon } = position.coords;
		await loadLocationData(lat, lon);
	} catch (error) {
		console.error(error);
	}
};

export const loadRequestedLocation = async function (query) {
	try {
		state.query = query;
		const data = await AJAX(
			`${LOCATION_API_URL}?city=${encodeURIComponent(query)}`,
			true
		);
		state.requestedLocations = data;
	} catch (error) {
		throw error;
	}
};

export const loadWeatherByLatLon = async function (lat, lon) {
	try {
		await loadLocationData(lat, lon);
	} catch (error) {
		throw error;
	}
};

const loadSavedLocations = (function () {
	const savedData = localStorage.getItem("savedLocations");
	if (savedData) {
		state.savedLocations = JSON.parse(savedData);
	}
})();

const saveLocation = function () {
	localStorage.setItem(
		"savedLocations",
		JSON.stringify(state.savedLocations)
	);
};

export const addLocation = function (data) {
	state.savedLocations.push(data);
	saveLocation();
};

export const removeLocation = function (data) {
	const index = state.savedLocations.findIndex(
		(location) => location.city === data.city
	);
	state.savedLocations.splice(index, 1);
	saveLocation();
};
