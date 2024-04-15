console.log("enter");

export function getQueryParameter() {
	var urlParams = new URLSearchParams(window.location.search);
	var id = urlParams.get("id");
	console.log(id);

	if (id !== null && id !== "") {
		const div = $("#product-detail");
		// div.remove();
		const filteredElement = filterArrayById(id);
		console.log(filteredElement);
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
	return bigImgProducts.filter((element) => element.id === id);
}

const bigImgProducts = [
	{
		id: "1",
		name: "Syltherine",
		description:
			"Introducing the Syltherine, an elegant and comfortable chair with a high-quality wood finish. This chair is perfect for adding a touch of sophistication to any room. The high-quality wood finish gives it a luxurious feel, while the comfortable cushioning ensures maximum comfort. Whether you're looking for a chair for your home office or a stylish addition to your living room, the Syltherine is the perfect choice. With its elegant design and high-quality materials, it's not only a chair, but a piece of art that will enhance any space.",
		price: "200",
		category: "Bedroom",
		abstract: "Stylish cafe chair",
		image: "assets/products/product1.png",
	},
	{
		id: "2",
		name: "Hufflebench",
		description:
			"Meet the Hufflebench, a sturdy and spacious bench made from premium oak. This bench is more than just a piece of furniture. It's a statement of style and durability. With its timeless design and high-quality materials, it's the perfect addition to any living space. The Hufflebench provides both comfort and functionality, making it a great choice for those who value both style and practicality. The premium oak gives it a rustic charm, while the sturdy construction ensures it will last for years to come.",
		price: "350",
		category: "Living Room",
		abstract: "Oakwood bench",
		image: "assets/products/product2.png",
	},
	{
		id: "3",
		name: "Ravenclaw Recliner",
		description:
			"Experience the ultimate comfort with the Ravenclaw Recliner. This luxurious recliner is designed with plush cushioning and an adjustable backrest, providing you with personalized comfort. It's perfect for those relaxing evenings where you just want to unwind with a good book or enjoy your favorite TV show. The Ravenclaw Recliner is more than just a piece of furniture, it's your personal relaxation zone.",
		price: "500",
		category: "Living Room",
		abstract: "Comfortable recliner",
		image: "assets/products/product3.png",
	},
	{
		id: "4",
		name: "Gryffindesk",
		description:
			"The Gryffindesk is a sleek and modern desk that combines style and functionality. It features built-in drawers for storage and a glass top for a touch of elegance. Whether you're working from home or in an office, the Gryffindesk offers you a spacious work area where you can spread out your documents and keep everything you need at your fingertips. Plus, its contemporary design will enhance any workspace.",
		price: "400",
		category: "Office",
		abstract: "Modern office desk",
		image: "assets/products/product4.png",
	},
	{
		id: "5",
		name: "Quidditch Quilt",
		description:
			"The Quidditch Quilt is a warm and cozy quilt made from hypoallergenic materials. It's perfect for snuggling up on cold nights and adding a touch of comfort to your bedroom. The quilt is designed to be soft to the touch and warm, providing you with a comfortable and restful sleep. Plus, it's hypoallergenic, making it suitable for people with allergies.",
		price: "150",
		category: "Bedroom",
		abstract: "Cozy bedroom quilt",
		image: "assets/products/product5.png",
	},
	{
		id: "6",
		name: "Dumbledrawer",
		description:
			"The Dumbledrawer is a large, spacious drawer that offers ample storage space. It features a vintage look that adds a touch of classic charm to any room. The drawer is perfect for storing clothes, accessories, and other items, helping you keep your space organized and clutter-free. Plus, its vintage design makes it a stylish addition to any room decor.",
		price: "300",
		category: "Bedroom",
		abstract: "Vintage drawer",
		image: "assets/products/product6.png",
	},
	{
		id: "7",
		name: "Potter's Pot Stand",
		description:
			"The Potter's Pot Stand is a charming pot stand that's perfect for displaying your favorite plants. It's designed to hold your pots securely and showcase your plants in the best possible way. Whether you're a fan of succulents, flowers, or herbs, this pot stand will help you display your plants with style. Plus, it's sturdy and durable, ensuring it can hold even heavier pots.",
		price: "50",
		category: "Garden",
		abstract: "Charming pot stand",
		image: "assets/products/product7.png",
	},
	{
		id: "8",
		name: "Weasley's Wicker Basket",
		description:
			"The Weasley's Wicker Basket is a handwoven wicker basket that's perfect for storing small items. Whether you need a place to keep your keys, wallet, or other small items, this basket has you covered. It's not just functional, but also adds a rustic charm to your decor. Plus, it's handwoven, adding a touch of artisanal craftsmanship to your home.",
		price: "75",
		category: "Bathroom",
		abstract: "Handwoven wicker basket",
		image: "assets/products/product8.png",
	},
];
