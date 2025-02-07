import * as config from "../config.js";
import View from "./View.js";
class DashboardView extends View {
	_parentEl = config.dashboard;
	_generateMarkUp() {
		return `<div
					class="dashboard___search_bar flex items-start justify-between pb-8"
				>
					<div class="dashboard__info tracking-wide">
						<h4 class="text-4xl font-extrabold mb-3">
							Your Dashboard
						</h4>
						<h6
							class="current__time text-2xl text-[var(--text-grey-1)] font-bold"
						>
							${this._data.date}
						</h6>
					</div>
					<div class="location__search relative">
						<form class="form__location" action="#" method="GET">
							<button
								class="text-4xl text-[var(--text-grey-1)] absolute left-6 top-7"
								type="submit"
								id="btn_submit"
							>
								<i class="fad fa-search"></i>
							</button>
							<input
								class="border pl-20 pr-4 py-8 text-2xl outline-none border-none rounded-xl"
								type="search"
								name="search"
								id="search"
								placeholder="Search location here"
							/>
						</form>
					</div>
				</div>

				<div class="starred__location py-12">
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
								<div class="swiper-slide w-[35%] mx-auto">
									<div
										class="location bg-white px-16 py-10 rounded-xl"
									>
										<div
											class="location__header mb-11 text-center text-3xl text-[var(--primary-color)] font-extrabold uppercase tracking-wider"
										>
											<p class="country">
												Bucharest, Romania
											</p>
										</div>
										<div
											class="location__info flex items-center justify-between"
										>
											<div
												class="left flex items-center gap-3 text-5xl"
											>
												<i
													class="fad fa-clouds text-[var(--primary-color)]"
												></i>
												<p
													class="location__temp text-black"
												>
													22<sup>°C</sup>
												</p>
											</div>
											<div class="right">
												<p
													class="weather__type text-2xl tracking-wider uppercase text-[var(--text-grey-1)]"
												>
													Cloudy
												</p>
											</div>
										</div>
									</div>
								</div>
								<div class="swiper-slide w-[35%] mx-auto">
									<div
										class="location bg-white px-16 py-10 rounded-xl"
									>
										<div
											class="location__header mb-11 text-center text-3xl text-[var(--primary-color)] font-extrabold uppercase tracking-wider"
										>
											<p class="country">
												Bucharest, Romania
											</p>
										</div>
										<div
											class="location__info flex items-center justify-between"
										>
											<div
												class="left flex items-center gap-3 text-5xl"
											>
												<i
													class="fad fa-clouds text-[var(--primary-color)]"
												></i>
												<p
													class="location__temp text-black"
												>
													22<sup>°C</sup>
												</p>
											</div>
											<div class="right">
												<p
													class="weather__type text-2xl tracking-wider uppercase text-[var(--text-grey-1)]"
												>
													Cloudy
												</p>
											</div>
										</div>
									</div>
								</div>
								<div class="swiper-slide w-[35%] mx-auto">
									<div
										class="location bg-white px-16 py-10 rounded-xl"
									>
										<div
											class="location__header mb-11 text-center text-3xl text-[var(--primary-color)] font-extrabold uppercase tracking-wider"
										>
											<p class="country">
												Bucharest, Romania
											</p>
										</div>
										<div
											class="location__info flex items-center justify-between"
										>
											<div
												class="left flex items-center gap-3 text-5xl"
											>
												<i
													class="fad fa-clouds text-[var(--primary-color)]"
												></i>
												<p
													class="location__temp text-black"
												>
													22<sup>°C</sup>
												</p>
											</div>
											<div class="right">
												<p
													class="weather__type text-2xl tracking-wider uppercase text-[var(--text-grey-1)]"
												>
													Cloudy
												</p>
											</div>
										</div>
									</div>
								</div>
								<div class="swiper-slide w-[35%] mx-auto">
									<div
										class="location bg-white px-16 py-10 rounded-xl"
									>
										<div
											class="location__header mb-11 text-center text-3xl text-[var(--primary-color)] font-extrabold uppercase tracking-wider"
										>
											<p class="country">
												Bucharest, Romania
											</p>
										</div>
										<div
											class="location__info flex items-center justify-between"
										>
											<div
												class="left flex items-center gap-3 text-5xl"
											>
												<i
													class="fad fa-clouds text-[var(--primary-color)]"
												></i>
												<p
													class="location__temp text-black"
												>
													22<sup>°C</sup>
												</p>
											</div>
											<div class="right">
												<p
													class="weather__type text-2xl tracking-wider uppercase text-[var(--text-grey-1)]"
												>
													Cloudy
												</p>
											</div>
										</div>
									</div>
								</div>
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
						class="forecast__block__info flex items-center justify-evenly text-center"
					>
						<div
							class="forecast__block bg-white px-24 py-10 rounded-xl"
						>
							<p
								class="day text-[var(--primary-color)] tracking-wider font-extrabold text-4xl mb-6"
							>
								Thursday
							</p>
							<i
								class="fad fa-cloud-sun-rain text-8xl mb-6 text-[var(--primary-color)]"
							></i>
							<p class="weather__max__min text-4xl mb-3">
								2° / 8°
							</p>
							<p class="text-3xl mb-3 text-[var(--text-grey-1)]">
								<i class="fad fa-raindrops"></i>
								0%
							</p>
						</div>

						<div
							class="forecast__block bg-white px-24 py-10 rounded-xl"
						>
							<p
								class="day text-[var(--primary-color)] tracking-wider font-extrabold text-4xl mb-6"
							>
								Thursday
							</p>
							<i
								class="fad fa-cloud-sun-rain text-8xl mb-6 text-[var(--primary-color)]"
							></i>
							<p class="weather__max__min text-4xl mb-3">
								2° / 8°
							</p>
							<p class="text-3xl mb-3 text-[var(--text-grey-1)]">
								<i class="fad fa-raindrops"></i>
								0%
							</p>
						</div>
						<div
							class="forecast__block bg-white px-24 py-10 rounded-xl"
						>
							<p
								class="day text-[var(--primary-color)] tracking-wider font-extrabold text-4xl mb-6"
							>
								Thursday
							</p>
							<i
								class="fad fa-cloud-sun-rain text-8xl mb-6 text-[var(--primary-color)]"
							></i>
							<p class="weather__max__min text-4xl mb-3">
								2° / 8°
							</p>
							<p class="text-3xl mb-3 text-[var(--text-grey-1)]">
								<i class="fad fa-raindrops"></i>
								0%
							</p>
						</div>
					</div>
				</div>`;
	}
	_addHandlerRender(handler) {}
}

export default new DashboardView();
