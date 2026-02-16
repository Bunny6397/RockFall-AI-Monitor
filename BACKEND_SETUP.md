# 🚀 Backend Setup Guide

## Prerequisites

Before setting up the backend, ensure you have:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (optional)

---

## 📦 Installation Steps

### Step 1: Navigate to Project Directory

```bash
cd rockfall
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install:
- `express` - Web framework
- `cors` - Cross-origin resource sharing
- `body-parser` - Request body parsing
- `multer` - File upload handling
- `nodemailer` - Email sending (optional)
- `dotenv` - Environment variables
- `nodemon` - Development auto-reload (dev dependency)

### Step 3: Create Environment File

```bash
cp .env.example .env
```

Edit `.env` file with your configuration:
```env
PORT=3000
NODE_ENV=development
```

### Step 4: Create Uploads Directory

```bash
mkdir uploads
```

---

## 🎯 Running the Backend

### Development Mode (with auto-reload)

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

### Expected Output

```
╔═══════════════════════════════════════════════════════════╗
║     🏔️  ROCKFALL AI MONITOR - BACKEND SERVER            ║
╚═══════════════════════════════════════════════════════════╝

✅ Server is running on port 3000

📡 API Endpoints:
   - Health Check:      http://localhost:3000/api/health
   - Risk Zones:        http://localhost:3000/api/zones
   - Alerts:            http://localhost:3000/api/alerts
   - Statistics:        http://localhost:3000/api/stats
   - Weather:           http://localhost:3000/api/weather
   - ML Performance:    http://localhost:3000/api/model/performance
   - Analytics:         http://localhost:3000/api/analytics/*

🌐 Frontend:            http://localhost:3000

📚 API Documentation:   http://localhost:3000/api/docs

Press Ctrl+C to stop the server
```

---

## 🧪 Testing the API

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
```

### Using Browser

Open these URLs in your browser:
- http://localhost:3000/api/health
- http://localhost:3000/api/stats
- http://localhost:3000/api/zones
- http://localhost:3000/api/alerts

### Using Postman

1. Download [Postman](https://www.postman.com/downloads/)
2. Import the API collection (see API_DOCUMENTATION.md)
3. Test all endpoints

---

## 📁 Project Structure

```
rockfall/
├── server.js              # Main server file
├── package.json           # Dependencies
├── .env                   # Environment variables
├── .env.example           # Environment template
├── uploads/               # Uploaded files directory
├── API_DOCUMENTATION.md   # API docs
├── BACKEND_SETUP.md       # This file
└── [frontend files]       # HTML, CSS, JS files
```

---

## 🔌 API Endpoints Summary

### Core Endpoints
- `GET /api/health` - Health check
- `GET /api/stats` - Real-time statistics
- `GET /api/zones` - Risk zones data
- `GET /api/alerts` - Active alerts

### Data Management
- `POST /api/upload/dem` - Upload DEM data
- `POST /api/upload/drone` - Upload drone imagery
- `POST /api/upload/sensor` - Upload sensor data
- `GET /api/uploads` - Upload history

### Analytics
- `GET /api/model/performance` - ML model metrics
- `GET /api/analytics/accuracy` - Accuracy trends
- `GET /api/analytics/distribution` - Risk distribution
- `POST /api/predict` - Risk prediction

### Alerts & Notifications
- `POST /api/alerts` - Create alert
- `PUT /api/alerts/:id/acknowledge` - Acknowledge alert
- `POST /api/alerts/test` - Test notifications
- `POST /api/settings/notifications` - Save settings

See **API_DOCUMENTATION.md** for complete details.

---

## 🔧 Configuration

### Port Configuration

Change port in `.env`:
```env
PORT=3000
```

Or set environment variable:
```bash
PORT=8080 npm start
```

### CORS Configuration

Edit `server.js` to restrict origins:
```javascript
app.use(cors({
    origin: 'http://yourdomain.com'
}));
```

### File Upload Limits

Edit `server.js`:
```javascript
const upload = multer({ 
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 } // 10MB
});
```

---

## 🔄 Connecting Frontend to Backend

### Update Frontend API Calls

In your JavaScript files, update API URLs:

```javascript
// Before (static data)
const zones = [...];

// After (API call)
fetch('http://localhost:3000/api/zones')
    .then(response => response.json())
    .then(zones => {
        // Use zones data
    });
```

### Example: Update dashboard.js

```javascript
async function updateStats() {
    try {
        const response = await fetch('http://localhost:3000/api/stats');
        const stats = await response.json();
        
        document.getElementById('high-risk-count').textContent = stats.highRisk;
        document.getElementById('medium-risk-count').textContent = stats.mediumRisk;
        document.getElementById('low-risk-count').textContent = stats.lowRisk;
        document.getElementById('sensor-count').textContent = stats.activeSensors;
    } catch (error) {
        console.error('Error fetching stats:', error);
    }
}
```

---

## 📊 Database Integration (Future)

Currently using in-memory storage. To add database:

### PostgreSQL Setup

1. Install PostgreSQL
2. Create database:
```sql
CREATE DATABASE rockfall_db;
```

3. Install pg package:
```bash
npm install pg
```

4. Update server.js with database connection

### MongoDB Setup

1. Install MongoDB
2. Install mongoose:
```bash
npm install mongoose
```

3. Connect in server.js:
```javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rockfall_db');
```

---

## 🔐 Security Enhancements

### Add Authentication

```bash
npm install jsonwebtoken bcrypt
```

### Add Rate Limiting

```bash
npm install express-rate-limit
```

### Add Helmet for Security Headers

```bash
npm install helmet
```

---

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Find process using port 3000
lsof -i :3000

# Kill the process
kill -9 <PID>

# Or use different port
PORT=3001 npm start
```

### Module Not Found

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### CORS Errors

Add to server.js:
```javascript
app.use(cors({
    origin: '*',
    credentials: true
}));
```

### File Upload Errors

Check uploads directory exists:
```bash
mkdir -p uploads
chmod 755 uploads
```

---

## 📈 Performance Optimization

### Enable Compression

```bash
npm install compression
```

```javascript
const compression = require('compression');
app.use(compression());
```

### Add Caching

```bash
npm install node-cache
```

### Use PM2 for Production

```bash
npm install -g pm2
pm2 start server.js --name rockfall-api
pm2 save
pm2 startup
```

---

## 🧪 Testing

### Install Testing Framework

```bash
npm install --save-dev jest supertest
```

### Create Test File

```javascript
// server.test.js
const request = require('supertest');
const app = require('./server');

test('GET /api/health', async () => {
    const response = await request(app).get('/api/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('OK');
});
```

### Run Tests

```bash
npm test
```

---

## 📝 Development Workflow

1. **Start backend server:**
   ```bash
   npm run dev
   ```

2. **Test API endpoints:**
   - Use browser or Postman
   - Check console for logs

3. **Update frontend:**
   - Modify JavaScript files
   - Connect to API endpoints

4. **Test integration:**
   - Open frontend in browser
   - Verify data loads from API

---

## 🚀 Deployment

### Deploy to Heroku

```bash
heroku create rockfall-api
git push heroku main
heroku open
```

### Deploy to AWS

1. Create EC2 instance
2. Install Node.js
3. Clone repository
4. Run with PM2

### Deploy to DigitalOcean

1. Create Droplet
2. Setup Node.js environment
3. Configure nginx reverse proxy
4. Use PM2 for process management

---

## 📞 Support

For issues or questions:
- Check API_DOCUMENTATION.md
- Review server logs
- Test with cURL or Postman
- Check CORS and network settings

---

**Backend Version:** 1.0.0
**Node.js Required:** v14+
**Status:** Ready for Development
