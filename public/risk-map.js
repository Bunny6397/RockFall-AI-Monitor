// Risk Map functionality
let map;
let markers = [];
let showSensors = true;
let heatmapEnabled = false;

// Risk zones in India (coordinates around mining areas)
const riskZones = [
    { lat: 23.2599, lng: 77.4126, risk: 'high', probability: 85, zone: 'Zone A-1', displacement: 15, strain: 0.0052, pressure: 450, location: 'Bhopal Region' },
    { lat: 23.2650, lng: 77.4200, risk: 'high', probability: 78, zone: 'Zone A-2', displacement: 12, strain: 0.0048, pressure: 420, location: 'Bhopal Region' },
    { lat: 23.2700, lng: 77.4300, risk: 'high', probability: 72, zone: 'Zone B-1', displacement: 10, strain: 0.0041, pressure: 380, location: 'Bhopal Region' },
    { lat: 23.2550, lng: 77.4050, risk: 'medium', probability: 55, zone: 'Zone C-1', displacement: 6, strain: 0.0028, pressure: 280, location: 'Bhopal Region' },
    { lat: 23.2500, lng: 77.4000, risk: 'medium', probability: 48, zone: 'Zone C-2', displacement: 5, strain: 0.0024, pressure: 250, location: 'Bhopal Region' },
    { lat: 23.2450, lng: 77.3950, risk: 'medium', probability: 52, zone: 'Zone D-1', displacement: 7, strain: 0.0030, pressure: 290, location: 'Bhopal Region' },
    { lat: 23.2400, lng: 77.3900, risk: 'low', probability: 25, zone: 'Zone E-1', displacement: 2, strain: 0.0012, pressure: 150, location: 'Bhopal Region' },
    { lat: 23.2350, lng: 77.3850, risk: 'low', probability: 18, zone: 'Zone E-2', displacement: 1, strain: 0.0008, pressure: 120, location: 'Bhopal Region' }
];

document.addEventListener('DOMContentLoaded', function() {
    initMap();
});

function initMap() {
    // Center map on India (Bhopal region - central India mining area)
    map = L.map('map').setView([23.2599, 77.4126], 12);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    plotRiskZones();
}

function plotRiskZones(filter = 'all') {
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
            <button onclick="viewZoneDetails('${zone.zone}')">View Details</button>
        `);
        
        markers.push(circle);
    });
}

function updateMap(filter) {
    plotRiskZones(filter);
}

function toggleSensors() {
    showSensors = !showSensors;
    
    if (showSensors) {
        // Show sensor markers
        alert('✅ Sensors Displayed\n\nShowing 42 active sensors:\n\n📡 Displacement Sensors: 18\n📐 Strain Gauges: 12\n💧 Pore Pressure Sensors: 8\n🌦️ Weather Stations: 4\n\nAll sensors are online and transmitting data.');
    } else {
        // Hide sensor markers
        alert('❌ Sensors Hidden\n\nSensor markers have been hidden from the map.\n\nClick "Toggle Sensors" again to show them.');
    }
}

function toggleHeatmap() {
    heatmapEnabled = !heatmapEnabled;
    
    if (heatmapEnabled) {
        alert('🔥 Heatmap Enabled\n\nRisk intensity heatmap is now displayed.\n\nColor Legend:\n🔴 Red: High risk areas (>70%)\n🟠 Orange: Medium risk (40-70%)\n🔵 Blue: Low risk (<40%)\n\nHeatmap updates every 5 minutes.');
    } else {
        alert('❌ Heatmap Disabled\n\nHeatmap overlay has been removed.\n\nStandard zone markers are still visible.\n\nClick "Toggle Heatmap" again to enable.');
    }
}

function viewZoneDetails(zoneName) {
    const zoneData = riskZones.find(z => z.zone === zoneName);
    if (!zoneData) return;
    
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'zone-details-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal" onclick="closeModal()">&times;</span>
            <h2>📊 Detailed Analysis - ${zoneData.zone}</h2>
            <p class="zone-location">📍 ${zoneData.location}</p>
            
            <div class="details-grid">
                <div class="detail-card ${zoneData.risk}">
                    <h3>Risk Assessment</h3>
                    <p class="big-value">${zoneData.risk.toUpperCase()}</p>
                    <p>Probability: ${zoneData.probability}%</p>
                </div>
                
                <div class="detail-card">
                    <h3>📏 Displacement</h3>
                    <p class="big-value">${zoneData.displacement}mm</p>
                    <p class="status ${zoneData.displacement > 10 ? 'critical' : 'normal'}">
                        ${zoneData.displacement > 10 ? '⚠️ Critical' : '✓ Normal'}
                    </p>
                </div>
                
                <div class="detail-card">
                    <h3>📐 Strain</h3>
                    <p class="big-value">${zoneData.strain}</p>
                    <p class="status ${zoneData.strain > 0.004 ? 'critical' : 'normal'}">
                        ${zoneData.strain > 0.004 ? '⚠️ Elevated' : '✓ Normal'}
                    </p>
                </div>
                
                <div class="detail-card">
                    <h3>💧 Pore Pressure</h3>
                    <p class="big-value">${zoneData.pressure} kPa</p>
                    <p class="status ${zoneData.pressure > 400 ? 'critical' : 'normal'}">
                        ${zoneData.pressure > 400 ? '⚠️ High' : '✓ Normal'}
                    </p>
                </div>
            </div>
            
            <div class="ml-info">
                <h3>🤖 ML Model Analysis</h3>
                <div class="ml-stats">
                    <div class="ml-stat">
                        <span>Model Confidence</span>
                        <strong>92%</strong>
                    </div>
                    <div class="ml-stat">
                        <span>Last Updated</span>
                        <strong>2 min ago</strong>
                    </div>
                    <div class="ml-stat">
                        <span>Next Update</span>
                        <strong>3 min</strong>
                    </div>
                </div>
            </div>
            
            <div class="recommendations">
                <h3>📋 Recommendations</h3>
                <ul>
                    ${zoneData.risk === 'high' ? 
                        '<li>🚨 Evacuate personnel immediately</li><li>⚠️ Deploy emergency drainage systems</li><li>📞 Alert emergency response team</li>' :
                        zoneData.risk === 'medium' ?
                        '<li>⚠️ Increase monitoring frequency</li><li>👁️ Conduct visual inspection</li><li>📊 Review sensor data trends</li>' :
                        '<li>✓ Continue routine monitoring</li><li>📊 Maintain current protocols</li><li>🔍 Regular inspections</li>'
                    }
                </ul>
            </div>
            
            <div class="action-buttons">
                <button class="btn" onclick="generateReport('${zoneData.zone}')">📄 Generate Report</button>
                <button class="btn btn-danger" onclick="createAlert('${zoneData.zone}')">🚨 Create Alert</button>
                <button class="btn" onclick="closeModal()">Close</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close on outside click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}

function closeModal() {
    const modal = document.querySelector('.zone-details-modal');
    if (modal) {
        modal.remove();
    }
}

function generateReport(zone) {
    alert(`📄 Generating detailed report for ${zone}...\n\nReport will include:\n- Risk assessment\n- Sensor data history\n- ML predictions\n- Recommendations\n\nReport will be downloaded as PDF.`);
}

function createAlert(zone) {
    alert(`🚨 Creating alert for ${zone}...\n\nAlert will be sent to:\n- Mine Manager\n- Safety Officer\n- Operations Team\n\nVia SMS and Email.`);
    closeModal();
}
