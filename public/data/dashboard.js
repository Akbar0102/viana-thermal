$(document).ready(function() {
    var ctxpie = document.getElementById('pie-energy').getContext('2d');
    var ctxenergy = document.getElementById("myChart-energy").getContext('2d');

    var jml = document.getElementById('total');
    var normal = document.getElementById('normal');
    var suspect = document.getElementById('suspect');

    window.chartColors = {
        red: 'rgb(255, 99, 132)',
        orange: 'rgb(255, 159, 64)',
        yellow: 'rgb(255, 205, 86)',
        green: 'rgb(75, 192, 192)',
        blue: 'rgb(54, 162, 235)',
        purple: 'rgb(153, 102, 255)',
        grey: 'rgb(201, 203, 207)'
    };

    socket.on('data', function(data){
        localStorage.setItem("date", data.date);
    });
    
    var config = {
        type: 'pie',
        data: {
            datasets: [{
                data: [300,50,100],
                backgroundColor: [
                    window.chartColors.red,
                    window.chartColors.blue,
                    window.chartColors.yellow,
                ],
                label: 'Dataset 1'
            }],
            labels: []
        },
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            animation: {
                animateScale: true,
                animateRotate: true
            },
            legend: {
                display: true,
            }
        }
    };

    var config_line = {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Jumlah Capture', // Name the series
                data: [], // Specify the data values array
                fill: false,
                borderColor: '#ff4e4e', // Add custom color border (Line)
                backgroundColor: '#ff4e4e', // Add custom color background (Points and Fill)
                borderWidth: 3 // Specify bar border width
                },
            ]},
        options: {
            responsive: true, // Instruct chart js to respond nicely.
            maintainAspectRatio: true, // Add to prevent default behaviour of full-width/height 
            legend: {
                display: true,
                position: "top"
            }
        }
    };
    
    var myDoughnutChart = new Chart(ctxpie, config);
    var myChartenergy = new Chart(ctxenergy, config_line);

    (function update() {
        $.ajax({
            url: '/api/face/count',
            type: 'POST',
            dataType: 'json',
            data: {date: localStorage.getItem("date")},
            success: function(response){
                jml.innerHTML = response[0].jumlah+" ";
                normal.innerHTML = response[0].normal+" ";
                suspect.innerHTML = response[0].suspect+" ";
    
                config.data.datasets[0].data = Object.values(response[0]);
                config.data.labels = Object.keys(response[0]);
    
                myDoughnutChart.update();
            }
        }).then(function() {           // on completion, restart
           setTimeout(update, 60000);  // function refers to itself
        });
    })();

    (function update() {
        $.ajax({
            url: '/api/face/daily',
            type: 'POST',
            dataType: 'json',
            data: {date: localStorage.getItem("date")},
            success: function(response){
                let result = response.map(a => a.jam);
                let jml = response.map(a => a.jumlah);
                config_line.data.labels = result;
                config_line.data.datasets[0].data = jml;

                var length = config_line.data.labels.length;
                if(length >= 10){
                    config_line.data.datasets[0].data.shift()
                    config_line.data.labels.shift()
                }
    
                myChartenergy.update();
            }                       // pass existing options
        }).then(function() {           // on completion, restart
           setTimeout(update, 60000);  // function refers to itself
        });
    })();
    
});