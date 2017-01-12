var x = 4;
var y = 3;
console.log(x)

x = x+3;
console.log (x)

if(x %2 > 0){
  x = 3;
}else{
  x = 2;
}
console.log (x)

for(var i=0; i <= 5; i++){
  x = x+1;
}
console.log (x)

function squareRoot (a, b){
  return a / b;
};
x = squareRoot(x, y);
console.log (x)

var numArray = [2, 3, 4]

for(i = 0; i<numArray.length; i++){
  x = x + numArray[i];
}
console.log (x)
