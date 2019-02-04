$(document).ready(function() {
  $("#crearUsuario").click(function() {
    //acá debería aparecer el form
  });

  //Boton edit
  $(document).on("click", "#edit", function() {
    //acá debería reabrir el form y dejarme editarlo
  });

  //Boton delete
  $(document).on("click", "#delete", function() {
    $(this)
      .parent()
      .remove();
  });

  //   function getGender() {
  //     if ($("#fem").is(":checked")) {
  //       var genero = "Femenino";
  //       return genero;
  //     } else {
  //       var genero = "Masculino";
  //       return genero;
  //     }
  //   }
  //   getGender();

  $("#guardar").click(function() {
    var name = $("#name").val();
    var date = $("#date").val();
    //moment().diff(moment(value, "DD-MM-YYYY"), 'years');
    var email = $("#mail").val();
    var genero = $("#gender").val();

    var markup =
      "<th scope='row'>1</th><td>" +
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
      "</td>";

    $("table tbody").append(markup);
  });
});
