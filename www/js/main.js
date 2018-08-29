var _user
var average = 0
/* Slider */
$(document).ready(function () 
{ 

    // Initialize collapse button
    $(".button-collapse").sideNav();
    $('.collapsible').collapsible(); 
    $('input#input_text, textarea#textarea1').characterCounter();
    $('select').material_select();
    $('.tabs').tabs();
    getBuildVersion();
});

function getIMC(peso, altura)
{
    var imc 
    imc = Math.round((peso / Math.pow(altura/100, 2)) * 10) / 10;
    return imc; 
}

function getBuildVersion()
{
    $('#version').html('Open beta 2.2.0')
}

_user = JSON.parse(localStorage.getItem('User')) 
switch(_user.Language)
{
    case "1":
        $("#Target_Fast_Label").html("Meta de ayuno diario") 
        $("#label_language").html("Idioma") 
        $("#menu_faq").html("Preguntas Frecuentes") 
        $("#menu_config").html("Configuración") 
        $("#menu_history").html("Historial") 
        $("#menu_profile").html("Perfil") 
        $("#menu_start").html("Inicio") 
        $("#LoadMore_weight").html("Cargar mas") 
        $("#LoadMore").html("Cargar mas") 
        $("#title_no_history_found").html("Parece ser que aun no hay ayunos registrados Pero no esperes mas! inicia tu primer ayuno") 
        $("#startFast").html("Iniciar") 
        $("#hist_fast").html("Ayunos") 
        $("#hist_weight").html("Peso") 
        $("#index_start").html("<span id='edit'></span>Inicio: <span id='inicio'></span>") 
        $("#index_finish").html("</br>Fin: <span id='fin'></span>") 
        $("#timer_hours").html("Horas") 
        $("#timer_minutes").html("Minutos") 
        $("#timer_seconds").html("Segundos") 
        $("#hist_weight_date").html("Fecha")  
        break;
    case "2":   
        $("#Target_Fast_Label").html("Daily fasting goal") 
        $("#label_language").html("Language") 
        $("#menu_faq").html("FAQ") 
        $("#menu_config").html("Settings") 
        $("#menu_history").html("History") 
        $("#menu_profile").html("Profile") 
        $("#menu_start").html("Home") 
        $("#LoadMore_weight").html("Load more") 
        $("#LoadMore").html("Load more") 
        $("#title_no_history_found").html("It seems that there are still no registered fasts. But don't wait any longer! ") 
        $("#startFast").html("Start now") 
        $("#hist_fast").html("Fasts") 
        $("#hist_weight").html("Weight") 
        $("#index_start").html("Starts: ") 
        $("#index_start").html("<span id='edit'></span>Starts: <span id='inicio'></span>") 
        $("#index_finish").html("</br>Ends: <span id='fin'></span>") 
        $("#timer_hours").html("Hours") 
        $("#timer_minutes").html("Minutes") 
        $("#timer_seconds").html("Seconds") 
        $("#hist_weight_date").html("Date")  
        break;
    default:
        $("#Target_Fast_Label").html("Meta de ayuno diario") 
        $("#label_language").html("Idioma") 
        $("#menu_faq").html("Preguntas Frecuentes") 
        $("#menu_config").html("Configuración") 
        $("#menu_history").html("Historial") 
        $("#menu_profile").html("Perfil") 
        $("#menu_start").html("Inicio") 
        $("#LoadMore_weight").html("Cargar mas") 
        $("#LoadMore").html("Cargar mas")  
        $("#title_no_history_found").html("Parece ser que aun no hay ayunos registrados Pero no esperes mas! inicia tu primer ayuno") 
        $("#startFast").html("Iniciar") 
        $("#hist_fast").html("Ayunos") 
        $("#hist_weight").html("Peso") 
        $("#index_start").html("<span id='edit'></span>    <br>Inicio: <span id='inicio'></span>") 
        $("#index_finish").html("</br>Fin: <span id='fin'></span>") 
        $("#timer_hours").html("Horas") 
        $("#timer_minutes").html("Minutos") 
        $("#timer_seconds").html("Segundos") 
        $("#hist_weight_date").html("Fecha")  
        break;
}

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady () {
    document.addEventListener('hidekeyboard', onKeyboardHide, false);
    document.addEventListener('showkeyboard', onKeyboardShow, false);
}

function onKeyboardHide() {
    console.log('onKeyboardHide');
}

function onKeyboardShow(e) {
  console.log('onKeyboardShow');
  setTimeout(function() {
    e.target.activeElement.scrollIntoViewIfNeeded()
  }, 500) //needed timeout to wait for viewport to resize
}