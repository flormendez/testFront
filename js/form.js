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
  $(document).on("click", "#edit", function() {
    //acá debería reabrir el form y dejarme editarlo
  });

  //Boton delete
  $(document).on("click", "#delete", function() {
    $(this)
      .closest("tr")
      .remove();
  });

  function getGender() {
    if ($(".fem").is(":checked")) {
      return "Femenino";
    } else {
      return "Masculino";
    }
  }

  function incrementIndex() {
    var id = 0;
    return id++;
  }

  $("#guardar").click(function() {
    var id = 0;
    var name = $("#name").val();
    var date = $("#date").val();
    //moment().diff(moment(value, "DD-MM-YYYY"), 'years');
    var email = $("#mail").val();
    var genero = getGender();
    var index = incrementIndex();

    markup =
      "<tr><th scope='row'>" +
      index +
      "</th><td>" +
      name +
      "</td><td>" +
      date +
      "</td><td>" +
      genero +
      "</td><td>" +
      email +
      "</td><td>" +
      "<button id='delete' class='btn btn-light'> <i class='fas fa-trash'></i></button>" +
      "<button id='edit' class='btn btn-light'> <i class='fas fa-edit'></i></button>" +
      "</td></tr>";

    $("table tbody:last-child").append(markup);
    guardarUsuario();
    listaUsuarios.push(markup);
    console.log(listaUsuarios);
    dialog.dialog("close");
  });

  $("#cancelar").click(function() {
    dialog.dialog("close");
    form[0].reset();
  });

  function guardarUsuario() {
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
  }

  function obtenerLocalStorage() {
    if (localStorage.getItem("usuarios") != null) {
      return JSON.parse(localStorage.getItem("usuarios"));
      console.log("usuarios");
    } else {
      return [];
    }
  }
});
