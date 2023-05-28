addStudent = () => {
    let surname = document.getElementById("surname").value
    let email = document.getElementById("email").value
    let contact = +document.getElementById("contact").value
    let subject = document.getElementById("subject").value
    let password = document.getElementById("password").value
    let checkbox = document.getElementById("checkbox").checked

    
        if(checkbox){
            alert("welcome " + surname + "! " + "Thank you for your interest in " + subject + "." + " We will contact you via: " + email + " or alternatively on the phone number: "  + contact + ".")
        }
        else {
            alert("Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested " + surname + "! " + " If you want to sign up, you better CHECK that newsletter box!")
        }

    
    
    console.log(surname,email,contact,subject,password,checkbox)



}

