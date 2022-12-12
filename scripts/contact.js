// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

var submitButton = document.getElementById("submit-button");

function goodDog() {
    let respond = document.getElementById("contact-page");
    respond.innerHTML = "Thank you for your message!";
    respond.style.fontSize = "24px";
}

submitButton.addEventListener("click", goodDog);
