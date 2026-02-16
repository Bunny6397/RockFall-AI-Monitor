#!/bin/bash

# Rockfall AI Monitor - Stop Script
# This script stops both backend and frontend servers

echo "🛑 Stopping Rockfall AI Monitor..."
echo "================================================"
echo ""

# Stop backend (port 3000)
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null ; then
    echo "🔧 Stopping backend server (port 3000)..."
    kill $(lsof -t -i:3000)
    echo "   ✅ Backend stopped"
else
    echo "   ℹ️  Backend not running"
fi

# Stop frontend (port 8000)
if lsof -Pi :8000 -sTCP:LISTEN -t >/dev/null ; then
    echo "🌐 Stopping frontend server (port 8000)..."
    kill $(lsof -t -i:8000)
    echo "   ✅ Frontend stopped"
else
    echo "   ℹ️  Frontend not running"
fi

echo ""
echo "================================================"
echo "✅ All servers stopped"
echo "================================================"
echo ""
