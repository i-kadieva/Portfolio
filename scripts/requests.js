const sendEmail = (method, url, data, success, error, form, status) => {
	const xhr = new XMLHttpRequest();
	 xhr.open(method, url);
	 xhr.setRequestHeader("Accept", "application/json");
	 xhr.onreadystatechange = () => {
		if (xhr.readyState !== XMLHttpRequest.DONE) return;
		// const form = document.getElementById("email-form");
		// const status = document.getElementsByClassName("form_status");
		if (xhr.status === 200) {
			success(form, status);
		} else {
			error(status);
		}
	};
	xhr.send(data);
}

export { sendEmail };
