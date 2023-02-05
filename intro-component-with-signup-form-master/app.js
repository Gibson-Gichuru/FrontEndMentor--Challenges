// get DOM elements
const form = document.getElementById("form")

// invalidate empty form entries on submit

form.addEventListener("submit", (event) => {

    // prevent default

    event.preventDefault()

    // get all input elements

    let inputElements = document.querySelectorAll("[data-valid='']");

    inputElements.forEach(element => {
        if (element.value === "") {

            // change the color of the element
            element.style.setProperty("--error-color", "hsl(0, 100%, 74%)")

            // show the error icon 
            element.nextElementSibling.style.setProperty("--visibility", "visible")

            // change the color of the parent's border

            element.parentElement.style.setProperty("--error-color", "hsl(0, 100%, 74%)")

            // show error message

            element.parentElement.nextElementSibling
                .innerHTML = "cannot be empty"
        }
    })
})

// username and lastname validation

const names = document.querySelectorAll('[data-name]');

names.forEach(nameElement => {

    nameElement.addEventListener("blur", event => {

        if (event.target.value === "") {
            event.target.style.setProperty("--error-color", "hsl(0, 100%, 74%)")
            event.target.parentElement.style.setProperty("--error-color", "hsl(0, 100%, 74%)")
            event.target.nextElementSibling.style.setProperty("--visibility", "visible")

            let attrValue = event.target.getAttribute("data-name");

            if (attrValue == "username") {
                event.target.parentElement
                    .nextElementSibling
                    .innerHTML = "First name cannot be empty"
            }
            else {
                event.target.parentElement
                    .nextElementSibling
                    .innerHTML = "Last name cannot be empty"
            }

            return
        }

        event.target.style.setProperty("--error-color", "")
        event.target.parentElement.style.setProperty("--error-color", "")
        event.target.nextElementSibling.style.setProperty("--visibility", "")

        event.target.parentElement
            .nextElementSibling
            .innerHTML = ""
    })

})

// email and password validation

const authElements = document.querySelectorAll('[data-auth]')

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

authElements.forEach(inputElement => {

    inputElement.addEventListener("blur", event => {
        let attrValue = event.target.getAttribute("data-auth");

        if (event.target.value === "") {

            // common to both the elements

            event.target.style.setProperty("--error-color", "hsl(0, 100%, 74%)")
            event.target.parentElement.style.setProperty("--error-color", "hsl(0, 100%, 74%)")
            event.target.nextElementSibling.style.setProperty("--visibility", "visible")


            if (attrValue == "email") {
                event.target.parentElement
                    .nextElementSibling
                    .innerHTML = "Email cannot be empty"

            } else {

                event.target.parentElement
                    .nextElementSibling
                    .innerHTML = "password name cannot be empty"
            }

        } else if (!event.target.value.match(emailRegex) && attrValue==="email") {
            // check for email 

            event.target.style.setProperty("--error-color", "hsl(0, 100%, 74%)")
            event.target.parentElement.style.setProperty("--error-color", "hsl(0, 100%, 74%)")
            event.target.nextElementSibling.style.setProperty("--visibility", "visible")

            event.target.parentElement
                .nextElementSibling
                .innerHTML = "Looks like this is not an email"


        } else if (!event.target.value.match(passwordRegex) && attrValue ==="password") {
            event.target.style.setProperty("--error-color", "hsl(0, 100%, 74%)")
            event.target.parentElement.style.setProperty("--error-color", "hsl(0, 100%, 74%)")
            event.target.nextElementSibling.style.setProperty("--visibility", "visible")

            event.target.parentElement
                .nextElementSibling
                .innerHTML = "Provide a strong password"

        }

        else {

            event.target.style.setProperty("--error-color", "")
            event.target.parentElement.style.setProperty("--error-color", "")
            event.target.nextElementSibling.style.setProperty("--visibility", "")

            event.target.parentElement
                .nextElementSibling
                .innerHTML = ""

        }
    })
})

