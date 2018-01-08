
$("#save").click(function(){
    if($('#Target_Fast').val()){    _user.Target_Fast = $('#Target_Fast').val()}
    if($('#Language').val()){    _user.Language = $('#Language').val()}
    localStorage.setItem("User",  JSON.stringify(_user))
    console.log(_user)
})
