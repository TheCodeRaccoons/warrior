
var _user = JSON.parse(localStorage.getItem('User')) 
 
switch(_user.Language)
{
    case "1":  
        $("#index_start").html("<span id='edit'></span>Inicio: <span id='inicio'></span>")  

        break;
    case "2":     
        $("#index_start").html("Starts: ")   
        break;
    default: 
        $("#index_start").html("<span id='edit'></span>Inicio: <span id='inicio'></span>")  
        break;
}
 