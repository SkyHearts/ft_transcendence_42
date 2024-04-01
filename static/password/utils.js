export function showLoading() {
    document.getElementById("reset-btn").style.display = "none";
    document.getElementById("loading-spinner").style.display = "inline";
    document.getElementById("dimmed-bg").style.display = "inline";
}

export function hideLoading() {
    document.getElementById("reset-btn").style.display = "inline";
    document.getElementById("loading-spinner").style.display = "none";
    document.getElementById("dimmed-bg").style.display = "none";
}

export function displayErrorMessages(errors) {
    // Clear existing error messages
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(errorMessage => {
        errorMessage.parentNode.removeChild(errorMessage);
    });

    // Display error messages for each field
    for (let field in errors) {
        const errorMessage = errors[field][0]; // Get the first error message for the field
        if (field == "non_field_errors")
            field = "new_password2";
        const inputField = document.getElementById(field); // Find the input field by ID
        const errorElement = document.createElement("div"); // Create a new div for the error message
        errorElement.classList.add("error-message");
        errorElement.textContent = errorMessage; // Set the error message text
        errorElement.style.marginTop = '2px';
        errorElement.style.paddingLeft = '10px';
        errorElement.style.color = "#ffbb00";
        inputField.parentNode.appendChild(errorElement); // Append the error message after the input field
    }
}