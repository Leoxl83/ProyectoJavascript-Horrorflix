/* const carrito = JSON.parse(localStorage.getItem("carrito"));

let tbody = document.querySelector("#tbody");

function rellenarCarrito(arrayCarrito) {

    for(let pelicula of arrayCarrito) {
        let row = document.createElement("tr");
        row.innerHTML = ` <td> ${pelicula.titulo}</td><td> ${pelicula.precio}</td><td> ${pelicula.cantidad}</td><td>$${pelicula.subtotal}</td><td><button class ="btn id="${pelicula.id}" btn-danger eliminarPelicula>Eliminar</button></td>`
        
        tbody.appendChild(row);
    }
}

rellenarCarrito(carrito);

let botonesEliminar = document.querySelectorAll(".eliminarPelicula");

botonesEliminar.forEach(elemento => {
    elemento.addEventListener("click", eliminarPelicula);
})

function eliminarPelicula(e){

    let index = carrito.findIndex(pelicula => pelicula.id == e.target.id)
    carrito.splice(index, 1 );
    e.target.parentNode .parentNode.remove();
    localStorage.setItem("carrito", JSON.stringify(carrito));
    
} */