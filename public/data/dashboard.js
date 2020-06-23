$(document).ready(function() {
    $.ajax({
        url: '/api/face/count',
        type: 'POST',
        dataType: 'json',
        data: {date: '2020-05-09'},
        success: function(response){
            const el = document.getElementById('total');
            el.innerHTML = response[0].jumlah+" ";
            
        }
    });

    $.ajax({
        url: '/api/face/type',
        type: 'POST',
        dataType: 'json',
        data: {date: '2020-05-09', type: 'normal'},
        success: function(response){
            const el = document.getElementById('normal');
            el.innerHTML = response[0].jumlah+" ";
            
        }
    });

    $.ajax({
        url: '/api/face/type',
        type: 'POST',
        dataType: 'json',
        data: {date: '2020-05-09', type: 'suspect'},
        success: function(response){
            const el = document.getElementById('suspect');
            el.innerHTML = response[0].jumlah+" ";
            
        }
    });
});