import { sendEmail } from './requests.js';
import { requestAccessFormRender } from './views.js';
import { onRequestAccessSubmit } from './events.js';

const success = () => {
	form.reset();
	status.innerHTML = "Thanks for contacting me!";
	status.style.color = 'rgb(0, 42, 56)';
}

const error = () =>  {
	status.innerHTML = "Oops! There was a problem. Please try again!";
	status.style.color = 'rgb(144, 0, 25)';
}


const formSubmitHandler = (event, form) => {
	event.preventDefault(form);
	const data = new FormData();
	const respond = sendEmail(form.method, form.action, data, success, error);
	const status = document.getElementById("form_status");
	if (respond === 'success') {
		form.reset();
		status.innerHTML = "Thanks for contacting me!";
		status.style.color = 'rgb(0, 42, 56)';
	} else {
		status.innerHTML = "Oops! There was a problem. Please try again!";
		status.style.color = 'rgb(144, 0, 25)';
	}
}

const imageSelectHandler = event => {
	console.log(event);
	const popup = document.getElementById('popup');
	popup.style.opacity = '1';
	popup.style.zIndex = '9999';
	const popupContainer = document.getElementById('popup__content');
	popupContainer.appendChild(event);
	
}

const onRequestAccessSubmitHandler = (event) => {
	console.log(event);
	alert()
	event.preventDefault();
	const form = document.getElementById(`${event.target.id}-form`)
	const data = new FormData(form);
	data.append('projectName', form.id);
	const respond = sendEmail(form.method, form.action, data, success, error);
	const status = document.getElementById("form_status");
	if (respond === 'success') {
		form.reset();
		status.innerHTML = "Thanks for your interest! I will contact you soon.";
		status.style.color = 'rgb(0, 42, 56)';
	} else {
		status.innerHTML = "Oops! There was a problem. Please try again!";
		status.style.color = 'rgb(144, 0, 25)';
	}
}

const onRequestAccessHandler = (event) => {
	const projectId = event.target.id;
	const popup = document.getElementById('popup');
	popup.style.opacity = '1';
	popup.style.zIndex = '9999';
	const popupContainer = document.getElementById('popup__content');
	const projectName = projectId === 'card__link_two' ? 'Book-Library' : 'Giphy';
	popupContainer.innerHTML = requestAccessFormRender(popupContainer, projectName);
	const form = document.getElementById(projectName);
	onRequestAccessSubmit(form, onRequestAccessSubmitHandler);
}

export {
	formSubmitHandler,
	imageSelectHandler,
	onRequestAccessHandler
};
