// Compliment Message on Mouseover
let catImage = document.getElementById("#cat-image");
function complimentMessage(x){
    alert('Hi! My name is Alex The Cat')
}

catImage.addEventListener('mouseover', complimentMessage)

// Send form
let form = document.getElementById('send');
function sendMessage() {
	alert('Your message has been sent!, Thank you');
}
