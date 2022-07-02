let favoritos = JSON.parse(localStorage.getItem("favoritos"));
let tableBody = document.querySelector("#tableBody");

function mostrarFavoritos(arrayConPeliculas) {
    for (let pelicula of arrayConPeliculas) {
        let row = document.createElement("tr");
        row.innerHTML = `<td>
        <picture><img src="${pelicula.imagen}" alt="${pelicula.id}"></picture>
        <p>${pelicula.titulo}<p> <td>${pelicula.sinopsis}</td>
        <td><button id="${pelicula.id}" class="eliminarFav ">Eliminar</button></td>`;
        tableBody.appendChild(row);
    }
}

mostrarFavoritos(favoritos);

let deleteButtons = document.querySelectorAll(".eliminarFav");

deleteButtons.forEach((element) => {
    element.addEventListener("click", eliminarPelicula);
});

function eliminarPelicula(e) {
    let index = favoritos.findIndex((p) => p.id === Number(e.target.id));
    favoritos.splice(index, 1);
    e.target.parentNode.parentNode.remove();
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    Toastify({
        text: "Pelicula eliminada!",
        duration: 2000,
        gravity: "top",
        position: "right",
        destination: "../views/favoritos.html",
        stopOnFocus: true,
        style: {
            background: "#ba3232",
            color: "white",
        },
    }).showToast();
}

let vaciarButton = document.querySelector(".vaciarFavoritosButton");
vaciarButton.addEventListener("click", vaciarFavoritos);

function vaciarFavoritos(e) {
    localStorage.removeItem("favoritos")
    let tableBody = document.querySelector("#tableBody")
    tableBody.innerHTML = ``
    Swal.fire({
        text: `No tenes mas favoritos!`,
        icon: "success",
        confirmButtonColor: "#ba3232",
        confirmButtonText: "Ok",
    })
}