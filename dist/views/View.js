"use strict";

export default class View {
	/**
	 * Render the received object to the DOM
	 * @param {Object | Object[]} data The data to be rendered (e.g. weather)
	 * @returns {undefined | string} A markup string is returned if render=false
	 * @this {Object} View instance
	 * @author Zayed Uddin
	 * @todo Finish implementation
	 */
	_data;
	_clear() {
		this._parentEl.innerHTML = "";
	}
	_render(data) {
		if (JSON.stringify(data) === "{}") return;
		this._data = data;
		this._clear();
		this._isLoaded = true;
		this._parentEl.insertAdjacentHTML("afterbegin", this._generateMarkUp());
	}
	_renderError(message = null) {
		const markup = message
			? `
			<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
				${message}
			</p>`
			: `<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
				${this._errorMessage}
			</p>`;
		this._clear();
		this._parentEl.insertAdjacentHTML("afterbegin", markup);
	}
	_renderSpinner() {
		const markup = `<div id="spinner" class="spinner"></div>`;
		this._clear();
		this._parentEl.insertAdjacentHTML("afterbegin", markup);
		const spinner = document.querySelector("#spinner");
		setTimeout(() => {
			if (spinner && this._isLoaded) spinner.remove();
		}, 800);
	}
}
