

function Validation(change) {
    const errors = {}

    if(!change.email) {
        errors.email = "Please enter a valid email address"
    }
    else if (change.email.length < 5){
        errors.email = "Email must be more than 5 char"
    }

    if(!change.password) {
        errors.password = "Please enter your password"
    }
    else if (change.password.length < 5){
        errors.password = "Email must be more than 5 characters"
    }

    return errors;
}


export default Validation;

