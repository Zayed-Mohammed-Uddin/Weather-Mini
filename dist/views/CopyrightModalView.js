"use strict";
import "../../flowbite.js";

class CoprightModalView {
	_targetEl = document.querySelector("#static-modal");

	_options = {
		placement: "center-center",
		backdrop: "static",
		backdropClasses:
			"bg-gray-900/90 dark:bg-gray-900/90 fixed inset-0 z-40",
		closable: true,
	};
	_instanceOptions = {
		id: "static-modal",
		override: true,
	};
	_modal = new Modal(this._targetEl, this._options, this._instanceOptions);

	_show() {
		this._modal.show();
	}
}

export default new CoprightModalView();
