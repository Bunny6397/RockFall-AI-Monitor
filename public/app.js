// Initialize map
let map;
let markers = [];
let showSensors = true;

// Sample risk zones data
const riskZones = [
    { lat: 40.7128, lng: -74.0060, risk: 'high', probability: 85, zone: 'Zone A-1' },
    { lat: 40.7138, lng: -74.0070, risk: 'high', probability: 78, zone: 'Zone A-2' },
    { lat: 40.7148, lng: -74.0080, risk: 'high', probability: 72, zone: 'Zone B-1' },
    { lat: 40.7118, lng: -74.0050, risk: 'medium', probability: 55, zone: 'Zone C-1' },
    { lat: 40.7108, lng: -74.0040, risk: 'medium', probability: 48, zone: 'Zone C-2' },
    { lat: 40.7098, lng: -74.0030, risk: 'medium', probability: 52, zone: 'Zone D-1' },
    { lat: 40.7088, lng: -74.0020, risk: 'low', probability: 25, zone: 'Zone E-1' },
    { lat: 40.7078, lng: -74.0010, risk: 'low', probability: 18, zone: 'Zone E-2' }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initMap();
    initChart();
    loadAlerts();
    updateStats();
    
    // Simulate real-time updates
    setInterval(updateStats, 5000);
    setInterval(loadAlerts, 10000);
});

// Initialize Leaflet map
function initMap() {
    map = L.map('map').setView([40.7128, -74.0060], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    plotRiskZones();
}

// Plot risk zones on map
function plotRiskZones(filter = 'all') {
    // Clear existing markers
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];
    
    riskZones.forEach(zone => {
        if (filter !== 'all' && zone.risk !== filter) return;
        
        const color = zone.risk === 'high' ? '#f5576c' : 
                     zone.risk === 'medium' ? '#fcb69f' : '#a8edea';
        
        const circle = L.circle([zone.lat, zone.lng], {
            color: color,
            fillColor: color,
            fillOpacity: 0.5,
            radius: 200
        }).addTo(map);
        
        circle.bindPopup(`
            <strong>${zone.zone}</strong><br>
            Risk Level: ${zone.risk.toUpperCase()}<br>
            Probability: ${zone.probability}%<br>
            <button onclick="viewDetails('${zone.zone}')">View Details</button>
        `);
        
        markers.push(circle);
    });
}

// Update map filter
function updateMap(filter) {
    plotRiskZones(filter);
}

// Toggle sensor display
function toggleSensors() {
    showSensors = !showSensors;
    alert(`Sensors ${showSensors ? 'shown' : 'hidden'}`);
}

// Initialize Chart.js
function initChart() {
    const ctx = document.getElementById('riskChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
            datasets: [{
                label: 'High Risk Zones',
                data: [2, 3, 2, 4, 3, 3, 3],
                borderColor: '#f5576c',
                backgroundColor: 'rgba(245, 87, 108, 0.1)',
                tension: 0.4
            }, {
                label: 'Medium Risk Zones',
                data: [5, 6, 7, 6, 7, 8, 7],
                borderColor: '#fcb69f',
                backgroundColor: 'rgba(252, 182, 159, 0.1)',
                tension: 0.4
            }, {
                label: 'Low Risk Zones',
                data: [18, 16, 16, 15, 15, 14, 15],
                borderColor: '#a8edea',
                backgroundColor: 'rgba(168, 237, 234, 0.1)',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Load alerts
function loadAlerts() {
    const alertsContainer = document.getElementById('alerts-container');
    const alerts = [
        {
            type: 'critical',
            zone: 'Zone A-1',
            message: 'Critical displacement detected: 15mm in last 6 hours',
            time: '5 min ago',
            action: 'Evacuate personnel immediately'
        },
        {
            type: 'critical',
            zone: 'Zone A-2',
            message: 'Pore pressure exceeding threshold: 450 kPa',
            time: '12 min ago',
            action: 'Deploy emergency drainage'
        },
        {
            type: 'warning',
            zone: 'Zone C-1',
            message: 'Increased strain rate detected',
            time: '1 hour ago',
            action: 'Increase monitoring frequency'
        },
        {
            type: 'info',
            zone: 'Zone D-1',
            message: 'Heavy rainfall forecast for next 24 hours',
            time: '2 hours ago',
            action: 'Review drainage systems'
        }
    ];
    
    alertsContainer.innerHTML = alerts.map(alert => `
        <div class="alert-item ${alert.type}">
            <h4>${alert.zone} - ${alert.type.toUpperCase()}</h4>
            <p><strong>${alert.message}</strong></p>
            <p>Time: ${alert.time}</p>
            <p>Recommended Action: ${alert.action}</p>
            <button class="btn" onclick="acknowledgeAlert('${alert.zone}')">Acknowledge</button>
        </div>
    `).join('');
}

// Update statistics
function updateStats() {
    const highRisk = riskZones.filter(z => z.risk === 'high').length;
    const mediumRisk = riskZones.filter(z => z.risk === 'medium').length;
    const lowRisk = riskZones.filter(z => z.risk === 'low').length;
    
    document.getElementById('high-risk-count').textContent = highRisk;
    document.getElementById('medium-risk-count').textContent = mediumRisk;
    document.getElementById('low-risk-count').textContent = lowRisk;
    document.getElementById('sensor-count').textContent = 42 + Math.floor(Math.random() * 3);
}

// Test alert system
function testAlert() {
    alert('🚨 TEST ALERT\n\nSMS and Email notifications would be sent to:\n- Mine Manager: +1-XXX-XXX-XXXX\n- Safety Officer: safety@mine.com\n- Operations Team: ops@mine.com\n\nAlert system is functioning correctly.');
}

// Export alerts
function exportAlerts() {
    alert('Generating PDF report with all active alerts and risk assessments...\n\nReport will be downloaded shortly.');
}

// Upload data handlers
function uploadData(type) {
    const fileInput = document.getElementById(`${type}-upload`);
    if (fileInput.files.length === 0) {
        alert('Please select a file first');
        return;
    }
    
    alert(`Uploading ${type} data...\n\nFile: ${fileInput.files[0].name}\nProcessing with ML model...\n\nThis would trigger:\n1. Data validation\n2. Feature extraction\n3. Model prediction\n4. Risk map update`);
}

// Fetch weather data
function fetchWeather() {
    alert('Fetching live environmental data...\n\n- Temperature: 18°C\n- Rainfall: 5mm (last 24h)\n- Wind Speed: 12 km/h\n- Seismic Activity: Normal\n\nData integrated into prediction model.');
    document.getElementById('weather-status').textContent = 'Last updated: Just now';
}

// View zone details
function viewDetails(zone) {
    const zoneData = riskZones.find(z => z.zone === zone);
    alert(`Detailed Analysis - ${zone}\n\nRisk Level: ${zoneData.risk.toUpperCase()}\nProbability: ${zoneData.probability}%\n\nSensor Readings:\n- Displacement: 12mm\n- Strain: 0.0045\n- Pore Pressure: 380 kPa\n\nML Model Confidence: 92%\nLast Updated: 2 min ago`);
}

// Acknowledge alert
function acknowledgeAlert(zone) {
    alert(`Alert for ${zone} has been acknowledged.\n\nLogged by: Current User\nTime: ${new Date().toLocaleString()}\n\nNotification sent to operations team.`);
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
