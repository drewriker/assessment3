console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');

	alert("Form has been submitted!")
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let img = document.querySelector('#rubberDuck')

img.addEventListener('mouseover', function(){
	alert('You look better than this duck')
})