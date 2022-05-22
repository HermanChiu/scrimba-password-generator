let pw1 = document.getElementById("pw1")
let pw2 = document.getElementById("pw2")
let pw3 = document.getElementById("pw3")
let pw4 = document.getElementById("pw4")
let pws = [pw1, pw2, pw3, pw4]
let leng = document.getElementById("length")
let pwlength = leng.value
    // let possibleLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"]
let possibleLetters = '';
for (var i = 32; i < 127; i++) possibleLetters += String.fromCharCode(i);
let id = ""
    // let lengthEl = document.getElementById("length")

// lengthEl.addEventListener("input", function() {
//     generatePWs()
// })

async function copyText(id) {
    requestPermission()
    let copyText = document.getElementById(id)
    console.log(copyText.innerText)
    copyText.select()
    copyText.setSelectionRange(0, 99999)
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
            //     pws[j].innerHTML = `<svg width="20" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            //     <path d="M5 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM12.5 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM17.5 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" fill="#202B3C"/>
            //   </svg>`
        pws[j].value = "..."
    }
}

// for (let j = 0; j < pws.length; j++) {
//     // pws[j].innerText = "..."
//     pws[j].innerHTML = `<svg width="20" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M5 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM12.5 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM17.5 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" fill="#202B3C"/>
//   </svg>`
// }

leng.addEventListener("change", function() {
    let lenglabel2 = document.getElementById("lengthLabel2")
    lenglabel2.innerHTML = document.getElementById("length").value
})


async function CheckPermission() {
    const readPerm = await navigator.permissions.query({ name: 'clipboard-read', allowWithoutGesture: false });

    const writePerm = await navigator.permissions.query({ name: 'clipboard-write', allowWithoutGesture: false });

    // Will be 'granted', 'denied' or 'prompt':
    alert('Read: ' + readPerm.state + '\nWrite: ' + writePerm.state);
}

async function requestPermission() {
    const queryOpts = { name: 'clipboard-read', allowWithoutGesture: false };
    const permissionStatus = await navigator.permissions.query(queryOpts);
    // Will be 'granted', 'denied' or 'prompt':
    console.log(permissionStatus.state);

    // Listen for changes to the permission state
    permissionStatus.onchange = () => {
        console.log(permissionStatus.state);
    };
}
requestPermission()