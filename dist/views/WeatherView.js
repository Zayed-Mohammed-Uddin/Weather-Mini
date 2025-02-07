import View from "./View.js";
import * as config from "../config.js";
class WeatherView extends View {
	_parentEl = config.side__bar;

	_generateMarkUp() {
		return `<div class="overlay"></div>
				<div class="side-content">
						<div
						class="header flex items-center justify-center px-14 py-10 gap-16"
					>
						<div class="left">
							<h4
								class="location__info text-[var(--primary-color-light)] text-4xl mb-3 leading-10 tracking-wide"
							>
								<span class="city">${this._data.city}</span>,
								<span class="region">${this._data.region}</span>,
								<span class="country">${this._data.country}</span>
							</h4>
							<p class="local__time text-3xl text-white">
								${this._data.localTime}
							</p>
						</div>
						<div
							class="right text-6xl text-[var(--primary-color-light)] cursor-pointer"
						>
							<i class="fas fa-star"></i>
						</div>
					</div>
					<div class="weather__status relative pl-10 pr-10 pb-10 pt-0">
						<div class="top text-center">
							<h1
								class="weather__temperature text-7xl text-[var(--primary-color-light)] font-extrabold"
							>
								${this._data.icons
									.map((i) => {
										if (
											i.code === this._data.condition.code
										) {
											return i.icon;
										}
									})
									.join("")} ${
			this._data.temp.celsius
		}<sup>°C</sup>
							</h1>
							<p
								class="weather__state text-4xl text-white tracking-wide uppercase font-bold"
							>
								${this._data.condition.text}
							</p>
						</div>
						<div
							class="bottom text-2xl text-end leading-10 text-[var(--text-grey-1)]"
						>
							<p class="weather__max__min">
								${this._data.temp.maxtemp_celsius}<sup>°C</sup> /
								${this._data.temp.mintemp_celsius}<sup>°C</sup>
							</p>
							<p class="rain__chance">
								Rain ${this._data.rain_chance}%
							</p>
							<p class="feels__like mb-5">
								Feels like ${this._data.feels_like.celsius}<sup
									>°C</sup
								>
							</p>
						</div>
					</div>
					<div
						class="weather__hourly__updates flex items-center justify-center pb-10 gap-16 text-center"
					>
						<div class="swiper mySwiper">
							<div class="swiper-wrapper">
								${this._data.hours
									.map((h) => {
										return `
								<div class="swiper-slide w-[20%]">
									<div
										class="weather__updates text-2xl leading-[3.5rem] px-8 py-4"
									>
										<p class="hour mb-6">
											${h.time.split(" ")[1]}
										</p>
										${this._data.icons
											.map((i) => {
												if (
													i.code === h.condition.code
												) {
													return i.icon;
												}
											})
											.join("")}

										<p class="weather__temp text-4xl mb-3">
											${h.temp_c}<sup>°C</sup>
										</p>
										<p
											class="weather__rain text-[var(--text-grey-1)] mb-3"
										>
											<i class="fad fa-raindrops"></i> ${h.chance_of_rain}%
										</p>
									</div>
								</div>
								`;
									})
									.join("")}
							</div>
							<div class="swiper-pagination"></div>
						</div>
					</div>

					<div
						class="weather__sun__time flex items-center justify-center gap-10 text-center p-10"
					>
						<div
							class="sun__time__info sun__rise text-white flex items-center justify-center gap-10 p-10"
						>
							<div class="icon text-6xl">
								<i class="fad fa-sunrise"></i>
							</div>
							<div class="info">
								<p
									class="mb-4 text-4xl text-[var(--primary-color-light)]"
								>
									Sunrise
								</p>
								<p class="sun__rise__time text-3xl">
									${this._data.astro.sun_rise}
								</p>
							</div>
						</div>
						<div
							class="sun__time__info sun__set text-3xl text-white flex items-center justify-center gap-10 p-10"
						>
							<div class="icon text-6xl">
								<i class="fad fa-sunset"></i>
							</div>
							<div class="info">
								<p
									class="mb-4 text-4xl text-[var(--primary-color-light)]"
								>
									Sunset
								</p>
								<p class="sun__set__time text-3xl">
									${this._data.astro.sun_set}
								</p>
							</div>
						</div>
					</div>
				</div>`;
	}
	_addHandlerRender(handler) {
		handler();
	}
}

export default new WeatherView();
