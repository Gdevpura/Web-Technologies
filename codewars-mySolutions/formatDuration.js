/*
   Format Duration for humans
*/




function humanReadable(seconds) {
  var hours = seconds / 3600, minutes = seconds / 60 % 60, newSeconds = seconds %  60 ;
 if(seconds < 60){
 return formatDate(newSeconds) + '\tseconds' 
 } 
 else if(seconds < 3600){
       if(seconds%60==0){
           return formatDate(minutes)+'\tminutes';   
       } else{
       return formatDate(minutes)+'\tminutes and\t'+formatDate(newSeconds) + '\tseconds';
 }
 }
 else{
 if(seconds/3600){
 return formatDate(hours) +' '+'hour'
 }else{
 return formatDate(hours) +'\thour,' +formatDate(minutes)+'\tminutes and\t'+formatDate(newSeconds) + '\tseconds';
 }
 }
 
 /*return (seconds < 60) ? formatDate(newSeconds) + '\tseconds' : formatDate(hours) +'\thour,' +formatDate(minutes)+'\tminutes and\t'+formatDate(newSeconds) + '\tseconds' ;
 */
}

function formatDate(n){
  var number = Number.parseInt(n)
  return number > 9? number:number;
}

console.log(humanReadable(3600));