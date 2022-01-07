


// Compliment Message on Mouseover
let catImage = document.getElementById("#cat-image");
function complimentMessage(e){
	e.preventDefault();
    alert('Hi')
}
catImage.addEventListener('mouseover', complimentMessage)

// Send form
function sendMessage() {
	alert('Your message has been sent!, Thank you');
}
let form = document.getElementById('send');
