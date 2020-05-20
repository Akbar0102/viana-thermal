$(document).ready(function() {
    var data;
    var myChart;
    var context;
    
    var data = {
        labels: [],
        datasets: [{
            data: [],
            label: [],
            backgroundColor: [
                'rgba(46, 204, 113,1.0)',
                'rgba(52, 152, 219,1.0)',
                'rgba(155, 89, 182,1.0)',
                'rgba(52, 73, 94,1.0)',
                'rgba(26, 188, 156,1.0)',
                'rgba(241, 196, 15,1.0)',
                'rgba(230, 126, 34,1.0)',
                'rgba(231, 76, 60,1.0)',
                'rgba(149, 165, 166,1.0)'
            ],
        }]
    }

    var img = document.getElementById('img'); 
    var socket_chart = io.connect('http://localhost:8090/chart');
    var socket = io.connect('http://localhost:8090/objectdetection');

    socket.on('data', function(data) {
        img.src = 'data:image/jpeg;base64,' + data;
    });

    context = document.getElementById('objectChart').getContext('2d');
    myChart = new Chart(context,{
    type: 'bar',
    data: data,
    animation:{ 
        animateScale:true
    }
    });

    function proses(response){
        for (var i=0; i<response.size; i++) {
            data.labels[i] = response.label[i];
            data.datasets[0].data[i] = response.value[i];
        }
    }

    function clear(){
        data.labels.length = 0;
        data.datasets[0].data.length = 0;
    }

    function display(response){
        clear();
        proses(response);
        myChart.update(); 
    }

    function alertHtml(alert){
        var safe = `<div class="alert alert-success alert-dismissible fade show" role="alert">
        <span class="alert-icon"><i class="ni ni-like-2"></i></span>
        <span class="alert-text"><strong>Safe!</strong> The area around the CCTV is safe!</span>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>`;
        var danger = ` <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <span class="alert-icon"><i class="ni ni-fat-remove"></i></span>
        <span class="alert-text"><strong>Danger!</strong> The environment around the CCTV area is estimated to be a hazard!</span>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>`;
        var element = document.getElementById('warning');
        if(alert == 'danger'){
            element.innerHTML = danger;
        }else{
            element.innerHTML = safe;
        }
    }

    socket_chart.on('vote', function (response) {
        display(response.object);
        alertHtml(response.alert);
    });
});