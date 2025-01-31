"use strict";
import * as model from "./model.js";
const controlSearchResults = function () {
	model.loadSearchResults();
	console.log(model.state);
};

const init = function () {
	controlSearchResults();
};

init();
