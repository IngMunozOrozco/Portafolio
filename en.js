let idiomaActual = 'es';

// Objeto con los textos en español e inglés
const textos = {
    es: {
        hola: "Hola, yo soy",
        dev: "Desarrollador web full stack",
        desc: "Descargar CV",
        cont: "Contacto",
        inic: "Inicio",
        acer: "Acerca de mí",
        hab: "Hailidades",
        port: "Portafolio",
        pro1: "Como ingeniero de sistemas y tecnólogo en análisis y desarrollo de sistemas de información cuento con conocimientos en el diseño, implementación y gestión de sistemas informáticos.",
        pro2: "Poseo habilidades en el desarrollo de sitios web, aplicaciones móviles y un amplio dominio de diversos lenguajes de programación. Además, tengo experiencia en el manejo de bases de datos, lo que me permite ofrecer soluciones integrales en el ámbito de la tecnología de la información.",
        wet: "App de clima",
        wet2: "Muestra el clima de cualquier lugar del mundo en tiempo real.",
        poke: "Muestra todos los Pokemon existentes por orden y tipo.",
        come: "Modelo de Ecommerce sencillo con carrito de compras.",
        envia: "Enviame un mensaje",
        nom: "Nombre",
        mensaje: "Mensaje",
        webs: "Redes",
        sky: "Usuario : live:eduardo9j",
        add: "Dirección"

    },
    en: {
        hola: "Hello, I am",
        dev: "Web developer full stack",
        desc: "Download CV",
        cont: "Contact",
        inic: "Home",
        acer: "About",
        hab: "Skills",
        port: "Portfolio",
        pro1: "As a systems engineer and technologist in analysis and development of information systems, I have knowledge in the design, implementation and management of computer systems.",
        pro2: "I have skills in the development of websites, mobile applications and a broad command of various programming languages. In addition, I have experience in managing databases, which allows me to offer comprehensive solutions in the field of information technology.",
        wet: "Weather app",
        wet2: "Shows the weather anywhere in the world in real time.",
        poke: "Shows all existing Pokemon by order and type.",
        come: "Simple Ecommerce model with shopping cart.",
        envia: "Send me a message",
        nom: "Name",
        mensaje: "Message",
        webs: "Get in touch",
        sky: "User : eduardo9j",
        add: "Address: Popayán, Colombia"
    }
};

// Función para cambiar los textos según el idioma
function cambiarIdioma(idioma) {
    const elementos = document.querySelectorAll('[id]');
    elementos.forEach(elemento => {
        const id = elemento.getAttribute('id');
        if (textos[idioma][id]) {
            if (elemento.id === 'nom' || elemento.tagName === 'mensaje') {
                elemento.placeholder = textos[idioma][id];
            } else {
                elemento.textContent = textos[idioma][id];
            }
        }
    });
    // Actualizar el texto del hover del slider
    showHoverMessage();
}

// Función para alternar entre español e inglés
function toggleIdioma() {
    idiomaActual = (idiomaActual === 'es') ? 'en' : 'es';
    cambiarIdioma(idiomaActual);
    const toggleButton = document.getElementById('toggleButton');
    toggleButton.textContent = (idiomaActual === 'es') ? 'English' : 'Español';
    if (idiomaActual === 'en') {
        document.getElementById('donwl').style.display = 'none';
        document.getElementsByClassName('btneng')[0].style.display = 'inline-block';
        document.getElementsByClassName('btn3')[0].style.display = 'inline-block';
        document.getElementById('donwl2').style.display = 'none';
    } else {
        document.getElementById('donwl').style.display = 'inline-block';
        document.getElementsById('btneng')[0].style.display = 'none';
        document.getElementsById('donwl2')[0].style.display = 'inline-block';
        document.getElementsByClassName('btn3')[0].style.display = 'none';
    }
}


// Llamada inicial para establecer el texto en el idioma actual
cambiarIdioma(idiomaActual);
