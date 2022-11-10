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

class ShoppingCart {
    items = [];

    addProduct(product) {
        this.items.push(product);
        this.totalOutput.textContent  = `Total: \$${1}`
    }

    render() {
        const cartEl = document.createElement('section');
        cartEl.innerHTML = `
         <h2>Total: \$${0}</h2>
         <button>Order Now!</button>
        `;
        cartEl.className = 'cart';
        this.totalOutput = cartEl.querySelector('h2');
        return cartEl;
    }
}

class ProductItem {
    constructor(product) {
        this.product = product;
    };

    addToCart() {
        App.addProductToCard(this.product);

    };

    render() {
        const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
                <div>
                    <img src="${this.product.imageUrl}" alt="${this.product.title}">
                    <div class="product-item__content">
                        <h2>${this.product.title}</h2>
                        <h3>\$${this.product.price}</h3>
                        <p>${this.product.description}</p>
                        <button>Add to cart</button>
                    </div>
                </div>
            `;

        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click', this.addToCart.bind(this))
        return prodEl;    
    }
}

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
        
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';

        for (const prod of this.products) {
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();
            prodList.append(prodEl);
        }
        return prodList;
    }
}

class Shop {
    render() {
        const renderHook = document.getElementById('app');

        this.cart = new ShoppingCart();
        const cartEl = this.cart.render();       
        const productList = new ProductList();
        const prodListEl = productList.render();

        renderHook.append(cartEl);
        renderHook.append(prodListEl);
    }
}

class App {
    static cart;

    static init() {
        const shop = new Shop();
        shop.render();
        this.card = shop.cart;
    }

    static addProductToCard(product) {
        this.cart.addProduct(product);
    }
}

App.init();


