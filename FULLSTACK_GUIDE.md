# 🏔️ Rockfall AI Monitor - Full Stack Guide

## 🎉 Complete System Overview

Your Rockfall Prediction System now includes both **Frontend** and **Backend**!

---

## 📦 What's Included

### Frontend (Client-Side)
- ✅ 6 HTML pages with responsive design
- ✅ Interactive JavaScript functionality
- ✅ Chart.js visualizations
- ✅ Leaflet.js interactive maps
- ✅ Professional UI/UX

### Backend (Server-Side)
- ✅ Node.js + Express REST API
- ✅ 20+ API endpoints
- ✅ File upload handling
- ✅ Real-time data management
- ✅ ML prediction simulation

---

## 🚀 Quick Start (Both Servers)

### Option 1: Run Both Servers Separately

**Terminal 1 - Frontend:**
```bash
cd rockfall
python -m http.server 8000
```
Access: http://localhost:8000

**Terminal 2 - Backend:**
```bash
cd rockfall
npm install
npm start
```
Access: http://localhost:3000

### Option 2: Run Backend Only (Serves Both)

```bash
cd rockfall
npm install
npm start
```

The backend serves both:
- Frontend: http://localhost:3000
- API: http://localhost:3000/api/*

---

## 🔌 Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    USER BROWSER                         │
└────────────────────┬────────────────────────────────────┘
                     │
        ┌────────────┴────────────┐
        │                         │
        ▼                         ▼
┌───────────────┐         ┌──────────────┐
│   FRONTEND    │         │   BACKEND    │
│  (Port 8000)  │◄───────►│  (Port 3000) │
│               │   API   │              │
│ - HTML/CSS/JS │  Calls  │ - Express.js │
│ - Charts      │         │ - REST API   │
│ - Maps        │         │ - File Upload│
└───────────────┘         └──────────────┘
                                 │
                                 ▼
                          ┌──────────────┐
                          │   DATABASE   │
                          │  (Future)    │
                          └──────────────┘
```

---

## 📁 Complete File Structure

```
rockfall/
├── 📄 Frontend Files
│   ├── index.html              # Home page
│   ├── dashboard.html          # Dashboard
│   ├── risk-map.html          # Risk map
│   ├── alerts.html            # Alerts
│   ├── data-sources.html      # Data sources
│   ├── analytics.html         # Analytics
│   ├── styles.css             # Shared styles
│   ├── dashboard.js           # Dashboard logic
│   ├── risk-map.js            # Map logic
│   ├── alerts.js              # Alerts logic
│   ├── data-sources.js        # Upload logic
│   └── analytics.js           # Analytics logic
│
├── 🔧 Backend Files
│   ├── server.js              # Express server
│   ├── package.json           # Dependencies
│   ├── .env                   # Environment config
│   └── .env.example           # Config template
│
├── 📚 Documentation
│   ├── README.md              # Project overview
│   ├── API_DOCUMENTATION.md   # API reference
│   ├── BACKEND_SETUP.md       # Backend setup
│   ├── FULLSTACK_GUIDE.md     # This file
│   ├── PAGES_GUIDE.md         # Frontend pages
│   ├── DEPLOYMENT_SUMMARY.md  # Deployment info
│   └── [other docs]
│
└── 📁 Directories
    └── uploads/               # Uploaded files
```

---

## 🔗 API Integration

### Current Setup (Static Data)

Frontend uses hardcoded data:
```javascript
const riskZones = [
    { lat: 40.7128, lng: -74.0060, risk: 'high', ... }
];
```

### With Backend (Dynamic Data)

Frontend fetches from API:
```javascript
fetch('http://localhost:3000/api/zones')
    .then(response => response.json())
    .then(zones => {
        // Use real-time data
    });
```

---

## 🔄 Connecting Frontend to Backend

### Step 1: Update API Base URL

Create `config.js`:
```javascript
const API_BASE_URL = 'http://localhost:3000/api';
```

### Step 2: Update dashboard.js

```javascript
// OLD: Static data
function updateStats() {
    document.getElementById('high-risk-count').textContent = 3;
}

// NEW: API call
async function updateStats() {
    const response = await fetch(`${API_BASE_URL}/stats`);
    const stats = await response.json();
    document.getElementById('high-risk-count').textContent = stats.highRisk;
}
```

### Step 3: Update risk-map.js

```javascript
// OLD: Static zones
const riskZones = [...];

// NEW: Fetch from API
async function loadZones() {
    const response = await fetch(`${API_BASE_URL}/zones`);
    const riskZones = await response.json();
    plotRiskZones(riskZones);
}
```

### Step 4: Update alerts.js

```javascript
// OLD: Static alerts
const alerts = [...];

// NEW: Fetch from API
async function loadAlerts() {
    const response = await fetch(`${API_BASE_URL}/alerts`);
    const alerts = await response.json();
    displayAlerts(alerts);
}
```

### Step 5: Update data-sources.js

```javascript
// NEW: File upload to API
async function uploadData(type) {
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);
    
    const response = await fetch(`${API_BASE_URL}/upload/${type}`, {
        method: 'POST',
        body: formData
    });
    
    const result = await response.json();
    console.log('Upload successful:', result);
}
```

---

## 📊 API Endpoints Reference

### Statistics
```javascript
GET /api/stats
// Returns: { highRisk: 3, mediumRisk: 7, lowRisk: 15, activeSensors: 42 }
```

### Risk Zones
```javascript
GET /api/zones
GET /api/zones?risk=high
GET /api/zones/:id
PUT /api/zones/:id
```

### Alerts
```javascript
GET /api/alerts
GET /api/alerts?type=critical
POST /api/alerts
PUT /api/alerts/:id/acknowledge
DELETE /api/alerts/:id
```

### File Uploads
```javascript
POST /api/upload/dem
POST /api/upload/drone
POST /api/upload/sensor
GET /api/uploads
```

### Analytics
```javascript
GET /api/model/performance
GET /api/analytics/accuracy
GET /api/analytics/distribution
POST /api/predict
```

### Weather & Sensors
```javascript
GET /api/weather
GET /api/sensors
```

See **API_DOCUMENTATION.md** for complete details.

---

## 🧪 Testing the Integration

### 1. Start Both Servers

```bash
# Terminal 1
cd rockfall
npm start

# Terminal 2
cd rockfall
python -m http.server 8000
```

### 2. Test API Directly

```bash
curl http://localhost:3000/api/health
curl http://localhost:3000/api/stats
curl http://localhost:3000/api/zones
```

### 3. Test Frontend

Open http://localhost:8000 and check browser console for API calls.

### 4. Test File Upload

1. Go to Data Sources page
2. Select a file
3. Click upload
4. Check backend console for upload confirmation

---

## 🔐 Environment Configuration

### Development (.env)
```env
PORT=3000
NODE_ENV=development
```

### Production (.env)
```env
PORT=80
NODE_ENV=production
DB_HOST=your_database_host
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=your_email@gmail.com
```

---

## 📱 CORS Configuration

### Allow All Origins (Development)
```javascript
app.use(cors());
```

### Restrict Origins (Production)
```javascript
app.use(cors({
    origin: 'https://yourdomain.com',
    credentials: true
}));
```

---

## 🚀 Deployment Options

### Option 1: Deploy Separately

**Frontend:** Netlify, Vercel, GitHub Pages
**Backend:** Heroku, AWS, DigitalOcean

### Option 2: Deploy Together

**Full Stack:** Heroku, AWS Elastic Beanstalk, DigitalOcean

### Option 3: Containerize

```dockerfile
# Dockerfile
FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t rockfall-api .
docker run -p 3000:3000 rockfall-api
```

---

## 📈 Performance Optimization

### Frontend
- Minify CSS/JS
- Optimize images
- Enable caching
- Use CDN for libraries

### Backend
- Enable compression
- Add caching layer (Redis)
- Use database connection pooling
- Implement rate limiting

---

## 🔒 Security Best Practices

### Frontend
- Validate user input
- Sanitize data before display
- Use HTTPS in production
- Implement CSP headers

### Backend
- Use environment variables
- Implement authentication (JWT)
- Add rate limiting
- Validate file uploads
- Use helmet.js for security headers

---

## 🐛 Common Issues & Solutions

### CORS Errors
```javascript
// Add to server.js
app.use(cors({
    origin: 'http://localhost:8000',
    credentials: true
}));
```

### Port Already in Use
```bash
# Kill process on port 3000
lsof -i :3000
kill -9 <PID>
```

### Module Not Found
```bash
rm -rf node_modules
npm install
```

### File Upload Fails
```bash
mkdir -p uploads
chmod 755 uploads
```

---

## 📊 Monitoring & Logging

### Add Logging
```bash
npm install winston
```

```javascript
const winston = require('winston');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});
```

### Add Monitoring
```bash
npm install express-status-monitor
```

```javascript
app.use(require('express-status-monitor')());
// Access: http://localhost:3000/status
```

---

## 🧪 Testing Strategy

### Frontend Testing
- Manual testing in browser
- Check console for errors
- Test responsive design
- Verify API calls

### Backend Testing
- Unit tests with Jest
- Integration tests with Supertest
- API testing with Postman
- Load testing with Artillery

---

## 📚 Next Steps

### Immediate
1. ✅ Install Node.js dependencies
2. ✅ Start backend server
3. ✅ Test API endpoints
4. ✅ Connect frontend to backend

### Short-term
- [ ] Add database (PostgreSQL/MongoDB)
- [ ] Implement authentication
- [ ] Add real ML model
- [ ] Connect to actual sensors
- [ ] Implement email/SMS alerts

### Long-term
- [ ] Deploy to production
- [ ] Add user management
- [ ] Implement WebSocket for real-time updates
- [ ] Create mobile app
- [ ] Add advanced analytics

---

## 📞 Support & Resources

### Documentation
- **API_DOCUMENTATION.md** - Complete API reference
- **BACKEND_SETUP.md** - Backend installation
- **PAGES_GUIDE.md** - Frontend pages guide
- **DEPLOYMENT_SUMMARY.md** - Deployment info

### External Resources
- [Express.js Docs](https://expressjs.com/)
- [Node.js Docs](https://nodejs.org/docs/)
- [REST API Best Practices](https://restfulapi.net/)

---

## ✅ Checklist

### Backend Setup
- [ ] Node.js installed
- [ ] Dependencies installed (`npm install`)
- [ ] .env file configured
- [ ] uploads directory created
- [ ] Server running on port 3000

### Frontend Setup
- [ ] Python HTTP server running on port 8000
- [ ] All pages accessible
- [ ] JavaScript files loaded
- [ ] Charts rendering

### Integration
- [ ] API calls working
- [ ] CORS configured
- [ ] File uploads functional
- [ ] Real-time data displaying

---

## 🎉 Success!

You now have a complete full-stack Rockfall Prediction System!

**Frontend:** http://localhost:8000
**Backend API:** http://localhost:3000/api
**API Docs:** API_DOCUMENTATION.md

**Ready to build something amazing! 🚀**
