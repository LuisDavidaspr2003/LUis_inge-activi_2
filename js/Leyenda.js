document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("Myfomr");
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    var nombreInput = document.getElementById("nombre");
    var descripcionInput = document.getElementById("descripcion");
    var direccionInput = document.getElementById("direccion");
    var imagenInput = document.getElementById("imagen");

    if (nombreInput.value.trim() === "") {
      mostrarLeyenda("nombre-error");
      agregarClaseError(nombreInput);
    } else {
      ocultarLeyenda("nombre-error");
      quitarClaseError(nombreInput);
    }


    if (descripcionInput.value.trim() === "") {
      mostrarLeyenda("descripcion-error");
      agregarClaseError(descripcionInput);
    } else {
      ocultarLeyenda("descripcion-error");
      quitarClaseError(descripcionInput);
    }


    if (direccionInput.value.trim() === "") {
      mostrarLeyenda("direccion-error");
      agregarClaseError(direccionInput);
    } else {
      ocultarLeyenda("direccion-error");
      quitarClaseError(direccionInput);
    }


    if (imagenInput.value.trim() === "") {
      mostrarLeyenda("imagen-error");
      agregarClaseError(imagenInput);
    } else {
      ocultarLeyenda("imagen-error");
      quitarClaseError(imagenInput);
    }


    if (
      nombreInput.value.trim() !== "" &&
      descripcionInput.value.trim() !== "" &&
      direccionInput.value.trim() !== "" &&
      imagenInput.value.trim() !== ""
    ) {
      
      alert("El producto ha sido creado");
    }
  });

  function mostrarLeyenda(id) {
    var leyenda = document.getElementById(id);
    leyenda.style.display = "block";
  }

  function ocultarLeyenda(id) {
    var leyenda = document.getElementById(id);
    leyenda.style.display = "none";
  }

  function agregarClaseError(inputElement) {
    inputElement.classList.add("error");
  }

  function quitarClaseError(inputElement) {
    inputElement.classList.remove("error");
  }
});
