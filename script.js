<!DOCTYPE html>
<html>
<head>
    <title>User Registration</title>
</head>
<body>

<h2>User Registration Form</h2>

<form onsubmit="return registerUser()">
    <label>Name:</label><br>
    <input type="text" id="name"><br><br>

    <label>Email:</label><br>
    <input type="email" id="email"><br><br>

    <label>Password:</label><br>
    <input type="password" id="password"><br><br>

    <input type="submit" value="Register">
</form>

<p id="message"></p>

<script>
function registerUser() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {
        document.getElementById("message").innerHTML = "Please fill all fields.";
        return false;
    }

    if (password.length < 6) {
        document.getElementById("message").innerHTML = "Password must be at least 6 characters.";
        return false;
    }

    document.getElementById("message").innerHTML = "Registration Successful!";
    return false; // Prevents page reload
}
</script>

</body>
</html>