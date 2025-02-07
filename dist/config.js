"use strict";
export const WEATHER_API_URL = "http://api.weatherapi.com/v1/";
export const WEATHER_API_KEY = "32a108846e5741c78fa194046252001";
export const LOCATION_API_URL = "https://api.api-ninjas.com/v1/geocoding";
export const LOCATION_API_KEY = "Y0sFMJKGeahEt0J0vX2Kjw==lwedX2WRbrehV57H";
export const search_box = document.querySelector("#search");
export const search_btn = document.querySelector("#btn_submit");
export const side__bar = document.querySelector(".side__bar");
export const dashboard = document.querySelector(".dashboard");
export const list_icons = [
	{
		code: 1000,
		day: "Sunny",
		night: "Clear",
		icon: `<i class="fad fa-sun text-6xl mb-4"></i>`,
	},
	{
		code: 1003,
		day: "Partly cloudy",
		night: "Partly cloudy",
		icon: `<i class="fad fa-cloud text-6xl mb-4"></i>`,
	},
	{
		code: 1006,
		day: "Cloudy",
		night: "Cloudy",
		icon: `<i class="fad fa-clouds text-6xl mb-4"></i>`,
	},
	{
		code: 1009,
		day: "Overcast",
		night: "Overcast",
		icon: `<i class="fad fa-clouds text-6xl mb-4"></i>`,
	},
	{
		code: 1030,
		day: "Mist",
		night: "Mist",
		icon: `<i class="fad fa-fog text-6xl mb-4"></i>`,
	},
	{
		code: 1063,
		day: "Patchy rain possible",
		night: "Patchy rain possible",
		icon: `<i class="fad fa-cloud-showers text-6xl mb-4"></i>`,
	},
	{
		code: 1066,
		day: "Patchy snow possible",
		night: "Patchy snow possible",
		icon: `<i class="fad fa-cloud-meatball text-6xl mb-4"></i>`,
	},
	{
		code: 1069,
		day: "Patchy sleet possible",
		night: "Patchy sleet possible",
		icon: `<i class="fad fa-cloud-sleet text-6xl mb-4"></i>`,
	},
	{
		code: 1072,
		day: "Patchy freezing drizzle possible",
		night: "Patchy freezing drizzle possible",
		icon: `<i class="fad fa-cloud-drizzle text-6xl mb-4"></i>`,
	},
	{
		code: 1087,
		day: "Thundery outbreaks possible",
		night: "Thundery outbreaks possible",
		icon: `<i class="fad fa-thunderstorm text-6xl mb-4"></i>`,
	},
	{
		code: 1114,
		day: "Blowing snow",
		night: "Blowing snow",
		icon: `<i class="fad fa-snowflakes text-6xl mb-4"></i>`,
	},
	{
		code: 1117,
		day: "Blizzard",
		night: "Blizzard",
		icon: `<i class="fad fa-snow-blowing text-6xl mb-4"></i>`,
	},
	{
		code: 1135,
		day: "Fog",
		night: "Fog",
		icon: `<i class="fad fa-fog text-6xl mb-4"></i>`,
	},
	{
		code: 1147,
		day: "Freezing fog",
		night: "Freezing fog",
		icon: `<i class="fad fa-snowflakes text-6xl mb-4"></i>`,
	},
	{
		code: 1150,
		day: "Patchy light drizzle",
		night: "Patchy light drizzle",
		icon: `<i class="fad fa-cloud-drizzle text-6xl mb-4"></i>`,
	},
	{
		code: 1153,
		day: "Light drizzle",
		night: "Light drizzle",
		icon: `<i class="fad fa-cloud-drizzle text-6xl mb-4"></i>`,
	},
	{
		code: 1168,
		day: "Freezing drizzle",
		night: "Freezing drizzle",
		icon: `<i class="fad fa-cloud-drizzle text-6xl mb-4"></i>`,
	},
	{
		code: 1171,
		day: "Heavy freezing drizzle",
		night: "Heavy freezing drizzle",
		icon: `<i class="fad fa-cloud-drizzle text-6xl mb-4"></i>`,
	},
	{
		code: 1180,
		day: "Patchy light rain",
		night: "Patchy light rain",
		icon: `<i class="fad fa-cloud-drizzle text-6xl mb-4"></i>`,
	},
	{
		code: 1183,
		day: "Light rain",
		night: "Light rain",
		icon: `<i class="fad fa-cloud-drizzle text-6xl mb-4"></i>`,
	},
	{
		code: 1186,
		day: "Moderate rain at times",
		night: "Moderate rain at times",
		icon: `<i class="fad fa-cloud-drizzle text-6xl mb-4"></i>`,
	},
	{
		code: 1189,
		day: "Moderate rain",
		night: "Moderate rain",
		icon: `<i class="fad fa-cloud-drizzle text-6xl mb-4"></i>`,
	},
	{
		code: 1192,
		day: "Heavy rain at times",
		night: "Heavy rain at times",
		icon: `<i class="fad fa-cloud-drizzle text-6xl mb-4"></i>`,
	},
	{
		code: 1195,
		day: "Heavy rain",
		night: "Heavy rain",
		icon: `<i class="fad fa-cloud-drizzle text-6xl mb-4"></i>`,
	},
	{
		code: 1198,
		day: "Light freezing rain",
		night: "Light freezing rain",
		icon: `<i class="fad fa-cloud-drizzle text-6xl mb-4"></i>`,
	},
	{
		code: 1201,
		day: "Moderate or heavy freezing rain",
		night: "Moderate or heavy freezing rain",
		icon: `<i class="fad fa-cloud-drizzle text-6xl mb-4"></i>`,
	},
	{
		code: 1204,
		day: "Light sleet",
		night: "Light sleet",
		icon: `<i class="fad fa-snowflakes text-6xl mb-4"></i>`,
	},
	{
		code: 1207,
		day: "Moderate or heavy sleet",
		night: "Moderate or heavy sleet",
		icon: `<i class="fad fa-snowflakes text-6xl mb-4"></i>`,
	},
	{
		code: 1210,
		day: "Patchy light snow",
		night: "Patchy light snow",
		icon: `<i class="fad fa-snowflakes text-6xl mb-4"></i>`,
	},
	{
		code: 1213,
		day: "Light snow",
		night: "Light snow",
		icon: `<i class="fad fa-snowflakes text-6xl mb-4"></i>`,
	},
	{
		code: 1216,
		day: "Patchy moderate snow",
		night: "Patchy moderate snow",
		icon: `<i class="fad fa-snowflakes text-6xl mb-4"></i>`,
	},
	{
		code: 1219,
		day: "Moderate snow",
		night: "Moderate snow",
		icon: `<i class="fad fa-snowflakes text-6xl mb-4"></i>`,
	},
	{
		code: 1222,
		day: "Patchy heavy snow",
		night: "Patchy heavy snow",
		icon: `<i class="fad fa-snowflakes text-6xl mb-4"></i>`,
	},
	{
		code: 1225,
		day: "Heavy snow",
		night: "Heavy snow",
		icon: `<i class="fad fa-snowflakes text-6xl mb-4"></i>`,
	},
	{
		code: 1237,
		day: "Ice pellets",
		night: "Ice pellets",
		icon: `<i class="fad fa-snowflakes text-6xl mb-4"></i>`,
	},
	{
		code: 1240,
		day: "Light rain shower",
		night: "Light rain shower",
		icon: `<i class="fad fa-cloud-rain text-6xl mb-4"></i>`,
	},
	{
		code: 1243,
		day: "Moderate or heavy rain shower",
		night: "Moderate or heavy rain shower",
		icon: `<i class="fad fa-cloud-rain text-6xl mb-4"></i>`,
	},
	{
		code: 1246,
		day: "Torrential rain shower",
		night: "Torrential rain shower",
		icon: `<i class="fad fa-cloud-rain text-6xl mb-4"></i>`,
	},
	{
		code: 1249,
		day: "Light sleet showers",
		night: "Light sleet showers",
		icon: `<i class="fad fa-cloud-rain text-6xl mb-4"></i>`,
	},
	{
		code: 1252,
		day: "Moderate or heavy sleet showers",
		night: "Moderate or heavy sleet showers",
		icon: `<i class="fad fa-cloud-rain text-6xl mb-4"></i>`,
	},
	{
		code: 1255,
		day: "Light snow showers",
		night: "Light snow showers",
		icon: `<i class="fad fa-cloud-rain text-6xl mb-4"></i>`,
	},
	{
		code: 1258,
		day: "Moderate or heavy snow showers",
		night: "Moderate or heavy snow showers",
		icon: `<i class="fad fa-cloud-rain text-6xl mb-4"></i>`,
	},
	{
		code: 1261,
		day: "Light showers of ice pellets",
		night: "Light showers of ice pellets",
		icon: `<i class="fad fa-humidity text-6xl mb-4"></i>`,
	},
	{
		code: 1264,
		day: "Moderate or heavy showers of ice pellets",
		night: "Moderate or heavy showers of ice pellets",
		icon: `<i class="fad fa-humidity text-6xl mb-4"></i>`,
	},
	{
		code: 1273,
		day: "Patchy light rain with thunder",
		night: "Patchy light rain with thunder",
		icon: `<i class="fad fa-thunderstorm text-6xl mb-4"></i>`,
	},
	{
		code: 1276,
		day: "Moderate or heavy rain with thunder",
		night: "Moderate or heavy rain with thunder",
		icon: `<i class="fad fa-thunderstorm text-6xl mb-4"></i>`,
	},
	{
		code: 1279,
		day: "Patchy light snow with thunder",
		night: "Patchy light snow with thunder",
		icon: `<i class="fad fa-thunderstorm text-6xl mb-4"></i>`,
	},
	{
		code: 1282,
		day: "Moderate or heavy snow with thunder",
		night: "Moderate or heavy snow with thunder",
		icon: `<i class="fad fa-thunderstorm text-6xl mb-4"></i>`,
	},
];
const TIMEOUT_SEC = 10;

const timeout = function (s) {
	return new Promise((_, reject) =>
		setTimeout(() => reject(new Error("Request timed out")), s * 1000)
	);
};

export const AJAX = async function (url) {
	try {
		const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
		if (!res.ok) throw new Error(`${res.statusText} not found!`);
		return await res.json();
	} catch (error) {
		throw error;
	}
};
