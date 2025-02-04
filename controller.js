"use strict";
import * as model from "./model.js";
import * as view from "./views/View.js";
import * as config from "./config.js";

const controlSearchResults = function () {
	model.loadSearchResults();
	console.log(model.state);
};

const init = function () {
	controlSearchResults();
};

init();
