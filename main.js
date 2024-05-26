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
      <h6 class="card-title">${data[i].name}</h6>
      <h5><span class="price">${data[i].price}</span>.000đ</h5>
      <button class="btn btn-primary" onclick="addProduct(event)">Mua ngay!</button>
    </div>`
        product_area.innerHTML += output
    }
}

var elems = document.querySelectorAll('.sidenav');
var instance = M.Sidenav.init(elems, {
    edge: 'right',
    closeOnClick: false,
    draggable: true
});

// let users = []

// function register() {
//     // khai báo dom lấy dữ liệu nhập vào
//     let username = document.getElementById('username').value
//     let email = document.getElementById('email').value
//     let pw = document.getElementById('pw').value
//     let confirmed_pw = document.getElementById('confirmed-pw').value

//     // tạo object chứa dữ liệu nhập vào
//     let user = {
//         name: username,
//         email: email,
//         pw: pw,
//         confirmed_pw: confirmed_pw
//     }
//     // push object user vaof trong array
//     users.push(user)
//     // chuyển đổi object thành JSON string và lưu lên local Storage

//     localStorage.setItem("users", JSON.stringify(users))
// }

