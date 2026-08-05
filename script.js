document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    if (name === "" || email === "" || password === "") {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
        return;
    }

    if (password.length < 6) {
        message.textContent = "Password must be at least 6 characters.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Registration Successful!";
    message.style.color = "green";

    document.getElementById("registrationForm").reset();
});