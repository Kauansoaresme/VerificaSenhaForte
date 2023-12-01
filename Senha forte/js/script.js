let pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strenght");

pass.addEventListener('input', () => {
    if (pass.value.length > 0) {
        msg.style.display = "block";
    }
    else {
        msg.style.display = "none";
    }

    if (pass.value.length < 4) {
        str.innerHTML = "fraca";
        str.style.color = "red";
        pass.style.borderColor = "red";
    }
    else if (pass.value.length >= 4 && pass.value.length < 8) {
        str.innerHTML = "Regular";
        str.style.color = "orange";
        pass.style.borderColor = "orange";
    }
    else if (pass.value.length >= 8) {
        str.innerHTML = "Forte";
        str.style.color = "green";
        pass.style.borderColor = "green";
    }
    })