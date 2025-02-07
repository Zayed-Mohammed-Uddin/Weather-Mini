import * as config from "../config.js";

class SearchView {
	_parentEl = config.dashboard;
	_getQuery() {
		const url = new URL(window.location);
		return url.searchParams.get("search");
	}
	_addHandlerRender(handler) {
		this._parentEl.addEventListener("click", function (e) {
			const search_box = e.target.closest("#search");
			const btn = document.querySelector("#btn_submit");
			if (!search_box) {
				return;
			}
			search_box.addEventListener("keydown", (e) => {
				if (e.key === "Enter") {
					handler();
				}
			});
		});
	}
}

export default new SearchView();
