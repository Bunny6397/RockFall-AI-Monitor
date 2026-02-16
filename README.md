# 🏔️ AI-Based Rockfall Prediction System

An intelligent, real-time rockfall prediction system for open-pit mines using machine learning and multi-source data integration.

## Features

### Core Capabilities
- **Real-time Risk Assessment**: ML-powered prediction of rockfall incidents
- **Interactive Risk Maps**: Visual representation of vulnerable zones with probability forecasts
- **Multi-Source Data Integration**: 
  - Digital Elevation Models (DEM)
  - Drone-captured imagery
  - Geotechnical sensor data (displacement, strain, pore pressure)
  - Environmental factors (rainfall, temperature, vibrations)
- **Alert System**: SMS/Email notifications for critical events
- **User-Friendly Dashboard**: Web-based interface for mine planners
- **Open-Source Architecture**: Customizable and scalable

### Dashboard Components
1. **Real-Time Statistics**: Live monitoring of high/medium/low risk zones
2. **Risk Probability Trends**: 7-day historical analysis with Chart.js
3. **Interactive Map**: Leaflet-based visualization with zone filtering
4. **Alert Management**: Prioritized notifications with recommended actions
5. **Data Upload Interface**: Easy integration of DEM, drone, and sensor data
6. **ML Model Metrics**: Performance tracking (accuracy, precision, recall)

## Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely in browser

### Installation
1. Clone or download the project
2. Open `index.html` in your web browser
3. The system will load with sample data

### Usage
- **View Risk Zones**: Click on colored circles on the map for details
- **Filter Zones**: Use buttons to show all zones or high-risk only
- **Upload Data**: Use the Data Sources section to upload DEM, drone imagery, or sensor data
- **Monitor Alerts**: Check the Alerts section for critical notifications
- **Test Alerts**: Click "Test Alert System" to verify SMS/email integration

## Technical Architecture

### Frontend Stack
- **HTML5/CSS3**: Responsive design with gradient UI
- **JavaScript (ES6+)**: Core application logic
- **Leaflet.js**: Interactive mapping
- **Chart.js**: Data visualization
- **OpenStreetMap**: Base map tiles

### Data Processing Flow
```
Input Data → Validation → Feature Extraction → ML Model → Risk Prediction → Alert Generation
```

### ML Model Integration Points
The system is designed to integrate with:
- **Python Backend**: Flask/FastAPI for model serving
- **TensorFlow/PyTorch**: Deep learning models
- **Scikit-learn**: Traditional ML algorithms
- **Real-time Processing**: WebSocket connections for live updates

## Data Sources

### 1. Digital Elevation Models (DEM)
- Format: GeoTIFF
- Resolution: 1-5m recommended
- Processing: Slope analysis, aspect calculation

### 2. Drone Imagery
- Format: JPEG, PNG, TIFF
- Requirements: Georeferenced images
- Processing: Change detection, crack identification

### 3. Geotechnical Sensors
- Format: CSV, JSON
- Metrics: Displacement (mm), Strain (ε), Pore pressure (kPa)
- Frequency: Real-time or batch upload

### 4. Environmental Data
- Weather: Temperature, rainfall, wind
- Seismic: Vibration monitoring
- Integration: API-based live fetching

## Alert System

### Alert Levels
- **Critical**: Immediate evacuation required (>80% probability)
- **Warning**: Increased monitoring needed (50-80% probability)
- **Info**: Awareness notifications (<50% probability)

### Notification Channels
- SMS: Twilio integration
- Email: SMTP configuration
- Dashboard: Real-time web notifications
- Mobile: Push notifications (future)

## Customization

### Adding New Risk Zones
Edit `app.js` and modify the `riskZones` array:
```javascript
const riskZones = [
    { lat: YOUR_LAT, lng: YOUR_LNG, risk: 'high', probability: 85, zone: 'Zone X' }
];
```

### Integrating Real ML Model
Replace the sample prediction logic with API calls:
```javascript
async function getPrediction(data) {
    const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        body: JSON.stringify(data)
    });
    return await response.json();
}
```

### Configuring Alerts
Update notification settings in `app.js`:
```javascript
const alertConfig = {
    sms: '+1-XXX-XXX-XXXX',
    email: 'safety@yourmine.com',
    threshold: 70 // probability %
};
```

## Deployment

### Local Development
Simply open `index.html` in a browser

### Web Server Deployment
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

### Production Deployment
- Deploy to any static hosting: GitHub Pages, Netlify, Vercel
- For ML backend: AWS, Google Cloud, Azure
- Database: PostgreSQL with PostGIS for spatial data

## Future Enhancements

- [ ] Real-time WebSocket integration
- [ ] Mobile app (React Native)
- [ ] Advanced ML models (LSTM, CNN)
- [ ] 3D terrain visualization
- [ ] Historical incident database
- [ ] Predictive maintenance scheduling
- [ ] Multi-mine management
- [ ] API documentation with Swagger

## License
Open-source - MIT License

## Support
For issues or questions, please open a GitHub issue or contact the development team.

---

**Built for mine safety. Powered by AI. Open for innovation.**
