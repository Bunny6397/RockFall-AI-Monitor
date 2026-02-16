# 🚀 Deployment Instructions

## Understanding the "Cannot GET" Error

The "Cannot GET" error occurs when deploying to static hosting platforms like GitHub Pages because:

1. **Backend Dependency**: The application has a Node.js backend server that provides API endpoints
2. **Static Hosting Limitation**: GitHub Pages only serves static files (HTML, CSS, JS)
3. **Missing Server**: Without the backend running, API calls fail

---

## ✅ Solution: Two Deployment Options

### Option 1: Local Development (Full Features) ⭐ RECOMMENDED

This runs both frontend and backend, giving you all features.

#### Steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bunny6397/RockFall-AI-Monitor.git
   cd RockFall-AI-Monitor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the application**
   
   **Quick Start (Recommended):**
   ```bash
   chmod +x start.sh
   ./start.sh
   ```
   
   **Manual Start:**
   ```bash
   # Terminal 1 - Backend
   npm start
   
   # Terminal 2 - Frontend  
   python3 -m http.server 8000
   ```

4. **Access the application**
   - Open browser: http://localhost:8000
   - Backend API: http://localhost:3000

#### Features Available:
- ✅ All 9 pages working
- ✅ Interactive risk map
- ✅ Real-time alerts
- ✅ Data upload
- ✅ Analytics charts
- ✅ Backend API
- ✅ All buttons functional

---

### Option 2: GitHub Pages (Static Only)

This deploys only the frontend to GitHub Pages with limited functionality.

#### Steps:

1. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to "Pages" section
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/docs`
   - Click Save

2. **Wait for deployment** (1-2 minutes)

3. **Access your site**
   - URL: `https://bunny6397.github.io/RockFall-AI-Monitor/`

#### Features Available:
- ✅ Information page
- ✅ Links to GitHub repository
- ✅ Documentation links
- ✅ Installation instructions
- ❌ No backend functionality
- ❌ No API calls
- ❌ Limited interactivity

---

### Option 3: Full Cloud Deployment (Advanced)

Deploy both frontend and backend to cloud platforms.

#### Recommended Platforms:

**Backend Options:**
- **Heroku** (Easy, free tier available)
- **Railway** (Modern, simple deployment)
- **Render** (Free tier, auto-deploy from GitHub)
- **AWS EC2** (More control, requires setup)
- **Google Cloud Run** (Serverless, pay-per-use)
- **DigitalOcean** (VPS, $5/month)

**Frontend Options:**
- **Vercel** (Excellent for static sites)
- **Netlify** (Easy deployment, free tier)
- **GitHub Pages** (Free, but static only)
- **AWS S3 + CloudFront** (Scalable, CDN)

#### Example: Deploy to Heroku + Netlify

**Backend (Heroku):**
```bash
# Install Heroku CLI
# Login to Heroku
heroku login

# Create app
heroku create rockfall-ai-backend

# Deploy
git push heroku main

# Get backend URL
heroku open
```

**Frontend (Netlify):**
1. Connect GitHub repository to Netlify
2. Update `config.js` with Heroku backend URL
3. Deploy automatically on push

---

## 🔧 Configuration for Different Environments

### For Local Development
File: `config.js`
```javascript
const CONFIG = {
    USE_BACKEND: true,
    API_BASE_URL: 'http://localhost:3000/api',
    // ...
};
```

### For Cloud Deployment
File: `config.js`
```javascript
const CONFIG = {
    USE_BACKEND: true,
    API_BASE_URL: 'https://your-backend-url.herokuapp.com/api',
    // ...
};
```

### For Static Deployment (GitHub Pages)
File: `config.js`
```javascript
const CONFIG = {
    USE_BACKEND: false, // Uses mock data
    // ...
};
```

---

## 📋 Deployment Checklist

### Before Deploying:

- [ ] All dependencies installed (`npm install`)
- [ ] Environment variables configured (`.env` file)
- [ ] Backend tested locally (`npm start`)
- [ ] Frontend tested locally (`python3 -m http.server 8000`)
- [ ] All features working
- [ ] Documentation updated

### For Production:

- [ ] Update `config.js` with production URLs
- [ ] Set `NODE_ENV=production`
- [ ] Configure CORS for production domain
- [ ] Set up SSL/HTTPS
- [ ] Configure database (if using)
- [ ] Set up monitoring/logging
- [ ] Configure backup strategy

---

## 🐛 Troubleshooting

### "Cannot GET /" Error

**Problem**: Accessing deployed site shows "Cannot GET /"

**Solutions**:
1. **For GitHub Pages**: Use the `/docs` folder with the static landing page
2. **For Full Deployment**: Ensure backend server is running
3. **Check**: Verify the correct URL is being accessed

### API Calls Failing

**Problem**: Frontend loads but features don't work

**Solutions**:
1. Check `config.js` - ensure `API_BASE_URL` is correct
2. Verify backend is running and accessible
3. Check browser console for CORS errors
4. Ensure backend CORS is configured for your frontend domain

### Port Already in Use

**Problem**: "EADDRINUSE" error when starting servers

**Solutions**:
```bash
# Kill process on port 3000
lsof -ti :3000 | xargs kill -9

# Kill process on port 8000
lsof -ti :8000 | xargs kill -9

# Or use the stop script
./stop.sh
```

---

## 🌐 Recommended Deployment Strategy

### For Development/Testing:
✅ **Use Option 1** (Local Development)
- Full features
- Easy debugging
- No deployment complexity

### For Demo/Presentation:
✅ **Use Option 1** (Local Development)
- Show all features
- Real-time functionality
- Professional presentation

### For Public Access:
✅ **Use Option 3** (Cloud Deployment)
- Always available
- Scalable
- Professional hosting

### For Documentation Only:
✅ **Use Option 2** (GitHub Pages)
- Free hosting
- Easy setup
- Good for project showcase

---

## 📊 Deployment Comparison

| Feature | Local | GitHub Pages | Cloud (Full) |
|---------|-------|--------------|--------------|
| Cost | Free | Free | $0-$20/month |
| Setup Time | 5 min | 2 min | 30-60 min |
| Full Features | ✅ Yes | ❌ No | ✅ Yes |
| Always Available | ❌ No | ✅ Yes | ✅ Yes |
| Backend API | ✅ Yes | ❌ No | ✅ Yes |
| Scalability | ❌ No | ✅ Yes | ✅ Yes |
| Custom Domain | ❌ No | ✅ Yes | ✅ Yes |
| SSL/HTTPS | ❌ No | ✅ Yes | ✅ Yes |

---

## 🎯 Quick Start Commands

### Local Development:
```bash
git clone https://github.com/Bunny6397/RockFall-AI-Monitor.git
cd RockFall-AI-Monitor
npm install
./start.sh
# Open http://localhost:8000
```

### Stop Servers:
```bash
./stop.sh
```

### Verify Installation:
```bash
node verify-project.js
```

---

## 📞 Need Help?

- **Documentation**: Check [README.md](README.md)
- **API Reference**: See [API_DOCUMENTATION.md](API_DOCUMENTATION.md)
- **Testing Guide**: Read [TESTING_GUIDE.md](TESTING_GUIDE.md)
- **GitHub Issues**: https://github.com/Bunny6397/RockFall-AI-Monitor/issues

---

## ✅ Recommended Approach

**For your use case, we recommend:**

1. **Use Local Development** for full functionality
2. **Enable GitHub Pages** with the `/docs` folder for project showcase
3. **Consider Cloud Deployment** later for production use

This gives you:
- ✅ Full features locally
- ✅ Public project page on GitHub
- ✅ Option to scale later

---

**Built with ❤️ for mining safety and rockfall prevention**
