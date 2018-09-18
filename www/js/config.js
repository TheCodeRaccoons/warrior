
$(document).ready(function() 
{
    _user = JSON.parse(localStorage.getItem('User')) 
    switch(_user.Language)
    {
        case "1":
            $("#setings-saved-info").html("Cambios realizados con éxito")  
            $("#accept").html("Aceptar")  
            break;
        case "2":   
            $("#setings-saved-info").html("Changes realized successfully")  
            $("#accept").html("Continue")  
            break;
        default:
            $("#setings-saved-info").html("Cambios realizados con éxito")  
            $("#accept").html("Aceptar")  
            break;
    }
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
        
        $('#changes-saved').modal('open',{dismissible: false});;
        $('#accept').one('click',function() 
        {
            window.location.href = 'setings.html';
        });
    }) 
});



