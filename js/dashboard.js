function goToMainPage(){
    window.location.href = "../index.html";
}
        // Function to switch between pages
        function showPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });

            // Show selected page
            document.getElementById(pageId).classList.add('active');

            // Update sidebar active state
            document.querySelectorAll('.sidebar-item').forEach(item => {
                item.classList.remove('active');
            });

            // Find the clicked button and add active class
            event.currentTarget.classList.add('active');
        }

        // Yearly Student Population Line Chart
        const yearlyPopulationCtx = document.getElementById('yearlyPopulationChart').getContext('2d');
        const yearlyPopulationChart = new Chart(yearlyPopulationCtx, {
            type: 'line',
            data: {
                labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
                datasets: [{
                    label: 'Student Population',
                    data: [10500, 11200, 12000, 12800, 13500, 14200],
                    backgroundColor: 'rgba(22, 163, 74, 0.2)',
                    borderColor: '#16a34a',
                    borderWidth: 3,
                    pointBackgroundColor: '#16a34a',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: false,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            callback: function (value) {
                                return value.toLocaleString();
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        titleColor: '#16a34a',
                        titleFont: {
                            size: 16,
                            weight: 'bold'
                        },
                        bodyColor: '#333',
                        bodyFont: {
                            size: 14
                        },
                        padding: 12,
                        borderColor: '#16a34a',
                        borderWidth: 1,
                        displayColors: false,
                        callbacks: {
                            title: function (context) {
                                return 'Year: ' + context[0].label;
                            },
                            label: function (context) {
                                return 'Population: ' + context.raw.toLocaleString() + ' students';
                            }
                        }
                    }
                }
            }
        });

        // Department Population Chart
        const departmentCtx = document.getElementById('departmentChart').getContext('2d');
        const departmentChart = new Chart(departmentCtx, {
            type: 'bar',
            data: {
                labels: ['CABHA', 'CIT', 'CEN', 'CAM', 'GAG', 'CAS', 'CTE'],
                datasets: [{
                    label: 'Number of Students',
                    data: [1000, 500, 1000, 300, 200, 1000, 1000],
                    backgroundColor: [
                        '#16a34a', // green
                        '#3b82f6', // blue
                        '#ef4444', // red
                        '#f59e0b', // amber
                        '#8b5cf6', // purple
                        '#ec4899', // pink
                        '#06b6d4'  // cyan
                    ],
                    borderColor: [
                        '#15803d', // darker green
                        '#2563eb', // darker blue
                        '#dc2626', // darker red
                        '#d97706', // darker amber
                        '#7c3aed', // darker purple
                        '#db2777', // darker pink
                        '#0891b2'  // darker cyan
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });

        // Campus Population Chart - Sorted with highest highlighted
        const campusData = [
            { campus: 'Lucban', population: 5000 },
            { campus: 'Lucena', population: 1000 },
            { campus: 'Gumaca', population: 2000 },
            { campus: 'Alabat', population: 3000 },
            { campus: 'Catanauan', population: 3000 },
            { campus: 'Polillo', population: 1000 },
            { campus: 'Infanta', population: 2000 },
            { campus: 'Tagkawayan', population: 1000 },
            { campus: 'Tiaong', population: 2000 }
        ];

        // Sort data by population (descending)
        campusData.sort((a, b) => b.population - a.population);

        const campusLabels = campusData.map(item => item.campus);
        const campusPopulations = campusData.map(item => item.population);

        // Create background colors array with highest value highlighted
        const maxPopulation = Math.max(...campusPopulations);
        const campusBackgroundColors = campusPopulations.map(pop =>
            pop === maxPopulation ? '#16a34a' : '#64748b'
        );

        const campusCtx = document.getElementById('campusChart').getContext('2d');
        const campusChart = new Chart(campusCtx, {
            type: 'bar',
            data: {
                labels: campusLabels,
                datasets: [{
                    label: 'Student Population',
                    data: campusPopulations,
                    backgroundColor: campusBackgroundColors,
                    borderColor: campusBackgroundColors.map(color =>
                        color === '#16a34a' ? '#15803d' : '#475569'
                    ),
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return `Population: ${context.raw.toLocaleString()}`;
                            }
                        }
                    }
                }
            }
        });

        // Building Count Chart
        const buildingCtx = document.getElementById('buildingChart').getContext('2d');
        const buildingChart = new Chart(buildingCtx, {
            type: 'pie',
            data: {
                labels: ['Academic', 'Dormitories', 'Laboratories', 'Admin/Services'],
                datasets: [{
                    data: [35, 3, 10, 7],
                    backgroundColor: [
                        '#16a34a', // green
                        '#3b82f6', // blue
                        '#f59e0b', // amber
                        '#8b5cf6'  // purple
                    ],
                    borderColor: '#ffffff',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            boxWidth: 15,
                            padding: 15
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                const label = context.label || '';
                                const value = context.raw || 0;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = Math.round((value / total) * 100);
                                return `${label}: ${value} (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    
    (function () { function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'9395c63b611287e7',t:'MTc0NjE3MDYxOC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { var a = document.createElement('iframe'); a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a); if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })();