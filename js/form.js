$(document).ready(function() {
  var listaUsuarios = obtenerLocalStorage();
  if (listaUsuarios.length > 0) {
    agregarUsuarios(listaUsuarios);
  }

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

  function agregarUsuarios(usuarios) {
    for (var i = 0; i < usuarios.length; i++) {
      markup =
        "<tr id='" +
        i +
        "'><th scope='row'>" +
        (i + 0) +
        "</th><td>" +
        usuarios[i]["name"] +
        "</td><td>" +
        usuarios[i]["age"] +
        "</td><td>" +
        usuarios[i]["genero"] +
        "</td><td>" +
        usuarios[i]["email"] +
        "</td><td>" +
        "<button id='edit' class='btn btn-light'> <i class='fas fa-edit'></i></button>" +
        "<button id='delete' class='btn btn-light'> <i class='fas fa-trash'></i></button>" +
        "</td></tr>";

      $("table tbody:last-child").append(markup);
    }
    //$("table tbody:last-child").append(usuarios);
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
        "<tr id='" +
        index +
        "'><th scope='row'>" +
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

      var obj = {
        name: name,
        fecha: fecha,
        age: age,
        email: email,
        genero: genero
      };

      listaUsuarios.push(obj);

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
      var usuarios = JSON.parse(localStorage.getItem("usuarios"));
      // listaUsuarios.push(usuarios);
      //return agregarUsuario(usuario);
      //console.log("usuarios");
      return usuarios;
    } else {
      return [];
    }
  }

  function addPage() {
    if (listaUsuarios.length >= 5) {
      $(".pagination").append("<li><a href='#'>2</a></li>");
    }
  }

  $("#myTable").DataTable({
    sDom:
      '<"row view-filter"<"col-sm-12"<"pull-left"l><"pull-right"f><"clearfix">>>t<"row view-pager"<"col-sm-12"<"text-center"ip>>>',
    paging: true,
    pageLength: 5,
    searching: false,
    info: false,
    lengthChange: false,
    ordering: false
  });
});
