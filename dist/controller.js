"use strict";
import * as model from "./model.js";
import * as config from "./config.js";
import SearchView from "./views/SearchView.js";
import WeatherView from "./views/WeatherView.js";
import DashboardView from "./views/DashboardView.js";

const controlLoadGeoLocation = async function () {
	try {
		// loading the user's geolocation
		await model.loadGeoLocation();
		// rendering the siderbar
		WeatherView._render(model.state.location);
		// rendering the dashboard
		DashboardView._render(model.state.location);
	} catch (error) {
		console.error(error);
	}
};

const controlSearchLocation = function () {
	const query = SearchView._getQuery();
	console.log(query);
};

const init = function () {
	WeatherView._addHandlerRender(controlLoadGeoLocation);
	SearchView._addHandlerRender(controlSearchLocation);
};

init();
