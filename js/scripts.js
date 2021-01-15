$(document).ready(function(){
  $("#entry").submit(function(event) {
    const fname = $("input#name").val();
    alert("first name is " + fname);
    event.preventDefault();
  });
});