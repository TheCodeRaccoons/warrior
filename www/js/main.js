var _user
var average = 0
/* Slider */
$(document).ready(function () {
    url=window.location.href;
    //DeviceTypeCheck();
    // Initialize collapse button
    $(".button-collapse").sideNav();
    $('.collapsible').collapsible(); 
    $('input#input_text, textarea#textarea1').characterCounter();
    $('select').material_select();
        _user = JSON.parse(localStorage.getItem('User')) 
        //console.log(_user)
        if(_user){
            $("#User_Name").html(_user.User_Name)
            $(".name").html(_user.User_Name) 
            $("#weight").html(_user.User_Weigth)
            $("#height").html(_user.User_height)
            $("#imc").html(_user.IMC)
            $("#hit").html(_user.Fast_Hit)  
            $("#User_gender").val(_user.User_gender)
            $("#Target_Fast").val(_user.Target_Fast)  
            $("#Target_Time").html(_user.Target_Fast + " hrs")
        }
});

function getIMC(peso, altura)
{
    var imc 
    imc = Math.round((peso / Math.pow(altura/100, 2)) * 10) / 10;
    return imc; 
}
