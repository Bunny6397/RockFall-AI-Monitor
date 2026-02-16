# 🎉 Backend Server Status

## ✅ BACKEND IS RUNNING!

---

## 🌐 Server Information

**Status:** ✅ ACTIVE
**Port:** 3000
**Process ID:** 5
**URL:** http://localhost:3000

---

## 📡 API Endpoints (All Working!)

### Core Endpoints

✅ **Health Check**
```
http://localhost:3000/api/health
```
Response: `{"status":"OK","message":"Server is running"}`

✅ **Statistics**
```
http://localhost:3000/api/stats
```
Response: `{"highRisk":3,"mediumRisk":3,"lowRisk":2,"activeSensors":42}`

✅ **Risk Zones**
```
http://localhost:3000/api/zones
```
Returns: 8 risk zones with full data

✅ **Alerts**
```
http://localhost:3000/api/alerts
```
Returns: Active alerts list

---

## 🧪 Test the API

### Using Browser

Open these URLs in your browser:

1. http://localhost:3000/api/health
2. http://localhost:3000/api/stats
3. http://localhost:3000/api/zones
4. http://localhost:3000/api/alerts
5. http://localhost:3000/api/weather
6. http://localhost:3000/api/model/performance

### Using cURL

```bash
# Health check
curl http://localhost:3000/api/health

# Get statistics
curl http://localhost:3000/api/stats

# Get all zones
curl http://localhost:3000/api/zones

# Get high risk zones only
curl http://localhost:3000/api/zones?risk=high

# Get alerts
curl http://localhost:3000/api/alerts

# Get weather data
curl http://localhost:3000/api/weather

# Get ML model performance
curl http://localhost:3000/api/model/performance
```

---

## 📊 Available Data

### Risk Zones (8 zones)
- Zone A-1: High Risk (85%)
- Zone A-2: High Risk (78%)
- Zone B-1: High Risk (72%)
- Zone C-1: Medium Risk (55%)
- Zone C-2: Medium Risk (48%)
- Zone D-1: Medium Risk (52%)
- Zone E-1: Low Risk (25%)
- Zone E-2: Low Risk (18%)

### Alerts (4 active)
- 2 Critical alerts
- 1 Warning alert
- 1 Info alert

### Sensors
- 42 active sensors
- Real-time data tracking
- Weather monitoring

---

## 🔌 Frontend Integration

### Access Frontend

The backend also serves the frontend:
```
http://localhost:3000/index.html
http://localhost:3000/dashboard.html
http://localhost:3000/risk-map.html
http://localhost:3000/alerts.html
http://localhost:3000/data-sources.html
http://localhost:3000/analytics.html
```

### API Base URL

When connecting frontend to backend, use:
```javascript
const API_BASE_URL = 'http://localhost:3000/api';
```

---

## 📤 File Upload Endpoints

### Upload DEM Data
```bash
curl -X POST http://localhost:3000/api/upload/dem \
  -F "file=@your_dem_file.tif"
```

### Upload Drone Imagery
```bash
curl -X POST http://localhost:3000/api/upload/drone \
  -F "files=@image1.jpg" \
  -F "files=@image2.jpg"
```

### Upload Sensor Data
```bash
curl -X POST http://localhost:3000/api/upload/sensor \
  -F "file=@sensor_data.csv"
```

---

## 🤖 ML Prediction

### Predict Risk
```bash
curl -X POST http://localhost:3000/api/predict \
  -H "Content-Type: application/json" \
  -d '{
    "displacement": 12,
    "strain": 0.0045,
    "pressure": 380,
    "rainfall": 5
  }'
```

Response:
```json
{
  "riskLevel": "high",
  "probability": 78,
  "confidence": 92,
  "factors": {
    "displacement": "High",
    "strain": "High",
    "pressure": "Normal",
    "rainfall": "Normal"
  },
  "recommendation": "Evacuate personnel"
}
```

---

## 🚨 Alert Management

### Create Alert
```bash
curl -X POST http://localhost:3000/api/alerts \
  -H "Content-Type: application/json" \
  -d '{
    "type": "warning",
    "zone": "Zone B-3",
    "message": "Unusual readings detected",
    "action": "Investigate immediately"
  }'
```

### Acknowledge Alert
```bash
curl -X PUT http://localhost:3000/api/alerts/1/acknowledge \
  -H "Content-Type: application/json" \
  -d '{"user": "John Doe"}'
```

---

## 📈 Analytics Endpoints

### Get Accuracy Trends
```bash
curl http://localhost:3000/api/analytics/accuracy
```

Response:
```json
{
  "labels": ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
  "data": [89.5, 91.2, 92.8, 93.5, 94.0, 94.2]
}
```

### Get Risk Distribution
```bash
curl http://localhost:3000/api/analytics/distribution
```

Response:
```json
{
  "high": 3,
  "medium": 3,
  "low": 2
}
```

---

## 🌦️ Weather & Sensors

### Get Weather Data
```bash
curl http://localhost:3000/api/weather
```

Response:
```json
{
  "temperature": 18.5,
  "rainfall": 5.2,
  "windSpeed": 12.3,
  "seismicActivity": "Normal",
  "lastUpdated": "2026-02-16T19:16:00.000Z"
}
```

### Get Sensor Data
```bash
curl http://localhost:3000/api/sensors
```

---

## 🛑 Stopping the Server

To stop the backend server:

1. The server is running as a background process
2. It will continue running until manually stopped
3. To stop: Use the process management tools

---

## 📊 Server Logs

The server logs all requests:
- API calls
- File uploads
- Errors
- Status updates

Check the process output for real-time logs.

---

## 🔄 Both Servers Running

### Current Setup

**Backend Server:**
- Port: 3000
- Status: ✅ Running
- URL: http://localhost:3000

**Frontend Server:**
- Port: 8000
- Status: ✅ Running (if started)
- URL: http://localhost:8000

### Access Points

**Option 1: Use Backend (Port 3000)**
- Frontend: http://localhost:3000/
- API: http://localhost:3000/api/*

**Option 2: Use Frontend Server (Port 8000)**
- Frontend: http://localhost:8000/
- API: http://localhost:3000/api/* (cross-origin)

---

## ✅ Verification Checklist

- [x] Backend server started
- [x] Port 3000 accessible
- [x] Health check working
- [x] Statistics endpoint working
- [x] Risk zones endpoint working
- [x] Alerts endpoint working
- [x] File upload ready
- [x] ML prediction ready
- [x] Analytics endpoints ready

---

## 📚 Documentation

For complete API documentation, see:
- **API_DOCUMENTATION.md** - Full API reference
- **BACKEND_SETUP.md** - Setup instructions
- **FULLSTACK_GUIDE.md** - Integration guide

---

## 🎉 Success!

Your backend is fully operational and ready to serve data!

**Backend URL:** http://localhost:3000
**API Base:** http://localhost:3000/api
**Status:** ✅ RUNNING

**Test it now:** http://localhost:3000/api/health
