var triangle = function() {
  var sideOne = parseInt(document.getElementById("sideOne").value);
  var sideTwo = parseInt(document.getElementById("sideTwo").value);
  var sideThree = parseInt(document.getElementById("sideThree").value);
  if (isTriangle(sideOne, sideTwo, sideThree)) {
    return triangleType(sideOne, sideTwo, sideThree)
  } else {
    return alert("These sides do not make a triangle.");
  }
};

var triangleType = function(sideOne, sideTwo, sideThree) {
  if ((sideOne === sideTwo) && (sideTwo === sideThree)) {
    return alert("Equilateral: All sides of the triangle are equal.");
  } else if ((sideOne === sideTwo) || (sideOne === sideThree) || (sideThree === sideTwo)) {
    return alert("Isosceles: Two sides of the triangle are equal.");
  } else {
    return alert("scalene: None of the sides of the triangle are equal.");
  }
};


var isTriangle = function(sideOne, sideTwo, sideThree) {
  return (sideOne <= (sideTwo + sideThree)) && (sideTwo <= (sideThree + sideOne)) && (sideThree <= (sideOne + sideTwo));
}
