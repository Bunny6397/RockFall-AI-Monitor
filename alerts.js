// Alerts functionality
document.addEventListener('DOMContentLoaded', function() {
    loadAlerts();
    setInterval(loadAlerts, 10000);
});

function loadAlerts(filter = 'all') {
    const alertsContainer = document.getElementById('alerts-container');
    const alerts = [
        {
            type: 'critical',
            zone: 'Zone A-1',
            message: 'Critical displacement detected: 15mm in last 6 hours',
            time: '5 min ago',
            action: 'Evacuate personnel immediately'
        },
        {
            type: 'critical',
            zone: 'Zone A-2',
            message: 'Pore pressure exceeding threshold: 450 kPa',
            time: '12 min ago',
            action: 'Deploy emergency drainage'
        },
        {
            type: 'warning',
            zone: 'Zone C-1',
            message: 'Increased strain rate detected',
            time: '1 hour ago',
            action: 'Increase monitoring frequency'
        },
        {
            type: 'info',
            zone: 'Zone D-1',
            message: 'Heavy rainfall forecast for next 24 hours',
            time: '2 hours ago',
            action: 'Review drainage systems'
        }
    ];
    
    const filteredAlerts = filter === 'all' ? alerts : alerts.filter(a => a.type === filter);
    
    alertsContainer.innerHTML = filteredAlerts.map(alert => `
        <div class="alert-item ${alert.type}">
            <h4>${alert.zone} - ${alert.type.toUpperCase()}</h4>
            <p><strong>${alert.message}</strong></p>
            <p>Time: ${alert.time}</p>
            <p>Recommended Action: ${alert.action}</p>
            <button class="btn" onclick="acknowledgeAlert('${alert.zone}')">Acknowledge</button>
        </div>
    `).join('');
}

function filterAlerts(type) {
    loadAlerts(type);
}

function testAlert() {
    alert('🚨 TEST ALERT SYSTEM\n\n' +
          '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
          '✅ Alert System Status: OPERATIONAL\n\n' +
          'Test notifications will be sent to:\n\n' +
          '📧 Email Recipients:\n' +
          '   • Mine Manager: manager@mine.com\n' +
          '   • Safety Officer: safety@gmail.com\n' +
          '   • Operations Team: ops@mine.com\n\n' +
          '📱 SMS Recipients:\n' +
          '   • Emergency Contact: +91-98765-43210\n' +
          '   • Supervisor: +91-98765-43211\n' +
          '   • Control Room: +91-98765-43212\n\n' +
          '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
          'Test Message:\n' +
          '"This is a test alert from Rockfall AI Monitor.\n' +
          'All systems are functioning correctly."\n\n' +
          '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
          '✅ Email sent successfully\n' +
          '✅ SMS sent successfully\n' +
          '✅ System logs updated\n\n' +
          'Response Time: < 2 seconds\n' +
          'Delivery Status: 100%\n\n' +
          'Alert system is ready for emergency use!');
}

function exportAlerts() {
    alert('📄 GENERATING ALERT REPORT\n\n' +
          '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
          'Report Details:\n\n' +
          '📊 Report Type: Comprehensive Alert Summary\n' +
          '📅 Date Range: Last 30 days\n' +
          '📈 Total Alerts: 47\n\n' +
          'Breakdown:\n' +
          '   🔴 Critical: 8 alerts\n' +
          '   🟠 Warning: 15 alerts\n' +
          '   🔵 Info: 24 alerts\n\n' +
          '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
          'Report Contents:\n' +
          '   ✓ Alert timeline\n' +
          '   ✓ Risk zone analysis\n' +
          '   ✓ Response times\n' +
          '   ✓ Acknowledgment status\n' +
          '   ✓ Sensor data correlation\n' +
          '   ✓ Recommendations\n' +
          '   ✓ Statistical summary\n\n' +
          '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
          '📥 Format: PDF\n' +
          '📦 Size: ~2.5 MB\n' +
          '⏱️ Generation Time: 5 seconds\n\n' +
          'Report will be downloaded as:\n' +
          '"Rockfall_Alert_Report_2024-02-17.pdf"\n\n' +
          '✅ Report generated successfully!');
}

function acknowledgeAlert(zone) {
    alert(`Alert for ${zone} has been acknowledged.\n\nLogged by: Current User\nTime: ${new Date().toLocaleString()}\n\nNotification sent to operations team.`);
}

function configureNotifications() {
    alert('⚙️ NOTIFICATION CONFIGURATION\n\n' +
          '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
          'Current Settings:\n\n' +
          '📧 Email Notifications: ✅ Enabled\n' +
          '   • Primary: safety@gmail.com\n' +
          '   • CC: manager@mine.com, ops@mine.com\n' +
          '   • Threshold: Critical & Warning\n\n' +
          '📱 SMS Notifications: ✅ Enabled\n' +
          '   • Primary: +91-98765-43210\n' +
          '   • Secondary: +91-98765-43211\n' +
          '   • Threshold: Critical only\n\n' +
          '🔔 Push Notifications: ✅ Enabled\n' +
          '   • Mobile App: 3 devices\n' +
          '   • Web Browser: 2 devices\n\n' +
          '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
          'Alert Thresholds:\n' +
          '   🔴 Critical: Immediate (< 1 min)\n' +
          '   🟠 Warning: High priority (< 5 min)\n' +
          '   🔵 Info: Standard (< 15 min)\n\n' +
          'Quiet Hours: Disabled\n' +
          'Auto-escalation: Enabled (after 10 min)\n' +
          'Retry Attempts: 3\n\n' +
          '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
          'To modify settings, scroll down to\n' +
          '"Notification Settings" section.');
}
