console.log("enter");

export function getQueryParameter() {
	var urlParams = new URLSearchParams(window.location.search);
	var id = urlParams.get("id");
	console.log(id);

	if (id !== null && id !== "") {
		const div = $("#product-detail");
		div.append(`<h1>Hello this works</h1> ${id}`);
	} else {
		const div = $("#product-detail");

		div.append(`<h1>Invalid product selected</h1> ${id}`);
	}
}
