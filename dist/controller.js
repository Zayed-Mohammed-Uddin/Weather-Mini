"use strict";
import * as model from "./model.js";
import SearchView from "./views/SearchView.js";
import WeatherView from "./views/WeatherView.js";
import DashboardView from "./views/DashboardView.js";
import RenderModalView from "./views/RenderModalView.js";
import ErrorModalView from "./views/ErrorModalView.js";
import CopyrightModalView from "./views/CopyrightModalView.js";

const controlLoadGeoLocation = (async function () {
	try {
		// loading the user's geolocation
		await model.loadGeoLocation();

		// rendering the spinner
		WeatherView._renderSpinner();

		// rendering the siderbar
		WeatherView._render(model.state.availableLocation);

		// rendering the spinner
		DashboardView._renderSpinner();

		// rendering the dashboard
		DashboardView._render(model.state);
	} catch (error) {
		// rendering the spinner
		ErrorModalView._renderSpinner();
		ErrorModalView._renderError(error);
		ErrorModalView._show();
	}
})();

const controlLoadLocation = (async function () {
	try {
		const query = SearchView._getQuery();
		if (!query) return;
		await model.loadRequestedLocation(query);
		// rendering the spinner
		DashboardView._renderSpinner();
		if (model.state.requestedLocations.length > 0) {
			RenderModalView._render(model.state.requestedLocations);
			RenderModalView._show();
		} else {
			setTimeout(() => {
				SearchView._resetUrl();
			}, 2000);
			throw new Error("Invalid request!");
		}
	} catch (error) {
		// rendering the spinner
		ErrorModalView._renderSpinner();

		ErrorModalView._renderError(error);
		ErrorModalView._show();
	}
})();

const controlSearchLocation = async function (query) {
	try {
		SearchView._setQuery(query);
		await model.loadRequestedLocation(query);
		// rendering the spinner
		DashboardView._renderSpinner();
		if (model.state.requestedLocations.length > 0) {
			RenderModalView._render(model.state.requestedLocations);
			RenderModalView._show();
		} else {
			setTimeout(() => {
				SearchView._resetUrl();
			}, 2000);
			throw new Error("Invalid request!");
		}
	} catch (error) {
		// rendering the spinner
		DashboardView._renderSpinner();
		ErrorModalView._renderError(error);
		ErrorModalView._show();
	}
};

const controlGetLocationCoordinates = async function (lat, lon) {
	try {
		await model.loadWeatherByLatLon(lat, lon);

		// rendering the spinner
		WeatherView._renderSpinner();
		// rendering the siderbar
		WeatherView._render(model.state.availableLocation);

		// rendering the spinner
		DashboardView._renderSpinner();
		// rendering the dashboard
		DashboardView._render(model.state);
	} catch (error) {
		// rendering the spinner
		DashboardView._renderSpinner();
		ErrorModalView._renderError(error);
		ErrorModalView._show();
	}
};

const controlSavedLocation = function (data) {
	data.isBookmarked ? model.addLocation(data) : model.removeLocation(data);
	// rendering the spinner
	DashboardView._renderSpinner();
	DashboardView._render(model.state);
};

const init = (function () {
	CopyrightModalView._show();
	WeatherView._addHandlerRender(controlSavedLocation);
	SearchView._addHandlerRender(controlSearchLocation);
	RenderModalView._addHandlerRender(controlGetLocationCoordinates);
	DashboardView._addHandlerRender(controlGetLocationCoordinates);
})();
