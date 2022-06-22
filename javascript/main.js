//Registrar Usuarios//

class Usuarios {
    constructor (usuario, mail, contraseña) {
        this.usuario = usuario;
        this.mail=mail;
        this.contraseña=contraseña;
    }
}

let title = document.querySelector('title').textContent
if (title === 'HorrorFlix - Registrate es gratis!') {
    const UsuariosRegistrados = []

    function registro() {
        let usuario = document.getElementById('usuario').value;
        let mail = document.getElementById('mail').value;
        let contraseña = document.getElementById('contraseña').value;

        const userReg = new Usuarios(usuario, mail, contraseña)

        if (usuario.value ==""|| mail.value == "" || contraseña.value == "") {
                      
            Swal.fire({
                icon: 'error',
                title: 'Algo salió mal...',
                text: 'Por favor completa todos los campos',
            })     
            return false;
        }
    
        else if (contraseña.length <6) {
            Swal.fire({
                icon: 'error',
                title: 'Algo salió mal...',
                text: 'El password debe tener al menos 6 caracteres',
            })
            return false;
        }
        else {
            UsuariosRegistrados.push(userReg)

            localStorage.setItem('RegUsuarios', JSON.stringify(UsuariosRegistrados))
            
            alertExito();
        }    
    }

    const btnReg = document.getElementById('reg')

    btnReg.addEventListener('click', event => {
        event.preventDefault()
        registro()
    })
    
}
function alertExito(){
    Swal.fire({
        title: 'Registro Exitoso!',
        text: 'Por favor inicie sesion',
        icon: 'success',
        confirmButtonText: 'Iniciar Sesion',
    }).then((result)=>{
        window.location="./assets/views/login.html"
    })
}

//Login//
if (title === 'HorrorFlix - Login') {
    function login() {
    	let user = document.getElementById('user').value;
    	let password = document.getElementById('password').value;
  
      	const usuariosFromStorage = JSON.parse(localStorage.getItem('RegUsuarios'));
  
      	console.log(usuariosFromStorage);
        
        //uso operador ternario//  
      	user === usuariosFromStorage[0].usuario && password === usuariosFromStorage[0].contraseña ? alertExitoLogin() : alertErrorLogin();
      	
    }
  
    const iniciarsession = document.getElementById('login')
  
    iniciarsession.addEventListener('click', event => {
      	event.preventDefault()
      	login()
    })
    console.log(document.querySelector('title'))
}

function alertExitoLogin(){
    Swal.fire({
        title: 'Bienvenido!',
        icon: 'success',
        confirmButtonText: 'Vamos!',
    }).then((result)=>{
        window.location="../views/principal.html"
    })
}
function alertErrorLogin() {
    Swal.fire({
        icon: 'error',
        title: 'Algo salió mal...',
        text: 'Usuario y/o password incorrectos, intente nuevamente',
    })
}


cargarPelis()
function cargarPelis(){
    fetch("../../peliculas.json")
        .then((response)=>response.json())
        .then((json)=> displayInPage(json))
}
let divContainer = document.querySelector(".peliculasLista")


function displayInPage(arrayConPeliculas) {
    arrayConPeliculas.forEach(element => {
        console.log(element)
        let divPelicula = document.createElement("div");

        divPelicula.classList = "cards_peliculas"

        divPelicula.innerHTML = `
            <picture>
                <img class="cards_peliculas_picture" src="${element.imagen}" alt="${element.id}">
            </picture>
            <div class="peliculas_content">
               <h4> ${element.titulo}</h4>
            </div>`;
        divContainer.appendChild(divPelicula);

        let button = document.createElement("button")
        button.innerHTML = "Agregar a Favoritos"

        divPelicula.appendChild(button)
    })}

/* //Busqueda de peliculas
function buscarPeliculas() {
    let encontrado = peliculas.find((Pelicula)=>Pelicula.titulo.toLowerCase().indexOf(titulo.toLocaleLowerCase())!==-1);
    console.log("RESULTADO DE BUSQUEDA: ", encontrado);  
} */    
