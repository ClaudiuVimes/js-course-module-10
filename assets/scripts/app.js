const products = [

];

const productList = {
    products: [
        { 
            title: 'A pillow',
            imageUrl: 'https://m.media-amazon.com/images/I/61XxtPdqhZL.jpg',
            price: 19.99,
            description: 'A soft pillow!'  
        },
        { 
           title: 'A carpet',
           imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Wollteppich_1.jpg',
           price: 59.99,
           description: 'A great carpet!'  
        },
    ],
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
};
productList.render();