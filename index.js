

// Compliment Message on Mouseover
let catImage = document.getElementById("#cat-image");
function complimentMessage(e){
	e.preventDefault();
    alert('Hi')
}
catImage.addEventListener('mouseover', complimentMessage)

// Send form
function handleSubmit(evt) {
	evt.preventDefault();
	alert('Your message has been sent!, Thank you');
}
let form = document.getElementById('send');
form.addEventListener('submit', handleSubmit);