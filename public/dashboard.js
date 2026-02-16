// Dashboard functionality
document.addEventListener('DOMContentLoaded', function() {
    initChart();
    updateStats();
    setInterval(updateStats, 5000);
});

function initChart() {
    const ctx = document.getElementById('riskChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
            datasets: [{
                label: 'High Risk Zones',
                data: [2, 3, 2, 4, 3, 3, 3],
                borderColor: '#f5576c',
                backgroundColor: 'rgba(245, 87, 108, 0.1)',
                tension: 0.4
            }, {
                label: 'Medium Risk Zones',
                data: [5, 6, 7, 6, 7, 8, 7],
                borderColor: '#fcb69f',
                backgroundColor: 'rgba(252, 182, 159, 0.1)',
                tension: 0.4
            }, {
                label: 'Low Risk Zones',
                data: [18, 16, 16, 15, 15, 14, 15],
                borderColor: '#a8edea',
                backgroundColor: 'rgba(168, 237, 234, 0.1)',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function updateStats() {
    document.getElementById('high-risk-count').textContent = 3;
    document.getElementById('medium-risk-count').textContent = 7;
    document.getElementById('low-risk-count').textContent = 15;
    document.getElementById('sensor-count').textContent = 42 + Math.floor(Math.random() * 3);
}
