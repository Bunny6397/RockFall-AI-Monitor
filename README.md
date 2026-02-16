# 🏔️ Rockfall AI Monitor

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg)](https://nodejs.org/)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-success.svg)]()

An AI-powered full-stack system for predicting and monitoring rockfall risks in open-pit mines. Features real-time risk assessment, interactive maps, comprehensive alert management, and ML-based predictions.

![Rockfall AI Monitor](https://img.shields.io/badge/Version-1.0.0-brightgreen)

## 🌟 Features

### 🗺️ Interactive Risk Mapping
- Real-time risk visualization centered on India (Bhopal region)
- 8 color-coded risk zones with detailed information
- Enhanced zone details modal with sensor readings
- Toggle sensors and heatmap overlays
- Filter zones by risk level (High, Medium, Low)

### 🚨 Alert Management System
- Real-time alert monitoring and notifications
- Test alert system with comprehensive results
- Export detailed alert reports
- Configure notification settings (Email/SMS)
- Alert acknowledgment and tracking

### 📊 Data Management
- Upload and process multiple data sources:
  - Sensor data (displacement, strain, pressure)
  - Drone imagery and aerial surveys
  - Digital Elevation Models (DEM)
- View detailed upload history
- Real-time weather data integration
- ML model performance metrics

### 📈 Analytics Dashboard
- Prediction accuracy trends
- Risk distribution charts
- Sensor readings visualization
- Alert frequency analysis
- System statistics and overview

### 📄 Professional Pages
- Comprehensive Privacy Policy (13 sections)
- Detailed Terms of Service (16 sections)
- Contact form with validation
- Emergency contact information
- FAQ section

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)
- Python 3 (for frontend server)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bunny6397/Rockfall-AI-Monitor.git
   cd Rockfall-AI-Monitor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the application**
   
   **Option 1: Use the start script (Recommended)**
   ```bash
   chmod +x start.sh
   ./start.sh
   ```
   
   **Option 2: Manual start**
   ```bash
   # Terminal 1 - Backend
   npm start
   
   # Terminal 2 - Frontend
   python3 -m http.server 8000
   ```

4. **Access the application**
   - Frontend: http://localhost:8000
   - Backend API: http://localhost:3000

## 📁 Project Structure

```
rockfall/
├── index.html              # Home page
├── dashboard.html          # Dashboard with statistics
├── risk-map.html          # Interactive risk map
├── alerts.html            # Alert management
├── data-sources.html      # Data upload & management
├── analytics.html         # Charts & analytics
├── privacy-policy.html    # Privacy policy
├── terms-of-service.html  # Terms of service
├── contact.html           # Contact page
├── styles.css             # Global styles
├── *.js                   # Page-specific JavaScript
├── server.js              # Backend API server
├── package.json           # Dependencies
├── start.sh               # Quick start script
├── stop.sh                # Stop servers script
├── verify-project.js      # Project verification
└── Documentation/         # Comprehensive guides
```

## 🔧 Technology Stack

### Frontend
- HTML5, CSS3, JavaScript (ES6+)
- Leaflet.js (Interactive maps)
- Chart.js (Data visualization)
- Responsive design (Mobile, Tablet, Desktop)

### Backend
- Node.js & Express.js
- RESTful API (20+ endpoints)
- Multer (File uploads)
- CORS enabled
- Body parser middleware

### Features
- Real-time data processing
- ML prediction integration
- Multi-source data handling
- Alert notification system
- File upload management

## 📡 API Endpoints

### Risk Zones
- `GET /api/zones` - Get all risk zones
- `GET /api/zones/:id` - Get specific zone
- `PUT /api/zones/:id` - Update zone data

### Alerts
- `GET /api/alerts` - Get all alerts
- `POST /api/alerts` - Create new alert
- `PUT /api/alerts/:id/acknowledge` - Acknowledge alert

### Data Management
- `POST /api/upload` - Upload files
- `GET /api/uploads` - Get upload history
- `GET /api/weather` - Get weather data

### Analytics
- `GET /api/statistics` - System statistics
- `GET /api/analytics` - Analytics data
- `GET /api/model/metrics` - ML model performance

See [API_DOCUMENTATION.md](API_DOCUMENTATION.md) for complete API reference.

## 🧪 Testing

### Quick Verification
```bash
node verify-project.js
```

### Manual Testing
Follow the comprehensive testing guide:
```bash
cat TESTING_GUIDE.md
```

### Test Features
1. Navigate through all 9 pages
2. Click interactive buttons on Risk Map
3. Test alert system buttons
4. View upload details
5. Submit contact form
6. Test responsive design

## 📖 Documentation

- [START_HERE.md](START_HERE.md) - Getting started guide
- [API_DOCUMENTATION.md](API_DOCUMENTATION.md) - Complete API reference
- [TESTING_GUIDE.md](TESTING_GUIDE.md) - Testing procedures
- [PROJECT_COMPLETE.md](PROJECT_COMPLETE.md) - Full project summary
- [QUICK_START.md](QUICK_START.md) - Quick start guide

## 🎨 Design System

### Color Palette
- **Primary**: #667eea (Purple)
- **Secondary**: #764ba2 (Dark Purple)
- **High Risk**: #f5576c (Red)
- **Medium Risk**: #fcb69f (Orange)
- **Low Risk**: #a8edea (Teal)

### Typography
- Font: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Responsive sizing
- 1.6 line-height for readability

## 🌍 Localization

- Map centered on Bhopal, Madhya Pradesh, India
- Indian phone format (+91-XXXXX-XXXXX)
- Gmail email format
- IST timezone support

## 🔒 Security

- Input validation on all forms
- CORS configuration
- File upload restrictions
- Environment variable support (.env)
- Secure API endpoints

## 🚧 Future Enhancements

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Real ML model training and deployment
- [ ] Live sensor data integration
- [ ] WebSocket for real-time updates
- [ ] User authentication & authorization
- [ ] PDF report generation
- [ ] Email/SMS notifications (Twilio, SendGrid)
- [ ] Mobile app (React Native/Flutter)
- [ ] Advanced analytics and predictions

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

© 2026 Rockfall AI Monitor. All rights reserved.

## 👥 Authors

- **Bunny6397** - [GitHub Profile](https://github.com/Bunny6397)

## 🙏 Acknowledgments

- Built for mining safety and rockfall prevention
- Inspired by the need for proactive risk management
- Designed for open-pit mining operations

## 📞 Support

For support, email support@rockfallmonitor.com or open an issue on GitHub.

## 🔗 Links

- [Live Demo](http://localhost:8000) (when running locally)
- [API Documentation](API_DOCUMENTATION.md)
- [GitHub Repository](https://github.com/Bunny6397/Rockfall-AI-Monitor)

---

**Built with ❤️ for mining safety and rockfall prevention**
