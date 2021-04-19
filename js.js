let product = ['Sony Xperia', 'Sumsung Galaxy', 'Nokia 6',
    'Xiaomi Redmi Note 4', 'Apple iPhone 6S', 'Xiaomi Mi 5s Plus',
    'Apple iPhone 8 Plus', 'Fujitsu F - 04E', 'Oppo A71'];


function showNumberOfProduct(number) {
    document.getElementById('numberOfProduct').innerHTML = 'Tổng sản Phẩm :' + ' ' + number;
}

showNumberOfProduct(product.length);

function displayProduct() {
    let str = '';
    for (let i = 0; i < product.length; i++) {
        str += "<tr>";
        str += '<td id="' + i + '">' + product[i] + "</td>"
        str += '<td style="text-align: center"><button type="button" onclick="editProduct(' + i + ')">Edit</button></td>'
        str += "<td style='text-align: center'>";
        str += "<button onclick='deleteProduct()'(" + i + ")'>Delete</button>";
        str += "</td>";
        str += "</tr>";
    }
    document.getElementById('product').innerHTML = str;
}

displayProduct()

function addProduct() {
    let add = document.getElementById('newProduct').value;
    product.push(add);
    displayProduct();
    showNumberOfProduct(product.length);
}

function editProduct(i) {
    let edit = prompt('');
    product[i] = edit;
    displayProduct(i);
}

function deleteProduct(index) {
    let question = confirm('Bạn chắc chắn muốn xóa');
    if (question === true) {
        product.splice(index, 1);
        displayProduct();
        showNumberOfProduct(product.length);
    }


}