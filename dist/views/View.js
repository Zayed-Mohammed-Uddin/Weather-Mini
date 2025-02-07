"use strict";

export default class View {
	_data;
	_clear() {
		this._parentEl.innerHTML = "";
	}
	_update() {}
	_render(data) {
		if (JSON.stringify(data) === "{}") return;
		this._data = data;
		this._clear();
		this._parentEl.insertAdjacentHTML("afterbegin", this._generateMarkUp());
	}
	_renderError() {}
}
