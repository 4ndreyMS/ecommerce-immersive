import "./styles/index.scss";

import { loadPreviewProducts, activePaginator } from "./js/products.js";
import { getQueryParameter } from "./js/product-details.js";

window.activePaginator = activePaginator;
window.onload = function () {
	loadPreviewProducts();
	getQueryParameter();
};

console.log("hello");

const tableData = [
	{
		id: "1",
		name: "Syltherine",
		description: "Elegant and comfortable chair with high-quality wood finish.",
		price: "200",
		category: "Bedroom",
		abstract: "Stylish cafe chair",
		image: "assets/products/product1.png",
	},
	{
		id: "2",
		name: "Hufflebench",
		description: "A sturdy and spacious bench made from premium oak.",
		price: "350",
		category: "Living Room",
		abstract: "Oakwood bench",
		image: "assets/products/product2.png",
	},
	{
		id: "3",
		name: "Ravenclaw Recliner",
		description:
			"Luxurious recliner with plush cushioning and adjustable backrest.",
		price: "500",
		category: "Living Room",
		abstract: "Comfortable recliner",
		image: "assets/products/product3.png",
	},
	{
		id: "4",
		name: "Gryffindesk",
		description:
			"A sleek and modern desk with built-in drawers and a glass top.",
		price: "400",
		category: "Office",
		abstract: "Modern office desk",
		image: "assets/products/product4.png",
	},
	{
		id: "5",
		name: "Quidditch Quilt",
		description: "A warm and cozy quilt made from hypoallergenic materials.",
		price: "150",
		category: "Bedroom",
		abstract: "Cozy bedroom quilt",
		image: "assets/products/product5.png",
	},
	{
		id: "6",
		name: "Dumbledrawer",
		description: "A large drawer with ample storage space and a vintage look.",
		price: "300",
		category: "Bedroom",
		abstract: "Vintage drawer",
		image: "assets/products/product6.png",
	},
	{
		id: "7",
		name: "Potter's Pot Stand",
		description: "A charming pot stand for displaying your favorite plants.",
		price: "50",
		category: "Garden",
		abstract: "Charming pot stand",
		image: "assets/products/product7.png",
	},
	{
		id: "8",
		name: "Weasley's Wicker Basket",
		description: "A handwoven wicker basket, perfect for storing small items.",
		price: "75",
		category: "Bathroom",
		abstract: "Handwoven wicker basket",
		image: "assets/products/product8.png",
	},
	{
		id: "3",
		name: "Ravenclaw Recliner",
		description:
			"Luxurious recliner with plush cushioning and adjustable backrest.",
		price: "500",
		category: "Living Room",
		abstract: "Comfortable recliner",
		image: "assets/products/product3.png",
	},
	{
		id: "4",
		name: "Gryffindesk",
		description:
			"A sleek and modern desk with built-in drawers and a glass top.",
		price: "400",
		category: "Office",
		abstract: "Modern office desk",
		image: "assets/products/product4.png",
	},
	{
		id: "5",
		name: "Quidditch Quilt",
		description: "A warm and cozy quilt made from hypoallergenic materials.",
		price: "150",
		category: "Bedroom",
		abstract: "Cozy bedroom quilt",
		image: "assets/products/product5.png",
	},
	{
		id: "6",
		name: "Dumbledrawer",
		description: "A large drawer with ample storage space and a vintage look.",
		price: "300",
		category: "Bedroom",
		abstract: "Vintage drawer",
		image: "assets/products/product6.png",
	},
	{
		id: "1",
		name: "Syltherine",
		description: "Elegant and comfortable chair with high-quality wood finish.",
		price: "200",
		category: "Bedroom",
		abstract: "Stylish cafe chair",
		image: "assets/products/product1.png",
	},
	{
		id: "2",
		name: "Hufflebench",
		description: "A sturdy and spacious bench made from premium oak.",
		price: "350",
		category: "Living Room",
		abstract: "Oakwood bench",
		image: "assets/products/product2.png",
	},
	{
		id: "3",
		name: "Ravenclaw Recliner",
		description:
			"Luxurious recliner with plush cushioning and adjustable backrest.",
		price: "500",
		category: "Living Room",
		abstract: "Comfortable recliner",
		image: "assets/products/product3.png",
	},
	{
		id: "4",
		name: "Gryffindesk",
		description:
			"A sleek and modern desk with built-in drawers and a glass top.",
		price: "400",
		category: "Office",
		abstract: "Modern office desk",
		image: "assets/products/product4.png",
	},
	{
		id: "7",
		name: "Potter's Pot Stand",
		description: "A charming pot stand for displaying your favorite plants.",
		price: "50",
		category: "Garden",
		abstract: "Charming pot stand",
		image: "assets/products/product7.png",
	},
	{
		id: "8",
		name: "Weasley's Wicker Basket",
		description: "A handwoven wicker basket, perfect for storing small items.",
		price: "75",
		category: "Bathroom",
		abstract: "Handwoven wicker basket",
		image: "assets/products/product8.png",
	},
	{
		id: "1",
		name: "Syltherine",
		description: "Elegant and comfortable chair with high-quality wood finish.",
		price: "200",
		category: "Bedroom",
		abstract: "Stylish cafe chair",
		image: "assets/products/product1.png",
	},
	{
		id: "2",
		name: "Hufflebench",
		description: "A sturdy and spacious bench made from premium oak.",
		price: "350",
		category: "Living Room",
		abstract: "Oakwood bench",
		image: "assets/products/product2.png",
	},
	{
		id: "3",
		name: "Ravenclaw Recliner",
		description:
			"Luxurious recliner with plush cushioning and adjustable backrest.",
		price: "500",
		category: "Living Room",
		abstract: "Comfortable recliner",
		image: "assets/products/product3.png",
	},
	{
		id: "4",
		name: "Gryffindesk",
		description:
			"A sleek and modern desk with built-in drawers and a glass top.",
		price: "400",
		category: "Office",
		abstract: "Modern office desk",
		image: "assets/products/product4.png",
	},
	{
		id: "5",
		name: "Quidditch Quilt",
		description: "A warm and cozy quilt made from hypoallergenic materials.",
		price: "150",
		category: "Bedroom",
		abstract: "Cozy bedroom quilt",
		image: "assets/products/product5.png",
	},
	{
		id: "7",
		name: "Potter's Pot Stand",
		description: "A charming pot stand for displaying your favorite plants.",
		price: "50",
		category: "Garden",
		abstract: "Charming pot stand",
		image: "assets/products/product7.png",
	},
	{
		id: "8",
		name: "Weasley's Wicker Basket",
		description: "A handwoven wicker basket, perfect for storing small items.",
		price: "75",
		category: "Bathroom",
		abstract: "Handwoven wicker basket",
		image: "assets/products/product8.png",
	},
];

/*
	1 - Loop Through Array & Access each value
	2 - Create Table Rows & append to table
*/

var state = {
	querySet: tableData,
	page: 1, //starts in
	rows: 16, //rows per page
	window: 5, //amount of pages
};

buildTable();

function pagination(querySet, page, rows) {
	var trimStart = (page - 1) * rows;
	var trimEnd = trimStart + rows;

	var trimmedData = querySet.slice(trimStart, trimEnd);

	var pages = Math.round(querySet.length / rows);

	return {
		querySet: trimmedData,
		pages: pages,
	};
}

function pageButtons(pages) {
	var wrapper = document.getElementById("pagination-wrapper");

	if (wrapper) {
		wrapper.innerHTML = ``;
		console.log("Pages:", pages);

		var maxLeft = state.page - Math.floor(state.window / 2);
		var maxRight = state.page + Math.floor(state.window / 2);

		if (maxLeft < 1) {
			maxLeft = 1;
			maxRight = state.window;
		}

		if (maxRight > pages) {
			maxLeft = pages - (state.window - 1);

			if (maxLeft < 1) {
				maxLeft = 1;
			}
			maxRight = pages;
		}

		for (var page = maxLeft; page <= maxRight; page++) {
			wrapper.innerHTML += `<button value=${page} onClick="activePaginator(this)" class="page button-filled-beige">${page}</button>`;
		}

		if (state.page != 1) {
			wrapper.innerHTML =
				`<button value=${1} onClick="activePaginator(this)" class="page button-filled-beige">&#171; First</button>` +
				wrapper.innerHTML;
		}

		if (state.page != pages) {
			wrapper.innerHTML += `<button value=${pages} onClick="activePaginator(this)" class="page button-filled-beige">Last &#187;</button>`;
		}

		$(".page").on("click", function () {
			$("#table-body").empty();

			state.page = Number($(this).val());

			buildTable();
		});
	}
}

//insert the items
function buildTable() {
	var table = $("#table-body");
	console.log(table);
	var data = pagination(state.querySet, state.page, state.rows);
	var myList = data.querySet;

	for (var i in myList) {
		const row = `

		<product-card class="products__card">
			<a href="/product-details?id=${myList[i].id}">
				<div>
					<img
						class="products__card-img"
						src="${myList[i].image}"
						alt="${myList[i].name}"
					/>
				</div>
                <div class="products__card-description">
                    <p class="semi-bold">${myList[i].name}</p>
                    <p class="semi-bold text-0 products__card-description-type">
                        ${myList[i].abstract}
                    </p>
                    <p class="semi-bold">$${myList[i].price} </p>
                </div>
			</a>
		</product-card>
        
        `;
		table.append(row);
	}

	pageButtons(data.pages);
}
