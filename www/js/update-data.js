$(document).ready(function(){ 
    //get the Users DB Json
    var _user = JSON.parse(localStorage.getItem('User')) 
    //Check if the User data exists
    if(_user){
        //Get the data of the object and add it to the add-data section 
        $("#User_Name").val(_user.User_Name)
        $(".name").html(_user.User_Name)
        $("#User_Age").val(_user.User_Age)
        $("#User_gender").val(_user.User_gender)
        $("#User_Weigth").val(_user.User_Weigth)
        $("#User_height").val(_user.User_height)
        $("#weight").html(_user.User_Weigth)
        $("#height").html(_user.User_height)
        $("#imc").html(_user.IMC)
        $("#hit").html(_user.Fast_Hit)  
    //if the localstorage object does not exist... well, create one...
    }else{
        
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
                    "current_fast_start": null,
                    "Language": null,
                    "User_Image"        : null
                } 
            
            $("#imc").html(getIMC($('#User_Weigth').val(), $('#User_height').val())) 
            $("#weight").html($('#User_Weigth').val()) 
            $("#height").html($('#User_height').val()) 
            $("#hit").append(0)   
            localStorage.setItem("User", JSON.stringify(User))
            _user = User
        })
    }

    //If the send button is pressed run the function
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
    })

    $("#save").click(function(){
        if($('#Target_Fast').val()){    _user.Target_Fast = $('#Target_Fast').val()}
        if($('#Language').val()){    _user.Language = $('#Language').val()}
        localStorage.setItem("User",  JSON.stringify(_user))
        console.log(_user)
    })


    $("#AddFast").click(function(){
        //get this moment
        var moment = new Date()
        //get expiration time
        var customDate = new Date (moment.getTime() + 3600000)
        //Get the last updated local user DB just for facts of this example oviously
        var retrievedObject = JSON.parse(localStorage.getItem('Users_DB')) 
        //get the selected user
        var selectedUser = $('#selectedUser').val()
            //push data to the object
            retrievedObject.Users[selectedUser-1].User_Fasts.push(
            { 
                "Start_Date"        : moment.getTime(),
                "Finish_Date"       : customDate.getTime(),
                "total_fast_time"   : customDate.getTime(),
                "Target_reached"    : reached
            });
        console.log(retrievedObject);
        //Update the localstorage variable
        localStorage.setItem("Users_DB",  JSON.stringify(retrievedObject))
    })

    
})


//Check this later
function SaveData(){
    var starttime = new Date(localStorage.getItem("Fast_Start"));
    potatoe = starttime.toLocaleString().split(",")//.join("\n")
    console.log(potatoe[0])

}