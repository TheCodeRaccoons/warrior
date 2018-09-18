
var _user = JSON.parse(localStorage.getItem('User')) 

console.log(_user)  

var msg = "", title = "", msg_err = "", title_err="",date_select_cancel = "", date_select_accept = "", date_select_title = ""
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
        $("#modal-t-restart").html("Deseas Reiniciar tu Ayuno?")
        $("#modal-c-restart").html("Si decides reiniciar ahora perderas tu total de <b><span id='fasted_hours'></span></b> hrs. <br>Seguro quieres reiniciar?") 
        $("#modal-b-restart_ok").html("Aceptar")
        $("#modal-b-restart_cancel").html("Cancelar")
        $("#modal-t-medical_disclaimer").html("Aviso Medico")
        $("#modal-c-medical_disclaimer").html("Debes Consultar con tu profesional Medico antes de comenzar cualquier programa de ayuno. Esta aplicacion y la informacion en ella, incluyendo texto, imagenes, graficos y todo tipo de contenido son solo con proposito informativo y educacional y no se debe considerar como reemplazo a la opinion de un medico.")
        $("#modal-b-medical_disclaimer").html("Aceptar")
        $("#modal-t-add_goal").html("Woops!")
        $("#modal-c-add_goal").html("Parece ser que aun no has establecido una meta de ayuno<br>Presiona continuar para establecerla")
        $("#modal-b-add_goal").html("Continuar")
        $("#modal-t-invalid-fast").html("Espera!")
        $("#modal-c-invalid-fast").html("Un ayuno de <span id='horas_ayuno3'></span> es demaciado corto<br> Si decides terminar ahora, tu ayuno no se guardara, No obstante tendras un periodo de 6 horas antes de tu proximo ayuno para no perder tu racha de <b><span id='racha_ayuno3'></span></b> Dias.<br> Seguro quieres terminar?")
        $("#modal-b-invalid-fast-ok").html("Terminar")
        $("#modal-b-invalid-fast-cancel").html("Cancelar")
        $("#modal-t-not-completed").html("Espera!")
        $("#modal-c-not-completed").html("<h5>Tienes <span id='percent2'></span>% Completado</h5><br>De <span id='inicio_ayuno2'>x:xx xx</span> a <span id='fin_ayuno2'>x:xx xx</span><br>Con un total de<br><h4><span id='horas_ayuno2'>x hrs</span> <span id='minutos_ayuno2'>x min</span></h4><br><p>Si terminas tu ayuno ahora perderas tu racha de <b><span id='racha_ayuno2'></span></b> Dias!<br></p>Seguro quieres terminar?")
        $("#modal-b-not-completed-finish").html("Terminar")
        $("#modal-b-not-completed-cancel").html("Cancelar")
        $("#modal-t-fast-completed").html("Bien hecho!")
        $("#modal-c-fast-completed").html("<h5><span id='percent'>360</span> % Completado</h5><br>De <span id='inicio_ayuno'>x:xx xx</span> a <span id='fin_ayuno'>x:xx xx</span><br><br>Con un total de<br><h4><span id='horas_ayuno'>x hrs</span> <span id='minutos_ayuno'>x min</span></h4><br><p>Sigue con tu racha de <span id='racha_ayuno'></span> Dias!<br>Estas a <span id='prox_ayuno'></span> de tu proximo ayuno! </p>")
        $("#modal-b-fast-completed-finish").html("Terminar")
        $("#modal-b-fast-completed-cancel").html("Cancelar")

        msg         = "Se actualizo la fecha de inicio de su ayuno."
        title       = "Actualizacion Realizada"
        msg_err     = "Por favor, seleccione una fecha / hora anterior a la actual."
        title_err   = "Fecha invalida"
        date_select_accept = "Aceptar"
        date_select_cancel = "Cancelar"
        date_select_title  = "Hora de inicio" 

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
        $("#modal-t-restart").html("Are you sure you want to restart your fast?")
        $("#modal-c-restart").html("If you restart now you will lose a total of <b><span id='fasted_hours'></span></b> hours. <br>do you want to restart anyway?") 
        $("#modal-b-restart_ok").html("Restart")
        $("#modal-b-restart_cancel").html("Cancel")
        $("#modal-t-medical_disclaimer").html("Medical disclaimer") 
        $("#modal-c-medical_disclaimer").html("You must contact with a medical professional before starting any fasting program. This aplication and it's contents including text, images, graphics, and every kind of contents on it are only for informational and educational purposes and MUST not be considered as a replacement of a medical opinion.")
        $("#modal-b-medical_disclaimer").html("Accept")
        $("#modal-t-invalid-fast").html("Wait!")
        $("#modal-c-invalid-fast").html("A <span id='horas_ayuno3'></span> fast is too short <br> If you decide to finish right now your fast won't be saved but you will have only 6 hours to start fasting before you lose your <b><span id='racha_ayuno3'></span></b> day fast streak.<br>Are you sure you want to finish?")
        $("#modal-b-invalid-fast-ok").html("Finish")
        $("#modal-b-invalid-fast-cancel").html("Cancel")
        $("#modal-t-not-completed").html("Wait!")
        $("#modal-c-not-completed").html("<h5>You have completed <span id='percent2'></span>% </h5><br>from <span id='inicio_ayuno2'>x:xx xx</span> to <span id='fin_ayuno2'>x:xx xx</span><br>With a total of <br><h4><span id='horas_ayuno2'>x hrs</span> <span id='minutos_ayuno2'>x min</span></h4><br><p>If you finish your fast now you will lose your <b><span id='racha_ayuno2'></span></b> day fast streak!<br></p>Do you want to finish?")
        $("#modal-b-not-completed-finish").html("Finish")
        $("#modal-b-not-completed-cancel").html("Cancel")
        $("#modal-t-fast-completed").html("Congratulations!")
        $("#modal-c-fast-completed").html("<h5><span id='percent'>360</span> % Completed</h5><br>from <span id='inicio_ayuno'>x:xx xx</span> to <span id='fin_ayuno'>x:xx xx</span><br><br>With a total of<br><h4><span id='horas_ayuno'>x hrs</span> <span id='minutos_ayuno'>x min</span></h4><br><p>Continue with your <span id='racha_ayuno'></span> day fast streak!<br>you have <span id='prox_ayuno'></span> unitl your next fast! </p>")
        $("#modal-b-fast-completed-finish").html("Finish")
        $("#modal-b-fast-completed-cancel").html("Cancel")
        
        msg         = "Fast start time updated."
        title       = "Update successful"
        msg_err     = "Please select a date / time earlier that the actual."
        title_err   = "Invalid date"
        date_select_accept = "Accept"
        date_select_cancel = "Cancel"
        date_select_title  = "Fast start" 
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
        $("#modal-t-restart").html("Deseas Reiniciar tu Ayuno?")
        $("#modal-c-restart").html("Si decides reiniciar ahora perderas tu total de <b><span id='fasted_hours'></span></b> hrs. <br>Seguro quieres reiniciar?") 
        $("#modal-b-restart_ok").html("Aceptar")
        $("#modal-b-restart_cancel").html("Cancelar")
        $("#modal-t-medical_disclaimer").html("Aviso Medico")
        $("#modal-c-medical_disclaimer").html("Debes Consultar con tu profesional Medico antes de comenzar cualquier programa de ayuno. Esta aplicacion y la informacion en ella, incluyendo texto, imagenes, graficos y todo tipo de contenido son solo con proposito informativo y educacional y no se debe considerar como reemplazo a la opinion de un medico.")
        $("#modal-b-medical_disclaimer").html("Aceptar")
        $("#modal-t-add_goal").html("Woops!")
        $("#modal-c-add_goal").html("Parece ser que aun no has establecido una meta de ayuno<br>Presiona continuar para establecerla")
        $("#modal-b-add_goal").html("Continuar")
        $("#modal-t-invalid-fast").html("Espera!")
        $("#modal-c-invalid-fast").html("Un ayuno de <span id='horas_ayuno3'></span> es demaciado corto<br> Si decides terminar ahora, tu ayuno no se guardara, No obstante tendras un periodo de 6 horas antes de tu proximo ayuno para no perder tu racha de <b><span id='racha_ayuno3'></span></b> Dias.<br> Seguro quieres terminar?")
        $("#modal-b-invalid-fast-ok").html("Terminar")
        $("#modal-b-invalid-fast-cancel").html("Cancelar")
        $("#modal-t-not-completed").html("Espera!")
        $("#modal-c-not-completed").html("<h5>Tienes <span id='percent2'></span>% Completado</h5><br>De <span id='inicio_ayuno2'>x:xx xx</span> a <span id='fin_ayuno2'>x:xx xx</span><br>Con un total de<br><h4><span id='horas_ayuno2'>x hrs</span> <span id='minutos_ayuno2'>x min</span></h4><br><p>Si terminas tu ayuno ahora perderas tu racha de <b><span id='racha_ayuno2'></span></b> Dias!<br></p>Seguro quieres terminar?")
        $("#modal-b-not-completed-finish").html("Terminar")
        $("#modal-b-not-completed-cancel").html("Cancelar")
        $("#modal-t-fast-completed").html("Bien hecho!")
        $("#modal-c-fast-completed").html("<h5><span id='percent'>360</span> % Completado</h5><br>De <span id='inicio_ayuno'>x:xx xx</span> a <span id='fin_ayuno'>x:xx xx</span><br><br>Con un total de<br><h4><span id='horas_ayuno'>x hrs</span> <span id='minutos_ayuno'>x min</span></h4><br><p>Sigue con tu racha de <span id='racha_ayuno'></span> Dias!<br>Estas a <span id='prox_ayuno'></span> de tu proximo ayuno! </p>")
        $("#modal-b-fast-completed-finish").html("Terminar")
        $("#modal-b-fast-completed-cancel").html("Cancelar")

        msg         = "Se actualizo la fecha de inicio de su ayuno."
        title       = "Actualizacion Realizada"
        msg_err     = "Por favor, seleccione una fecha / hora anterior a la actual."
        title_err   = "Fecha invalida"
        date_select_accept = "Aceptar"
        date_select_cancel = "Cancelar"
        date_select_title  = "Hora de inicio" 
        break;
}

 //--- Parse the date to show
 function getMonthAndDate(d)
 {
     var month = new Array();
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

     var showStartdate = new Date(d);
     var showEndDate = new Date(showStartdate.valueOf() + (parseInt(_user.Target_Fast) * 3600000)) 
     var n = month[showStartdate.getMonth()];
     var nn = month[showEndDate.getMonth()];

     $('#inicio').html(n +" "+ showStartdate.getDate() + "<br>" +showStartdate.toLocaleTimeString())
     $('#fin').html(nn +" "+ showEndDate.getDate() + "<br>" +showEndDate.toLocaleTimeString())
 }

//Set's the day's language for the date setter spinner
function getDayOfWeek(d)
{ 
    var weekday = []
    switch(_user.Language)
    {
        case "1":
            weekday[0] = "Domingo";
            weekday[1] = "Lunes";
            weekday[2] = "Martes";
            weekday[3] = "Miercoles";
            weekday[4] = "Jueves";
            weekday[5] = "Viernes";
            weekday[6] = "Sabado";
            break
        case "2":
            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";
            break
        default:
            weekday[0] = "Domingo";
            weekday[1] = "Lunes";
            weekday[2] = "Martes";
            weekday[3] = "Miercoles";
            weekday[4] = "Jueves";
            weekday[5] = "Viernes";
            weekday[6] = "Sabado";
            break
    }
    var n = weekday[d];
    return n;
}