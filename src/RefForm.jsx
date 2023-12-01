import { useRef, useState } from "react"
import { checkEmail, checkPassword } from "./validators"

export function RefForm() {
	const [passwordErrors, setPasswordErrors] = useState([])
	const [emailErrors, setEmailErrors] = useState([])
	const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false)

	const emailRef = useRef()
	const passwordRef = useRef()

	function onSubmit(e) {
		e.preventDefault()
		setIsAfterFirstSubmit(true)

		const emailResults = checkEmail(emailRef.current.value)
		const passwordResults = checkPassword(passwordRef.current.value)

		setEmailErrors(emailResults)
		setPasswordErrors(passwordResults)

		if (emailResults.length === 0 && passwordResults.length === 0) {
			alert("Success")
		}
	}

	return (
		<>
			<form noValidate onSubmit={onSubmit} className="form">
				<div
					className={`form-group ${
						emailErrors.length > 0 ? "error" : ""
					}`}
				>
					<label className="label" htmlFor="email">
						Email
					</label>
					<input
						onChange={(e) => {
							isAfterFirstSubmit &&
								setEmailErrors(checkEmail(e.target.value))
						}}
						className="input"
						type="email"
						id="email"
						ref={emailRef}
					/>
					{emailErrors.length > 0 && (
						<div className="msg">{emailErrors.join(",")}</div>
					)}
				</div>
				<div
					className={`form-group ${
						passwordErrors.length > 0 ? "error" : ""
					}`}
				>
					<label className="label" htmlFor="password">
						Password
					</label>
					<input
						onChange={(e) => {
							isAfterFirstSubmit &&
								setPasswordErrors(checkPassword(e.target.value))
						}}
						className="input"
						type="password"
						id="password"
						ref={passwordRef}
					/>
					{passwordErrors.length > 0 && (
						<div className="msg">{passwordErrors.join(",")}</div>
					)}
				</div>
				<button className="btn" type="submit">
					Submit
				</button>
			</form>
		</>
	)
}
