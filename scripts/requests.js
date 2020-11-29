const sendEmail = (method, url, data, success, error) => {
	const xhr = new XMLHttpRequest();
	 xhr.open(method, url);
	 xhr.setRequestHeader("Accept", "application/json");
	 xhr.onreadystatechange = () => {
		if (xhr.readyState !== XMLHttpRequest.DONE) return;
		if (xhr.status === 200) {
			success(xhr.response, xhr.responseType);
		} else {
		  error(xhr.status, xhr.response, xhr.responseType);
		}
	};
	xhr.send(data);
}

export { sendEmail };
