// Analytics functionality
document.addEventListener('DOMContentLoaded', function() {
    initAccuracyChart();
    initRiskDistChart();
});

function initAccuracyChart() {
    const ctx = document.getElementById('accuracyChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
            datasets: [{
                label: 'Model Accuracy',
                data: [89.5, 91.2, 92.8, 93.5, 94.0, 94.2],
                borderColor: '#667eea',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 85,
                    max: 100
                }
            }
        }
    });
}

function initRiskDistChart() {
    const ctx = document.getElementById('riskDistChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['High Risk', 'Medium Risk', 'Low Risk'],
            datasets: [{
                data: [3, 7, 15],
                backgroundColor: ['#f5576c', '#fcb69f', '#a8edea'],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}
