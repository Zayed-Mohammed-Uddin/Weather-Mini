"use strict";
import "../../flowbite.js";
import View from "./View.js";

class RenderModal extends View {
	_parentEl = document.querySelector(".modal-body");
	_targetEl = document.querySelector("#modalEl");
    _isLoaded = false;

	_options = {
		placement: "center-center",
		backdrop: "static",
		backdropClasses:
			"bg-gray-900/90 dark:bg-gray-900/90 fixed inset-0 z-40",
		closable: true,
	};
	_instanceOptions = {
		id: "modalEl",
		override: true,
	};
	_modal = new Modal(this._targetEl, this._options, this._instanceOptions);

	_show() {
		this._modal.show();
	}

	_generateMarkUp() {
		return `${this._data
			.map((location, i) => {
				return `
                        <li class="found__location" data-latitude="${
							location.latitude
						}" data-longitude="${location.longitude}">
                            <div
                                id="loc-${i + 1}"
                                class="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500"
                            >
                                <div class="block">
                                    <div
                                        class="w-full city text-lg font-semibold"
                                    >
                                        ${location.name}, ${location.state}
                                    </div>
                                    <div
                                        class="w-full country text-gray-500 dark:text-gray-400"
                                    >
                                        ${location.country}
                                    </div>
                                </div>
                                <svg
                                    class="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </div>
                        </li>`;
			})
			.join("")}`;
	}
	_addHandlerRender(handler) {
		this._parentEl.addEventListener("click", (e) => {
			const target_location = e.target.closest(".found__location");
			if (!target_location) {
				return;
			}
            target_location.firstElementChild.style.border="1px solid blue";
			target_location.firstElementChild.firstElementChild.classList.add("text-white");
            const {latitude: lat, longitude: lon} = target_location.dataset;
			handler(lat, lon);
		});
	}
}

export default new RenderModal();
