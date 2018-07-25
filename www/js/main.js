var _user
var average = 0
/* Slider */
$(document).ready(function () { 
    // Initialize collapse button
    $(".button-collapse").sideNav();
    $('.collapsible').collapsible(); 
    $('input#input_text, textarea#textarea1').characterCounter();
    $('select').material_select();
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
    $('#version').html('BETA 2.1.3')
}