/* 
    On clicking to button, color of all the paragraphs will changes
*/


function aLength() {
    
    var a = document.getElementsByClassName('para');

    
    for (var i = 0; i < a.length; i++) {


       a[i].style.color = 'red';
     

       
    }
}


var y = document.getElementById('btn');
y.addEventListener('click', aLength, false);