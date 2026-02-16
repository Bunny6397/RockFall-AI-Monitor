#!/bin/bash

# Build script for Vercel deployment
# This copies only frontend files to public directory

echo "Building for Vercel deployment..."

# Create public directory
mkdir -p public

# Copy HTML files
cp *.html public/ 2>/dev/null || true

# Copy CSS
cp styles.css public/

# Copy JavaScript files (excluding server files)
cp alerts.js public/
cp analytics.js public/
cp app.js public/
cp config.js public/
cp dashboard.js public/
cp data-sources.js public/
cp risk-map.js public/

echo "Build complete! Files copied to public/"
