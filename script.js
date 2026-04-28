function login() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if(user === "admin" && pass === "1234") {
        alert("Login Successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid Login");
    }
}