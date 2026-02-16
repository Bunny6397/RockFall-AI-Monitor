# 📡 Rockfall AI Monitor - API Documentation

## Base URL
```
http://localhost:3000/api
```

---

## 🔍 Endpoints Overview

### Health & Status
- `GET /api/health` - Server health check

### Risk Zones
- `GET /api/zones` - Get all risk zones
- `GET /api/zones/:id` - Get specific zone
- `PUT /api/zones/:id` - Update zone data

### Statistics
- `GET /api/stats` - Get real-time statistics

### Alerts
- `GET /api/alerts` - Get all alerts
- `POST /api/alerts` - Create new alert
- `PUT /api/alerts/:id/acknowledge` - Acknowledge alert
- `DELETE /api/alerts/:id` - Delete alert
- `POST /api/alerts/test` - Send test alert

### Data Upload
- `POST /api/upload/dem` - Upload DEM data
- `POST /api/upload/drone` - Upload drone imagery
- `POST /api/upload/sensor` - Upload sensor data
- `GET /api/uploads` - Get upload history

### Sensors & Weather
- `GET /api/weather` - Get weather data
- `GET /api/sensors` - Get sensor data

### ML Model & Analytics
- `GET /api/model/performance` - Get model performance
- `GET /api/analytics/accuracy` - Get accuracy trends
- `GET /api/analytics/distribution` - Get risk distribution
- `POST /api/predict` - Predict risk for given parameters

### Settings
- `POST /api/settings/notifications` - Save notification settings

---

## 📋 Detailed Endpoints

### 1. Health Check

**GET** `/api/health`

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running",
  "timestamp": "2026-02-17T10:30:00.000Z"
}
```

---

### 2. Get All Risk Zones

**GET** `/api/zones`

**Query Parameters:**
- `risk` (optional): Filter by risk level (`high`, `medium`, `low`, `all`)

**Example:**
```
GET /api/zones?risk=high
```

**Response:**
```json
[
  {
    "id": 1,
    "lat": 40.7128,
    "lng": -74.0060,
    "risk": "high",
    "probability": 85,
    "zone": "Zone A-1",
    "displacement": 15,
    "strain": 0.0052,
    "pressure": 450
  }
]
```

---

### 3. Get Specific Zone

**GET** `/api/zones/:id`

**Example:**
```
GET /api/zones/1
```

**Response:**
```json
{
  "id": 1,
  "lat": 40.7128,
  "lng": -74.0060,
  "risk": "high",
  "probability": 85,
  "zone": "Zone A-1",
  "displacement": 15,
  "strain": 0.0052,
  "pressure": 450
}
```

---

### 4. Update Zone Data

**PUT** `/api/zones/:id`

**Request Body:**
```json
{
  "probability": 90,
  "displacement": 18,
  "strain": 0.0055,
  "pressure": 480
}
```

**Response:**
```json
{
  "id": 1,
  "lat": 40.7128,
  "lng": -74.0060,
  "risk": "high",
  "probability": 90,
  "zone": "Zone A-1",
  "displacement": 18,
  "strain": 0.0055,
  "pressure": 480
}
```

---

### 5. Get Statistics

**GET** `/api/stats`

**Response:**
```json
{
  "highRisk": 3,
  "mediumRisk": 7,
  "lowRisk": 15,
  "activeSensors": 42,
  "timestamp": "2026-02-17T10:30:00.000Z"
}
```

---

### 6. Get All Alerts

**GET** `/api/alerts`

**Query Parameters:**
- `type` (optional): Filter by type (`critical`, `warning`, `info`, `all`)

**Example:**
```
GET /api/alerts?type=critical
```

**Response:**
```json
[
  {
    "id": 1,
    "type": "critical",
    "zone": "Zone A-1",
    "message": "Critical displacement detected: 15mm in last 6 hours",
    "time": "2026-02-17T10:25:00.000Z",
    "action": "Evacuate personnel immediately",
    "acknowledged": false
  }
]
```

---

### 7. Create New Alert

**POST** `/api/alerts`

**Request Body:**
```json
{
  "type": "warning",
  "zone": "Zone B-3",
  "message": "Unusual sensor readings detected",
  "action": "Investigate immediately"
}
```

**Response:**
```json
{
  "id": 5,
  "type": "warning",
  "zone": "Zone B-3",
  "message": "Unusual sensor readings detected",
  "action": "Investigate immediately",
  "time": "2026-02-17T10:30:00.000Z",
  "acknowledged": false
}
```

---

### 8. Acknowledge Alert

**PUT** `/api/alerts/:id/acknowledge`

**Request Body:**
```json
{
  "user": "John Doe"
}
```

**Response:**
```json
{
  "id": 1,
  "type": "critical",
  "zone": "Zone A-1",
  "message": "Critical displacement detected",
  "acknowledged": true,
  "acknowledgedAt": "2026-02-17T10:30:00.000Z",
  "acknowledgedBy": "John Doe"
}
```

---

### 9. Upload DEM Data

**POST** `/api/upload/dem`

**Content-Type:** `multipart/form-data`

**Form Data:**
- `file`: DEM file (.tif, .geotiff)

**Response:**
```json
{
  "id": 1,
  "type": "DEM",
  "filename": "elevation_model.tif",
  "size": 45678900,
  "path": "uploads/1708167000000-elevation_model.tif",
  "uploadedAt": "2026-02-17T10:30:00.000Z",
  "status": "Processing"
}
```

---

### 10. Upload Drone Imagery

**POST** `/api/upload/drone`

**Content-Type:** `multipart/form-data`

**Form Data:**
- `files`: Multiple image files (max 10)

**Response:**
```json
[
  {
    "id": 2,
    "type": "Drone",
    "filename": "aerial_001.jpg",
    "size": 2345678,
    "path": "uploads/1708167000000-aerial_001.jpg",
    "uploadedAt": "2026-02-17T10:30:00.000Z",
    "status": "Processing"
  }
]
```

---

### 11. Upload Sensor Data

**POST** `/api/upload/sensor`

**Content-Type:** `multipart/form-data`

**Form Data:**
- `file`: Sensor data file (.csv, .json)

**Response:**
```json
{
  "id": 3,
  "type": "Sensor",
  "filename": "sensor_data.csv",
  "size": 123456,
  "path": "uploads/1708167000000-sensor_data.csv",
  "uploadedAt": "2026-02-17T10:30:00.000Z",
  "status": "Processing"
}
```

---

### 12. Get Upload History

**GET** `/api/uploads`

**Response:**
```json
[
  {
    "id": 1,
    "type": "DEM",
    "filename": "elevation_model.tif",
    "size": 45678900,
    "uploadedAt": "2026-02-17T10:30:00.000Z",
    "status": "Processed"
  }
]
```

---

### 13. Get Weather Data

**GET** `/api/weather`

**Response:**
```json
{
  "temperature": 18.5,
  "rainfall": 5.2,
  "windSpeed": 12.3,
  "seismicActivity": "Normal",
  "lastUpdated": "2026-02-17T10:30:00.000Z"
}
```

---

### 14. Get Sensor Data

**GET** `/api/sensors`

**Response:**
```json
{
  "displacement": [
    { "value": 12.5, "timestamp": "2026-02-17T10:30:00.000Z" }
  ],
  "strain": [
    { "value": 0.0045, "timestamp": "2026-02-17T10:30:00.000Z" }
  ],
  "pressure": [
    { "value": 380, "timestamp": "2026-02-17T10:30:00.000Z" }
  ],
  "weather": {
    "temperature": 18.5,
    "rainfall": 5.2,
    "windSpeed": 12.3,
    "seismicActivity": "Normal"
  }
}
```

---

### 15. Get ML Model Performance

**GET** `/api/model/performance`

**Response:**
```json
{
  "accuracy": 94.2,
  "precision": 91.8,
  "recall": 89.5,
  "f1Score": 90.6,
  "lastTraining": "2026-02-17T08:30:00.000Z",
  "trainingSamples": 15420,
  "modelVersion": "1.2.3"
}
```

---

### 16. Get Accuracy Trends

**GET** `/api/analytics/accuracy`

**Response:**
```json
{
  "labels": ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
  "data": [89.5, 91.2, 92.8, 93.5, 94.0, 94.2]
}
```

---

### 17. Get Risk Distribution

**GET** `/api/analytics/distribution`

**Response:**
```json
{
  "high": 3,
  "medium": 7,
  "low": 15
}
```

---

### 18. Predict Risk

**POST** `/api/predict`

**Request Body:**
```json
{
  "displacement": 12,
  "strain": 0.0045,
  "pressure": 380,
  "rainfall": 5
}
```

**Response:**
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
  "recommendation": "Evacuate personnel",
  "timestamp": "2026-02-17T10:30:00.000Z"
}
```

---

### 19. Send Test Alert

**POST** `/api/alerts/test`

**Request Body:**
```json
{
  "email": "safety@gmail.com",
  "phone": "+91-98765-43210"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Test alerts sent successfully",
  "email": "safety@gmail.com",
  "phone": "+91-98765-43210",
  "timestamp": "2026-02-17T10:30:00.000Z"
}
```

---

### 20. Save Notification Settings

**POST** `/api/settings/notifications`

**Request Body:**
```json
{
  "email": "safety@gmail.com",
  "phone": "+91-98765-43210",
  "emailEnabled": true,
  "smsEnabled": true,
  "threshold": "critical"
}
```

**Response:**
```json
{
  "success": true,
  "settings": {
    "email": "safety@gmail.com",
    "phone": "+91-98765-43210",
    "emailEnabled": true,
    "smsEnabled": true,
    "threshold": "critical",
    "savedAt": "2026-02-17T10:30:00.000Z"
  }
}
```

---

## 🔒 Error Responses

### 400 Bad Request
```json
{
  "error": "Bad Request",
  "message": "Invalid parameters"
}
```

### 404 Not Found
```json
{
  "error": "Not Found",
  "message": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
  "error": "Internal Server Error",
  "message": "Something went wrong!"
}
```

---

## 📝 Notes

- All timestamps are in ISO 8601 format
- File uploads have a maximum size limit (configurable in .env)
- API responses include appropriate HTTP status codes
- CORS is enabled for all origins (configure for production)

---

## 🚀 Testing with cURL

### Get Statistics
```bash
curl http://localhost:3000/api/stats
```

### Get High Risk Zones
```bash
curl http://localhost:3000/api/zones?risk=high
```

### Create Alert
```bash
curl -X POST http://localhost:3000/api/alerts \
  -H "Content-Type: application/json" \
  -d '{"type":"warning","zone":"Zone B-3","message":"Test alert","action":"Monitor"}'
```

### Upload File
```bash
curl -X POST http://localhost:3000/api/upload/sensor \
  -F "file=@sensor_data.csv"
```

---

**API Version:** 1.0.0
**Last Updated:** February 17, 2026
