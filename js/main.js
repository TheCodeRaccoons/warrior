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
});

