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

        //get the Users DB Json
        var _user = JSON.parse(localStorage.getItem('User')) 
        //Check if the User data exists
        if(_user){
            //Get the data of the object and add it to the add-data section 
            $("#User_Name").html(_user.User_Name)
            $(".name").html(_user.User_Name) 
            $("#weight").html(_user.User_Weigth)
            $("#height").html(_user.User_height)
            $("#imc").html(_user.IMC)
            $("#hit").html(_user.Fast_Hit)  
            $("#User_gender").val(_user.User_gender)
        //if the localstorage object does not exist... well, create one... 
        } 
});     

function getIMC(peso, altura){
    var imc
     
    imc = Math.round((peso / Math.pow(altura/100, 2)) * 10) / 10;
    
    return imc; 
}
 