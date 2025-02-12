"use strict";
import * as config from "../config.js";

class SearchView {
	_parentEl = config.dashboard;
	_getQuery() {
		const url = new URL(window.location);
		return url.searchParams.get("search");
	}
	_setQuery(query) {
		const url = new URL(window.location);
		url.searchParams.set("search", query);
		window.history.pushState({}, "", url);
	}
	_resetUrl(){
		const url = new URL(window.location);
		window.location.href = url.origin;
	}
	_addHandlerRender(handler) {
		this._parentEl.addEventListener("click", function (e) {
			e.preventDefault();
			const btn_submit = e.target.closest("#btn_submit");
			const search_box = document.querySelector("#search");
			if (!btn_submit) return;

			if (!search_box.value.trim()) return;
			handler(search_box.value.trim());

			search_box.value = "";
		});
	}
}

export default new SearchView();
