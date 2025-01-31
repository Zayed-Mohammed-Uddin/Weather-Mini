"use strict";
export const API_URL = "http://api.weatherapi.com/v1/";
export const API_KEY = "32a108846e5741c78fa194046252001";
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
