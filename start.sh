#!/bin/bash

# Rockfall AI Monitor - Quick Start Script
# This script starts both backend and frontend servers

echo "🏔️  Rockfall AI Monitor - Starting Application"
echo "================================================"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Check if backend is already running
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null ; then
    echo "⚠️  Backend already running on port 3000"
else
    echo "🚀 Starting backend server on port 3000..."
    npm start &
    BACKEND_PID=$!
    echo "   Backend PID: $BACKEND_PID"
fi

# Wait a moment for backend to start
sleep 2

# Check if frontend is already running
if lsof -Pi :8000 -sTCP:LISTEN -t >/dev/null ; then
    echo "⚠️  Frontend already running on port 8000"
else
    echo "🌐 Starting frontend server on port 8000..."
    python3 -m http.server 8000 &
    FRONTEND_PID=$!
    echo "   Frontend PID: $FRONTEND_PID"
fi

echo ""
echo "================================================"
echo "✅ Application is running!"
echo ""
echo "🌐 Frontend: http://localhost:8000"
echo "🔧 Backend:  http://localhost:3000"
echo ""
echo "📖 Open http://localhost:8000 in your browser"
echo ""
echo "To stop the servers:"
echo "   Press Ctrl+C or run: ./stop.sh"
echo "================================================"
echo ""

# Keep script running
wait
