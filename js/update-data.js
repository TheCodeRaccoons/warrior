$(document).ready(function(){

    //Check if the User data exists
    if(localStorage.getItem('Users_DB')){
        //get the Users DB Json
        var retrievedObject = JSON.parse(localStorage.getItem('Users_DB')) 
        //Get the data of the object and add it to the add-data section
        console.log(retrievedObject)
        for(var i = 0; i < retrievedObject.Users.length; i++){
            $(".add-data").append("Name: " + retrievedObject.Users[i].User_Name + " " + retrievedObject.Users[i].User_Lastname + " Email: "  + retrievedObject.Users[i].Email + "<br>"); 
        }
    //if the localstorage object does not exist... well, create one...
    }else{
        var Users_DB = {Users:[]}
        localStorage.setItem("Users_DB", JSON.stringify(Users_DB))
    }

    //If the send button is pressed run the function
    $( "#send" ).click(function() {
        //If aqll the fields are filled in store the data in the local storage
        if($('#User_Name').val() != "" &&  $('#User_Lastname').val() != "" && $('#email').val() != "" && $('#Password').val() != ""){
            //get this moment
            var moment = new Date()
            //get expiration time
            var customDate = new Date (moment.getTime() + 3600000)
            //push data to the object
            retrievedObject['Users'].push(
                {
                    "User_Name":$('#User_Name').val(),
                    "User_Lastname": $('#User_Lastname').val(),
                    "Email": $('#email').val(),
                    "Password" : $('#Password').val(),
                    "Date_Created" : moment.getTime(),
                    "expiration_Date" : customDate.getTime()
                });
            //console.log(retrievedObject)
            //Print the last user added in the page
            var id = retrievedObject.Users.length - 1
            $(".add-data").append("Name: " + retrievedObject.Users[id].User_Name + " " + retrievedObject.Users[id].User_Lastname + " Email: "  + retrievedObject.Users[id].Email + "<br>"); 
            //Update the localstorage variable
            localStorage.setItem("Users_DB",  JSON.stringify(retrievedObject))
        }
        //If any value is missing throw error
        else{
            alert("Please fill in all the form values")
        }
    })
})