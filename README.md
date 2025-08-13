# Weather-Mini 🌤️

A modern, responsive weather application that provides real-time weather information for any location worldwide. Built with vanilla JavaScript, Tailwind CSS, and featuring a clean, user-friendly interface.

## 🌟 Features

-   **Real-time Weather Data**: Get current weather conditions for any location
-   **Geolocation Support**: Automatically detect and display weather for your current location
-   **Location Search**: Search for weather information by city name
-   **Responsive Design**: Optimized for desktop, tablet, and mobile devices
-   **Interactive UI**: Modern interface with smooth animations and transitions
-   **Multiple Location Support**: Compare weather across different locations
-   **Weather Conditions**: Detailed weather information including temperature, humidity, wind speed, and more
-   **Error Handling**: Graceful error handling with user-friendly messages

## 🛠️ Technologies Used

-   **Frontend**: HTML5, CSS3, JavaScript (ES6+)
-   **Styling**: Tailwind CSS
-   **Icons**: Font Awesome 5
-   **UI Components**: Flowbite
-   **Carousel**: Swiper.js
-   **Build Tools**: PostCSS, Autoprefixer
-   **Weather API**: OpenWeatherMap API (or similar)

## 📦 Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/Zayed-Mohammed-Uddin/Weather-Mini.git
    cd Weather-Mini
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Set up environment variables**

    - Create a `.env` file in the root directory
    - Add your weather API key:
        ```
        WEATHER_API_KEY=your_api_key_here
        ```

4. **Build the CSS**

    ```bash
    npm run build
    ```

5. **Open the application**
    - Open `index.html` in your browser
    - Or serve it using a local server like Live Server extension in VS Code

## 🎯 Usage

1. **Automatic Location Detection**: The app will request permission to access your location and display weather data automatically
2. **Manual Search**: Use the search bar to find weather information for any city or location
3. **Multiple Locations**: Select from multiple location suggestions when searching
4. **Interactive Dashboard**: View detailed weather information on the main dashboard

## 🏗️ Project Structure

```
Weather-Mini/
├── dist/                   # Compiled JavaScript modules
│   ├── controller.js       # Main application controller
│   ├── model.js           # Data management and API calls
│   ├── config.js          # Configuration settings
│   └── views/             # View components
│       ├── WeatherView.js
│       ├── SearchView.js
│       ├── DashboardView.js
│       └── ...
├── src/                   # Source files
│   ├── input.css         # Tailwind CSS input file
│   └── output.css        # Compiled CSS output
├── Image/                # Image assets
├── font-awesome/         # Font Awesome icons
├── index.html           # Main HTML file
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── weather_conditions.json # Weather condition mappings
└── README.md           # Project documentation
```

## ⚙️ Configuration

### Tailwind CSS

The project uses Tailwind CSS for styling with custom screen breakpoints:

-   `xs`: 320px - 639px
-   `sm`: 640px - 767px
-   `md`: 768px - 1023px
-   `lg`: 1024px - 1279px
-   `xl`: 1280px - 1535px
-   `2xl`: 1536px+

### Build Script

```bash
npm run build    # Watch mode for CSS compilation
```

## 🔧 API Integration

This application integrates with weather APIs to fetch real-time data. Make sure to:

1. Sign up for a weather API service (OpenWeatherMap, WeatherAPI, etc.)
2. Get your API key
3. Add the API key to your configuration
4. Update the API endpoints in the model files if needed

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Zayed Mohammed Uddin**

-   GitHub: [@Zayed-Mohammed-Uddin](https://github.com/Zayed-Mohammed-Uddin)

## 🙏 Acknowledgments

-   Weather data provided by weather APIs
-   Icons by Font Awesome
-   UI components by Flowbite
-   Styling framework by Tailwind CSS
-   Carousel functionality by Swiper.js

## 📱 Browser Support

-   Chrome (latest)
-   Firefox (latest)
-   Safari (latest)
-   Edge (latest)

## 🐛 Known Issues

-   Geolocation may not work on non-HTTPS sites in production
-   Some older browsers may not support all ES6+ features

## 🔮 Future Enhancements

-   [ ] Weather forecast for multiple days
-   [ ] Weather maps integration
-   [ ] Favorite locations feature
-   [ ] Weather alerts and notifications
-   [ ] Dark/Light theme toggle
-   [ ] Weather history tracking
-   [ ] Mobile app version

---

⭐ If you found this project helpful, please consider giving it a star!
