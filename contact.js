document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        if (!name || !email || !subject || !message) {
            event.preventDefault();
            alert("Please fill out all fields.");
        } else {
            alert("Form submitted successfully!");
        }
    });
});