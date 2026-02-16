# 🌐 GitHub Pages Setup Guide

## ✅ Fix "Cannot GET" Error - Enable GitHub Pages

Follow these simple steps to deploy your project to GitHub Pages:

---

## 📋 Step-by-Step Instructions

### Step 1: Go to Repository Settings

1. Open your repository: https://github.com/Bunny6397/RockFall-AI-Monitor
2. Click on **"Settings"** tab (top right)

### Step 2: Navigate to Pages Section

1. In the left sidebar, scroll down to **"Pages"**
2. Click on **"Pages"**

### Step 3: Configure GitHub Pages

1. **Source**: Select **"Deploy from a branch"**
2. **Branch**: Select **"main"**
3. **Folder**: Select **"/docs"** (important!)
4. Click **"Save"**

### Step 4: Wait for Deployment

1. GitHub will start building your site
2. Wait 1-2 minutes for deployment to complete
3. Refresh the page to see the deployment status

### Step 5: Access Your Site

Your site will be available at:
```
https://bunny6397.github.io/RockFall-AI-Monitor/
```

---

## 🎯 What You'll See

The GitHub Pages deployment shows:
- ✅ Project information page
- ✅ Installation instructions
- ✅ Links to GitHub repository
- ✅ Feature highlights
- ✅ Documentation links

---

## ⚠️ Important Notes

### What GitHub Pages CAN Do:
- ✅ Host static HTML, CSS, JavaScript files
- ✅ Show project information
- ✅ Provide documentation
- ✅ Link to repository

### What GitHub Pages CANNOT Do:
- ❌ Run Node.js backend server
- ❌ Execute server-side code
- ❌ Handle API requests
- ❌ Process file uploads
- ❌ Connect to databases

---

## 🚀 For Full Functionality

To run the complete application with all features:

### Option 1: Run Locally (Recommended)

```bash
# Clone the repository
git clone https://github.com/Bunny6397/RockFall-AI-Monitor.git
cd RockFall-AI-Monitor

# Install dependencies
npm install

# Start the application
./start.sh

# Open in browser
# http://localhost:8000
```

This gives you:
- ✅ All 9 pages working
- ✅ Interactive risk map
- ✅ Real-time alerts
- ✅ Data upload functionality
- ✅ Analytics charts
- ✅ Backend API
- ✅ All buttons functional

---

## 📸 Visual Guide

### Settings Location:
```
Repository → Settings (top menu) → Pages (left sidebar)
```

### Configuration:
```
Source: Deploy from a branch
Branch: main
Folder: /docs
[Save]
```

### Deployment Status:
```
✅ Your site is live at https://bunny6397.github.io/RockFall-AI-Monitor/
```

---

## 🔧 Troubleshooting

### Site Not Loading?

1. **Check deployment status**
   - Go to Settings → Pages
   - Look for "Your site is live" message

2. **Wait a bit longer**
   - First deployment can take 2-5 minutes
   - Refresh the page

3. **Verify folder selection**
   - Must be `/docs` folder
   - Not `/` (root)

### 404 Error?

1. **Check URL**
   - Correct: `https://bunny6397.github.io/RockFall-AI-Monitor/`
   - Note the capital letters in "RockFall"

2. **Verify branch**
   - Must be `main` branch
   - Check that `/docs` folder exists

### Still Having Issues?

1. Check the Actions tab for build errors
2. Ensure `/docs/index.html` exists in repository
3. Try disabling and re-enabling GitHub Pages

---

## 🎨 Customizing the Landing Page

The landing page is located at: `docs/index.html`

You can customize:
- Colors and styling
- Text content
- Links
- Features list
- Contact information

After making changes:
```bash
git add docs/index.html
git commit -m "Update landing page"
git push origin main
```

GitHub Pages will automatically redeploy (1-2 minutes).

---

## 📊 Comparison: GitHub Pages vs Local

| Feature | GitHub Pages | Local Development |
|---------|--------------|-------------------|
| **Setup Time** | 2 minutes | 5 minutes |
| **Cost** | Free | Free |
| **Always Available** | ✅ Yes | ❌ No |
| **Full Features** | ❌ No | ✅ Yes |
| **Backend API** | ❌ No | ✅ Yes |
| **Interactive Map** | ❌ Limited | ✅ Full |
| **Data Upload** | ❌ No | ✅ Yes |
| **Real-time Alerts** | ❌ No | ✅ Yes |
| **Best For** | Showcase | Development/Demo |

---

## ✅ Recommended Setup

**Best Approach:**

1. **Enable GitHub Pages** (for project showcase)
   - Shows project information
   - Provides installation instructions
   - Always accessible online

2. **Run Locally** (for actual use)
   - Full functionality
   - All features working
   - Best for development and demos

This gives you the best of both worlds!

---

## 🔗 Quick Links

- **Repository**: https://github.com/Bunny6397/RockFall-AI-Monitor
- **GitHub Pages** (after setup): https://bunny6397.github.io/RockFall-AI-Monitor/
- **Settings**: https://github.com/Bunny6397/RockFall-AI-Monitor/settings/pages

---

## 📞 Need Help?

- Read [DEPLOYMENT_INSTRUCTIONS.md](DEPLOYMENT_INSTRUCTIONS.md) for detailed deployment options
- Check [README.md](README.md) for project overview
- Open an issue: https://github.com/Bunny6397/RockFall-AI-Monitor/issues

---

**Your GitHub Pages site will be live in 1-2 minutes after following these steps!** 🎉
