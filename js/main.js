//Check what type of device is using the App
function DeviceTypeCheck(){
    var deviceType = (navigator.userAgent.match(/iPad/i))  == "iPad" ? "iPad" : (navigator.userAgent.match(/iPhone/i))  == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" : "null";
        if(deviceType == "iPhone" || deviceType == "iPad"){
            $('#menu_bar').addClass('Menu_Bar_Iphone');
            $('#main_content').addClass('main_content_iphone');
            $('#targetTime').addClass('target_time_iphone');
            //alert("Why the heck are u using an IOS device! >:C");
        }else if(deviceType == "Android"){
            $('#menu_bar').addClass('Menu_Bar');
            $('#main_content').addClass('main_content');
            //alert("Ok android its pretty deccent");
        }else{
            //alert("How the heck are you using my app?");
        } 
} 
/* Slider */
$(document).ready(function () { 
    DeviceTypeCheck();
    // Initialize collapse button
    $(".button-collapse").sideNav();
    $('.collapsible').collapsible();

    $('input#input_text, textarea#textarea1').characterCounter();
    $('select').material_select();
    if(window.location.pathname != "profile.html"){
        //get the Users DB Json
        var _user = JSON.parse(localStorage.getItem('User')) 
        //Check if the User data exists
        if(_user){
            //Get the data of the object and add it to the add-data section 
            $("#User_Name").val(_user.User_Name)
            $(".name").append(_user.User_Name)
            $("#User_Age").val(_user.User_Age)
            $("#User_gender").val(_user.User_gender)
            $("#User_Weigth").val(_user.User_Weigth)
            $("#User_height").val(_user.User_height)
            $("#weight").append(_user.User_Weigth)
            $("#height").append(_user.User_height)
            $("#imc").append(_user.IMC)
            $("#hit").append(_user.Fast_Hit)  
        //if the localstorage object does not exist... well, create one...
        }
        else{
            window.location.replace("profile.html")
        }
    }  
});     

$( ".timepicker" ).pickatime({
    default: 'now', // Set default time: 'now', '1:30AM', '16:30'
    fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
    twelvehour: false, // Use AM/PM or 24-hour format
    donetext: 'OK', // text for done-button
    cleartext: 'Clear', // text for clear-button
    canceltext: 'Cancel', // Text for cancel-button
    autoclose: false, // automatic close timepicker
    ampmclickable: true, // make AM PM clickable
    aftershow: function(){} //Function for after opening timepicker
  });
//timepicker.set('select',2);

function getIMC(peso, altura){
    var imc
     
    imc = Math.round((peso / Math.pow(altura/100, 2)) * 10) / 10;
    
    return imc; 
}
 