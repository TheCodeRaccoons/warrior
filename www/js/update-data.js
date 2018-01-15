$(document).ready(function(){
    //get the Users DB Json
    var _user = JSON.parse(localStorage.getItem('User')) 
    //Check if the User data exists
    console.log(_user)
    if(_user){
        //Get the data of the object and add it to the add-data section  
        $("#User_Age").val(_user.User_Age)
        //$("#User_gender").val(_user.User_gender)  
        console.log(_user.User_gender)
        $("#User_Weigth").val(_user.User_Weigth)
        $("#User_height").val(_user.User_height)
        $("#weight").html(_user.User_Weigth)
        $("#height").html(_user.User_height) 
    //if the localstorage object does not exist... well, create one...
    }else{
    $("#bienvenido").modal('open');
    $( "#update" ).click(function() {
            var User =
                {
                    "User_Name"         : $('#User_Name').val(), 
                    "User_Age"          : $('#User_Age').val(),
                    "User_gender"       : $('#User_gender').val(),
                    "User_Weigth"       : $('#User_Weigth').val(),
                    "User_height"       : $('#User_height').val(),
                    "User_Fasts"        : [],
                    "Total_Fast_Time"   : 0,
                    "Fast_Hit"          : 0,
                    "Target_Fast"       : null,
                    "IMC"               : getIMC($('#User_Weigth').val(), $('#User_height').val()), 
                    "Language": null,
                    "User_Image"        : null,
                    "logros":{
                        "Aspirante" : true,        // 0 -14 hrs (Primer ayuno)
                        "Aprendis"  : false,        // 14 - 150 hrs total fast
                        "Escudero"  : false,        // 111 - 350
                        "Guerrero"  : false,        // 351 - 1k
                        "Espartano" : false,        // 1k <
                        "Iniciando": 0,             // Iniciar una racha de > 1 ayuno
                        "X5": 0,                    // Completar una racha de > 5 ayunos
                        "X10": 0,                   // Completar una racha de > 10 ayunos
                        "Sin_Descanso":0,           // Completar un ayuno de 20 dias
                        "Mas_del_Mes": 0,           // Completar una racha de > 31 ayunos
                        "Soy_Guerrero": 0           // Completar una racha de > 60 ayunos
                    },    
                    "ultimo_logro": null,
                    "accept_disclaimer": null
                } 
            
            $("#imc").html(getIMC($('#User_Weigth').val(), $('#User_height').val())) 
            $("#weight").html($('#User_Weigth').val()) 
            $("#height").html($('#User_height').val()) 
            $("#hit").append(0)   
            localStorage.setItem("User", JSON.stringify(User))
            _user = User  
            window.location.href = 'setings.html';
        })
    }
    $( "#update" ).click(function() {
        if($('#User_Name').val()){      _user.User_Name = $('#User_Name').val()}
        if($('#User_Age').val()){       _user.User_Age = $('#User_Age').val()}
        if($('#User_gender').val()){    _user.User_gender = $('#User_gender').val()}
        if($('#User_Weigth').val()){    _user.User_Weigth = $('#User_Weigth').val()}
        if($('#User_height').val()){    _user.User_height = $('#User_height').val()}   
                                        _user.IMC =  getIMC($('#User_Weigth').val(), $('#User_height').val())
                                        $("#imc").html(getIMC($('#User_Weigth').val(), $('#User_height').val())) 
                                        $("#weight").html($('#User_Weigth').val()) 
                                        $("#height").html($('#User_height').val()) 
                                        $(".name").html($('#User_Name').val()) 
                                        
        localStorage.setItem("User",  JSON.stringify(_user))
        alert("Cambios Realizados con exito")
    })

})
 