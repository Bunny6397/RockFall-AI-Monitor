const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// In-memory data storage (replace with database in production)
let riskZones = [
    { id: 1, lat: 23.2599, lng: 77.4126, risk: 'high', probability: 85, zone: 'Zone A-1', displacement: 15, strain: 0.0052, pressure: 450, location: 'Bhopal Region' },
    { id: 2, lat: 23.2650, lng: 77.4200, risk: 'high', probability: 78, zone: 'Zone A-2', displacement: 12, strain: 0.0048, pressure: 420, location: 'Bhopal Region' },
    { id: 3, lat: 23.2700, lng: 77.4300, risk: 'high', probability: 72, zone: 'Zone B-1', displacement: 10, strain: 0.0041, pressure: 380, location: 'Bhopal Region' },
    { id: 4, lat: 23.2550, lng: 77.4050, risk: 'medium', probability: 55, zone: 'Zone C-1', displacement: 6, strain: 0.0028, pressure: 280, location: 'Bhopal Region' },
    { id: 5, lat: 23.2500, lng: 77.4000, risk: 'medium', probability: 48, zone: 'Zone C-2', displacement: 5, strain: 0.0024, pressure: 250, location: 'Bhopal Region' },
    { id: 6, lat: 23.2450, lng: 77.3950, risk: 'medium', probability: 52, zone: 'Zone D-1', displacement: 7, strain: 0.0030, pressure: 290, location: 'Bhopal Region' },
    { id: 7, lat: 23.2400, lng: 77.3900, risk: 'low', probability: 25, zone: 'Zone E-1', displacement: 2, strain: 0.0012, pressure: 150, location: 'Bhopal Region' },
    { id: 8, lat: 23.2350, lng: 77.3850, risk: 'low', probability: 18, zone: 'Zone E-2', displacement: 1, strain: 0.0008, pressure: 120, location: 'Bhopal Region' }
];

let alerts = [
    { id: 1, type: 'critical', zone: 'Zone A-1', message: 'Critical displacement detected: 15mm in last 6 hours', time: new Date(Date.now() - 5 * 60000), action: 'Evacuate personnel immediately', acknowledged: false },
    { id: 2, type: 'critical', zone: 'Zone A-2', message: 'Pore pressure exceeding threshold: 450 kPa', time: new Date(Date.now() - 12 * 60000), action: 'Deploy emergency drainage', acknowledged: false },
    { id: 3, type: 'warning', zone: 'Zone C-1', message: 'Increased strain rate detected', time: new Date(Date.now() - 60 * 60000), action: 'Increase monitoring frequency', acknowledged: false },
    { id: 4, type: 'info', zone: 'Zone D-1', message: 'Heavy rainfall forecast for next 24 hours', time: new Date(Date.now() - 120 * 60000), action: 'Review drainage systems', acknowledged: false }
];

let sensorData = {
    displacement: [],
    strain: [],
    pressure: [],
    weather: { temperature: 18, rainfall: 5, windSpeed: 12, seismicActivity: 'Normal' }
};

let uploadHistory = [];

// ==================== API ROUTES ====================

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running', timestamp: new Date() });
});

// Get all risk zones
app.get('/api/zones', (req, res) => {
    const filter = req.query.risk;
    if (filter && filter !== 'all') {
        const filtered = riskZones.filter(zone => zone.risk === filter);
        res.json(filtered);
    } else {
        res.json(riskZones);
    }
});

// Get specific zone
app.get('/api/zones/:id', (req, res) => {
    const zone = riskZones.find(z => z.id === parseInt(req.params.id));
    if (zone) {
        res.json(zone);
    } else {
        res.status(404).json({ error: 'Zone not found' });
    }
});

// Update zone data
app.put('/api/zones/:id', (req, res) => {
    const zoneIndex = riskZones.findIndex(z => z.id === parseInt(req.params.id));
    if (zoneIndex !== -1) {
        riskZones[zoneIndex] = { ...riskZones[zoneIndex], ...req.body };
        res.json(riskZones[zoneIndex]);
    } else {
        res.status(404).json({ error: 'Zone not found' });
    }
});

// Get statistics
app.get('/api/stats', (req, res) => {
    const stats = {
        highRisk: riskZones.filter(z => z.risk === 'high').length,
        mediumRisk: riskZones.filter(z => z.risk === 'medium').length,
        lowRisk: riskZones.filter(z => z.risk === 'low').length,
        activeSensors: 42 + Math.floor(Math.random() * 3),
        timestamp: new Date()
    };
    res.json(stats);
});

// Get all alerts
app.get('/api/alerts', (req, res) => {
    const filter = req.query.type;
    if (filter && filter !== 'all') {
        const filtered = alerts.filter(alert => alert.type === filter);
        res.json(filtered);
    } else {
        res.json(alerts);
    }
});

// Create new alert
app.post('/api/alerts', (req, res) => {
    const newAlert = {
        id: alerts.length + 1,
        ...req.body,
        time: new Date(),
        acknowledged: false
    };
    alerts.push(newAlert);
    res.status(201).json(newAlert);
});

// Acknowledge alert
app.put('/api/alerts/:id/acknowledge', (req, res) => {
    const alertIndex = alerts.findIndex(a => a.id === parseInt(req.params.id));
    if (alertIndex !== -1) {
        alerts[alertIndex].acknowledged = true;
        alerts[alertIndex].acknowledgedAt = new Date();
        alerts[alertIndex].acknowledgedBy = req.body.user || 'Current User';
        res.json(alerts[alertIndex]);
    } else {
        res.status(404).json({ error: 'Alert not found' });
    }
});

// Delete alert
app.delete('/api/alerts/:id', (req, res) => {
    const alertIndex = alerts.findIndex(a => a.id === parseInt(req.params.id));
    if (alertIndex !== -1) {
        alerts.splice(alertIndex, 1);
        res.json({ message: 'Alert deleted successfully' });
    } else {
        res.status(404).json({ error: 'Alert not found' });
    }
});

// Upload DEM data
app.post('/api/upload/dem', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    
    const uploadRecord = {
        id: uploadHistory.length + 1,
        type: 'DEM',
        filename: req.file.originalname,
        size: req.file.size,
        path: req.file.path,
        uploadedAt: new Date(),
        status: 'Processing'
    };
    
    uploadHistory.push(uploadRecord);
    
    // Simulate processing
    setTimeout(() => {
        uploadRecord.status = 'Processed';
    }, 3000);
    
    res.json(uploadRecord);
});

// Upload drone imagery
app.post('/api/upload/drone', upload.array('files', 10), (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ error: 'No files uploaded' });
    }
    
    const uploadRecords = req.files.map((file, index) => ({
        id: uploadHistory.length + index + 1,
        type: 'Drone',
        filename: file.originalname,
        size: file.size,
        path: file.path,
        uploadedAt: new Date(),
        status: 'Processing'
    }));
    
    uploadHistory.push(...uploadRecords);
    
    // Simulate processing
    setTimeout(() => {
        uploadRecords.forEach(record => record.status = 'Processed');
    }, 5000);
    
    res.json(uploadRecords);
});

// Upload sensor data
app.post('/api/upload/sensor', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    
    const uploadRecord = {
        id: uploadHistory.length + 1,
        type: 'Sensor',
        filename: req.file.originalname,
        size: req.file.size,
        path: req.file.path,
        uploadedAt: new Date(),
        status: 'Processing'
    };
    
    uploadHistory.push(uploadRecord);
    
    // Simulate processing and updating sensor data
    setTimeout(() => {
        uploadRecord.status = 'Processed';
        // Add random sensor readings
        sensorData.displacement.push({ value: Math.random() * 20, timestamp: new Date() });
        sensorData.strain.push({ value: Math.random() * 0.01, timestamp: new Date() });
        sensorData.pressure.push({ value: 200 + Math.random() * 300, timestamp: new Date() });
    }, 3000);
    
    res.json(uploadRecord);
});

// Get upload history
app.get('/api/uploads', (req, res) => {
    res.json(uploadHistory);
});

// Get weather data
app.get('/api/weather', (req, res) => {
    // Simulate live weather data
    const weather = {
        temperature: 15 + Math.random() * 10,
        rainfall: Math.random() * 10,
        windSpeed: 5 + Math.random() * 15,
        seismicActivity: Math.random() > 0.9 ? 'Elevated' : 'Normal',
        lastUpdated: new Date()
    };
    sensorData.weather = weather;
    res.json(weather);
});

// Get sensor data
app.get('/api/sensors', (req, res) => {
    res.json(sensorData);
});

// Get ML model performance
app.get('/api/model/performance', (req, res) => {
    const performance = {
        accuracy: 94.2,
        precision: 91.8,
        recall: 89.5,
        f1Score: 90.6,
        lastTraining: new Date(Date.now() - 2 * 60 * 60000),
        trainingSamples: 15420,
        modelVersion: '1.2.3'
    };
    res.json(performance);
});

// Get analytics data
app.get('/api/analytics/accuracy', (req, res) => {
    const accuracyData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
        data: [89.5, 91.2, 92.8, 93.5, 94.0, 94.2]
    };
    res.json(accuracyData);
});

app.get('/api/analytics/distribution', (req, res) => {
    const distribution = {
        high: riskZones.filter(z => z.risk === 'high').length,
        medium: riskZones.filter(z => z.risk === 'medium').length,
        low: riskZones.filter(z => z.risk === 'low').length
    };
    res.json(distribution);
});

// Send test alert (email/SMS simulation)
app.post('/api/alerts/test', (req, res) => {
    const { email, phone } = req.body;
    
    // Simulate sending notifications
    const result = {
        success: true,
        message: 'Test alerts sent successfully',
        email: email || 'safety@gmail.com',
        phone: phone || '+91-98765-43210',
        timestamp: new Date()
    };
    
    res.json(result);
});

// Save notification settings
app.post('/api/settings/notifications', (req, res) => {
    const settings = {
        email: req.body.email,
        phone: req.body.phone,
        emailEnabled: req.body.emailEnabled,
        smsEnabled: req.body.smsEnabled,
        threshold: req.body.threshold,
        savedAt: new Date()
    };
    
    res.json({ success: true, settings });
});

// Predict risk for a zone (ML simulation)
app.post('/api/predict', (req, res) => {
    const { displacement, strain, pressure, rainfall } = req.body;
    
    // Simple risk calculation (replace with actual ML model)
    let riskScore = 0;
    riskScore += displacement * 3;
    riskScore += strain * 5000;
    riskScore += (pressure - 200) * 0.1;
    riskScore += rainfall * 2;
    
    let riskLevel = 'low';
    if (riskScore > 70) riskLevel = 'high';
    else if (riskScore > 40) riskLevel = 'medium';
    
    const prediction = {
        riskLevel,
        probability: Math.min(Math.round(riskScore), 100),
        confidence: 92,
        factors: {
            displacement: displacement > 10 ? 'High' : 'Normal',
            strain: strain > 0.004 ? 'High' : 'Normal',
            pressure: pressure > 400 ? 'High' : 'Normal',
            rainfall: rainfall > 5 ? 'High' : 'Normal'
        },
        recommendation: riskLevel === 'high' ? 'Evacuate personnel' : 'Continue monitoring',
        timestamp: new Date()
    };
    
    res.json(prediction);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!', message: err.message });
});

// Start server
app.listen(PORT, () => {
    console.log(`
╔═══════════════════════════════════════════════════════════╗
║     🏔️  ROCKFALL AI MONITOR - BACKEND SERVER            ║
╚═══════════════════════════════════════════════════════════╝

✅ Server is running on port ${PORT}

📡 API Endpoints:
   - Health Check:      http://localhost:${PORT}/api/health
   - Risk Zones:        http://localhost:${PORT}/api/zones
   - Alerts:            http://localhost:${PORT}/api/alerts
   - Statistics:        http://localhost:${PORT}/api/stats
   - Weather:           http://localhost:${PORT}/api/weather
   - ML Performance:    http://localhost:${PORT}/api/model/performance
   - Analytics:         http://localhost:${PORT}/api/analytics/*

🌐 Frontend:            http://localhost:${PORT}

📚 API Documentation:   http://localhost:${PORT}/api/docs (coming soon)

Press Ctrl+C to stop the server
    `);
});
