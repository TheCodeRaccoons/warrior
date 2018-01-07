var _user; 
var month = new Array();
$(document).ready(function() { 
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
    _user = JSON.parse(localStorage.getItem('User'))
    if(_user){ 
        for(var i = 0; i < _user.User_Fasts.length; i++){
            var showStartdate = new Date(_user.User_Fasts[i].Start_Date)
            var showEndDate = new Date(_user.User_Fasts[i].Finish_Date) 
            var n = month[showStartdate.getMonth()];
            var nn = month[showEndDate.getMonth()];
            if(_user.User_Fasts[i].Target_reached)
            {
                $("#Fast_History").append('<div class="row" style="margin-bottom: 0 !important"><div class="col s12 m5"><div class="card-panel blueish-white border_green"><div class="row center-align" style="margin-bottom: 0 !important"><div class="col s4">Inicio: <br>' + n +' '+ showStartdate.getDate() + '<br>' +showStartdate.toLocaleTimeString() + '</div><div class="col s4">Fin: <br>' + nn +' '+ showEndDate.getDate() + '<br>' +showEndDate.toLocaleTimeString() + '</div><div class="col s4"><br>Total: ' +_user.User_Fasts[i].total_fast_time +'</div></div></div></div></div>'); 
            }
            else
            {
                $("#Fast_History").append('<div class="row" style="margin-bottom: 0 !important"><div class="col s12 m5"><div class="card-panel blueish-white border_red"><div class="row center-align" style="margin-bottom: 0 !important"><div class="col s4">Inicio: <br>' + n +' '+ showStartdate.getDate() + '<br>' +showStartdate.toLocaleTimeString() + '</div><div class="col s4">Fin: <br>' + nn +' '+ showEndDate.getDate() + '<br>' +showEndDate.toLocaleTimeString() + '</div><div class="col s4"><br>Total: ' +_user.User_Fasts[i].total_fast_time +'</div></div></div></div></div>'); 
            }
        }
    }else{
        alert('Por favor dirijase a la seccion de perfil para darse de alta')
    }
});
