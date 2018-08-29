
$(document).ready(function() 
{
    _user = JSON.parse(localStorage.getItem('User')) 
    console.log(_user)
    console.log(_user.Language)
    
    $("#Target_Fast").val(_user.Target_Fast)
    $(".name").html(_user.User_Name) 
    $("#Language").find("option").each(function() {
        if ($(this).val() == _user.Language)
        {
            console.log(":c")
            $(this).prop("selected", true);
        } 
        console.log("val: " + $(this).val());
    });
    $("#Language").material_select();

    $("#save").click(function(){
        if($('#Target_Fast').val()){    _user.Target_Fast = $('#Target_Fast').val()}
        if($('#Language').val()){
            _user.Language = $('#Language').val()
        }
        else
        {
            _user.Language = 1;
        }
        localStorage.setItem("User",  JSON.stringify(_user))
        alert("Cambios Realizados con exito")
    })
});



