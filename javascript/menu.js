let menuResponsivo = document.getElementsById("boton-menu");
let flagMenu = false
//Eventos

menuResponsivo.addEventListener("click", function() {
    if(flagMenu === false) {
        menuResponsivo.classlist.add("menu")
    }
    else {
        menuResponsivo.classlist.remove("menu")
    }
}
)