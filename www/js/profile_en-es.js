
var _user = JSON.parse(localStorage.getItem('User')) 

switch(_user.Language)
{
    case "1":  
        $("#label-imc").html("IMC") 
        $("#label-height").html("Altura") 
        $("#label-weight").html("Peso") 
        $("#label-streak").html("Racha")
        $("#user_name_label").html("Nombre") 
        $("#user_gender_label").html("Genero") 
        $("#user_age_label").html("Edad") 
        $("#user_weight_label").html("Peso") 
        $("#user_height_label").html("Altura") 
        $("#update").html("Actualizar")  
        $('#modal-c-update').html("Cambios Realizados con exito")
        $('#modal-b-update').html("Aceptar")
        $('#modal-t-welcome').html("Bienvenido!")
        $('#modal-c-welcome').html("Para comenzar a usar el app solo tienes que crear tu perfil, Por favor llena el formulario")
        $('#modal-b-welcome').html("Aceptar")
        break;
    case "2":     
        $("#label-imc").html("IMC") 
        $("#label-height").html("Height") 
        $("#label-weight").html("Weight") 
        $("#label-streak").html("Streak") 
        $("#user_name_label").html("Name") 
        $("#user_gender_label").html("Gender") 
        $("#user_age_label").html("Age") 
        $("#user_weight_label").html("Weight") 
        $("#user_height_label").html("Height") 
        $("#update").html("Update") 
        $('#modal-c-update').html("changes applied successfully");
        $('#modal-b-update').html("Continue");
        $('#modal-t-welcome').html("Welcome!")
        $('#modal-c-welcome').html("To start using the app you need a profile, please fill the following form to get started")
        $('#modal-b-welcome').html("Continue")

        break;
    default: 
        $("#label-imc").html("IMC") 
        $("#label-height").html("Altura") 
        $("#label-weight").html("Peso") 
        $("#label-streak").html("Racha")
        $("#user_name_label").html("Nombre") 
        $("#user_gender_label").html("Genero") 
        $("#user_age_label").html("Edad") 
        $("#user_weight_label").html("Peso") 
        $("#user_height_label").html("Altura") 
        $("#update").html("Actualizar") 
        $('#modal-c-update').html("Cambios Realizados con exito");
        $('#modal-b-update').html("Aceptar");
        $('#modal-t-welcome').html("Bienvenido!")
        $('#modal-c-welcome').html("Para comenzar a usar el app solo tienes que crear tu perfil, Por favor llena el formulario")
        $('#modal-b-welcome').html("Aceptar")
        break;
}