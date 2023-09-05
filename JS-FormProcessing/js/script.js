// event listener to disable submit button if all fields are not filled
// and to enable it if they are

// creat error bucket
let errors = [];

addEventListener("load", function () {
    let submit = document.getElementById("submit"); // disable submit button by default
    submit.disabled = true;

    let inputs = document.getElementsByTagName("input"); // get all input fields
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("blur", function () { // use event listener to check fields for values
            let error = false;
            for (let i = 0; i < inputs.length; i++) { // if a field is empty, and store true in errors
                if (inputs[i].value === "") {
                    error = true;
                    // if error exists, add error to errors array
                }
            }
            // check dropdowns for values
            let dropdowns = document.getElementsByTagName("select");
            for (let i = 0; i < dropdowns.length; i++) {
                if (dropdowns[i].value === "") {
                    error = true;
                }
                if (!errors.includes(dropdowns[i].id)) {
                    errors.push(dropdowns[i].id);
                }
            }
            // if error exists, add error to errors array
            if (!errors.includes(inputs[i].id)) {
                errors.push(inputs[i].id);
            }
            console.log(errors);
            if (error) { // if error is true, disable submit button
                submit.disabled = true;
            } else {
                submit.disabled = false;
            }
        });
    }
});