let form = document.getElementById("form-container")

let firstName = document.getElementById("Firstname");
let lastName = document.getElementById("Lastname");
let fullName = document.getElementById("fullname");
let email = document.getElementById("email");
let ph_no = document.getElementById("ph-no");

let form_details = document.getElementById("form-details")

let submitButton = document.getElementById("btn");

form_details.classList.remove("form-details");

submitButton.addEventListener("click", (e)=>{

    e.preventDefault();

    // alert(
    //     `
    //     Firstname - ${firstName.value}
    //     LastName - ${lastName.value}
    //     FullName - ${fullName.value}
    //     Email - ${email.value}
    //     Number - ${ph_no.value}
    //     `
    // )
    // window.location.reload();

    form_details.classList.add("form-details");
    form.classList.add("hide-form");
    form_details.innerHTML = `
Firstname - ${firstName.value}
LastName - ${lastName.value}
FullName - ${fullName.value}
Email - ${email.value}
Number - ${ph_no.value}
//         `;
})