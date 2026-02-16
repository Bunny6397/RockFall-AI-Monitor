// Configuration for Rockfall AI Monitor
// This file handles both local development (with backend) and static deployment (without backend)

const CONFIG = {
    // Detect if backend is available
    USE_BACKEND: false, // Set to false for GitHub Pages deployment
    
    // API endpoints (only used if USE_BACKEND is true)
    API_BASE_URL: 'http://localhost:3000/api',
    
    // Mock data for static deployment
    MOCK_DATA: {
        zones: [
            { id: 1, lat: 23.2599, lng: 77.4126, risk: 'high', probability: 85, zone: 'Zone A-1', displacement: 15, strain: 0.0052, pressure: 450, location: 'Bhopal Region' },
            { id: 2, lat: 23.2650, lng: 77.4200, risk: 'high', probability: 78, zone: 'Zone A-2', displacement: 12, strain: 0.0048, pressure: 420, location: 'Bhopal Region' },
            { id: 3, lat: 23.2700, lng: 77.4300, risk: 'high', probability: 72, zone: 'Zone B-1', displacement: 10, strain: 0.0041, pressure: 380, location: 'Bhopal Region' },
            { id: 4, lat: 23.2550, lng: 77.4050, risk: 'medium', probability: 55, zone: 'Zone C-1', displacement: 6, strain: 0.0028, pressure: 280, location: 'Bhopal Region' },
            { id: 5, lat: 23.2500, lng: 77.4000, risk: 'medium', probability: 48, zone: 'Zone C-2', displacement: 5, strain: 0.0024, pressure: 250, location: 'Bhopal Region' },
            { id: 6, lat: 23.2450, lng: 77.3950, risk: 'medium', probability: 52, zone: 'Zone D-1', displacement: 7, strain: 0.0030, pressure: 290, location: 'Bhopal Region' },
            { id: 7, lat: 23.2400, lng: 77.3900, risk: 'low', probability: 25, zone: 'Zone E-1', displacement: 2, strain: 0.0012, pressure: 150, location: 'Bhopal Region' },
            { id: 8, lat: 23.2350, lng: 77.3850, risk: 'low', probability: 18, zone: 'Zone E-2', displacement: 1, strain: 0.0008, pressure: 120, location: 'Bhopal Region' }
        ],
        
        alerts: [
            { id: 1, type: 'critical', zone: 'Zone A-1', message: 'Critical displacement detected: 15mm in last 6 hours', time: '5 min ago', action: 'Evacuate personnel immediately', acknowledged: false },
            { id: 2, type: 'critical', zone: 'Zone A-2', message: 'Pore pressure exceeding threshold: 450 kPa', time: '12 min ago', action: 'Deploy emergency drainage', acknowledged: false },
            { id: 3, type: 'warning', zone: 'Zone C-1', message: 'Increased strain rate detected', time: '1 hour ago', action: 'Increase monitoring frequency', acknowledged: false },
            { id: 4, type: 'info', zone: 'Zone D-1', message: 'Heavy rainfall forecast for next 24 hours', time: '2 hours ago', action: 'Review drainage systems', acknowledged: false }
        ],
        
        statistics: {
            highRiskZones: 3,
            mediumRiskZones: 3,
            lowRiskZones: 2,
            activeSensors: 42,
            totalAlerts: 47,
            criticalAlerts: 8,
            warningAlerts: 15,
            infoAlerts: 24
        },
        
        weather: {
            temperature: 18,
            rainfall: 5,
            windSpeed: 12,
            seismicActivity: 'Normal',
            lastUpdated: 'Just now'
        }
    }
};

// Helper function to get data (from API or mock)
async function getData(endpoint) {
    if (CONFIG.USE_BACKEND) {
        try {
            const response = await fetch(`${CONFIG.API_BASE_URL}${endpoint}`);
            if (!response.ok) throw new Error('API request failed');
            return await response.json();
        } catch (error) {
            console.warn('Backend not available, using mock data:', error);
            return getMockData(endpoint);
        }
    } else {
        return getMockData(endpoint);
    }
}

// Get mock data based on endpoint
function getMockData(endpoint) {
    const mockDataMap = {
        '/zones': CONFIG.MOCK_DATA.zones,
        '/alerts': CONFIG.MOCK_DATA.alerts,
        '/statistics': CONFIG.MOCK_DATA.statistics,
        '/stats': CONFIG.MOCK_DATA.statistics,
        '/weather': CONFIG.MOCK_DATA.weather
    };
    
    return mockDataMap[endpoint] || null;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG, getData, getMockData };
}
