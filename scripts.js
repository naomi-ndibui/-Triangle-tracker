var triangle = function() {
  var sideOne = parseInt(document.getElementById("sideOne").value);
  var sideTwo = parseInt(document.getElementById("sideTwo").value);
  var sideThree = parseInt(document.getElementById("sideThree").value);
  if (isTriangle(sideOne, sideTwo, sideThree)) {
    return triangleType(sideOne, sideTwo, sideThree)
  } else {
    return "These sides do not make a triangle";
  }
};

var triangleType = function(sideOne, sideTwo, sideThree) {
  if ((sideOne === sideTwo) && (sideTwo === sideThree)) {
    return "equilateral";
  } else if ((sideOne === sideTwo) || (sideOne === sideThree) || (sideThree === sideTwo)) {
    return "isosceles";
  } else {
    return "scalene";
  }
};


var isTriangle = function(sideOne, sideTwo, sideThree) {
  return (sideOne <= (sideTwo + sideThree)) && (sideTwo <= (sideThree + sideOne)) && (sideThree <= (sideOne + sideTwo));
}
