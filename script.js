function abrirModal(img) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("imagenGrande").src = img.src;
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}
