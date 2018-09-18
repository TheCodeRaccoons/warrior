
_user = JSON.parse(localStorage.getItem('User')) 
switch(_user.Language)
{
    case "1":  
        $("#index_start").html("<span id='edit'></span>Inicio: <span id='inicio'></span>") 
        $("#index_finish").html("</br>Fin: <span id='fin'></span>") 
        $("#timer_hours").html("Horas") 
        $("#timer_minutes").html("Minutos") 
        $("#timer_seconds").html("Segundos")  
        $("#modal-t-set-weight").html("Whoops!") 
        $("#modal-c-set-weight").html("Parece que no has agregado tu peso, agregalo y empieza a ver tu progreso!")
        $("#modal-b-set-weight").html("Actualizar")
        $("#modal-t-update-weight").html("No te quedes en el pasado!") 
        $("#modal-c-update-weight").html('Ya hace <span id="daysSinceUpdate"></span> días que no actualizas tu peso, actualízalo y ve cuanto has progresado!')
        $("#modal-b-update-weight").html("Actualizar")
        $("#modal-b-finish-fast").html("Aceptar")
        break;
    case "2":     
        $("#index_start").html("Starts: ") 
        $("#index_start").html("<span id='edit'></span>Starts: <span id='inicio'></span>") 
        $("#index_finish").html("</br>Ends: <span id='fin'></span>") 
        $("#timer_hours").html("Hours") 
        $("#timer_minutes").html("Minutes") 
        $("#timer_seconds").html("Seconds") 
        $("#hist_weight_date").html("Date")  
        $("#modal-t-set-weight").html("Whoops!") 
        $("#modal-c-set-weight").html("Seems like you haven't set your weight, go on and start tracking your progress!") 
        $("#modal-b-set-weight").html("Update")
        $("#modal-t-update-weight").html("Well done!") 
        $("#modal-c-update-weight").html('It´s been  <span id="daysSinceUpdate"></span> days since your last weight update, enter your new weight and check out your progress!')
        $("#modal-b-update-weight").html("Update")
        $("#modal-b-finish-fast").html("Continue")
        break;
    default: 
        $("#index_start").html("<span id='edit'></span>Inicio: <span id='inicio'></span>") 
        $("#index_finish").html("</br>Fin: <span id='fin'></span>") 
        $("#timer_hours").html("Horas") 
        $("#timer_minutes").html("Minutos") 
        $("#timer_seconds").html("Segundos")  
        $("#modal-t-set-weight").html("Whoops!") 
        $("#modal-c-set-weight").html("Parece que no has agregado tu peso, agregalo y empieza a ver tu progreso!")
        $("#modal-b-set-weight").html("Actualizar")
        $("#modal-t-update-weight").html("No te quedes en el pasado!") 
        $("#modal-c-update-weight").html('Ya hace <span id="daysSinceUpdate"></span> días que no actualizas tu peso, actualízalo y ve cuanto has progresado!')
        $("#modal-b-update-weight").html("Actualizar")
        $("#modal-b-finish-fast").html("Aceptar")
        break;
}
