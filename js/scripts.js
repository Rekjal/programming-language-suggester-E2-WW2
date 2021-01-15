var fullName;

$(document).ready(function () {
  $("#entry").submit(function (event) {
    fullName = $("input#name").val();
    window.location.assign("./main.html");
    sessionStorage.setItem("passedName", fullName);
    event.preventDefault();
  });

  $("#questionForm").submit(function (event) {
    const area = $("input:radio[name=area]:checked").val();
    const hours = $("input#hours").val();
    const experience = $("input:radio[name=experience]:checked").val();
    const dataInterest = $("input:radio[name=dataInterest]:checked").val();
    const type = $("#type").val();
    // fullName = $("input#name").val();
    // alert("first name is " + fullName);
    // alert("Area:Hours:Experience:DataInterest:Type:::::"+ area +" : " + hours +" : " + experience +" : " + dataInterest + " : "+type);
    const fullName2 =  sessionStorage.getItem("passedName");
    const string = fullName2 + " you selected Area:Hours:Experience:DataInterest:Personality Type:::::" + area + " : " + hours + " : " + experience + " : " + dataInterest + " : " + type;
    $(".result").toggle().text(string);
    $(".result").text(string);
    event.preventDefault();
  });
});

$(document).ready(function () {


});