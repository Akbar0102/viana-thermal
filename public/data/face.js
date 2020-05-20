$(document).ready(function() {
    var img = document.getElementById('img');
    var socket = io.connect('http://localhost:8090/face')
    var count = 0;
    var arr = [];

    socket.on('data', function(data){
        var res =`/WLIR/Preview/${data.dir}/${data.filename}`;
        var confidence = data.temp;
        var time = data.time;
        var date = data.date;
        count++;
        $('#imgcol ol').prepend(
            `<li style="list-style-type: none";>
                <div class="row">
                    <div class="col-xl-4">
                        <img class="mb-2 zoom" src="${res}" width="100" height="100"/>
                    </div>
                    <div class="col-xl-8">
                        <p class="ml-2">${confidence}<br>${time}<br>${date}</p>
                    </div>
                </div>
            </li>`
            );

        //alarm
        $('#hcol ol').append(
            `<li style="list-style-type: none; float: left;";>
                <div class="row">
                    <div class="col-xl-4">
                        <img class="mb-2 zoom" src="${res}" width="100" height="100"/>
                    </div>
                    <div class="col-xl-8">
                        <p style="margin-left: 20px !important" class="ml-2">${confidence}<br>${time}<br>${date}</p>
                    </div>
                </div>
            </li>`
            );
        if(count > 5){
            var list = document.getElementById("faceid");
            list.removeChild(list.childNodes[5]);  

            var listA = document.getElementById("alarmid");
            listA.removeChild(listA.childNodes[0]); 
        }
    })


});