// Data Sources functionality
function uploadData(type) {
    const fileInput = document.getElementById(`${type}-upload`);
    if (fileInput.files.length === 0) {
        alert('Please select a file first');
        return;
    }
    
    alert(`Uploading ${type} data...\n\nFile: ${fileInput.files[0].name}\nProcessing with ML model...\n\nThis would trigger:\n1. Data validation\n2. Feature extraction\n3. Model prediction\n4. Risk map update`);
}

function fetchWeather() {
    alert('Fetching live environmental data...\n\n- Temperature: 18°C\n- Rainfall: 5mm (last 24h)\n- Wind Speed: 12 km/h\n- Seismic Activity: Normal\n\nData integrated into prediction model.');
    document.getElementById('weather-status').innerHTML = '<p>Last updated: Just now</p><p>Temperature: 18°C</p><p>Rainfall: 5mm (24h)</p>';
}


function viewUploadDetails(filename, type) {
    let details = '';
    
    if (type === 'Sensor') {
        details = `📊 Sensor Data Details\n\n` +
                 `Filename: ${filename}\n` +
                 `Type: Sensor Data (CSV)\n` +
                 `Size: 2.4 MB\n` +
                 `Uploaded: 2024-02-17 14:25\n` +
                 `Status: ✅ Processed Successfully\n\n` +
                 `Data Summary:\n` +
                 `• Records: 1,245\n` +
                 `• Sensors: 42\n` +
                 `• Time Range: 24 hours\n` +
                 `• Displacement readings: 1,245\n` +
                 `• Strain measurements: 1,245\n` +
                 `• Pressure readings: 1,245\n\n` +
                 `Processing Results:\n` +
                 `• Data validation: Passed\n` +
                 `• Quality check: 99.8% valid\n` +
                 `• Anomalies detected: 3\n` +
                 `• ML model updated: Yes\n\n` +
                 `Actions Available:\n` +
                 `• Download processed data\n` +
                 `• View in analytics\n` +
                 `• Generate report\n` +
                 `• Delete file`;
    } else if (type === 'Drone') {
        details = `🚁 Drone Imagery Details\n\n` +
                 `Filename: ${filename}\n` +
                 `Type: Aerial Survey Images (ZIP)\n` +
                 `Size: 156 MB\n` +
                 `Uploaded: 2024-02-17 08:15\n` +
                 `Status: ✅ Processed Successfully\n\n` +
                 `Content Summary:\n` +
                 `• Total images: 127\n` +
                 `• Resolution: 4K (3840x2160)\n` +
                 `• Coverage area: 2.5 km²\n` +
                 `• Flight altitude: 150m\n` +
                 `• GPS tagged: Yes\n\n` +
                 `Processing Results:\n` +
                 `• Image stitching: Complete\n` +
                 `• 3D model generated: Yes\n` +
                 `• Change detection: 12 areas flagged\n` +
                 `• Crack identification: 8 locations\n\n` +
                 `Actions Available:\n` +
                 `• View image gallery\n` +
                 `• Download 3D model\n` +
                 `• View change detection report\n` +
                 `• Export to GIS`;
    } else if (type === 'DEM') {
        details = `📊 DEM Data Details\n\n` +
                 `Filename: ${filename}\n` +
                 `Type: Digital Elevation Model (GeoTIFF)\n` +
                 `Size: 45 MB\n` +
                 `Uploaded: 2024-02-15 16:30\n` +
                 `Status: ✅ Processed Successfully\n\n` +
                 `Data Summary:\n` +
                 `• Resolution: 1m\n` +
                 `• Coverage: 5 km²\n` +
                 `• Elevation range: 450m - 680m\n` +
                 `• Coordinate system: WGS84\n` +
                 `• Format: GeoTIFF\n\n` +
                 `Processing Results:\n` +
                 `• Slope analysis: Complete\n` +
                 `• Aspect calculation: Done\n` +
                 `• Risk zones identified: 8\n` +
                 `• Contour lines generated: Yes\n\n` +
                 `Actions Available:\n` +
                 `• View 3D terrain\n` +
                 `• Download slope map\n` +
                 `• Export contours\n` +
                 `• Generate cross-sections`;
    }
    
    alert(details);
}
