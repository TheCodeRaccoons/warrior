var _user; 
var i = 0
var i_w = 0
var showMore
var showMore_weight
var month = new Array();
var showArray
var average = 0
$(document).ready(function() {

    _user = JSON.parse(localStorage.getItem('User'))
    switch(_user.Language)
    {
        case "1":
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
            break;
        case "2":       
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";
            break;
        default:
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
            break;
    }


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

            addFastItem(x, _user.Language, n , nn, showStartdate, showEndDate)
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
            addWeightItem(x,_user.Language);
        }
        i_w = showMore_weight;
    }


}

function ReplaceMonthLang(date)
{
    var month
    var dataArr = date.split(" ")
    switch(dataArr[0])
    { 
        case "Enero":
            month = "January"
            break;
        case "Febrero":
            month = "February"
            break;
        case "Marzo":
            month = "March"
            break;
        case "Abril":
            month = "April"
            break;
        case "Mayo":
            month = "May"
            break;
        case "Junio":
            month = "June"
            break;
        case "Julio":
            month = "July"
            break;
        case "Agosto":
            month = "August"
            break;
        case "Septiembre":
            month = "September"
            break;
        case "Octubre":
            month = "October"
            break;
        case "Noviembre":
            month = "November"
            break;
        case "Diciembre":
            month = "December"
            break;
    }
    return month + " " + dataArr[1]
 
}

function addWeightItem(item, language)
{
    if(language == 2)
    {
        if(showWeightArray[item].Progress < 0)
        {
            $("#Weight_History").append('<div class="row" style="margin-bottom: 0 !important"><div class="col s12 m5"><div class="card-panel blueish-white border_green"><div class="row center-align" style="margin-bottom: 0 !important"><div class="col s4">Date: <br>' + ReplaceMonthLang(showWeightArray[item].Weight_Date) + '</div><div class="col s4">Weight: <br>' + showWeightArray[item].Weight + '</div><div class="col s4">Progress: <br>' + showWeightArray[item].Progress +' Kg</div></div></div></div></div>'); 
        }
        else
        {
            $("#Weight_History").append('<div class="row" style="margin-bottom: 0 !important"><div class="col s12 m5"><div class="card-panel blueish-white border_red"><div class="row center-align" style="margin-bottom: 0 !important"><div class="col s4">Date: <br>' + ReplaceMonthLang(showWeightArray[item].Weight_Date) + '</div><div class="col s4">Weight: <br>' + showWeightArray[item].Weight + '</div><div class="col s4">Progress: <br>' + showWeightArray[item].Progress +' Kg</div></div></div></div></div>'); 
        }
    }
    else
    {
        if(showWeightArray[item].Progress < 0)
        {
            $("#Weight_History").append('<div class="row" style="margin-bottom: 0 !important"><div class="col s12 m5"><div class="card-panel blueish-white border_green"><div class="row center-align" style="margin-bottom: 0 !important"><div class="col s4">Fecha: <br>' + showWeightArray[item].Weight_Date + '</div><div class="col s4">Peso: <br>' + showWeightArray[item].Weight + '</div><div class="col s4">Progreso: <br>' + showWeightArray[item].Progress +' Kg</div></div></div></div></div>'); 
        }
        else
        {
            $("#Weight_History").append('<div class="row" style="margin-bottom: 0 !important"><div class="col s12 m5"><div class="card-panel blueish-white border_red"><div class="row center-align" style="margin-bottom: 0 !important"><div class="col s4">Fecha: <br>' + showWeightArray[item].Weight_Date + '</div><div class="col s4">Peso: <br>' + showWeightArray[item].Weight + '</div><div class="col s4">Progreso: <br>' + showWeightArray[item].Progress +' Kg</div></div></div></div></div>'); 
        }
    }
}


function addFastItem(item, language, startMonth, finishmonth, start_date, end_date)
{
    if(language == 2)
    {
        if(showArray[item].Target_reached)
        {
            $("#Fast_History").append('<div class="row" style="margin-bottom: 0 !important"><div class="col s12 m5"><div class="card-panel blueish-white border_green"><div class="row center-align" style="margin-bottom: 0 !important"><div class="col s4">Start: <br>' + startMonth +' '+ start_date.getDate() + '<br>' +start_date.toLocaleTimeString() + '</div><div class="col s4">End: <br>' + finishmonth +' '+ end_date.getDate() + '<br>' +end_date.toLocaleTimeString() + '</div><div class="col s4"><br>Total: ' +showArray[item].total_fast_time +'</div></div></div></div></div>'); 
        }
        else
        {
            $("#Fast_History").append('<div class="row" style="margin-bottom: 0 !important"><div class="col s12 m5"><div class="card-panel blueish-white border_red"><div class="row center-align" style="margin-bottom: 0 !important"><div class="col s4">Start: <br>' + startMonth +' '+ start_date.getDate() + '<br>' +start_date.toLocaleTimeString() + '</div><div class="col s4">End: <br>' + finishmonth +' '+ end_date.getDate() + '<br>' +end_date.toLocaleTimeString() + '</div><div class="col s4"><br>Total: ' +showArray[item].total_fast_time +'</div></div></div></div></div>'); 
        }
    }
    else
    {
        if(showArray[item].Target_reached)
        {
            $("#Fast_History").append('<div class="row" style="margin-bottom: 0 !important"><div class="col s12 m5"><div class="card-panel blueish-white border_green"><div class="row center-align" style="margin-bottom: 0 !important"><div class="col s4">Inicio: <br>' + startMonth +' '+ start_date.getDate() + '<br>' +start_date.toLocaleTimeString() + '</div><div class="col s4">Fin: <br>' + finishmonth +' '+ end_date.getDate() + '<br>' +end_date.toLocaleTimeString() + '</div><div class="col s4"><br>Total: ' +showArray[item].total_fast_time +'</div></div></div></div></div>'); 
        }
        else
        {
            $("#Fast_History").append('<div class="row" style="margin-bottom: 0 !important"><div class="col s12 m5"><div class="card-panel blueish-white border_red"><div class="row center-align" style="margin-bottom: 0 !important"><div class="col s4">Inicio: <br>' + startMonth +' '+ start_date.getDate() + '<br>' +start_date.toLocaleTimeString() + '</div><div class="col s4">Fin: <br>' + finishmonth +' '+ end_date.getDate() + '<br>' +end_date.toLocaleTimeString() + '</div><div class="col s4"><br>Total: ' +showArray[item].total_fast_time +'</div></div></div></div></div>'); 
        }
    }
}


