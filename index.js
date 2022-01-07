



console.log("hello world");

let catImage = document.getElementById("#cat-image");
function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your form has been submitted!, Thank you');
}

function complimentMessage(e){
	e.preventDefault();
    alert('Hi')
}

catImage.addEventListener('mouseover', complimentMessage)

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);