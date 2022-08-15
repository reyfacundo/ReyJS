// const botonEvent = document.querySelectorAll(".button");

// botonEvent.forEach(botonCarrito =>{
//     botonCarrito.addEventListener("click" , añadirCarrito)
// })

// function añadirCarrito(e){
//     const producto = e.target
//     console.log(Boton)
// }

// function añadirProductos(){
//     const cards = document.getElementById("cardBody");
//     productos.forEach((producto)=> {
//         const productoHtml = document.createElement('div');
//         productoHtml.classList.add("producto");
//         productoHtml.innerHTML =
//             `<div class="container px-4 px-lg-5 mt-5">
//             <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">    
//             <div class="col mb-5">
//             <div class="card h-100">
//             <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
//             <img class="card-img-top" src=${producto.img} alt="..." />
//             <div class="card-body p-4">
//             <div class="text-center">
//             <h5 class="fw-bolder">${producto.nombre}</h5>
//             <div class="d-flex justify-content-center small text-warning mb-2">
//             <div class="bi-star-fill"></div>
//             <div class="bi-star-fill"></div>
//             <div class="bi-star-fill"></div>
//             <div class="bi-star-fill"></div>
//             <div class="bi-star-fill"></div>
//             </div>${producto.precio}</div>
//             </div>
//             <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
//             <div class="text-center"><a class="btn btn-outline-dark mt-auto button" href="#">Add to cart</a></div>
//             </div>
//             </div>
//             </div>
//             </div>
//             </div>`
//         cards.appendChild(div)
        
//         const botonEvent = document.getElementById(` ${productos.id} `);
        
//         botonEvent.addEventListener('click', () => {
//         })
//     })
// };


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
    console.log(carritoArray)
}