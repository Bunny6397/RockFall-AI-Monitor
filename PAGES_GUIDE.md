# 🏔️ Rockfall Prediction System - Pages Guide

## 📁 Website Structure

The system now has **6 separate pages** with full navigation between them:

### 1. **Home Page** (`index.html`)
**URL:** http://localhost:8000/index.html

**Features:**
- Hero section with system overview
- 6 feature cards explaining capabilities
- Current status dashboard with live stats
- Quick navigation to all sections
- Call-to-action buttons

**Purpose:** Landing page and system introduction

---

### 2. **Dashboard** (`dashboard.html`)
**URL:** http://localhost:8000/dashboard.html

**Features:**
- Real-time statistics (4 stat cards)
- Risk probability trends chart (7-day history)
- Recent activity feed
- Quick action cards linking to other pages

**JavaScript:** `dashboard.js`
- Chart.js integration
- Auto-updating stats every 5 seconds
- Interactive trend visualization

**Purpose:** Main monitoring interface with key metrics

---

### 3. **Risk Map** (`risk-map.html`)
**URL:** http://localhost:8000/risk-map.html

**Features:**
- Interactive Leaflet map with OpenStreetMap
- 8 risk zones plotted with color coding
- Map controls (filter by risk level, toggle sensors, heatmap)
- Zone details grid with 6 zone cards
- Legend for risk levels

**JavaScript:** `risk-map.js`
- Leaflet.js map initialization
- Dynamic zone plotting
- Filter functionality
- Popup information windows

**Purpose:** Spatial visualization of risk zones

---

### 4. **Alerts** (`alerts.html`)
**URL:** http://localhost:8000/alerts.html

**Features:**
- Active alerts display (4 current alerts)
- Alert controls (test, export, filter)
- Alert history table
- Notification settings form
- Email and SMS configuration

**JavaScript:** `alerts.js`
- Real-time alert loading
- Filter by severity (all/critical)
- Alert acknowledgment system
- Auto-refresh every 10 seconds

**Purpose:** Alert management and notification configuration

---

### 5. **Data Sources** (`data-sources.html`)
**URL:** http://localhost:8000/data-sources.html

**Features:**
- 4 data upload cards (DEM, Drone, Sensor, Weather)
- Recent uploads table
- Data processing pipeline visualization
- Sensor network status grid
- Upload history tracking

**JavaScript:** `data-sources.js`
- File upload handlers
- Weather data fetching
- Status updates

**Purpose:** Data input and sensor monitoring

---

### 6. **Analytics** (`analytics.html`)
**URL:** http://localhost:8000/analytics.html

**Features:**
- ML model performance metrics (6 metrics)
- Prediction accuracy chart over time
- Risk distribution pie chart
- Sensor performance cards
- Historical incidents table

**JavaScript:** `analytics.js`
- Chart.js for accuracy trends
- Doughnut chart for risk distribution
- Performance visualization

**Purpose:** Advanced analytics and model performance

---

## 🎨 Navigation System

### Navigation Bar (Present on all pages)
```
🏔️ Rockfall AI Monitor
Home | Dashboard | Risk Map | Alerts | Data Sources | Analytics
```

- Sticky navigation (stays at top when scrolling)
- Active page highlighted
- Consistent across all pages
- Responsive design

---

## 📊 Page-by-Page Breakdown

### File Structure
```
rockfall/
├── index.html              # Home page
├── dashboard.html          # Dashboard
├── risk-map.html          # Risk map
├── alerts.html            # Alerts
├── data-sources.html      # Data sources
├── analytics.html         # Analytics
├── all-in-one.html        # Original single-page version
├── styles.css             # Shared styles
├── dashboard.js           # Dashboard logic
├── risk-map.js            # Map logic
├── alerts.js              # Alerts logic
├── data-sources.js        # Data upload logic
├── analytics.js           # Analytics charts
├── app.js                 # Original combined logic
└── README.md              # Documentation
```

---

## 🔄 Navigation Flow

```
                    ┌─────────────┐
                    │  Home Page  │
                    └──────┬──────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
   ┌────▼────┐      ┌─────▼─────┐     ┌─────▼─────┐
   │Dashboard│      │ Risk Map  │     │  Alerts   │
   └────┬────┘      └─────┬─────┘     └─────┬─────┘
        │                  │                  │
        └──────────────────┼──────────────────┘
                           │
                ┌──────────┴──────────┐
                │                     │
         ┌──────▼──────┐      ┌──────▼──────┐
         │Data Sources │      │  Analytics  │
         └─────────────┘      └─────────────┘
```

---

## 🎯 Key Features by Page

### Home
✓ System overview
✓ Feature highlights
✓ Current status summary
✓ Quick navigation

### Dashboard
✓ Live statistics
✓ Trend charts
✓ Activity feed
✓ Quick actions

### Risk Map
✓ Interactive map
✓ Zone filtering
✓ Detailed zone info
✓ Spatial visualization

### Alerts
✓ Active alerts
✓ Alert history
✓ Notification settings
✓ Alert management

### Data Sources
✓ File uploads
✓ Upload history
✓ Processing pipeline
✓ Sensor status

### Analytics
✓ Model metrics
✓ Performance charts
✓ Historical data
✓ Incident tracking

---

## 🚀 How to Use

1. **Start the server:**
   ```bash
   cd rockfall
   python -m http.server 8000
   ```

2. **Access the website:**
   - Open browser to: http://localhost:8000
   - You'll land on the Home page

3. **Navigate:**
   - Use the top navigation bar
   - Click any link to switch pages
   - All pages load independently

4. **Explore features:**
   - Dashboard: View real-time stats
   - Risk Map: Interact with zones
   - Alerts: Check notifications
   - Data Sources: Upload files
   - Analytics: Review performance

---

## 💡 Interactive Elements

### Buttons & Actions
- **Test Alert System** - Simulates SMS/email notifications
- **Export Report** - Generates PDF reports
- **Upload Data** - Processes DEM/drone/sensor files
- **Fetch Weather** - Gets live environmental data
- **View Details** - Shows zone-specific information
- **Acknowledge Alert** - Logs alert acknowledgment
- **Filter Zones** - Shows specific risk levels

### Real-Time Updates
- Stats refresh every 5 seconds
- Alerts update every 10 seconds
- Sensor counts vary dynamically
- Charts animate on load

---

## 🎨 Design Consistency

All pages share:
- Purple gradient theme (#667eea to #764ba2)
- White card-based layouts
- Consistent navigation
- Responsive grid systems
- Smooth transitions
- Professional typography

---

## 📱 Responsive Design

All pages work on:
- Desktop (1400px+)
- Tablet (768px - 1400px)
- Mobile (<768px)

Navigation adapts to screen size automatically.

---

## 🔗 Cross-Page Links

Pages link to each other through:
1. Top navigation bar (all pages)
2. Quick action cards (dashboard)
3. Call-to-action buttons (home)
4. Contextual links (throughout)

---

## ✅ Testing Checklist

- [x] All pages load correctly
- [x] Navigation works between pages
- [x] JavaScript functions on each page
- [x] Charts render properly
- [x] Maps display correctly
- [x] Forms are functional
- [x] Buttons trigger actions
- [x] Responsive on mobile
- [x] Styles consistent across pages
- [x] Real-time updates working

---

**The multi-page system is complete and fully functional!**
**Access it at: http://localhost:8000**
