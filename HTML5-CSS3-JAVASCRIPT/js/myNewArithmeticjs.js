function allArithmeticOperation(){
    var num1 = parseInt(document.getElementById("num").value),
        num2 = parseInt(document.getElementById("num1").value),
        ch = parseInt(document.getElementById("ch").value);
        
    
    
    if(ch==1){
        var add=num1+num2;
        document.getElementById("output").innerHTML="You have choosen Addition and your answer is " +add ;

    } else if (ch==2) {
       var sub=num1-num2;
        document.getElementById("output").innerHTML="You have choosen Subtraction and your answer is " +sub ;
    }else if (ch==3) {
    	var mul=num1*num2;
        document.getElementById("output").innerHTML="You have choosen Multiplication and your answer is " +mul ;
    }else if (ch==4) {
    	var div=num1 / num2;
        document.getElementById("output").innerHTML="You have choosen division  and your answer is " +div ;
    } else if (ch==5){
    	var mod=num1 % num2;
        document.getElementById("output").innerHTML="You have choosen modulus  and your answer is " +mod ;
    } 
    else {

        document.getElementById("output").innerHTML="Invalid input,Please enter your choice from 1 to 5!!" ;
    }
    
    
    
}

