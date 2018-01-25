_user = JSON.parse(localStorage.getItem('User')) 
console.log(_user)

$("#Target_Fast").val(_user.Target_Fast)
$(".name").html(_user.User_Name) 

$("#save").click(function(){
    if($('#Target_Fast').val()){    _user.Target_Fast = $('#Target_Fast').val()}
    if($('#Language').val()){    _user.Language = $('#Language').val()}
    localStorage.setItem("User",  JSON.stringify(_user))
    alert("Cambios Realizados con exito")
})