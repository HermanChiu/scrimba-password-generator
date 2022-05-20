let pw1 = document.getElementById("pw1")
let pw2 = document.getElementById("pw2")
let pw3 = document.getElementById("pw3")
let pw4 = document.getElementById("pw4")
let pws = [pw1, pw2, pw3, pw4]
let pwlength = document.getElementById("length").value
let possibleLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"]
let id = ""

async function copyText(id) {
    var text = document.getElementById(id)
    text.select()
    text.setSelectionRange(0.99999)
    navigator.clipboard.writeText(text.value).then(function() {
        alert("successfully copied");
    }, function(err) {
        alert("failed to copy")
    });
    console.log(text.innerText)
}



function generate(pwlength) {
    let password = ""
    for (let i = 0; i < pwlength; i++) {
        password += possibleLetters[Math.floor(Math.random() * possibleLetters.length)]
    }
    return password;
}


function generatePWs() {
    pwlength = document.getElementById("length").value
    if (pwlength > 30 || pwlength < 8) {
        alert("Password length must be between 8 and 20 characters.")
        return "invalid"
    } else {
        for (let j = 0; j < pws.length; j++) {
            let pw = generate(pwlength)
            pws[j].innerText = pw
            pws[j].value = pw
        }
    }
}

function removePWs() {
    for (let j = 0; j < pws.length; j++) {
        pws[j].innerText = "..."
        pws[j].value = "..."
    }
}