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

  function controlarDatos(dato) {
    return dato != "" && dato != null;
  }

  function controlarMail(dato) {
    for (var i = 0; i < dato.length; i++) {
      if ((dato[i] = "@")) {
        return dato;
      } else {
        return alert("Mail inválido");
      }
    }
  }

  function getGender() {
    if ($(".fem").is(":checked")) {
      return "Femenino";
    } else {
      return "Masculino";
    }
  }

  $("#guardar").click(function() {
    var id = 0;
    var name = $("#name").val();
    var date = $("#date").val();
    //moment().diff(moment(value, "DD-MM-YYYY"), 'years');
    var email = $("#mail").val();
    var genero = getGender();
    var index = listaUsuarios.length + 1;

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
      controlarMail(email) +
      "</td><td>" +
      "<button id='delete' class='btn btn-light'> <i class='fas fa-trash'></i></button>" +
      "<button id='edit' class='btn btn-light'> <i class='fas fa-edit'></i></button>" +
      "</td></tr>";

    $("table tbody:last-child").append(markup);

    listaUsuarios.push(markup);
    console.log(listaUsuarios);
    guardarUsuario();
    $(":input", "#dialog-form")
      .not(":button, :submit, :reset, :hidden")
      .val("")
      .prop("checked", false)
      .prop("selected", false);

    dialog.dialog("close");
  });

  $("#cancelar").click(function() {
    dialog.dialog("close");
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
