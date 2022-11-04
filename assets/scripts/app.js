const products = [

];

class Product {
    // title = 'DEFAULT';
    // imageUrl;
    // description;
    // price;

    constructor(titleArg, imageArg, descriptionArg, priceArg) {
        this.title = titleArg;
        this.imageUrl = imageArg;
        this.description = descriptionArg;
        this.price = priceArg;
    }
};

class ProductList {
    products = [
        new Product(
            'A pillow',
            'https://m.media-amazon.com/images/I/61XxtPdqhZL.jpg',
            'A soft pillow!',
            19.99
        ),
        new Product(
            'A carpet',
            'https://upload.wikimedia.org/wikipedia/commons/e/e7/Wollteppich_1.jpg',
            'A great carpet!',
            59.99
        ),
    ];

    constructor() {};

    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';

        for (const prod of this.products) {
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
                <div>
                    <img src="${prod.imageUrl}" alt="${prod.title}">
                    <div class="product-item__content">
                        <h2>${prod.title}</h2>
                        <h3>\$${prod.price}</h3>
                        <p>${prod.description}</p>
                        <button>Add to cart</button>
                    </div>
                </div>
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
}

const productList = new ProductList();
productList.render();