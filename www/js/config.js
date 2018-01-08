if(_user){
    if(_user.Target_Fast == null){
        $("#bienvenido").modal('open');
    }
}else{ 
    window.location.href = 'profile.html';
}
$("#save").click(function(){
    if($('#Target_Fast').val()){    _user.Target_Fast = $('#Target_Fast').val()}
    if($('#Language').val()){    _user.Language = $('#Language').val()}
    localStorage.setItem("User",  JSON.stringify(_user))
    alert("Cambios Realizados con exito")
})