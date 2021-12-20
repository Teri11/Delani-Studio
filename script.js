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





// PORTFOLIO.....
$(document).ready(function(){
  $("#work1").hover(function(){
  $(".work" ,this).slideToggle(100, "linear").display(100, "linear");
   }, function(){
  $(".work" ,this).slideToggle(100, "linear").display(100, "linear");
  });
});
$(document).ready(function(){
  $("#work2").hover(function(){
  $(".work" ,this).slideToggle(100, "linear").display(100, "linear");
   }, function(){
  $(".work" ,this).slideToggle(100, "linear").display(100, "linear");
  });
});
$(document).ready(function(){
  $("#work3").hover(function(){
  $(".work" ,this).slideToggle(100, "linear").display(100, "linear");
   }, function(){
  $(".work" ,this).slideToggle(100, "linear").display(100, "linear");
  });
});

$(document).ready(function(){
  $("#work4").hover(function(){
  $(".work" ,this).slideToggle(100, "linear").display(100, "linear");
   }, function(){
  $(".work" ,this).slideToggle(100, "linear").display(100, "linear");
  });
});
$(document).ready(function(){
  $("#work5").hover(function(){
  $(".work" ,this).slideToggle(100, "linear").display(100, "linear");
   }, function(){
  $(".work" ,this).slideToggle(100, "linear").display(100, "linear");
  });
});
$(document).ready(function(){
  $("#work6").hover(function(){
  $(".work" ,this).slideToggle(100, "linear").display(100, "linear");
   }, function(){
  $(".work" ,this).slideToggle(100, "linear").display(100, "linear");
  });
});
$(document).ready(function(){
  $("#work7").hover(function(){
  $(".work" ,this).slideToggle(100, "linear").display(100, "linear");
   }, function(){
  $(".work" ,this).slideToggle(100, "linear").display(100, "linear");
  });
});
$(document).ready(function(){
  $("#work8").hover(function(){
  $(".work" ,this).slideToggle(100, "linear").display(100, "linear");
   }, function(){
  $(".work" ,this).slideToggle(100, "linear").display(100, "linear");
  });
});
// End of portfolio......



// Form validation and input...

  $("form").on("submit", function(event) {
    event.preventDefault();
            var message = $(".form-control").val()
            var name = $("#namee").val()
            var email = $("#emaill").val()
    alert("Hello "+name+",\nWe have received your message from "+email+",\nThank you for contacting us.")
    });
    
    // End of contact...