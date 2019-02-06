$(document).ready(function() {
  obtenerLocalStorage();
  var listaUsuarios = [];

  var markup;

  dialog = $("#dialog-form").dialog({
    autoOpen: false,
    height: 1000,
    modal: true
  });

  $("#cargarUsuario")
    .button()
    .on("click", function() {
      dialog.dialog("open");
    });

  //Boton edit
  $("#edit")
    .button()
    .on("click", function() {
      dialog.dialog("open");
    });

  //debería buscar todos los datos de la fila seleccionada, abrir el form y guardar los cambios

  $(document).on("click", "#delete", function() {
    var row = $(this).closest("tr");
    $(row)
      .closest("tr")
      .remove();
    // localStorage.removeItem(row);

    //find o filter que lo borre del array y borrar todo el local storage y despues pushear el array entero a
    //listaUsuarios.filter()( id => id == index);
    //
    // $('.tachito').click(function() {
    //   var id = $(this).parent().attr('index')
    //   eliminarItem()
  });
  $("#guardar").click(function() {
    obtenerDatos();
  });

  $("#cancelar").click(function() {
    dialog.dialog("close");
  });

  function validateForm(dato) {
    var x = dato;
    if (x == "") {
      alert("Todos los datos son obligatorios.");
      return false;
    } else {
      return true;
    }
  }

  function validateCheckboxes() {
    var fem = $(".fem");
    var mas = $(".mas");
    if (fem.is(":checked") || mas.is(":checked")) {
      return true;
    } else {
      alert("Todos los datos son obligatorios.");
      return false;
    }
  }

  function getGender() {
    if ($(".fem").is(":checked")) {
      return "Femenino";
    } else {
      return "Masculino";
    }
  }

  function agregarUsuario(usuarios) {
    $("table tbody:last-child").append(usuarios);
  }

  function obtenerDatos() {
    var name = $("#name").val();
    var fecha = $("#fechaNacimiento").val();
    var age = moment().diff(moment(fecha, "YYYY-MM--DD"), "years");
    var email = $("#mail").val();
    var genero = getGender();
    var index = listaUsuarios.length + 1;
    var chequearDatoNombre = validateForm(name);
    var chequearDatoMail = validateForm(email);
    var chequearDatoGenero = validateCheckboxes();

    if (chequearDatoNombre && chequearDatoMail && chequearDatoGenero) {
      markup =
        "<tr><th scope='row'>" +
        index +
        "</th><td>" +
        name +
        "</td><td>" +
        age +
        "</td><td>" +
        genero +
        "</td><td>" +
        email +
        "</td><td>" +
        "<button id='edit' class='btn btn-light'> <i class='fas fa-edit'></i></button>" +
        "<button id='delete' class='btn btn-light'> <i class='fas fa-trash'></i></button>" +
        "</td></tr>";

      listaUsuarios.push(markup);

      guardarUsuario();
      $(":input", "#dialog-form")
        .not(":button, :submit, :reset, :hidden")
        .val("")
        .prop("checked", false)
        .prop("selected", false);

      dialog.dialog("close");

      return $("table tbody:last-child").append(markup);
    } else {
      dialog.dialog("close");
    }
  }

  function guardarUsuario() {
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
  }

  function obtenerLocalStorage() {
    if (localStorage.getItem("usuarios") != null) {
      var usuario = JSON.parse(localStorage.getItem("usuarios"));
      // listaUsuarios.push(usuarios);
      return agregarUsuario(usuario);
      console.log("usuarios");
    } else {
      return [];
    }
  }

  function addPage() {
    if (listaUsuarios.length >= 5) {
      $(".pagination").append("<li><a href='#'>2</a></li>");
    }
  }
});
