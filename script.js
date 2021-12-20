// what we do.........
// $(document).ready(function() { used if script link is top//
  $("#design").click(function() {
  $(".one").toggle();
  $(".designn").toggle();
  });
  // });

  // $(document).ready(function() {  used if script link is top//
    $("#development").click(function() {
    $(".two").toggle();
    $(".dev").toggle();
    });
    // });
    // $(document).ready(function() {  used if script link is top//
      $("#product").click(function() {
      $(".three").toggle();
      $(".management").toggle();
      });
      // });
// End of what we do......






$(document).ready(function(){
  $("#work1").hover(function(){
  $(".work" ,this).slideToggle(100, "linear").display(100, "linear");
   }, function(){
  $(".work" ,this).slideToggle(100, "linear").display(100, "linear");
  });
});


























// forms to edit
  // $("form").on("submit", function(event) {
  //   event.preventDefault();
  //           var message = $("#subjectt").val()
  //           var name = $(".namee").val()
  //           var email = $(".emailll").val()
  //   alert("Hello "+name+",\nWe have received your message from "+email+",\nThank you for contacting us.")
  //   });