var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["заяц","eж", "волк"],
        datasets: [{
            label: "Вес зверей",
            backgroundColor: ['red', 'yellow', 'green'],
            borderColor: 'rgb(255, 99, 132)',
            data: [5, 25, 20],
        }]
    },

    // Configuration options go here
    options: {}
});

















var ctx = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'radar',

    // The data for our dataset
    data: {
        labels: ["заяц","eж", "волк"],
        datasets: [{
            label: "Вес зверей",
            backgroundColor: ['red', 'yellow', 'green'],
            borderColor: 'rgb(255, 99, 132)',
            data: [5, 10, 20],
        }]
    },

    // Configuration options go here
    options: {}
});

var ctx = document.getElementById('myChart3').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["заяц","eж", "волк"],
        datasets: [{
            label: "Вес зверей",
            backgroundColor: ['red', 'yellow', 'green'],
            borderColor: 'rgb(255, 99, 132)',
            data: [5, 4, 20],
        }]
    },

    // Configuration options go here
    options: {}
});

