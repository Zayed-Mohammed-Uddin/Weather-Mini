"use strict";
import "../../flowbite.js";
import View from "./View.js";

class ErrorModalView extends View {
	_parentEl = document.querySelector(".modal-body-error");
	_targetEl = document.querySelector("#default-modal");
	_isLoaded = false;
	_options = {
		placement: "center-center",
		backdrop: "static",
		backdropClasses:
			"bg-gray-900/90 dark:bg-gray-900/90 fixed inset-0 z-40",
		closable: true,
	};
	_instanceOptions = {
		id: "default-modal",
		override: true,
	};
	_modal = new Modal(this._targetEl, this._options, this._instanceOptions);
	_show() {
		this._modal.show();
	}
}

export default new ErrorModalView();
