let menuVisible = false;

// FUNCION QUE OCULTA O MUESTRA EL MENU

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    // OCULTO EL MENU UNA VEZ HE SELECCIONADO UNA OPCION
    document.getElementById("nav").classList="";
    menuVisible = false;
}

// FUNCION QUE APLICA LAS ANIMACIONES DE LAS SKILLS
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

// DETECTO EL SCROLLING PARA APLICAR LA ANIMACION DE LAS SKILLS
window.onscroll = function(){
    efectoHabilidades();
}