console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form submitted")
}

function compliment(event) {
	alert("You have a great taste in pictures")
}
document.querySelector('#ducky').addEventListener('mouseover', compliment)

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);