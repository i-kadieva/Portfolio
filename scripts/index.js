// window.addEventListener("DOMContentLoaded", function() {

// 	 // get the form elements defined in your form HTML above
	 
// 	 var form = document.getElementById("email-form");
// 	 var button = document.getElementById("form_button");
// 	 var status = document.getElementById("form_status");

// 	 // Success and Error functions for after the form is submitted
	 
// 	 function success() {
// 		form.reset();
// 		status.innerHTML = "Thanks for contacting me!";
// 		status.style.color = 'rgb(0, 42, 56)';
// 	 }

// 	 function error() {
// 		status.innerHTML = "Oops! There was a problem. Please try again!";
// 		status.style.color = 'rgb(144, 0, 25)';
// 	}

// 	 // handle the form submission event

// 	 form.addEventListener("submit", function(ev) {
// 		ev.preventDefault();
// 		var data = new FormData(form);
// 		ajax(form.method, form.action, data, success, error);
// 	 });
//   });
  
//   // helper function for sending an AJAX request

//   function ajax(method, url, data, success, error) {
// 	 var xhr = new XMLHttpRequest();
// 	 xhr.open(method, url);
// 	 xhr.setRequestHeader("Accept", "application/json");
// 	 xhr.onreadystatechange = function() {
// 		if (xhr.readyState !== XMLHttpRequest.DONE) return;
// 		if (xhr.status === 200) {
// 		  success(xhr.response, xhr.responseType);
// 		} else {
// 		  error(xhr.status, xhr.response, xhr.responseType);
// 		}
// 	 };
// 	 xhr.send(data);
//   }
import {
	onFormSubmit,
	onImageSelect,
	onRequestAccess
} from './events.js';
import {
	formSubmitHandler,
	imageSelectHandler,
	requestAccessHandler
} from './handlers.js';

window.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById('email-form');
	const images = Array.from(document.getElementsByClassName('card__images'));
	const projects = Array.from(document.getElementsByClassName('request-access'));

	onFormSubmit(form, formSubmitHandler);
	images.forEach(image => onImageSelect(image, () => imageSelectHandler(image)));
	projects.forEach(project => onRequestAccess(project, requestAccessHandler));
});
