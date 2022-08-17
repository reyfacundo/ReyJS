import { productos } from "./stock.js";

productos.forEach(producto => {
    let contenedor = document.getElementById("cardBody")
    contenedor.innerHTML += 
    `<div class="wrapper">
        <div class="product-img">
            <img src="${producto.img}" height="420" width="327">
        </div>
        <div class="product-info">
            <div class="product-text">
                <h1>${producto.nombre}</h1>
                <h2>by studio and friends</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima temporibus doloremque ut, perferendis neque quae! Dolorum soluta possimus nihil enim. Ipsa deserunt ratione expedita quia possimus blanditiis voluptas ipsum explicabo.
                </p>
            </div>
            <div class="product-price-btn">
                <p><span>$${producto.precio}</span>$</p>
                <button id=${producto.id} type="button">add to cart</button>
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
    const item = productos.find((producto_array) => producto_array.id === IdProducto);
    carritoArray.push(item);
    console.log(carritoArray);
    productosCarrito();
};

function productosCarrito(){
    clearHtml();
    carritoArray.forEach(producto_array =>{
        const div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        div.innerHTML = `<p>${producto_array.nombre}</p>
        <p>Precio: ${producto_array.precio}</p>
        <p id=cantidad${producto_array.cantidad}>Cantidad: ${producto_array.cantidad}</p>
        <button data-id=eliminar${producto_array.id} class="btn waves-effect waves-ligth boton-eliminar" value="${producto_array.id}">X</button>
        `;
        containerCarrito.appendChild(div);
    })
    contadorCarrito.innerText = carritoArray.length
    precioTotal.innerText = carritoArray.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    guardarStorage(carritoArray);
};

const containerCarrito = document.getElementById("carrito-contenedor");
containerCarrito.addEventListener("click", borrarProducto);

function borrarProducto(e){
    if (e.target.classList.contains("boton-eliminar")){
        const deleteID = e.target.getAttribute('data-id')
        carritoArray.filter(product => product.id !== deleteID)
    }
    productosCarrito();
}

function clearHtml(){
    containerCarrito.innerHTML = '';
}


const eliminar = (IdProducto) => {
    const carritoStorage = obtenerCarritoStorage();
    const carritoActualizado = carritoStorage.filter ( producto => producto.id != IdProducto);
    actualizarCarrito(carritoActualizado);

};

const guardarStorage = (carritoArray) => {
    localStorage.setItem("carrito", JSON.stringify(carritoArray))

    document.addEventListener('DOMContentLoaded', () => {
        if (localStorage.getItem('carrito')){
            carrito=JSON.parse(localStorage.getItem('carrito'));
            actualizarCarrito();
        }
    });
}
const precioTotal= document.getElementById("precioTotal");
const contadorCarrito = document.getElementById("contador-carrito");