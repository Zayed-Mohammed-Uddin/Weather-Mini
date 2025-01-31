"use strict";
import { AJAX, API_KEY, API_URL } from "./config.js";

export const state = {
	query: "",
	results: [],
};

export const loadSearchResults = function () {
	navigator.geolocation.getCurrentPosition(
		async (position) => {
			try {
				const data = await AJAX(
					`${API_URL}current.json?key=${API_KEY}&q=${position.coords.latitude},${position.coords.longitude}`
				);

				const { current, location } = data;
				state.location = location;
				state.current = current;
			} catch (error) {
				throw error;
			}
		},
		function () {
			return -1;
		}
	);
};
