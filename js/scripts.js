var fullName;

let langSelector = function (area) {
  let chosenTrack;
  switch (area) {
    case 'Front-End':
      chosenTrack = "HTML/CSS/JavaScript";
      break;
    case 'Back-End':
      chosenTrack = "C#/Ruby/Python";
      break;
    case 'Full-Stack':
      chosenTrack = "HTML/CSS/JavaScript and C#/Ruby/Python";
      break;
    default:
      chosenTrack = "HTML/CSS/JavaScript";
      break;
  }
  return chosenTrack;
}

$(document).ready(function () {
  $("#entry").submit(function (event) {
    fullName = $("input#name").val();
    window.location.assign("./main.html");
    sessionStorage.setItem("passedName", fullName);
    event.preventDefault();
  });

  $("#questionForm").submit(function (event) {
    $("button#mainButton").addClass("hideButton");
    const area = $("input:radio[name=area]:checked").val();
    const hours = parseInt($("input#hours").val());
    const experience = $("input:radio[name=experience]:checked").val();
    const dataInterest = parseInt($("input:radio[name=dataInterest]:checked").val());
    const type = $("#type").val();
    const soreThroat = $("input:radio[name=soreThroat]:checked").val();
    const passedfullName = sessionStorage.getItem("passedName");
    $(".fullName").text(passedfullName);

    let chosenTrack = langSelector(area); //Function call - return value if further optimized below

    if (area === "Back-end" && hours < 5) {
      chosenTrack = "HTML/CSS/JavaScript";
    }
    else if (area === "Full-Stack" && hours < 12) {
      chosenTrack = "C#/Ruby/Python";
    }
    else if (area === "Full-Stack" && dataInterest < 3) {
      chosenTrack = "C#/Ruby/Python";
    }
    else {
      chosenTrack;
    }

    $(".chosenTrack").text(chosenTrack);
    $("ul#question").append("<li>Area of Interest</li>");
    $("ul#question").append("<li>Hours/day you are willing to spend on Programming</li>");
    $("ul#question").append("<li>Years of Programming Experience</li>");
    $("ul#question").append("<li>Level of interest in Manipulating large chunks of data</li>");
    $("ul#question").append("<li>Personality Type</li>");
    $("ul#question").append("<li>Would you call a Horse with a Sore Throat a \"Hoarse?\"</li>");

    let editedExp;
    switch (experience) {
      case 'zerToOne':
        editedExp = "0-1 Years";
        break;
      case 'twoToFive':
        editedExp = "2-5 Years";
        break;
      case 'moreThanFive':
        editedExp = "More than 5 Years";
        break;
      default:
        editedExp = "0-1 Years";
        break;
    }

    const fArea = "<li><strong>" + area + "</strong></li>";
    const fHours = "<li><strong>" + hours + "</strong></li>";
    const fExperience = "<li><strong>" + editedExp + "</strong></li>";
    const fDataInterest = "<li><strong>" + dataInterest + "</strong></li>";
    const fType = "<li><strong>" + type + "</strong></li>";
    const fsoreThroat = "<li><strong>" + soreThroat + "</strong></li>";
    
    $("ul#answer").append(fArea);
    $("ul#answer").append(fHours);
    $("ul#answer").append(fExperience);
    $("ul#answer").append(fDataInterest);
    $("ul#answer").append(fType);
    $("ul#answer").append(fsoreThroat);

    $("#story").show();
    event.preventDefault();
  });
});
