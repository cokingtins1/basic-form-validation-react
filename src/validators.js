export function checkEmail(email) {
	const errors = []

	if (email.length === 0) {
		errors.push("you must enter an email address")
	}

	if (!email.endsWith("@gmail.com")) {
		errors.push("email must end with '@gmail.com'")
	}

	return errors
}

export function checkPassword(password) {
	const errors = []

	if (password === null) {
		errors.push("you must enter a password")
	}

	if (password.length < 10) {
		errors.push("password must be at least 10 characters")
	}
	if (password.length < 10) {
		errors.push("password must be at least 10 characters")
	}

	if (!password.match(/[a-z]/)) {
		errors.push("password must include a lowercase letter ")
	}

	if (!password.match(/[A-Z]/)) {
		errors.push("password must include an uppercase letter ")
	}
	if (!password.match(/[0-9]/)) {
		errors.push("password must include at least one number ")
	}

	return errors
}
