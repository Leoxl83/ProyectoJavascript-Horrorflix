
//Registrar Usuarios//

const usuariosRegistrados = [];

class Usuarios {
    constructor (nombre, apellido, usuario, mail, password) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;
        this.mail=mail;
        this.password=password;
    }
}

let title = document.querySelector('title').textContent
if (title === 'HorrorFlix - Registrate es gratis!') {
    const UsuariosRegistrados = []

    function registro() {
        let nombre = document.getElementById('nombre').value
        let apellido = document.getElementById('apellido').value
        let usuario = document.getElementById('usuario').value
        let mail = document.getElementById('mail').value
        let password = document.getElementById('password').value

        const userReg = new Usuarios(nombre, apellido, usuario, mail, password)

        UsuariosRegistrados.push(userReg)

        localStorage.setItem('RegUsuarios', JSON.stringify(UsuariosRegistrados))

        alert('Se ha registrado con exito')
        window.location.href="./assets/views/login.html"
		
    }

    const btnReg = document.getElementById('reg')

    btnReg.addEventListener('click', event => {
        event.preventDefault()
        registro()
    })
}

//Login//
if (title === 'HorrorFlix - Login') {
    function login() {
    	let user = document.getElementById('usuario').value;
    	let password = document.getElementById('password').value;
  
      	const usuariosFromStorage = JSON.parse(localStorage.getItem('RegUsuarios'));
  
      	console.log(usuariosFromStorage);
  
      	if (user === usuariosFromStorage[0].nombre && password === usuariosFromStorage[0].contraseña) 
	  	{
        	alert('Bienvenido!')
      	} else {
        	alert('Intente nuevamente')
      	}
    }
  
    const iniciarsession = document.getElementById('login')
  
    iniciarsession.addEventListener('click', event => {
      	event.preventDefault()
      	login()
    })
    console.log(document.querySelector('title'))
}





//registro guardado de peliculas//
class Pelicula {
    constructor(id, titulo, actor) {
        this.id=id;
        this.titulo=titulo;
        this.actor=actor;
        
    }
}

const peliculas = [{
    id:1,
    titulo: "Frankenstein",
    imagen: "../images/frankenstein.jpg",
    actor: "Boris Karloff",
},
{
    id:2,
    titulo: "Attack of the 50ft woman",
    imagen: "../images/50woman.jpg",
    actor: "Boris Karloff", 
},
{
    id:3,
    titulo: "The Black cat",
    imagen: "../images/blackcat.jpg",
    actor: "Boris Karloff", 
},
{
    id:4,
    titulo: "Bkack Sunday",
    imagen: "../images/blacksunday.jpg",
    actor: "Barbara Steele", 
},
{
    id:5,
    titulo: "The Blob",
    imagen: "../images/blob.jpg",
    actor: "Steven Mc Queen", 
},
{
    id:6,
    titulo: "The Bride of Frankenstein",
    imagen: "../images/bride.jpg",
    actor: "Boris Karloff", 
},
{
    id:7,
    titulo: "Children of the Damned",
    imagen: "../images/childrenofthedamned.jpg",
    actor: "Ian Hendry", 
},
{
    id:8,
    titulo: "The Creature of the black lagoon",
    imagen: "../images/creatureblacklagoon.jpg",
    actor: "Richard Carlson", 
},
{
    id:9,
    titulo: "Die Monster Die",
    imagen: "../images/diemonsterdie.jpg",
    actor: "Boris Karloff", 
},
{
    id:10,
    titulo: "Dracula",
    imagen: "../images/dracula.jpg",
    actor: "Bela Lugosi", 
},
{
    id:11,
    titulo: "The day the earth stood still",
    imagen: "../images/earthstoodstill.jpg",
    actor: "Michael Rennie", 
},
{
    id:12,
    titulo: "Forbidden Planet",
    imagen: "../images/forbiddenplanet.jpg",
    actor: "Leslie Nielsen", 
},
{
    id:13,
    titulo: "House of Wax",
    imagen: "../images/houseofwax.jpg",
    actor: "Vincent Price", 
},
{
    id:14,
    titulo: "House on haunted hill",
    imagen: "../images/houseonhauntedhill.jpg",
    actor: "Vincent Price", 
},
{
    id:15,
    titulo: "Invasion of body snatchers",
    imagen: "../images/invasionofbodysnatchers.jpg",
    actor: "Kevin Mc Carthy", 
},
{
    id:16,
    titulo: "The invisible Man",
    imagen: "../images/invisibleman.jpg",
    actor: "Claude Reins", 
},
{
    id:17,
    titulo: "It came from outer space",
    imagen: "../images/itcamefromouterspace.jpg",
    actor: "Richard Carlson", 
},
{
    id:18,
    titulo: "Phantom of the Opera",
    imagen: "../images/phantomoftheopera.jpg",
    actor: "Lon Chaney", 
},
{
    id:19,
    titulo: "Dr. Jekyll and Mr. Hyde",
    imagen: "../images/jekyllhyde.jpg",
    actor: "Fredric March", 
},
{
    id:20,
    titulo: "Night of the living dead",
    imagen: "../images/livingdead.jpg",
    actor: "Judith Odea", 
},
]
