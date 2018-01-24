var _user; 
var i = 0
var showMore
var month = new Array();
var showArray
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

    if(_user)
    { 
        _user.User_Fasts.reverse()  
        LoadMore()
    }
    else
    {
        alert('Por favor dirijase a la seccion de perfil para darse de alta')
    }
});

$( "#LoadMore" ).click(function() { 
    LoadMore()
})

function LoadMore(){
    showMore = i + 5
    showArray = _user.User_Fasts.slice(i , showMore)  
    if(showArray.length <= 0)
    {
        //send alert no data 
        $('#noHistoryFound').modal('open');
        $('#startFast').one('click',function() {  
            window.location.href = 'index.html';
        });
    }
    else
    {
        for(var x = 0; x < showArray.length; x++){
            var showStartdate = new Date(showArray[x].Start_Date)
            var showEndDate = new Date(showArray[x].Finish_Date) 
            var n = month[showStartdate.getMonth()];
            var nn = month[showEndDate.getMonth()];
            if(showArray[x].Target_reached)
            {
                $("#Fast_History").append('<div class="row" style="margin-bottom: 0 !important"><div class="col s12 m5"><div class="card-panel blueish-white border_green"><div class="row center-align" style="margin-bottom: 0 !important"><div class="col s4">Inicio: <br>' + n +' '+ showStartdate.getDate() + '<br>' +showStartdate.toLocaleTimeString() + '</div><div class="col s4">Fin: <br>' + nn +' '+ showEndDate.getDate() + '<br>' +showEndDate.toLocaleTimeString() + '</div><div class="col s4"><br>Total: ' +showArray[x].total_fast_time +'</div></div></div></div></div>'); 
            }
            else
            {
                $("#Fast_History").append('<div class="row" style="margin-bottom: 0 !important"><div class="col s12 m5"><div class="card-panel blueish-white border_red"><div class="row center-align" style="margin-bottom: 0 !important"><div class="col s4">Inicio: <br>' + n +' '+ showStartdate.getDate() + '<br>' +showStartdate.toLocaleTimeString() + '</div><div class="col s4">Fin: <br>' + nn +' '+ showEndDate.getDate() + '<br>' +showEndDate.toLocaleTimeString() + '</div><div class="col s4"><br>Total: ' +showArray[x].total_fast_time +'</div></div></div></div></div>'); 
            }
        }
        i = showMore;
    }
}