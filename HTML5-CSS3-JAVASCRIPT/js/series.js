function add(){
var sum=0,result=" ",i=1,num=parseInt(document.getElementById("num").value);    
while(i<=num){
sum=sum+i;
    
    if(i==1){
    
    result=result + i;    
    }
    else{
    result=result + "+" + i;
    }
    i++;
    }

document.getElementById("output").innerHTML="Your output is " +result +" " + "=" +sum;
document.getElementById("num").value=" ";
}

function mul(){
var sum=1,result=" ",i=1,num=parseInt(document.getElementById("num").value);    
while(i<=num){
sum=sum*i;
    
    if(i==1){
    
    result=result + i;    
    }
    else{
    result=result + "*" + i;
    }
    i++;
    }

document.getElementById("output").innerHTML="<br>"+"Your output is " +result +" " + "=" +sum;
document.getElementById("num").value=" ";
}
