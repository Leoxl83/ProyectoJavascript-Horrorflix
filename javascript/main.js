let carrito =[];

class Carrito {

    constructor(id, titulo, imagen, precio){
        this.id=id;
        this.titulo=titulo;
        this.imagen=imagen;
        this.precio=precio;
    }
}


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




//Busqueda de peliculas
function buscarPeliculas() {
    let encontrado = peliculas.find((Pelicula)=>Pelicula.titulo.toLowerCase().indexOf(titulo.toLocaleLowerCase())!==-1);
    console.log("RESULTADO DE BUSQUEDA: ", encontrado);  
}