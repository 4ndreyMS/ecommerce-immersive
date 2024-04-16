import "./styles/index.scss";

import { loadPreviewProducts, activePaginator } from "./js/products.js";
import { getQueryParameter } from "./js/product-details.js";

window.activePaginator = activePaginator;
window.onload = function () {
	loadPreviewProducts();
	getQueryParameter();
};

export const producstList = [
	{
		id: "1",
		name: "Syltherine",
		description:
			"The Syltherine is an elegant and comfortable chair that boasts a high-quality wood finish. Its design is inspired by the classic cafe style, making it a perfect addition to any bedroom setting. The chair is not only stylish but also provides excellent comfort, ensuring a relaxing experience every time you sit on it.",
		price: "200",
		category: "Bedroom",
		abstract: "Stylish cafe chair",
		image: "assets/products/product1.png",
	},
	{
		id: "2",
		name: "Hufflebench",
		description:
			"The Hufflebench is a sturdy and spacious bench made from premium oak. It is designed to provide ample seating space while adding a rustic charm to your living room. The bench is crafted with attention to detail and is sure to withstand the test of time.",
		price: "350",
		category: "Living Room",
		abstract: "Oakwood bench",
		image: "assets/products/product2.png",
	},
	{
		id: "3",
		name: "Ravenclaw Recliner",
		description:
			"The Ravenclaw Recliner is a luxurious piece of furniture that offers plush cushioning and an adjustable backrest for ultimate comfort. Whether you're reading a book or enjoying a cup of coffee outdoors, this recliner is designed to provide a relaxing and comfortable seating experience.",
		price: "500",
		category: "Outdoor",
		abstract: "Comfortable recliner",
		image: "assets/products/product3.png",
	},
	{
		id: "4",
		name: "Gryffindesk",
		description:
			"The Gryffindesk is a sleek and modern desk that features built-in drawers and a glass top. It is designed to provide a spacious work surface while adding a touch of elegance to your kitchen. The desk is not only functional but also adds a contemporary feel to your space.",
		price: "400",
		category: "Kitchen",
		abstract: "Modern office desk",
		image: "assets/products/product4.png",
	},
	{
		id: "5",
		name: "Quidditch Quilt",
		description:
			"The Quidditch Quilt is a warm and cozy quilt made from hypoallergenic materials. It is designed to provide a comfortable and restful sleep. The quilt is not only cozy but also adds a touch of elegance to your bedroom decor.",
		price: "150",
		category: "Bedroom",
		abstract: "Cozy bedroom quilt",
		image: "assets/products/product5.png",
	},
	{
		id: "6",
		name: "Dumbledrawer",
		description:
			"The Dumbledrawer is a large drawer that offers ample storage space. It features a vintage look that adds a touch of classic charm to your bedroom. The drawer is not only functional but also enhances the aesthetic appeal of your space.",
		price: "300",
		category: "Bedroom",
		abstract: "Vintage drawer",
		image: "assets/products/product6.png",
	},
	{
		id: "7",
		name: "Potter's Pot Stand",
		description:
			"The Potter's Pot Stand is a charming pot stand that is perfect for displaying your favorite plants. It is designed to hold your pots securely while adding a touch of elegance to your outdoor space. The stand is not only functional but also enhances the aesthetic appeal of your garden or patio.",
		price: "50",
		category: "Outdoor",
		abstract: "Charming pot stand",
		image: "assets/products/product7.png",
	},
	{
		id: "8",
		name: "Weasley's Wicker Basket",
		description:
			"The Weasley's Wicker Basket is a handwoven basket that is perfect for storing small items. It is designed to provide a convenient storage solution while adding a rustic charm to your kitchen. The basket is not only functional but also adds a touch of elegance to your space.",
		price: "75",
		category: "Kitchen",
		abstract: "Handwoven wicker basket",
		image: "assets/products/product8.png",
	},
	{
		id: "9",
		name: "Stainless Steel Oven",
		description:
			"The Stainless Steel Oven is a high-quality oven that is designed to meet all your cooking needs. It features a sleek stainless steel design that adds a modern touch to your kitchen. The oven is not only functional but also enhances the aesthetic appeal of your space.",
		price: "1400",
		category: "Kitchen",
		abstract: "Stainless steel oven",
		image: "assets/products/product9.jpg",
	},
	{
		id: "10",
		name: "Glass Shower Enclosure",
		description:
			"The Glass Shower Enclosure is a modern enclosure that adds a touch of elegance to your bathroom. It is designed to provide a spacious and comfortable showering experience. The enclosure is not only functional but also enhances the aesthetic appeal of your bathroom.",
		price: "1200",
		category: "Bathroom",
		abstract: "Glass shower enclosure",
		image: "assets/products/product10.jpg",
	},
	{
		id: "11",
		name: "Oakwood Dining Table",
		description:
			"The Oakwood Dining Table is a sturdy and spacious dining table made from premium oak. It is designed to provide ample dining space while adding a rustic charm to your kitchen. The table is crafted with attention to detail and is sure to withstand the test of time.",
		price: "1200",
		category: "Kitchen",
		abstract: "Oakwood dining table",
		image: "assets/products/product11.jpg",
	},
	{
		id: "12",
		name: "Leather Sofa",
		description:
			"The Leather Sofa is a comfortable and stylish sofa that is perfect for any living room. It is designed with a premium leather finish that adds a touch of elegance to your space. The sofa is not only stylish but also provides excellent comfort, ensuring a relaxing experience every time you sit on it.",
		price: "800",
		category: "Living Room",
		abstract: "Leather sofa",
		image: "assets/products/product12.jpg",
	},
	{
		id: "13",
		name: "Garden Swing Chair",
		description:
			"The Garden Swing Chair is a fun and relaxing swing chair that is perfect for your outdoor space. It is designed to provide a comfortable seating experience while adding a touch of elegance to your garden or patio. The swing chair is not only functional but also enhances the aesthetic appeal of your outdoor space.",
		price: "350",
		category: "Outdoor",
		abstract: "Garden swing chair",
		image: "assets/products/product13.jpg",
	},
	{
		id: "14",
		name: "King Size Bed",
		description:
			"The King Size Bed is a spacious and comfortable bed made from high-quality wood. It is designed to provide a restful sleep while adding a touch of elegance to your bedroom. The bed is not only comfortable but also adds a contemporary feel to your space.",
		price: "1500",
		category: "Bedroom",
		abstract: "King size bed",
		image: "assets/products/product14.jpg",
	},
	{
		id: "15",
		name: "Velvet Armchair",
		description:
			"The Velvet Armchair is a plush armchair with a modern design. It is designed to provide a comfortable seating experience while adding a touch of elegance to your living room. The armchair is not only stylish but also provides excellent comfort, ensuring a relaxing experience every time you sit on it.",
		price: "600",
		category: "Living Room",
		abstract: "Velvet armchair",
		image: "assets/products/product15.jpg",
	},
	{
		id: "16",
		name: "Bamboo Coffee Table",
		description:
			"The Bamboo Coffee Table is a lightweight coffee table made from sustainable bamboo. It is designed to provide a convenient surface for your coffee or tea while adding a rustic charm to your living room. The table is not only functional but also enhances the aesthetic appeal of your space.",
		price: "200",
		category: "Living Room",
		abstract: "Bamboo coffee table",
		image: "assets/products/product16.jpg",
	},
	{
		id: "17",
		name: "Outdoor Rattan Sofa Set",
		description:
			"The Outdoor Rattan Sofa Set is a durable and stylish sofa set that is perfect for your outdoor space. It is designed to provide a comfortable seating experience while adding a touch of elegance to your garden or patio. The sofa set is not only functional but also enhances the aesthetic appeal of your outdoor space.",
		price: "1200",
		category: "Outdoor",
		abstract: "Outdoor rattan sofa set",
		image: "assets/products/product17.jpg",
	},
	{
		id: "18",
		name: "Wooden Bedside Table",
		description:
			"The Wooden Bedside Table is a compact and functional bedside table that features a drawer and shelf. It is designed to provide a convenient storage solution while adding a rustic charm to your bedroom. The table is not only functional but also enhances the aesthetic appeal of your space.",
		price: "150",
		category: "Bedroom",
		abstract: "Wooden bedside table",
		image: "assets/products/product18.jpg",
	},
	{
		id: "19",
		name: "Marble Countertop",
		description:
			"The Marble Countertop is a sleek and durable countertop that is perfect for your kitchen. It is designed to provide a convenient surface for your cooking needs while adding a touch of elegance to your kitchen. The countertop is not only functional but also enhances the aesthetic appeal of your space.",
		price: "800",
		category: "Kitchen",
		abstract: "Marble countertop",
		image: "assets/products/product19.jpg",
	},
	{
		id: "20",
		name: "Patio Dining Set",
		description:
			"The Patio Dining Set is a beautiful and durable dining set that is perfect for your patio. It is designed to provide a comfortable dining experience while adding a touch of elegance to your outdoor space. The dining set is not only functional but also enhances the aesthetic appeal of your patio.",
		price: "1000",
		category: "Outdoor",
		abstract: "Patio dining set",
		image: "assets/products/product20.jpg",
	},
	{
		id: "21",
		name: "Granite Kitchen Island",
		description:
			"The Granite Kitchen Island is a spacious kitchen island that features a durable granite top. It is designed to provide a convenient workspace and dining area in your kitchen. The granite top is not only durable but also adds a touch of elegance to your kitchen decor.",
		price: "1300",
		category: "Kitchen",
		abstract: "Granite kitchen island",
		image: "assets/products/product21.jpg",
	},
	{
		id: "22",
		name: "Leather Recliner",
		description:
			"The Leather Recliner is a luxurious recliner that features an adjustable backrest for ultimate comfort. It is upholstered in premium leather, adding a touch of elegance to your living room. Whether you're reading a book or watching TV, this recliner is designed to provide a relaxing seating experience.",
		price: "900",
		category: "Living Room",
		abstract: "Leather recliner",
		image: "assets/products/product22.jpg",
	},
	{
		id: "23",
		name: "Outdoor Hammock",
		description:
			"The Outdoor Hammock is a comfortable hammock made from durable fabric. It is designed to provide a relaxing lounging experience in your outdoor space. Whether you're reading a book or taking a nap, this hammock is the perfect addition to your garden or patio.",
		price: "200",
		category: "Outdoor",
		abstract: "Outdoor hammock",
		image: "assets/products/product23.jpg",
	},
	{
		id: "24",
		name: "Queen Size Bed",
		description:
			"The Queen Size Bed is a comfortable bed that features a stylish headboard. It is designed to provide a restful sleep while adding a touch of elegance to your bedroom. The bed is not only comfortable but also adds a contemporary feel to your space.",
		price: "1100",
		category: "Bedroom",
		abstract: "Queen size bed",
		image: "assets/products/product24.jpg",
	},
	{
		id: "25",
		name: "Ceramic Bathroom Sink",
		description:
			"The Ceramic Bathroom Sink is a sleek and modern sink that is perfect for your bathroom. It is designed to provide a convenient washing area while adding a touch of elegance to your bathroom decor. The sink is not only functional but also enhances the aesthetic appeal of your bathroom.",
		price: "300",
		category: "Bathroom",
		abstract: "Ceramic bathroom sink",
		image: "assets/products/product25.jpg",
	},
];

export let tableData = producstList;

/*
	1 - Loop Through Array & Access each value
	2 - Create Table Rows & append to table
*/
window.filterByCategory = filterByCategory;
export function filterByCategory(currentElement, filter) {
	console.log(currentElement);

	$(".active-btn").removeClass("active-btn");

	$(currentElement).addClass("active-btn");

	if (filter !== "All") {
		const newArray = producstList.filter((item) => item.category === filter);
		tableData = newArray;
	} else {
		tableData = producstList;
	}

	state.querySet = tableData;
	$("#table-body").empty();
	$("#pagination-wrapper").empty();
	buildTable();
}

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

		if (pages > 0) {
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
		} else {
			wrapper.innerHTML += `<button value=${1} onClick="activePaginator(this)" class="page button-filled-beige">${1}</button>`;
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
