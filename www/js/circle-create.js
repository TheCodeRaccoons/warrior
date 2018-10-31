/*Seting up variables*/
var isRunning = false;
var fastint;
var time;
var _user;
var reached;
var control

$(document).ready(function() 
{ 
    if(_user)
    {
         $(".name").html(_user.User_Name) 
        //--- If there is a user check for a Fast Goal and the Disclaimer Accepted
        if(!_user.Target_Fast){
            $("#agregar_meta").modal('open',{dismissible: false,})
            $('#modal-b-add_goal').click(function() {
                window.location.href = 'setings.html';
            })
        }

        if(!_user.accept_disclaimer){ 
            $("#aceptaDisclaimer_modal").modal('open',{dismissible: false,}) 
            $('#modal-b-medical_disclaimer').click(function() {
                _user.accept_disclaimer = true;
                localStorage.setItem("User",  JSON.stringify(_user))
            })
        }

        //--- Revisar y limpiar codigo...
        /* Percentage and time show */
        if (localStorage.getItem("Fast_Start")) {
            time = new Date(localStorage.getItem("Fast_Start"));
            $('#inicio').html(" "+ time.getDay() + "<br>" +time.toLocaleTimeString())
            var storedTime = time.getTime();
            getMonthAndDate(localStorage.getItem("Fast_Start"))
            updateDate(storedTime)
            fastint = window.setInterval(function() {
                updateDate(storedTime)
            }, 1000);
            fastint;
            isRunning = true;
            switch(_user.Language)
                {
                    case "1":
                        control ="Detener"
                        break;
                    case "2":       
                        control ="Stop" 
                        break;
                    default:
                        control ="Detener"
                        break;
                }
            $('#control').text(control)
            $('#control').addClass('pause_fast')
            $('#restart_section').html('<div id="restart"><img src="img/restart.png" width="100%"></div>')
            $('#edit').html('<img src="img/edit.png" width="15%" onClick="wth()"><br>')
        }
        else 
        {
            $('#edit').html('<br>')
            switch(_user.Language)
                {
                    case "1":
                        control ="Iniciar"
                        break;
                    case "2":       
                        control ="Start" 
                        break;
                    default:
                        control ="Iniciar"
                        break;
                }
            $('#control').text(control)
            $('#control').addClass('start_fast')
            $("#h").html("0")
            $("#m").html("00")
            $("#s").html("00")
        } 

        $('#control').click(function(){
            if (!isRunning) {
                //---
                StartFast($(this))
            } else {
                if(parseInt($("#h").html()) >= _user.Target_Fast)
                {
                    //---
                    FastCompleted($(this))
                }
                else if(parseInt($("#h").html()) > 12 && parseInt($("#h").html()) < _user.Target_Fast )
                {
                    //---
                    FastNotCompleted($(this))
                }
                else{
                    //---
                    InvalidFast($(this))
                }
            }
        });
    }
    else if(!_user)
    {
        //--- If no user Registered Create one
        window.location.href = 'profile.html';
    }
    $('#acceptMsg').click(function() 
    {
        location.reload();
    })

    if (!_user.hasOwnProperty("User_Last_Weight_Date")) 
    {  
        
        $('#ingresar_meta').modal('open',{dismissible: false});
        $('#modal-b-set-weight').one('click',function() {
            window.location.href = 'profile.html';
        });
    }

});

    //--- Complete the fast and open modal
    function FastCompleted(e)
    { 
        var moment = new Date()  

        $("#percent").html(parseInt(cont.getAttribute('data-pct')))
        $("#inicio_ayuno").html(time.toLocaleTimeString())
        $("#fin_ayuno").html(moment.toLocaleTimeString())
        $("#horas_ayuno").html($("#h").text() + "hrs")
        $("#minutos_ayuno").html($("#m").text() + "min")
        $("#racha_ayuno").html(_user.Fast_Hit) 
        $("#prox_ayuno").html("0")
        $('#completado').modal("open",{dismissible: false,}); 

        $('#modal-b-fast-completed-finish').one('click',function() { 
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

            SetAchievements()

            localStorage.setItem("User",  JSON.stringify(_user)) 
        
            localStorage.removeItem('Fast_Start');
            $("#h").html("0")
            $("#m").html("00")
            $("#s").html("00")
            $('#cont').attr('data-pct', 0);
            $('#control').removeClass('pause_fast')
            $('#control').addClass('start_fast')

            switch(_user.Language)
                {
                    case "1":
                        control ="Iniciar"
                        break;
                    case "2":       
                        control ="Start" 
                        break;
                    default:
                        control ="Iniciar"
                        break;
                }
            e.text(control);
            $('#edit').html('<br>')
            isRunning = false;
            $('#restart_section').html('') 
            
            if(GetDifDays(_user.User_Last_Weight_Date) > 14)
            {
                $('#daysSinceUpdate').html(GetDifDays(_user.User_Last_Weight_Date));
                $('#actualizar_meta').modal('open',{dismissible: false});
                $('#modal-b-update-weight').one('click',function() {
                    window.location.href = 'profile.html';
                });
                
            }
            else
            {
                console.log(GetDifDays(_user.User_Last_Weight_Date))
            }
        })
        $('#modal-b-fast-completed-cancel').click(function() {
            $('#completado').modal('close');
        })
    }

    //--- finish an failed fast and open modal
    function FastNotCompleted(e)
    {
        var moment = new Date()  

        $("#percent2").html(parseInt(cont.getAttribute('data-pct')))
        $("#inicio_ayuno2").html(time.toLocaleTimeString())
        $("#fin_ayuno2").html(moment.toLocaleTimeString())
        $("#horas_ayuno2").html($("#h").text() + "hrs")
        $("#minutos_ayuno2").html($("#m").text() + "min")
        $("#racha_ayuno2").html(_user.Fast_Hit)
        $("#no_completado").modal('open',{dismissible: false}); 
            $('#modal-b-not-completed-finish').one('click',function() { 
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
                SetAchievements()
                localStorage.setItem("User",  JSON.stringify(_user))
                
                localStorage.removeItem('Fast_Start');
                $("#h").html("0")
                $("#m").html("00")
                $("#s").html("00")
                $('#cont').attr('data-pct', 0);
                $('#control').removeClass('pause_fast')
                $('#control').addClass('start_fast')
    
                switch(_user.Language)
                    {
                        case "1":
                            control ="Iniciar"
                            break;
                        case "2":       
                            control ="Start" 
                            break;
                        default:
                            control ="Iniciar"
                            break;
                    }
                e.text(control);
                $('#edit').html('<br>')
                isRunning = false;
                $('#restart_section').html('') 
                
            }) 
            $('#modal-b-not-completed-cancel').click(function() {
                $('#no_completado').modal('close');
            })
    }

    //--- Finish an invalid fast and open modal
    function InvalidFast(e)
    {
        $("#horas_ayuno3").html($("#h").text() + "hrs")
        $("#racha_ayuno3").html(_user.Fast_Hit)
        $('#ayuno_invalido').modal('open',{dismissible: false}); 
        $('#modal-b-invalid-fast-ok').one('click',function() {
            clearInterval(fastint);
            reached = false
            localStorage.removeItem('Fast_Start');
            $("#h").html("0")
            $("#m").html("00")
            $("#s").html("00")
            $('#cont').attr('data-pct', 0);
            $('#control').removeClass('pause_fast')
            $('#control').addClass('start_fast')

            switch(_user.Language)
                {
                    case "1":
                        control ="Iniciar"
                        break;
                    case "2":       
                        control ="Start" 
                        break;
                    default:
                        control ="Iniciar"
                        break;
                }
            e.text(control);
            $('#restart_section').html('')
            $('#edit').html('<br>')
            isRunning = false;
        })
        $('#modal-b-invalid-fast-cancel').click(function() {
            $('#ayuno_invalido').modal('close');
        })
    }

    //--- Start Fasting
    function StartFast(e)
    {
        isRunning = true;
        $('#control').removeClass('start_fast')
        $('#control').addClass('pause_fast')

        switch(_user.Language)
        {
            case "1":
                control ="Detener"
                break;
            case "2":       
                control ="Stop" 
                break;
            default:
                control ="Detener"
                break;
        }
        e.text(control);
        var cc = new Date();
        var a = cc.getTime();
        ms = Math.abs(a - cc);
        cc.setTime(a);
        getMonthAndDate(cc)
        time = cc
        localStorage.setItem("Fast_Start", cc);
        $('#restart_section').html('<div id="restart"><img src="img/restart.png" width="100%"></div>')
        $('#edit').html('<img src="img/edit.png" width="15%" onClick="wth()"><br>')
        fastint = window.setInterval(function() {
            updateDate(cc)
        }, 1000);
        fastint 
    }

    //--- Runs method to keep the counter and the load bar mooving 
    function updateDate(_cc)
    {
        var c = new Date();
        timeDifference(_cc, c);
    }

    //--- Generates the data that will be shown while fasting
    function timeDifference(d, dd) 
    {
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
    }

    function GetDifDays(date)
    {
        var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
        var firstDate = new Date(date);
        var secondDate = new Date();

        return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
    }

    //--- Restart Button
    $(document).on('click','#restart',function(){
        $("#fasted_hours").html($("#h").text())
        $('#reiniciarAyuno').modal('open',{dismissible: false}); 
        $('#modal-b-restart_ok').one('click',function() { 
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
            updateDate(cc);
            fastint = window.setInterval(function() {
                updateDate(cc);
            }, 1000);
            fastint;
        })
        $('#modal-b-restart_cancel').click(function() {
            $('#reiniciarAyuno').modal('close'); 
    })
});


function SetAchievements()
{
    if(_user.Total_Fast_Time >= 14 && _user.Total_Fast_Time <= 100)
    {
        _user.Levels.Squire = true;
    }
    else if (_user.Total_Fast_Time >= 101 && _user.Total_Fast_Time <= 300)
    {
        _user.Levels.Squire = true;
        _user.Levels.Apprentice = true;
    }
    else if (_user.Total_Fast_Time >= 301 && _user.Total_Fast_Time <= 450)
    {
        _user.Levels.Squire = true;
        _user.Levels.Apprentice = true;
        _user.Levels.Knight = true;
    }
    else if (_user.Total_Fast_Time >= 451 && _user.Total_Fast_Time <= 1000)
    {
        _user.Levels.Squire = true;
        _user.Levels.Apprentice = true;
        _user.Levels.Knight = true;
        _user.Levels.Warrior = true;
    }
    else if (_user.Total_Fast_Time > 1000)
    {
        _user.Levels.Squire = true;
        _user.Levels.Apprentice = true;
        _user.Levels.Knight = true;
        _user.Levels.Warrior = true;
        _user.Levels.Spartan = true;   
    }

    if(_user.Total_Fast_Time > 0)
    {
        _user.Achievements.First_Timer = true;
    }
    if(_user.Fast_Hit >= 5)
    {
        _user.Achievements.X5 = _user.Achievements.X5 + 1;
    }
    if(_user.Fast_Hit >= 10)
    {
        _user.Achievements.X10 = _user.Achievements.X10 + 1;
    }
    if(_user.Fast_Hit >= 15)
    {
        _user.Achievements.Half_Waypoint = _user.Achievements.Half_Waypoint + 1;
    }
    if(_user.Fast_Hit >= 30)
    {
        _user.Achievements.Unstoppable = _user.Achievements.Unstoppable + 1;
    }
    if(_user.Fast_Hit >= 60)
    {
        _user.Achievements.Warrior = _user.Achievements.Warrior + 1;
    }
    if(parseInt(cont.getAttribute('data-pct')) > 100 )
    {
        _user.Achievements.Over_Hundred = _user.Achievements.Over_Hundred + 1;
    }
    if(parseInt(cont.getAttribute('data-pct')) == 100 )
    {
        _user.Achievements.Just_In_Point = _user.Achievements.Just_In_Point + 1;
    }
    if(parseInt($("#h").html()) > _user.Target_Fast )
    {
        _user.Achievements.One_More = _user.Achievements.One_More + 1;
    }
    if(parseInt($("#h").html()) > 18 )
    {
        _user.Achievements.Hard_Core = _user.Achievements.Hard_Core + 1;
    }

}