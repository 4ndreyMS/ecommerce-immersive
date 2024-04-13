import "./styles/index.scss";

import { loadPreviewProducts } from "./js/products.js";
import { getQueryParameter } from "./js/product-details.js";

window.onload = function () {
	loadPreviewProducts();
	getQueryParameter();
};

console.log("hello");

var test = [
	{
		first_name: "Russell",
		last_name: "Wilson",
		rank: "1",
	},
	{
		first_name: "Russell",
		last_name: "Wilson",
		rank: "1",
	},
	{
		first_name: "Russell",
		last_name: "Wilson",
		rank: "1",
	},
	{
		first_name: "Russell",
		last_name: "Wilson",
		rank: "1",
	},
	{
		first_name: "Matt",
		last_name: "Hasselbeck",
		rank: "2",
	},
	{
		first_name: "Jim",
		last_name: "Zorn",
		rank: "3",
	},
	{
		first_name: "Brady",
		last_name: "Quinn",
		rank: "4",
	},
	{
		first_name: "Charly",
		last_name: "Whitehurst",
		rank: "5",
	},
	{
		first_name: "Duane",
		last_name: "Devine",
		rank: "6",
	},
	{
		first_name: "Tom",
		last_name: "Brady",
		rank: "7",
	},
	{
		first_name: "Arron",
		last_name: "Rogers",
		rank: "8",
	},
	{
		first_name: "Patrick",
		last_name: "Mahoms",
		rank: "9",
	},
	{
		first_name: "Gardner",
		last_name: "Minshew",
		rank: "10",
	},
	{
		first_name: "Andrew",
		last_name: "Luck",
		rank: "11",
	},
	{
		first_name: "Josh",
		last_name: "Gordon",
		rank: "12",
	},
	{
		first_name: "Drew",
		last_name: "Brees",
		rank: "13",
	},
	{
		first_name: "Cam",
		last_name: "Newton",
		rank: "14",
	},
	{
		first_name: "Joe",
		last_name: "Montana",
		rank: "15",
	},
	{
		first_name: "Steve",
		last_name: "Young",
		rank: "16",
	},
	{
		first_name: "Dan",
		last_name: "Jones",
		rank: "17",
	},
	{
		first_name: "Eli",
		last_name: "Manning",
		rank: "18",
	},
	{
		first_name: "Marus",
		last_name: "Marriota",
		rank: "19",
	},
	{
		first_name: "Ryan",
		last_name: "Fitzpatrick",
		rank: "21",
	},
	{
		first_name: "Chad",
		last_name: "Pennington",
		rank: "21",
	},
	{
		first_name: "John",
		last_name: "Doe",
		rank: "22",
	},
	{
		first_name: "Russell",
		last_name: "Wilson",
		rank: "21",
	},
	{
		first_name: "Matt",
		last_name: "Hasselbeck",
		rank: "22",
	},
	{
		first_name: "Jim",
		last_name: "Zorn",
		rank: "23",
	},
	{
		first_name: "Brady",
		last_name: "Quinn",
		rank: "24",
	},
	{
		first_name: "Charly",
		last_name: "Whitehurst",
		rank: "25",
	},
	{
		first_name: "Duane",
		last_name: "Devine",
		rank: "26",
	},
	{
		first_name: "Tom",
		last_name: "Brady",
		rank: "27",
	},
	{
		first_name: "Arron",
		last_name: "Rogers",
		rank: "28",
	},
	{
		first_name: "Patrick",
		last_name: "Mahoms",
		rank: "29",
	},
	{
		first_name: "Gardner",
		last_name: "Minshew",
		rank: "30",
	},
	{
		first_name: "Andrew",
		last_name: "Luck",
		rank: "31",
	},
	{
		first_name: "Josh",
		last_name: "Gordon",
		rank: "32",
	},
	{
		first_name: "Drew",
		last_name: "Brees",
		rank: "33",
	},
	{
		first_name: "Cam",
		last_name: "Newton",
		rank: "34",
	},
	{
		first_name: "Joe",
		last_name: "Montana",
		rank: "35",
	},
	{
		first_name: "Steve",
		last_name: "Young",
		rank: "36",
	},
	{
		first_name: "Dan",
		last_name: "Jones",
		rank: "37",
	},
	{
		first_name: "Eli",
		last_name: "Manning",
		rank: "38",
	},
	{
		first_name: "Marus",
		last_name: "Marriota",
		rank: "39",
	},
	{
		first_name: "Ryan",
		last_name: "Fitzpatrick",
		rank: "40",
	},
	{
		first_name: "Chad",
		last_name: "Pennington",
		rank: "41",
	},
	{
		first_name: "John",
		last_name: "Doe",
		rank: "22",
	},
	{
		first_name: "Russell",
		last_name: "Wilson",
		rank: "1",
	},
	{
		first_name: "Matt",
		last_name: "Hasselbeck",
		rank: "2",
	},
	{
		first_name: "Jim",
		last_name: "Zorn",
		rank: "3",
	},
	{
		first_name: "Brady",
		last_name: "Quinn",
		rank: "4",
	},
	{
		first_name: "Charly",
		last_name: "Whitehurst",
		rank: "5",
	},
	{
		first_name: "Duane",
		last_name: "Devine",
		rank: "6",
	},
	{
		first_name: "Tom",
		last_name: "Brady",
		rank: "7",
	},
	{
		first_name: "Arron",
		last_name: "Rogers",
		rank: "8",
	},
	{
		first_name: "Patrick",
		last_name: "Mahoms",
		rank: "9",
	},
	{
		first_name: "Gardner",
		last_name: "Minshew",
		rank: "10",
	},
	{
		first_name: "Andrew",
		last_name: "Luck",
		rank: "11",
	},
	{
		first_name: "Josh",
		last_name: "Gordon",
		rank: "12",
	},
	{
		first_name: "Drew",
		last_name: "Brees",
		rank: "13",
	},
	{
		first_name: "Cam",
		last_name: "Newton",
		rank: "14",
	},
	{
		first_name: "Joe",
		last_name: "Montana",
		rank: "15",
	},
	{
		first_name: "Steve",
		last_name: "Young",
		rank: "16",
	},
	{
		first_name: "Dan",
		last_name: "Jones",
		rank: "17",
	},
	{
		first_name: "Eli",
		last_name: "Manning",
		rank: "18",
	},
	{
		first_name: "Marus",
		last_name: "Marriota",
		rank: "19",
	},
	{
		first_name: "Ryan",
		last_name: "Fitzpatrick",
		rank: "21",
	},
	{
		first_name: "Chad",
		last_name: "Pennington",
		rank: "21",
	},
	{
		first_name: "John",
		last_name: "Doe",
		rank: "22",
	},
	{
		first_name: "Russell",
		last_name: "Wilson",
		rank: "1",
	},
	{
		first_name: "Matt",
		last_name: "Hasselbeck",
		rank: "2",
	},
	{
		first_name: "Jim",
		last_name: "Zorn",
		rank: "3",
	},
	{
		first_name: "Brady",
		last_name: "Quinn",
		rank: "4",
	},
	{
		first_name: "Charly",
		last_name: "Whitehurst",
		rank: "5",
	},
	{
		first_name: "Duane",
		last_name: "Devine",
		rank: "6",
	},
	{
		first_name: "Tom",
		last_name: "Brady",
		rank: "7",
	},
	{
		first_name: "Arron",
		last_name: "Rogers",
		rank: "8",
	},
	{
		first_name: "Patrick",
		last_name: "Mahoms",
		rank: "9",
	},
	{
		first_name: "Gardner",
		last_name: "Minshew",
		rank: "10",
	},
	{
		first_name: "Andrew",
		last_name: "Luck",
		rank: "11",
	},
	{
		first_name: "Josh",
		last_name: "Gordon",
		rank: "12",
	},
	{
		first_name: "Drew",
		last_name: "Brees",
		rank: "13",
	},
	{
		first_name: "Cam",
		last_name: "Newton",
		rank: "14",
	},
	{
		first_name: "Joe",
		last_name: "Montana",
		rank: "15",
	},
	{
		first_name: "Steve",
		last_name: "Young",
		rank: "16",
	},
	{
		first_name: "Dan",
		last_name: "Jones",
		rank: "17",
	},
	{
		first_name: "Eli",
		last_name: "Manning",
		rank: "18",
	},
	{
		first_name: "Marus",
		last_name: "Marriota",
		rank: "19",
	},
	{
		first_name: "Ryan",
		last_name: "Fitzpatrick",
		rank: "21",
	},
	{
		first_name: "Chad",
		last_name: "Pennington",
		rank: "21",
	},
	{
		first_name: "John",
		last_name: "Doe",
		rank: "22",
	},
];

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
		wrapper.innerHTML += `<button value=${page} class="page btn btn-sm btn-info">${page}</button>`;
	}

	if (state.page != 1) {
		wrapper.innerHTML =
			`<button value=${1} class="page btn btn-sm btn-info">&#171; First</button>` +
			wrapper.innerHTML;
	}

	if (state.page != pages) {
		wrapper.innerHTML += `<button value=${pages} class="page btn btn-sm btn-info">Last &#187;</button>`;
	}

	$(".page").on("click", function () {
		$("#table-body").empty();

		state.page = Number($(this).val());

		buildTable();
	});
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
            </product-card>
        
        `;
		table.append(row);
	}

	pageButtons(data.pages);
}
