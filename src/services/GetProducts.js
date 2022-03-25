function GetProducts(cb) {
    fetch('http://localHost:3001/products')
    // fetch('https://coupon-tool-backend.herokuapp.com/products')
    .then(response => response.json())
    .then(products => {
        console.log("All products db:", products);
        cb(products); //GetProducts() is cb in StepProduct.js
    });
}

export default GetProducts;