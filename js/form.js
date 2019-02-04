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

  $("#guardar").click(function() {
    var name = $("#name").val();
    var date = $("#date").val();
    var email = $("#mail").val();
    var genero = $("#gender").val();

    var markup =
      "<th scope='row'>1</th><td>" +
      name +
      "</td><td>" +
      date +
      "</td><td>" +
      email +
      "</td></td>" +
      genero +
      "</td><td>" +
      "<button id='delete' class='button button-list'> <i class='fas fa-trash'></i></button>" +
      "<button id='edit' class='button button-list'> <i class='fas fa-edit'></i></button>" +
      "</td>";

    $("table tbody").append(markup);
  });

  // Find and remove selected table rows
  //   $(".delete-row").click(function() {
  //     $("table tbody")
  //       .find('input[name="record"]')
  //       .each(function() {
  //         if ($(this).is(":checked")) {
  //           $(this)
  //             .parents("tr")
  //             .remove();
  //         }
  //       });
  //   });
});
