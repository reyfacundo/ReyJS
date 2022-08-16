import { productos } from "./stock.js";

productos.forEach(producto => {
    let contenedor = document.getElementById("cardBody")
    contenedor.innerHTML += 
    `<div class="col mb-5">
    <div class="card h-100">
    <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
    <img class="card-img-top" src=${producto.img} alt="..." />
    <div class="card-body p-4">
    <div class="text-center">
    <h5 class="fw-bolder">${producto.nombre}</h5>
    <div class="d-flex justify-content-center small text-warning mb-2">
    <div class="bi-star-fill"></div>
    <div class="bi-star-fill"></div>
    <div class="bi-star-fill"></div>
    <div class="bi-star-fill"></div>
    <div class="bi-star-fill"></div>
    </div>$${producto.precio}</div>
    </div>
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
    <div class="text-center"><a id=${producto.id} class="añadir-a-carrito btn btn-outline-dark mt-auto button">Add to cart</a></div>
    </div>
    </div>
    </div>
    </div>
    </div>`
});

const carritoArray = []

productos.forEach(producto => {
    const botonEvent = document.getElementById(`${producto.id}`);

botonEvent.addEventListener("click", () => {
    agregarCarrito(parseInt(producto.id ));
    });
});

const agregarCarrito = (IdProducto) => {
    const item = productos.find((producto_array) => producto_array.id === IdProducto)
    carritoArray.push(item)
    actualizarCarrito()
    console.log(carritoArray)
}

let buttonId = document.getElementById("button-id")

buttonId.addEventListener("click", () => {
    location.replace("/carrito.html");
});
const actualizarCarrito = () => {
    carritoArray.forEach((producto_array) => {
        let contenedorCarrito = document.getElementById("carritoMain")
        contenedorCarrito.innerHTML += 
        `
        <li class="items odd">
        <div class="infoWrap">
            <div class="cartSection">
            <img alt="" class="itemImg" src=${producto_array.img}/>
            <p class="itemNumber">ID:${producto_array.id}</p>
            <h3>${producto_array.nombre}1</h3>
            <p class="stockStatus">In Stock</p>
            </div>
            <div class="prodTotal cartSection">
            <p>$${producto_array.precio}</p>
            </div>
            <div class="cartSection removeWrap">
            <button onClick= "eliminar(${producto_array.id})" class="remove">x</button>
            </div>
        </div>
        </li>
        `
    })
}