function toggleTable()
{
     var elem=document.getElementById("loginTour");
     var hide = elem.style.display =="none";
if (hide) {
document.getElementById("loginTour").style.display="block";
document.getElementById("loginLink").style.display="none";
} 
}