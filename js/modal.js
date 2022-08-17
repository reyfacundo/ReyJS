// let cerrar = document.querySelectorAll(".close")[0]
// let abrir = document.querySelectorAll(".cta")[0]
// let modal = document.querySelectorAll(".modal")[0]
// let modalContainer = document.querySelectorAll(".modal-container")[0]

// abrir.addEventListener("click", (e) => {
//     e.preventDefault();
//     modalContainer.style.opacity ="1";
//     modalContainer.style.visibility ="visible";
//     modal.classList.toggle("modal-close");
// });

// cerrar.addEventListener("click", () => {
//     modal.classList.toggle("modal-close");
//     setTimeout(()=>{
//         modalContainer.style.opacity ="0";
//         modalContainer.style.visibility ="hidden";
//     },600)
// });

const modalContenedor = document.querySelector('.modal-contenedor')
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal-carrito')

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});
cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});
modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click()
});
modalCarrito.addEventListener("click", (e) => {
    e.stopPropagation();
    if (e.target.classList.contains("boton-eliminar")) {
        eliminar(e.target.value)
    }
})