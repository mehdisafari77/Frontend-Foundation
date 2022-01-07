 // typing text animation script
 var typed = new Typed(".typing", {
    strings: ["IOS Developer", "Web-Developer", "Student"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed = new Typed(".typing-2", {
    strings: ["IOS Developer", "Web-Developer", "Student"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});



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