const onFormSubmit = (form, handler) => form.addEventListener("submit", () => handler(form));

const onImageSelect = (image, handler) => image.addEventListener("click", handler);

const onClosePopup = (cancelButton, handler) => cancelButton.addEventListener("click", handler);

const onRequestAccess = (project, handler) => project.addEventListener("click", handler);

const onRequestAccessSubmit = (projectForm, handler) => projectForm.addEventListener("submit", handler);

export {
	onFormSubmit,
	onImageSelect,
	onClosePopup,
	onRequestAccess,
	onRequestAccessSubmit
};
