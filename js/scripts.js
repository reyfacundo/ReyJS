// Importo el array de objetos para luego inyectar.
import { productos } from "./stock.js";

// Array vacío donde se almacenarán los objetos que vayan al carrito.
const carritoArray = []

const containerCarrito = document.getElementById("carrito-contenedor");
const precioTotal= document.getElementById("precioTotal");
const contadorCarrito = document.getElementById("contador-carrito");
const botonPago = document.getElementById("botonRedirect");
const eventVaciar = document.getElementById('vaciar');

fetch("./stock.JSON")
    .then((response) => response.json() )
    .then( (data) => {
        console.log(data);
    });

// Creador de cards para productos en BODY. Inyecto HTML mediante la modificación del DOM. Ahorra código y automatíza el proceso.
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


productos.forEach(producto => {
    const botonEvent = document.getElementById(`${producto.id}`);

botonEvent.addEventListener("click", () => {
    agregarCarrito(parseInt(producto.id ));
    });
});


// Creador de cards para productos del carrito
function productosCarrito(){
    clearHtml();
    carritoArray.forEach(producto_array =>{
        const div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        div.innerHTML = `<p>${producto_array.nombre}</p>
        <p>Precio: ${producto_array.precio}</p>
        <p id=cantidad${producto_array.cantidad}>Cantidad: ${producto_array.cantidad}</p>
        <button onclick="eliminar(${producto_array.id}" data-id="eliminar(${producto_array.id})" class="btn waves-effect waves-ligth boton-eliminar" value="${producto_array.id}">X</button>
        `;
        containerCarrito.appendChild(div);
        div.querySelector(".boton-eliminar").addEventListener("click", eliminar);
    })
    contadorCarrito.innerText = carritoArray.length
    precioTotal.innerText = carritoArray.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
    guardarStorage(carritoArray);
};
// Pequeña función para evitar que las cards se añadan de a pares.
function clearHtml(){
    containerCarrito.innerHTML = '';
};


//  Añade productos al nuevo array y , si estos se encuentran repetidos , aumenta en 1 la cantidad en vez de repetír la card del producto 
const agregarCarrito = (IdProducto) => {
    const item = carritoArray.find((prod) => prod.id === IdProducto);
    console.log(carritoArray);
    if(item){
        const prod = carritoArray.map(prod => {
            if (prod.id === IdProducto){
                prod.cantidad++
            }
        });
    }else{
        const itemStack = productos.find((prod)=> prod.id === IdProducto);
        carritoArray.push(itemStack);
    };
    productosCarrito();
};

// Elimina productos al realizar una estricta comparación de los ID
const eliminar = (prodId) => {
    const item = carritoArray.find((prod) => prod.id === prodId);
    const indice = carritoArray.indexOf(item);
    carritoArray.splice(indice, 1);
    productosCarrito(); 
};

// Vacía la totalidad del carrito
const vaciar = () => {
    carritoArray.splice(0);
    productosCarrito()
}
eventVaciar.addEventListener("click", vaciar);

// Condicional. Si el carrito NO se encuentra vacío, al presionar el botón de pago, el usuario será redirigido a mercadopago para proceder con la compra. En caso contrario no será redirigido y una alerta ( toastify ) se ejecutará.
botonPago.addEventListener("click", ()=>{
    if(carritoArray != ""){
        location.href="https://www.mercadopago.com.ar/"
    }else{
        Toastify({ 
            text: '¡El carrito se encuentra vacío!', 
            duration: 800, 
            gravity: 'top', 
            position: 'center' 
        }).showToast(); 
    }
});

// Local Storage. Guarda los datos, incluso al cerrar sesión o el navegador. 
const guardarStorage = (carritoArray) => {
    localStorage.setItem("carrito", JSON.stringify(carritoArray))
    document.addEventListener('DOMContentLoaded', () => {
        if (localStorage.getItem('carrito')){
            carrito=JSON.parse(localStorage.getItem('carrito'));
            actualizarCarrito();
        };
    });
};
