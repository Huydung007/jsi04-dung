init()

function init() {
    getProductAPI()
}

async function getProductAPI() {
    let data = await fetch('data.json')
        .then(response => response.json())
        .then(json => json)
    console.log(data)
    loadProducts(data)
}

let product_area = document.getElementById("product-area")

function loadProducts(data) {
    for (let i = 0; i < data.length; i++) {
        let output = `
        <div class="card" style="width: 18rem; margin: 20px;">
            <img src="${data[i].image}" alt="..." width="100%">
            <div class="card-body">
                <h6 class="card-title">${data[i].name}</h6>
                <h5><span class="product-price">${data[i].price}</span>.000đ</h5>
                <button class="btn btn-primary" onclick="addProduct(event)">Mua ngay!</button>
            </div>
        </div>`
        product_area.innerHTML += output
    }
}

var elems = document.querySelectorAll('.sidenav');
var instance = M.Sidenav.init(elems, {
    edge: 'left',
    closeOnClick: false,
    draggable: true
});

