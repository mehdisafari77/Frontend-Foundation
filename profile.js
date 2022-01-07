 // typing text animation script
var typed = new Typed(".typing-2", {
    strings: ["IOS Developer", "Web-Developer", "Student"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

let favClr = document.getElementById('color')
let favPlc = document.getElementById('place')
let favRtl = document.getElementById('ritual')

function favClrAlert() {
    alert('My Favorite Color is Blue')
}
function favPlcAlert() {
    alert('My Favorite Place is London')
}
function favRtlAlert() {
    alert('My Favorite Ritual is Morning Coffee')
}