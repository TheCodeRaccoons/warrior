var _user; 
var i = 0
var i_w = 0
var showMore
var showMore_weight
var month = new Array();
var showArray
var average = 0
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
        $(".name").html(_user.User_Name) 
        $("#imc").html(_user.IMC) 
        $("#Target_Time").html(_user.Target_Fast + " hrs")
        if(_user.User_Fasts.length > 0){
            for(var x = 0; x < _user.User_Fasts.length; x++){
                average = average + _user.User_Fasts[x].total_fast_time 
                console.log(average)
            }
            average = average / _user.User_Fasts.length
            $("#avg").html(average.toFixed(2) + " hrs")
            $("#total").html(_user.Total_Fast_Time + " hrs") 
        }
        else{
            //send alert no data 
            $('#noHistoryFound').modal('open');
            $("#avg").html(0 + " hrs")
            $("#total").html(0 + " hrs") 
        }

        _user.User_Fasts.reverse()  
        _user.User_Weights.reverse()  
        LoadMore()
        LoadMore_weight()
    }
    else
    {
        alert('Por favor dirijase a la seccion de perfil para darse de alta')
    }
});

$( "#LoadMore" ).click(function() { 
    LoadMore()
})

$( "#LoadMore_weight" ).click(function() { 
    LoadMore_weight()
})

function LoadMore(){
    showMore = i + 5
    showArray = _user.User_Fasts.slice(i , showMore)  
    if(showArray.length <= 0)
    {
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

function LoadMore_weight(){
    showMore_weight = i_w + 5
    showWeightArray = _user.User_Weights.slice(i_w , showMore_weight)  
    if(showWeightArray.length <= 0)
    { /*Do Nothing*/    }
    else
    {
        for(var x = 0; x < showWeightArray.length; x++){ 
            if(showWeightArray[x].Progress < 0)
            {
                $("#Weight_History").append('<div class="row" style="margin-bottom: 0 !important"><div class="col s12 m5"><div class="card-panel blueish-white border_green"><div class="row center-align" style="margin-bottom: 0 !important"><div class="col s4">Fecha: <br>' + showWeightArray[x].Weight_Date + '</div><div class="col s4">Peso: <br>' + showWeightArray[x].Weight + '</div><div class="col s4">Progreso: <br>' + showWeightArray[x].Progress +' Kg</div></div></div></div></div>'); 
            }
            else
            {
                $("#Weight_History").append('<div class="row" style="margin-bottom: 0 !important"><div class="col s12 m5"><div class="card-panel blueish-white border_red"><div class="row center-align" style="margin-bottom: 0 !important"><div class="col s4">Fecha: <br>' + showWeightArray[x].Weight_Date + '</div><div class="col s4">Peso: <br>' + showWeightArray[x].Weight + '</div><div class="col s4">Progreso: <br>' + showWeightArray[x].Progress +' Kg</div></div></div></div></div>'); 
            }
        }
        i_w = showMore_weight;
    }
}