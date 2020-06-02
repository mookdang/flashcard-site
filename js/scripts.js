$(document).ready(function() {
  $(".clickable").click(function() {
    $(".Word").fadeToggle();
    $(".definition").fadeToggle();
  });
});

// Example Google Search: <Language> <Intent or Issue> <Specific topic or error message>
// Example Google Search: JavaScript jQuery using keyword "this" with class selector