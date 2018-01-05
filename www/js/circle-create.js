/*Seting up variables*/
var isRunning = false;
var fastint; 

$(document).ready(function() {
    /* Percentage and time show */
    if (localStorage.getItem("Fast_Start")) {
        var time = new Date(localStorage.getItem("Fast_Start"));
        var storedTime = time.getTime();
        getMonthAndDate(localStorage.getItem("Fast_Start"))
        fastint = window.setInterval(function() {
            updateDate(storedTime)
        }, 1000);
        fastint;
        isRunning = true;
        $('#control').text("Detener")
        $('#control').addClass('pause_fast')
    } else {
        $('#control').text("Iniciar")
        $('#control').addClass('start_fast')
    } 

    $('#control').click(function() {
        var $e = $(this);
        if (!isRunning) {
            //Start the counter
            isRunning = true;
            $('#control').removeClass('start_fast')
            $('#control').addClass('pause_fast')
            $e.text("Detener");
            var cc = new Date();
            var a = cc.getTime();
            ms = Math.abs(a - cc);
            cc.setTime(a);
            localStorage.setItem("Fast_Start", cc);
            fastint = window.setInterval(function() {
                updateDate(cc)
            }, 1000);
            fastint;
        } else {
            clearInterval(fastint);
            localStorage.removeItem('Fast_Start'); 
            isRunning = false;            
            $("#h").html("0")
            $("#m").html("00")
            $("#s").html("00")
            $('#cont').attr('data-pct', 0);
            $('#control').removeClass('pause_fast')
            $('#control').addClass('start_fast')
            $e.text("Iniciar");
        }
    });
});
 

function updateDate(_cc) {
    var c = new Date();
    timeDifference(_cc, c);
}

function timeDifference(d, dd) {
    var second = 1 * 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24,
        ms = Math.abs(d - dd);

    var _user = JSON.parse(localStorage.getItem('User')) 
    var percentage = (100 / (_user.Target_Fast * 3600000)) * ms; 

    //Getting the time as DD/HH/MM/SS// 
    var hours = parseInt(ms / hour, 10);
    ms -= hours * hour;
    var minutes = parseInt(ms / minute, 10);
    ms -= minutes * minute
    var formattedMinutes = ("0" + minutes).slice(-2);
    var seconds = parseInt(ms / second, 10);

    /*Circle modifier*/
    var val = parseInt(percentage)
    var $circle = $('#svg #bar');

    if (isNaN(val)) {
        val = 0;
    } else {
        var r = $circle.attr('r');
        var c = Math.PI * (r * 2);
        var percval = val;
        if (val < 0) {
            val = 0;
        }
        if (val > 100) {
            val = 100;
        }

        var pct = ((100 - val) / 100) * c;

        $circle.css({
            strokeDashoffset: pct
        });

        $('#cont').attr('data-pct', percval);
    }

   /* return [
        hours + " : ",
        formattedMinutes + " : ",
        seconds + "<br />"
    ].join(" ");    
    */
    //console.log(hours + " Hours")
    //console.log(formattedMinutes + " minutes")
    //console.log(seconds + " seconds") 
    
    $("#h").html(hours)
    $("#m").html(formattedMinutes)
    $("#s").html(seconds)
};

function getMonthAndDate(d){
    
    var _user = JSON.parse(localStorage.getItem('User')) 
    var month = new Array();
    month[0] = "Enero";
    month[1] = "Febrero";
    month[2] = "Marzo";
    month[3] = "Abril";
    month[4] = "Mayo";
    month[5] = "Junio";
    month[6] = "Julio";
    month[7] = "Agosto";
    month[8] = "Septiembre";
    month[9] = "Octubre";
    month[10] = "Noviembre";
    month[11] = "Diciembre";

    var showStartdate = new Date(d);
    var showEndDate = new Date(d)
    showEndDate.setHours(showStartdate.getHours() + _user.Target_Fast)
    
    //showEndDate.setMilliseconds(showStartdate.getMilliseconds() + (_user.Target_Fast * 3600000))
    console.log(showStartdate.valueOf())
    console.log(showEndDate.valueOf())

    var n = month[showStartdate.getMonth()];
    var nn = month[showEndDate.getMonth()];

    $('#inicio').html(n +" "+ showStartdate.getDay() + "<br>" +showStartdate.toLocaleTimeString())
    $('#fin').html(nn +" "+ showEndDate.getDay() + "<br>" +showEndDate.toLocaleTimeString())
}
