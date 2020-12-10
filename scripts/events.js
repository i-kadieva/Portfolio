const onFormSubmit = (form, handler) => form.addEventListener("submit", handler);

const onImageSelect = (image, handler) => image.addEventListener("click", handler);

const onClosePopup = (cancelButton, handler) => cancelButton.addEventListener("click", handler);

const onRequestAccess = (project, handler) => project.addEventListener("click", handler);

const onRequestAccessSubmit = (projectForm, handler) => projectForm.addEventListener("submit", handler);

const onNavigationButtonClick = (item, handler) => item.addEventListener("click", handler);

const onNavigationItemClick = (item, handler) => item.addEventListener("click", handler);

export {
	onFormSubmit,
	onImageSelect,
	onClosePopup,
	onRequestAccess,
	onRequestAccessSubmit,
	onNavigationButtonClick,
	onNavigationItemClick
};
