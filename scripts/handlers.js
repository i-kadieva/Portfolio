import { sendEmail } from './requests.js';
import { requestAccessFormRender } from './views.js';
import { onRequestAccessSubmit, onClosePopup } from './events.js';

const URL_ADDRESS = "https://formspree.io/f/mzbkavyl";

const success = (form, status) => {
	form.reset();
	status.innerHTML = "Thanks for contacting me!";
	status.style.color = 'rgb(0, 42, 56)';
}

const error = (status) =>  {
	status.innerHTML = "Oops! There was a problem. Please try again!";
	status.style.color = 'rgb(144, 0, 25)';
}


const formSubmitHandler = event => {
	event.preventDefault();
	const form = document.getElementById("email-form");
	const status = document.getElementById("form_status-email-form");
	const data = new FormData(form);
	sendEmail(form.method, URL_ADDRESS, data, success, error, form, status);
}

const closePopupHandler = () => {
	const popupContainer = document.getElementById('popup__content');
	popupContainer.removeChild(popupContainer.firstElementChild);
	const popup = document.getElementById('popup');
	popup.style.opacity = '0';
	popup.style.zIndex = '-1';
}

const imageSelectHandler = event => {
	const popup = document.getElementById('popup');
	popup.style.opacity = '1';
	popup.style.zIndex = '9999';
	const popupContainer = document.getElementById('popup__content');
	const image = event.cloneNode(true);
	popupContainer.appendChild(image);
	const cancelButton = document.getElementById('cancel');
	onClosePopup(cancelButton, closePopupHandler);

}

const requestAccessSubmitHandler = event => {
	event.preventDefault();
	const form = document.getElementById(event.target.id)
	const status = document.getElementById("request-form_status");
	const data = new FormData(form);
	sendEmail(form.method, URL_ADDRESS, data, success, error, form, status);
}

const requestAccessHandler = event => {
	const projectId = event.target.id;
	const popup = document.getElementById('popup');
	popup.style.opacity = '1';
	popup.style.zIndex = '9999';
	const popupContainer = document.getElementById('popup__content');
	const projectName = projectId === 'card__link_two' ? 'Book-Library' : 'Giphy';
	popupContainer.innerHTML = requestAccessFormRender(popupContainer, projectName);
	const form = document.getElementById(`${projectName}-form`);
	onRequestAccessSubmit(form, requestAccessSubmitHandler);
	const cancelButton = document.getElementById('cancel');
	onClosePopup(cancelButton, closePopupHandler);
}

const navigationButtonClickHandler = event => {
	const navigationButton = event.target;
	const buttonBackground = document.getElementsByClassName('navigation__background')[0];
	const navigationBar = document.getElementsByClassName('navigation__nav')[0];
	const navigationIkon = document.getElementsByClassName('navigation__icon')[0];
	if (buttonBackground.classList.length === 1) {
		buttonBackground.classList.add('navigation__background-expanded');
		navigationBar.classList.add('navigation__nav-expanded');
		navigationIkon.classList.add('navigation__icon-active');
	} else {
		buttonBackground.classList.remove('navigation__background-expanded');
		navigationBar.classList.remove('navigation__nav-expanded');
		navigationIkon.classList.remove('navigation__icon-active');
	}
}

const navigationItemClickHandler = () => {
	const buttonBackground = document.getElementsByClassName('navigation__background')[0];
	const navigationBar = document.getElementsByClassName('navigation__nav')[0];
	const navigationIkon = document.getElementsByClassName('navigation__icon')[0];
	buttonBackground.classList.remove('navigation__background-expanded');
	navigationBar.classList.remove('navigation__nav-expanded');
	navigationIkon.classList.remove('navigation__icon-active');
}

export {
	formSubmitHandler,
	imageSelectHandler,
	closePopupHandler,
	requestAccessHandler,
	navigationButtonClickHandler,
	navigationItemClickHandler
};
