# 🗺️ Rockfall Prediction System - Site Map

## Website Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                     🏔️ ROCKFALL AI MONITOR                      │
│                    http://localhost:8000                         │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  Navigation Bar (All Pages)                                      │
│  Home | Dashboard | Risk Map | Alerts | Data Sources | Analytics│
└─────────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────┐
│  1. HOME PAGE (index.html)                                       │
├─────────────────────────────────────────────────────────────────┤
│  • Hero Section                                                  │
│    - System title and tagline                                    │
│    - "Go to Dashboard" CTA button                                │
│  • System Overview                                               │
│    - 6 feature cards (Real-Time, AI, Maps, Alerts, Data, etc.)  │
│  • Current Status                                                │
│    - 4 stat cards (High/Medium/Low Risk, Sensors)                │
│  • Get Started Section                                           │
│    - Links to Dashboard, Risk Map, Alerts, Analytics             │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  2. DASHBOARD (dashboard.html)                                   │
├─────────────────────────────────────────────────────────────────┤
│  • Real-Time Statistics                                          │
│    - High Risk Zones: 3                                          │
│    - Medium Risk Zones: 7                                        │
│    - Low Risk Zones: 15                                          │
│    - Active Sensors: 42                                          │
│  • Risk Probability Trends Chart                                 │
│    - 7-day line chart (Chart.js)                                 │
│  • Recent Activity Feed                                          │
│    - Last 4 system events                                        │
│  • Quick Actions                                                 │
│    - Links to Risk Map, Alerts, Data Sources, Analytics          │
│                                                                  │
│  JavaScript: dashboard.js                                        │
│  - Chart initialization                                          │
│  - Stats auto-update (5s interval)                               │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  3. RISK MAP (risk-map.html)                                     │
├─────────────────────────────────────────────────────────────────┤
│  • Map Controls                                                  │
│    - [All Zones] [High Risk Only] [Medium] [Low]                 │
│    - [Toggle Sensors] [Toggle Heatmap]                           │
│  • Interactive Leaflet Map                                       │
│    - 8 risk zones plotted                                        │
│    - Color-coded circles (red/orange/blue)                       │
│    - Clickable popups with zone details                          │
│  • Legend                                                        │
│    - High (>70%) - Red                                           │
│    - Medium (40-70%) - Orange                                    │
│    - Low (<40%) - Blue                                           │
│  • Zone Details Grid                                             │
│    - 6 zone cards with risk levels                               │
│    - Displacement, strain, status info                           │
│    - [View Details] buttons                                      │
│                                                                  │
│  JavaScript: risk-map.js                                         │
│  - Leaflet map initialization                                    │
│  - Zone plotting and filtering                                   │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  4. ALERTS (alerts.html)                                         │
├─────────────────────────────────────────────────────────────────┤
│  • Alert Controls                                                │
│    - [Test Alert System] [Export Report]                         │
│    - [All Alerts] [Critical Only]                                │
│    - [Configure Notifications]                                   │
│  • Active Alerts Display                                         │
│    - 4 current alerts (2 critical, 1 warning, 1 info)            │
│    - Zone, message, time, recommended action                     │
│    - [Acknowledge] buttons                                       │
│  • Alert History Table                                           │
│    - Time, Zone, Type, Message, Status columns                   │
│    - 6 historical alerts                                         │
│  • Notification Settings                                         │
│    - Email configuration                                         │
│    - SMS configuration                                           │
│    - Alert threshold selector                                    │
│    - [Save Settings] button                                      │
│                                                                  │
│  JavaScript: alerts.js                                           │
│  - Alert loading and filtering                                   │
│  - Auto-refresh (10s interval)                                   │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  5. DATA SOURCES (data-sources.html)                             │
├─────────────────────────────────────────────────────────────────┤
│  • Data Input Cards (4 cards)                                    │
│    1. 📊 DEM Data                                                │
│       - File upload (.tif, .geotiff)                             │
│       - [Upload DEM] button                                      │
│    2. 🚁 Drone Imagery                                           │
│       - Multiple image upload                                    │
│       - [Upload Images] button                                   │
│    3. 📡 Sensor Data                                             │
│       - CSV/JSON upload                                          │
│       - [Upload Data] button                                     │
│    4. 🌦️ Environmental                                          │
│       - [Fetch Live Data] button                                 │
│       - Weather status display                                   │
│  • Recent Uploads Table                                          │
│    - Time, Type, Filename, Size, Status                          │
│    - [View] buttons                                              │
│  • Data Processing Pipeline                                      │
│    - 5-step visual flow                                          │
│    - Upload → Preprocessing → Feature Extraction →               │
│      Prediction → Alert Generation                               │
│  • Sensor Network Status                                         │
│    - 4 sensor type cards                                         │
│    - Online/offline status                                       │
│                                                                  │
│  JavaScript: data-sources.js                                     │
│  - File upload handlers                                          │
│  - Weather data fetching                                         │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  6. ANALYTICS (analytics.html)                                   │
├─────────────────────────────────────────────────────────────────┤
│  • ML Model Performance                                          │
│    - 6 metric cards                                              │
│    - Accuracy: 94.2%                                             │
│    - Precision: 91.8%                                            │
│    - Recall: 89.5%                                               │
│    - F1 Score: 90.6%                                             │
│    - Last Training: 2 hours ago                                  │
│    - Training Samples: 15,420                                    │
│  • Prediction Accuracy Over Time                                 │
│    - Line chart (6 weeks)                                        │
│  • Risk Distribution                                             │
│    - Doughnut chart (High/Medium/Low)                            │
│  • Sensor Performance                                            │
│    - 3 performance cards                                         │
│    - Uptime, accuracy, data points                               │
│  • Historical Incidents Table                                    │
│    - Date, Zone, Predicted Risk, Actual Outcome, Accuracy        │
│    - 4 past incidents                                            │
│                                                                  │
│  JavaScript: analytics.js                                        │
│  - Chart.js initialization                                       │
│  - Accuracy and distribution charts                              │
└─────────────────────────────────────────────────────────────────┘
```

## Page Interconnections

```
                    HOME
                     │
        ┌────────────┼────────────┐
        │            │            │
    DASHBOARD    RISK MAP     ALERTS
        │            │            │
        └────────────┼────────────┘
                     │
            ┌────────┴────────┐
            │                 │
      DATA SOURCES       ANALYTICS
```

## File Dependencies

```
HTML Files:
├── index.html          → styles.css
├── dashboard.html      → styles.css, dashboard.js, Chart.js (CDN)
├── risk-map.html       → styles.css, risk-map.js, Leaflet.js (CDN)
├── alerts.html         → styles.css, alerts.js
├── data-sources.html   → styles.css, data-sources.js
└── analytics.html      → styles.css, analytics.js, Chart.js (CDN)

JavaScript Files:
├── dashboard.js        → Chart.js library
├── risk-map.js         → Leaflet.js library
├── alerts.js           → Standalone
├── data-sources.js     → Standalone
└── analytics.js        → Chart.js library

CSS:
└── styles.css          → Shared by all pages

External Libraries (CDN):
├── Leaflet.js 1.9.4    → Map functionality
├── Chart.js            → Data visualization
└── OpenStreetMap       → Map tiles
```

## User Journey Examples

### Journey 1: Check System Status
```
Home → Dashboard → View Stats → Check Recent Activity
```

### Journey 2: Investigate High Risk Zone
```
Home → Risk Map → Filter High Risk → Click Zone → View Details
```

### Journey 3: Respond to Alert
```
Home → Alerts → View Critical Alert → Acknowledge → Configure Notifications
```

### Journey 4: Upload New Data
```
Home → Data Sources → Upload Sensor Data → View Processing Pipeline
```

### Journey 5: Review Performance
```
Home → Analytics → Check Model Metrics → View Historical Incidents
```

## Quick Access Matrix

| From Page     | To Dashboard | To Risk Map | To Alerts | To Data | To Analytics |
|---------------|--------------|-------------|-----------|---------|--------------|
| Home          | ✓            | ✓           | ✓         | ✓       | ✓            |
| Dashboard     | -            | ✓           | ✓         | ✓       | ✓            |
| Risk Map      | ✓            | -           | ✓         | ✓       | ✓            |
| Alerts        | ✓            | ✓           | -         | ✓       | ✓            |
| Data Sources  | ✓            | ✓           | ✓         | -       | ✓            |
| Analytics     | ✓            | ✓           | ✓         | ✓       | -            |

All pages accessible from all other pages via navigation bar!

---

**Total Pages:** 6 main pages + 1 legacy (all-in-one.html)
**Total JavaScript Files:** 5 page-specific + 1 legacy
**Total CSS Files:** 1 shared stylesheet
**External Dependencies:** 2 (Leaflet.js, Chart.js)
