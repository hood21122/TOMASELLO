const form = document.querySelector("#info")
const email = document.querySelector("#email")
const name = document.querySelector("#name")

form.addEventListener("submit", (event) => {
	event.preventDefault()
	if (email.value === "" || name.value === "") {
		console.log("Completar información!")
	} else {
		form.submit();
	}
})