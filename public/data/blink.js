$(document).ready(function() {
    setInterval(function(){ 
        var element = document.getElementById("blinkdiv");
        element.classList.add("blink");
        element.innerHTML = "Video Analytics *";
    }, 3000)


    $('#analytic').click(function(event) {
        localStorage.setItem("kelip", "true");
    });

    var kelip = localStorage.getItem("kelip");

    if(kelip == "true"){
        var element = document.getElementById("blinkdiv");
        element.classList.remove("blink");
        element.innerHTML = "Video Analytics";
    }

    $(".navbar-nav li a").click(function () {
        var id = $(this).attr("id");

        $('#' + id).siblings().find(".active").removeClass("active");
        $('#' + id).addClass("active");
        localStorage.setItem("selectedolditem", id);
    });
    
    var selectedolditem = localStorage.getItem('selectedolditem');

    if (selectedolditem != null) {
        $('#' + selectedolditem).siblings().find(".active").removeClass("active");
        $('#' + selectedolditem).addClass("active");
    }

});