var _user
var average = 0
/* Slider */
$(document).ready(function () { 
    DeviceTypeCheck();
    // Initialize collapse button
    $(".button-collapse").sideNav();
    $('.collapsible').collapsible(); 
    $('input#input_text, textarea#textarea1').characterCounter();
    $('select').material_select();
        _user = JSON.parse(localStorage.getItem('User')) 
        if(_user){
            $("#User_Name").html(_user.User_Name)
            $("#User_Name").val(_user.User_Name)
            $(".name").html(_user.User_Name) 
            $("#weight").html(_user.User_Weigth)
            $("#height").html(_user.User_height)
            $("#imc").html(_user.IMC)
            $("#hit").html(_user.Fast_Hit)  
            $("#User_gender").val(_user.User_gender)
            $("#Target_Fast").val(_user.Target_Fast)  
            $("#Target_Time").html(_user.Target_Fast + " hrs") 
            for(var x = 0; x < _user.User_Fasts.length; x++){
                average = average + _user.User_Fasts[x].total_fast_time 
                console.log(average)
            }
            average = average / _user.User_Fasts.length  
            $("#avg").html(average + " hrs")
            $("#total").html(_user.Total_Fast_Time + " hrs") 
        }
});
function getIMC(peso, altura)
{
    var imc
     
    imc = Math.round((peso / Math.pow(altura/100, 2)) * 10) / 10;
    
    return imc; 
}
  
function DeviceTypeCheck()
{
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