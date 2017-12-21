$(".enter a[href^='#']").on("click", function(e) {
  e.preventDefault();

  var hash = this.hash;

  $("html, body").animate(
    {
      scrollTop: $(hash).offset().top
    },
    400,
    function() {
      window.location.hash = hash;
    }
  );
});

var message = "";

$("#submit").on("click", function() {
  message = $("#contactform").serialize();
  $.ajax({
    url: "//formspree.io/younus23@gmail.com",
    method: "POST",
    data: { message: message },
    dataType: "json"
  });
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  document.getElementById("introText").innerHTML = "Thank you!";
  $('.arrow').removeClass("infintie swing");
  setTimeout(function() {
    document.getElementById("introText").innerHTML = "Hi, I'm Back!";
    $(".arrow").addClass("infintie swing");
  }, 5000);

  return false;
});

