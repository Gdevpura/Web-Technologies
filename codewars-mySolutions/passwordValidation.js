/*
  You need to write regex that will validate a password to make sure it meets the follwing criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
Valid passwords will only be alphanumeric characters.

*/




function validate(password) {
   var regex= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
   
   if(password.match(regex)){
   return true;
   }
   else{
   return false;
   }
}
