/*
   Check the value is narcissistic or not
*/



function narcissistic( value ){
var output = [],
    sNumber = value.toString();
for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
}

var sum =0;
for(var j=0;j<output.length;sum+=Math.pow(output[j++],output.length));
if(sum == value){
return sum +' '+'is narcissistic';
}else{

return value +' '+'is not narcissistic';
}
}

console.log(narcissistic(371));
