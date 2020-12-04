const requestAccessFormRender = (popupContainer, projectName) => popupContainer.innerHTML = (
	`<form id="${projectName}-form" action="https://formspree.io/f/mzbkavyl" method="POST" class="form">
		<label for="name" class="form_label my-1">Name<span>*</span></label>
		<input type="text" class="form_input" name="name" id="name" placeholder="Enter Your Name" required>
		<label for="email" class="form_label my-1">Email<span>*</span></label>
		<input type="email" class="form_input" name="email" id="email" placeholder="Enter Your Email" required>
		<label for="phone" class="form_label my-1">Phone</label>
		<input type="phone" class="form_input" name="phone" id="phone" placeholder="Enter Your Phone" required>
		<label for="message" class="form_label my-1">Message<span>*</span></label>
		<textarea class="form_textarea" id="message" name="message" rows="5">Hi. Would you give me an access to the ${projectName} project.
		</textarea>
		<button type="submit" id="${projectName}" class="form_button mt-1 mb-2 ml-auto">Send</button>
		<div id="request-form_status" class="form_status"></div>
	</form>`
	);

	export { requestAccessFormRender };
