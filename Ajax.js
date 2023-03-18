function actualizarPagina() {

    const xmlhttp = new XMLHttpRequest();
    const url = '';//url donde van a estar los datos para actualizar

    xmlhttp.onreadystatechange = function() {
        console.log("actualice");

        if (this.readyState == 4 && this.status == 200) {
            // Actualizar el contenido de la página con la respuesta del servidor
            document.getElementById("response").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
setInterval(actualizarPagina, 1000); // Actualizar cada 10 segundos