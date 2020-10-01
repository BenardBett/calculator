var add = function(number1, number2) {
    return number1 + number2;
  };
  
  var number1 = parseInt(prompt("Enter a number:"));
  var number2 = parseInt(prompt("Enter another number:"));
  var result = add(number1, number2);
  alert(result);
  
  var bodyMass=function(weight,height){
    return weight/height;
  };
  var weight=prompt("Enter the weight of the person in kg.");
  var height=prompt("Enter the height of the person in metres.");
  var result=bodyMass(weight/height);
  alert(result);

  var celcius= function(tempCelcius, conversion){
  return  tempCelcius * conversion;
}
var tempCelcius=prompt("Enter the temperature in degrees celsius");
var conversion=prompt("Enter the conversion formulae");
var result= tempCelcius * conversion;
alert(result);























