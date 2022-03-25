function GetProducts(coupon) {
    fetch('http://localHost:3001/products')
    // fetch('https://coupon-tool-backend.herokuapp.com/products')
    .then(response => response.json())
    .then(data => {
        console.log("get all products db:", data);
    });
}

export default GetProducts;