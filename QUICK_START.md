# 🚀 Rockfall AI Monitor - Quick Start Guide

## ⚡ Fastest Way to Run

### Option 1: Use Start Script (Recommended)
```bash
cd rockfall
./start.sh
```

Then open: http://localhost:8000

### Option 2: Manual Start
```bash
# Terminal 1 - Backend
cd rockfall
npm start

# Terminal 2 - Frontend
cd rockfall
python3 -m http.server 8000
```

Then open: http://localhost:8000

---

## 🎯 What You'll See

### 1. Home Page (index.html)
- Welcome message
- Enhanced "Go to Dashboard" button
- Feature highlights
- Professional footer

### 2. Dashboard (dashboard.html)
- 4 stat cards (High/Medium/Low risk zones, Active sensors)
- Risk distribution chart
- Recent alerts
- System overview

### 3. Risk Map (risk-map.html)
**This is the main feature!**
- Interactive map centered on Bhopal, India
- 8 color-coded risk zones
- Click "View Details" on any zone to see:
  - Risk assessment
  - Sensor readings
  - ML analysis
  - Recommendations
- Try these buttons:
  - **Toggle Sensors** - Shows 42 active sensors
  - **Toggle Heatmap** - Displays risk heatmap

### 4. Alerts (alerts.html)
**Test all the buttons!**
- **Test Alert System** - See comprehensive test results
- **Export Report** - View report generation details
- **Configure Notifications** - Check current settings
- Filter alerts by type
- Acknowledge alerts

### 5. Data Sources (data-sources.html)
**Click the View buttons!**
- Upload sensor data, drone imagery, DEM files
- View upload history
- Click **View** buttons to see detailed information:
  - Sensor data: 1,245 records, 42 sensors
  - Drone imagery: 127 images, 4K resolution
  - DEM data: 1m resolution, 5 km² coverage

### 6. Analytics (analytics.html)
- 4 interactive charts side-by-side
- Prediction accuracy trends
- Risk distribution
- Sensor readings
- Alert frequency

### 7. Contact (contact.html)
- Contact form (try submitting!)
- Multiple contact methods
- Emergency hotline: +91-98765-43210
- FAQ section

### 8. Privacy Policy (privacy-policy.html)
- 13 comprehensive sections
- Data collection and usage
- User rights
- Compliance information

### 9. Terms of Service (terms-of-service.html)
- 16 detailed sections
- Service description
- User responsibilities
- Liability disclaimers

---

## 🎮 Interactive Features to Try

### Must-Try Features:

1. **Risk Map - View Details Modal**
   - Go to Risk Map page
   - Scroll to "Zone Details" section
   - Click "View Details" on any zone
   - See comprehensive modal with sensor data, ML analysis, recommendations

2. **Alert System Buttons**
   - Go to Alerts page
   - Click "Test Alert System" - See detailed test results
   - Click "Export Report" - View report information
   - Click "Configure Notifications" - Check settings

3. **Data Sources - View Buttons**
   - Go to Data Sources page
   - Scroll to "Upload History" table
   - Click any "View" button
   - See detailed file information

4. **Contact Form**
   - Go to Contact page
   - Fill out the form
   - Click "Send Message"
   - See confirmation message

5. **Map Interactions**
   - Go to Risk Map page
   - Click "Toggle Sensors" button
   - Click "Toggle Heatmap" button
   - Use filter buttons (All, High, Medium, Low)
   - Click on map markers for popups

---

## 📱 Test Responsive Design

Try resizing your browser window or use these shortcuts:

**Chrome DevTools:**
- Press `Cmd+Option+I` (Mac) or `Ctrl+Shift+I` (Windows)
- Click device toolbar icon
- Test different screen sizes:
  - iPhone 12 Pro (390x844)
  - iPad (768x1024)
  - Desktop (1920x1080)

---

## 🔍 Verification Checklist

Run through this quick checklist:

- [ ] Home page loads with animated button
- [ ] Dashboard shows 4 stat cards
- [ ] Risk map displays India-centered map
- [ ] Zone details modal opens and closes
- [ ] Alert buttons show detailed information
- [ ] Data sources view buttons work
- [ ] Charts display correctly
- [ ] Contact form validates and submits
- [ ] All footer links work
- [ ] Navigation works on all pages

---

## 🐛 Troubleshooting

### Backend won't start
```bash
# Check if port 3000 is in use
lsof -i :3000

# Kill process if needed
kill $(lsof -t -i:3000)

# Try again
npm start
```

### Frontend won't start
```bash
# Check if port 8000 is in use
lsof -i :8000

# Kill process if needed
kill $(lsof -t -i:8000)

# Try again
python3 -m http.server 8000
```

### Dependencies missing
```bash
cd rockfall
npm install
```

### Browser shows blank page
1. Check browser console (F12)
2. Verify both servers are running
3. Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)
4. Try incognito/private mode

---

## 🎯 Quick Test Script

Run this to verify everything:
```bash
cd rockfall
node verify-project.js
```

Expected output:
```
✅ PROJECT STATUS: READY TO RUN!
```

---

## 📊 What's Working

### ✅ All Features Functional
- 9 complete pages
- Interactive map with 8 zones
- Enhanced modals with detailed info
- Alert system with test buttons
- Data upload and viewing
- Charts and analytics
- Contact form
- Legal pages

### ✅ All Buttons Work
- Toggle Sensors
- Toggle Heatmap
- View Details (zone cards)
- Test Alert System
- Export Report
- Configure Notifications
- View (upload history)
- All navigation links

### ✅ Backend API
- 20+ endpoints
- File upload
- Data retrieval
- Statistics
- Analytics

---

## 🎨 Visual Features

### Color-Coded Risk Levels
- 🔴 **High Risk**: Red zones (3 zones)
- 🟠 **Medium Risk**: Orange zones (3 zones)
- 🔵 **Low Risk**: Blue zones (2 zones)

### Animations
- Button hover effects
- Modal fade-in
- Card transitions
- Chart animations

### Responsive
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## 📖 Documentation

### Available Guides
- `README.md` - Project overview
- `START_HERE.md` - Getting started
- `API_DOCUMENTATION.md` - API reference
- `TESTING_GUIDE.md` - Comprehensive testing
- `PROJECT_COMPLETE.md` - Full project summary
- `QUICK_START.md` - This file!

---

## 🎉 You're Ready!

The Rockfall AI Monitor is fully functional and ready to use.

**Start exploring:**
1. Run `./start.sh`
2. Open http://localhost:8000
3. Click around and test all features
4. Check out the Risk Map page first!

**Have fun! 🏔️**

---

## 💡 Pro Tips

1. **Start with Risk Map** - It's the most impressive feature
2. **Click View Details** - See the enhanced modal
3. **Test Alert Buttons** - They show comprehensive information
4. **Try the Contact Form** - It validates and shows confirmation
5. **Check Responsive Design** - Resize browser to see mobile view

---

## 🛑 To Stop

### Option 1: Use Stop Script
```bash
./stop.sh
```

### Option 2: Manual Stop
Press `Ctrl+C` in both terminal windows

---

**Need help? Check TESTING_GUIDE.md for detailed instructions!**
