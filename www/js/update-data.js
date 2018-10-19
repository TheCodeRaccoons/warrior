var currWeight = "";
$(document).ready(function(){
    //get the Users DB Json
    var _user = JSON.parse(localStorage.getItem('User')) 
    
    //Check if the User data exists
    console.log(_user)
    if(_user)
    {
        //Gather the current weight
        currWeight = _user.User_Weigth;

        //Get the data of the object and add it to the add-data section
        $("#User_Name").val(_user.User_Name)
        $(".name").html(_user.User_Name) 
        $("#User_Age").val(_user.User_Age)
        $("#hit").html(_user.Fast_Hit)

        //Set Select value and reinitialize the material_select widget
        $('#User_gender').val(_user.User_gender)   
        $('#User_gender').material_select();

        $("#User_Weigth").val(_user.User_Weigth)
        $("#User_height").val(_user.User_height)
        $("#weight").html(_user.User_Weigth)
        $("#height").html(_user.User_height) 
        $("#imc").html(_user.IMC)
    //if the localstorage object does not exist... well, create one...
    }
    else
    {
    $("#bienvenido").modal('open',{dismissible: false});;
    $( "#update" ).click(function() { 
            var User =
                {
                    "User_Name"         : $('#User_Name').val(), 
                    "User_Age"          : $('#User_Age').val(),
                    "User_gender"       : $('#User_gender').val(),
                    "User_Weigth"       : $('#User_Weigth').val(),
                    "User_height"       : $('#User_height').val(),
                    "User_Fasts"        : [],
                    "User_Weights"      : [],
                    "Total_Fast_Time"   : 0,
                    "Fast_Hit"          : 0,
                    "Target_Fast"       : null,
                    "IMC"               : getIMC($('#User_Weigth').val(), $('#User_height').val()), 
                    "Language"          : null,
                    "User_Image"        : null,
                    "Achievements":
                    {
                        "First_Timer"   : false,        // Conseguir el primer ayuno    
                        "X5"            : 0,            // Completar una racha de > 5 ayunos
                        "X10"           : 0,            // Completar una racha de > 9 ayunos
                        "Half_Waypoint" : 0,            // Completar una racha de = 15 ayunos
                        "Unstoppable"   : 0,            // Completar una racha de > 30 ayunos
                        "Warrior"       : 0,            // Completar una racha de > 60 ayunos
                        "Over_Hundred"  : 0,            // Completar unayuno con +100%
                        "Just_In_Point" : 0,            // Completar un ayuno al 100% exacto
                        "One_More"      : 0,            // Completar un ayuno con 1 hora extra
                        "Bye_Bye"       : 0,            // Registra una reduccion de peso
                        "Hard_Core"     : 0             // Completar un alluno de +18
                    },
                    "Levels":
                    {
                
                        "Squire"        : true,         // 14 - 100 hrs (Primer semana)
                        "Apprentice"    : false,        // 101 - 300 hrs total fast
                        "Knight"        : false,        // 301 - 450 hrs total fast
                        "Warrior"       : false,        // 451 - 1k  hrs total fast
                        "Spartan"       : false         // over 1k   hrs total fast 
                    },
                    "last_achievement": [],             //Informacion de los logros para un banner mostrandolos
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
    
    $( "#update" ).click(function() 
    {
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
//---   Agregar los cambios de peso del usuario
        if($('#User_Weigth').val() != currWeight)
        {
            console.log(currWeight);
            var Progress = parseInt($('#User_Weigth').val() - currWeight)
            var cc = new Date();
            if(_user.hasOwnProperty('User_Weights'))
            { 
                if(_user.User_Weigth < currWeight)
                {
                    _user.Achievements.Bye_Bye = _user.Achievements.Bye_Bye + 1;
                }
                _user.User_Last_Weight_Date = cc;
                _user['User_Weights'].push(
                    {   
                        "Weight_Date"       : getMonthAndDate(cc),
                        "Weight"            : $('#User_Weigth').val(),
                        "Progress"          : Progress
                    });
            }
            else
            {
                
                _user.User_Last_Weight_Date = cc;
                _user.User_Weights = []
                _user['User_Weights'].push(
                    {   
                        "Weight_Date"       : getMonthAndDate(cc),
                        "Weight"            : $('#User_Weigth').val(),
                        "Progress"          : Progress
                    });
            }
        }
        
//---   Actualiza el Json en caso de tener el formato anterior (Remover en proximo release)
        if(_user.hasOwnProperty("logros"))   
        {
            delete _user.logros;
            _user.Achievements = {
                                    "First_Timer"   : false,        // Conseguir el primer ayuno    
                                    "X5"            : 0,            // Completar una racha de > 5 ayunos
                                    "X10"           : 0,            // Completar una racha de > 9 ayunos
                                    "Half_Waypoint" : 0,            // Completar una racha de = 15 ayunos
                                    "Unstoppable"   : 0,            // Completar una racha de > 30 ayunos
                                    "Warrior"       : 0,            // Completar una racha de > 60 ayunos
                                    "Over_Hundred"  : 0,            // Completar unayuno con +100%
                                    "Just_In_Point" : 0,            // Completar un ayuno al 100% exacto
                                    "One_More"      : 0,            // Completar un ayuno con 1 hora extra
                                    "Bye_Bye"       : 0,            // Registra una reduccion de peso
                                    "Hard_Core"     : 0             // Completar un alluno de +18
                                }
            _user.Levels =      {
        
                                    "Squire"        : true,         // 14 - 100 hrs (Primer semana)
                                    "Apprentice"    : false,        // 101 - 300 hrs total fast
                                    "Knight"        : false,        // 301 - 450 hrs total fast
                                    "Warrior"       : false,        // 451 - 1k  hrs total fast
                                    "Spartan"       : false         // over 1k   hrs total fast 
                                }   
        } 

                                            
        localStorage.setItem("User",  JSON.stringify(_user))
        console.log(_user);
        
        $("#update_data").modal('open',{dismissible: false});;
        $("#modal-b-update" ).click(function() 
        {
            window.location.href = 'profile.html';
        })
    })
})

    //--- Parse the date to show
    function getMonthAndDate(d)
    {
        var month = new Array();
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

        var showStartdate = new Date(d);
        var n = month[showStartdate.getMonth()]; 
        
        return n +" "+ showStartdate.getDate() + "<br>" +showStartdate.toLocaleTimeString()
    }
 


