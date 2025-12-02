//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
	const createlemntP = document.createElement("p");
	createlemntP.textContent = "DOM load success";

	document.body.appendChild(createlemntP)
})