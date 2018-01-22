/*Seting up variables*/
var isRunning = false;
var fastint;
var time;
var _user;
var reached;

$(document).ready(function() {
    _user = JSON.parse(localStorage.getItem('User')) 
    if(_user){
        if(!_user.Target_Fast){
            $("#agregar_meta").modal('open')
            $('#continuar').click(function() {
                window.location.href = 'setings.html';
            })
        }
        if(!_user.accept_disclaimer){ 
            $("#aceptaDisclaimer_modal").modal('open') 
            $('#AceptaDisclaimer').click(function() {
                _user.accept_disclaimer = true;
                localStorage.setItem("User",  JSON.stringify(_user))
            })
        }
        /* Percentage and time show */
        if (localStorage.getItem("Fast_Start")) {
            time = new Date(localStorage.getItem("Fast_Start"));
            
            $('#inicio').html(" "+ time.getDay() + "<br>" +time.toLocaleTimeString())
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
            $("#h").html("0")
            $("#m").html("00")
            $("#s").html("00")
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
                getMonthAndDate(cc)
                time = cc
                localStorage.setItem("Fast_Start", cc);
                fastint = window.setInterval(function() {
                    updateDate(cc)
                }, 1000);
                fastint;
            } else {
                var moment = new Date()  
                if(parseInt($("#h").html()) >= _user.Target_Fast){
                    $("#percent").html(parseInt(cont.getAttribute('data-pct')))
                    $("#inicio_ayuno").html(time.toLocaleTimeString())
                    $("#fin_ayuno").html(moment.toLocaleTimeString())
                    $("#horas_ayuno").html($("#h").text() + "hrs")
                    $("#minutos_ayuno").html($("#m").text() + "min")
                    $("#racha_ayuno").html(_user.Fast_Hit) 
                    $("#prox_ayuno").html("0")
                    $('#completado').modal('open');
                    $('#terminar').one('click',function() { 
                        clearInterval(fastint);
                        reached = true
                        _user.Total_Fast_Time = _user.Total_Fast_Time + parseInt($("#h").html())
                        _user['User_Fasts'].push(
                        {   
                            "Start_Date"        : time.getTime(),
                            "Finish_Date"       : moment.getTime(),
                            "total_fast_time"   : parseInt($("#h").html()),
                            "Target_reached"    : reached
                        });
                        _user.Fast_Hit = parseInt(_user.Fast_Hit) + 1
                        localStorage.setItem("User",  JSON.stringify(_user)) 
                    
                        localStorage.removeItem('Fast_Start');
                        $("#h").html("0")
                        $("#m").html("00")
                        $("#s").html("00")
                        $('#cont').attr('data-pct', 0);
                        $('#control').removeClass('pause_fast')
                        $('#control').addClass('start_fast')
                        $e.text("Iniciar");
                        isRunning = false;
                    })
                    $('#cancelar').click(function() {
                        $('#completado').modal('close');
                    })
                }
                else if(parseInt($("#h").html()) >= 12 && parseInt($("#h").html()) <= _user.Target_Fast ){
                    $("#percent2").html(parseInt(cont.getAttribute('data-pct')))
                    $("#inicio_ayuno2").html(time.toLocaleTimeString())
                    $("#fin_ayuno2").html(moment.toLocaleTimeString())
                    $("#horas_ayuno2").html($("#h").text() + "hrs")
                    $("#minutos_ayuno2").html($("#m").text() + "min")
                    $("#racha_ayuno2").html(_user.Fast_Hit)
                    $('#no_completado').modal('open'); 
                        $('#terminar_no_completado').one('click',function() { 
                            clearInterval(fastint);
                            reached = false
                            _user.Total_Fast_Time = _user.Total_Fast_Time + parseInt($("#h").html())
                            _user['User_Fasts'].push(
                            {   
                                "Start_Date"        : time.getTime(),
                                "Finish_Date"       : moment.getTime(),
                                "total_fast_time"   : parseInt($("#h").html()),
                                "Target_reached"    : reached
                            });
                            _user.Fast_Hit = 0
                            localStorage.setItem("User",  JSON.stringify(_user))
                            
                            localStorage.removeItem('Fast_Start');
                            $("#h").html("0")
                            $("#m").html("00")
                            $("#s").html("00")
                            $('#cont').attr('data-pct', 0);
                            $('#control').removeClass('pause_fast')
                            $('#control').addClass('start_fast')
                            $e.text("Iniciar");
                        }) 
                        $('#cancelar_no_completado').click(function() {
                            $('#no_completado').modal('close');
                        })
                }
                else{
                    $("#horas_ayuno3").html($("#h").text() + "hrs")
                    $("#racha_ayuno3").html(_user.Fast_Hit)
                    $('#ayuno_invalido').modal('open'); 
                    $('#terminar_invalido').one('click',function() {
                        clearInterval(fastint);
                        reached = false
                        localStorage.removeItem('Fast_Start');
                        $("#h").html("0")
                        $("#m").html("00")
                        $("#s").html("00")
                        $('#cont').attr('data-pct', 0);
                        $('#control').removeClass('pause_fast')
                        $('#control').addClass('start_fast')
                        $e.text("Iniciar");
                    }) 
                    $('#cancelar_invalido').click(function() {
                        $('#ayuno_invalido').modal('close');
                    })
                }
            }
        });
    
        $('#restart').click(function() {
            $('#reiniciarAyuno').modal('open'); 
            $("#fasted_hours").html($("#h").text())
            $('#reiniciar').one('click',function() {  
                $("#h").html("0")
                $("#m").html("00")
                $("#s").html("00")
                $('#inicio').html(" ")
                $('#fin').html(" ")
                clearInterval(fastint);
                var cc = new Date();
                var a = cc.getTime();
                ms = Math.abs(a - cc);
                cc.setTime(a);
                getMonthAndDate(cc)
                time = cc
                localStorage.setItem("Fast_Start", cc);
                fastint = window.setInterval(function() {
                    updateDate(cc)
                }, 1000);
                fastint;
            }) 
            $('#cancelar_reinicio').click(function() {
                $('#reiniciarAyuno').modal('close');
            })
        });
    }
    else if(!_user){ 
        window.location.href = 'profile.html';
        }
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

    var percentage = (100 / (_user.Target_Fast * 3600000)) * ms; 
 
    var hours = parseInt(ms / hour, 10);
    ms -= hours * hour;
    var minutes = parseInt(ms / minute, 10);
    ms -= minutes * minute
    var formattedMinutes = ("0" + minutes).slice(-2);
    var seconds = parseInt(ms / second, 10);
 
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
    return $("#h").html(hours), $("#m").html(formattedMinutes), $("#s").html(seconds)
};

function getMonthAndDate(d){
     
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
    var showEndDate = new Date(showStartdate.valueOf() + (parseInt(_user.Target_Fast) * 3600000)) 
    var n = month[showStartdate.getMonth()];
    var nn = month[showEndDate.getMonth()];

    $('#inicio').html(n +" "+ showStartdate.getDate() + "<br>" +showStartdate.toLocaleTimeString())
    $('#fin').html(nn +" "+ showEndDate.getDate() + "<br>" +showEndDate.toLocaleTimeString())
}
