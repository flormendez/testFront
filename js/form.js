$(document).ready(function() {
  $("#guardar").click(function() {
    var name = $("#name").val();
    var date = $("#date").val();
    var email = $("#mail").val();
    var genero = $("#gender").val();
    var index = 1;

    var markup =
      "<tr><td>" +
      index +
      "<td>" +
      name +
      "</td><td>" +
      date +
      "</td><td>" +
      email +
      "</td></td>" +
      genero +
      //   "</td><td>" +
      //   "<button id='delete' class='button button-list'> <i class='fas fa-trash'></i></button>" +
      //   "<button id='edit' class='button button-list'> <i class='fas fa-edit'></i></button>" +
      "</td></tr>";

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
