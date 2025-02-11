"use strict";
import * as config from "../config.js";
import View from "./View.js";
class DashboardView extends View {
	_parentEl = config.dashboard;
	_isLoaded = false;
	_errorMessage = `Sorry! Your requested location is not available!`;
	_generateMarkUp() {
		return `<div
					class="dashboard___search_bar flex items-start justify-between pb-10"
				>
					<div class="dashboard__info tracking-wide">
						<h4 class="text-4xl font-extrabold mb-3">
							Your Dashboard
						</h4>
						<h6
							class="current__time text-2xl text-[var(--text-grey-1)] font-bold"
						>
							${this._data.availableLocation.date}
						</h6>
					</div>
					<div class="location__search">
						<form class="form__location relative h-[60px]" action="#" method="GET">
							<button
								class="text-4xl text-[var(--text-grey-1)] absolute left-6 top-7"
								disabled
							>
								<i class="fad fa-search"></i>
							</button>
							<input
								class="border pl-20 pr-4 py-8 text-2xl outline-none border-none rounded-l-xl h-full"
								type="search"
								name="search"
								id="search"
								placeholder="Search location..."
							/>
							<button type="submit" id="btn_submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 absolute px-10 text-4xl rounded-r-xl -right-4 h-full">
  								<i class="fad fa-search"></i>
							</button>
						</form>
					</div>
				</div>

				<div class="starred__location">
					<header
						class="starred__location__header text-4xl font-extrabold"
					>
						<h4 class="mb-14">Starred Location</h4>
					</header>

					<div
						class="starred__location__info flex gap-36 items-center justify-center"
					>
						<div class="swiper mySwiper">
							<div class="swiper-wrapper">
							${
								this._data.savedLocations.length > 0
									? this._data.savedLocations
											.map((loc) => {
												return `
									<div class="swiper-slide w-[${
										this._data.savedLocations.length > 1
											? "45%"
											: "100%"
									}] mx-auto">
										<div class="location bg-white px-16 py-10 rounded-xl cursor-pointer" data-latitude="${
											loc.lat
										}" data-longitude="${loc.lon}">
											<div
												class="location__header mb-11 text-center text-3xl text-[var(--primary-color)] font-extrabold uppercase tracking-wider">
												<p class="country mb-0">
													${loc.city}, ${loc.country}
												</p>
											</div>
											<div
												class="location__info flex items-center justify-between">
												<div
													class="left flex items-center gap-3 text-5xl">
													${loc.icon}
													<p
														class="location__temp text-black mb-0">
														${loc.temp}<sup>°C</sup>
													</p>
												</div>
												<div class="right">
													<p
														class="weather__type text-2xl tracking-wider uppercase text-[var(--text-grey-1)] mb-0">
														${loc.weather}
													</p>
												</div>
											</div>
										</div>
									</div>`;
											})
											.join("")
									: `
									<div class="swiper-slider">
										<div class="location bg-white px-16 py-10 rounded-xl cursor-pointer">
											<div
												class="location__header text-center text-3xl text-[var(--primary-color)] font-extrabold uppercase tracking-wider">
												<p class="country mb-0">
													No Location has been bookmarked yet
												</p>
											</div>
										</div>
									</div>`
							}
							</div>
						</div>
					</div>
				</div>

				<div class="forecast__section">
					<header
						class="forecast__section__header text-4xl font-extrabold"
					>
						<h4 class="mb-14">3-day Forecast</h4>
					</header>

					<div
						class="forecast__block__info flex xs:flex-col sm:flex-col md:flex-col items-center justify-evenly text-center gap-10"
					>
						${this._data.availableLocation.forecastDays
							.map((forecast) => {
								return `
							<div class="forecast__block bg-white px-24 py-10 rounded-xl">
								<p
									class="day text-[var(--primary-color)] tracking-wider font-extrabold text-4xl mb-6"
								>
								${forecast.dayName}
								</p>
								<p class="text-6xl mb-6 text-[var(--primary-color)]">${forecast.icon}</p>
								<p class="weather__max__min text-4xl mb-3">
								${forecast.maxtemp_c}° / ${forecast.mintemp_c}°
								</p>
								<p class="text-3xl mb-3 text-[var(--text-grey-1)]">
									<i class="fad fa-raindrops"></i>
									${forecast.rain_chance}%
								</p>
							</div>`;
							})
							.join("")}
					</div>
				</div>`;
	}
	_addHandlerRender(handler) {
		this._parentEl.addEventListener("click", (e)=>{
			const target_location = e.target.closest(".location");
			if(!target_location) return;
			const { latitude, longitude } = target_location.dataset;
			handler(latitude, longitude);
		})
	}
}

export default new DashboardView();