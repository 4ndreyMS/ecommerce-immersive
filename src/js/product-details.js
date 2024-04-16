import { tableData } from "../index.js";

export function getQueryParameter() {
	var urlParams = new URLSearchParams(window.location.search);
	var id = urlParams.get("id");

	if (id !== null && id !== "") {
		const div = $("#product-detail");
		const filteredElement = filterArrayById(id);
		div.append(`
				<banner class="banner-details">
					<div class="banner-details__cont wrapper">
						<p class="banner-details__title">Home > Products > <span class="semi-bold">${filteredElement[0].name}<span/></p>
					</div>
				</banner>
				<div class="product-detail__container wrapper">
					<img
						src="${filteredElement[0].image}"
						alt="${filteredElement[0].name}"
						class="product-detail__image"
					/>
					<div>
						<h1>${filteredElement[0].name}</h1>
						<p><span class="semi-bold">Price:</span> $${filteredElement[0].price}</p>
						<p><span class="semi-bold">Category:</span> ${filteredElement[0].category}</p>
						<p>
							<span class="semi-bold">Description: </span> ${filteredElement[0].description}
						</p>
						<div class="product-detail__reviews-cont">
							<div>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star"></span>
								<span class="fa fa-star"></span>
							</div>
						</div>
					</div>
				</div>
		
		`);
	} else {
		const div = $("#product-detail");

		div.append(`<h1>Invalid product selected</h1> ${id}`);
	}
}

function filterArrayById(id) {
	//this creates a nre array that only includes the the objects that fit the condition
	return tableData.filter((element) => element.id === id);
}
