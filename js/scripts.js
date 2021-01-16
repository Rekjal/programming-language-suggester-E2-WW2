var fullName;

let langSelector = function(area, hours, experience, dataInterest, type) {
  let chosenLang;
  if (hours < 10) {
    chosenLang = "HTML/CSS/JS";
  }
  elseif (hours> 10 && hours < 40) {
    if (dataInterest >3)
    {
      chosenLang = "C++";
    }
    elseif (dataInterest <=3)

  }
  elseif (hours> 40) {

  }


  return chosenLang;

}

$(document).ready(function () {
  $("#entry").submit(function (event) {
    fullName = $("input#name").val();
    window.location.assign("./main.html");
    sessionStorage.setItem("passedName", fullName);
    // alert("FIRST PAGE name is " + fullName);
    event.preventDefault();
  });

  $("#questionForm").submit(function (event) {
    // alert("I am here");
    $("button#mainButton").addClass("hideButton");
    const area = $("input:radio[name=area]:checked").val();
    const hours = parseInt($("input#hours").val());
    const experience = $("input:radio[name=experience]:checked").val();
    const dataInterest = parseInt($("input:radio[name=dataInterest]:checked").val());
    const type = $("#type").val();
    const passedfullName =  sessionStorage.getItem("passedName");
    // const string = " you selected Area:Hours:Experience:DataInterest:Personality Type:::::" + area + " : " + hours + " : " + experience + " : " + dataInterest + " : " + type;
    
    // $(".result").toggle().text(string);
    $(".fullName").text(passedfullName);
    let chosenTrack = "C++";
    $(".chosenTrack").text(chosenTrack);
    
    $("ul#question").append("<li>Area of Interest</li>");
    $("ul#question").append("<li>Hours/day you are willing to spend on Programming</li>");
    $("ul#question").append("<li>Years of Programming Experience</li>");
    $("ul#question").append("<li>Level of interest in Manipulating large chunks of data</li>");
    $("ul#question").append("<li>Personality Type</li>");

    const fArea = "<li><strong>"+ area +"</strong></li>";
    const fHours = "<li><strong>"+ hours +"</strong></li>";
    const fExperience = "<li><strong>"+ experience +"</strong></li>";
    const fDataInterest = "<li><strong>"+ dataInterest +"</strong></li>";
    const fType = "<li><strong>" + type +"</strong></li>";

    // $("ul#answer").remove(fArea);
    $("ul#answer").append(fArea);
    $("ul#answer").append(fHours);
    $("ul#answer").append(fExperience);
    $("ul#answer").append(fDataInterest);
    $("ul#answer").append(fType);

    $("#story").show();
    event.preventDefault();
  });
});
