import {
	onFormSubmit,
	onImageSelect,
	onRequestAccess,
	onNavigationButtonClick,
	onNavigationItemClick
} from './events.js';
import {
	formSubmitHandler,
	imageSelectHandler,
	requestAccessHandler,
	navigationButtonClickHandler,
	navigationItemClickHandler
} from './handlers.js';

window.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById('email-form');
	const navigationButton = document.getElementById('navigation__button');
	const links = Array.from(document.getElementsByClassName('navigation__link'));
	const images = Array.from(document.getElementsByClassName('card__image'));
	const projects = Array.from(document.getElementsByClassName('request-access'));

	onFormSubmit(form, formSubmitHandler);
	onNavigationButtonClick(navigationButton, navigationButtonClickHandler);
	links.forEach(link => onNavigationItemClick(link, navigationItemClickHandler));
	images.forEach(image => onImageSelect(image, () => imageSelectHandler(image)));
	projects.forEach(project => onRequestAccess(project, requestAccessHandler));
});
