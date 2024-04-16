export function loadPreviewProducts() {
	const previewProduct = $("#preview-products");

	previewProducts.forEach((element) => {
		const card = `
 
		<product-card class="products__card">
			<a href="/product-details?id=${element.id}">
				<div>
					<img
						class="products__card-img"
						src="${element.image}"
						alt="${element.name}"
					/>
				</div>
                <div class="products__card-description">
                    <p class="semi-bold">${element.name}</p>
                    <p class="semi-bold text-0 products__card-description-type">
                        ${element.abstract}
                    </p>
                    <p class="semi-bold">$${element.price} </p>
                </div>
			</a>
		</product-card>
        
        `;

		previewProduct.append(card);
	});
}

const previewProducts = [
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
];

export function activePaginator(element) {}
