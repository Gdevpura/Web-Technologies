/*
   Enter the numbers and it will format into phone number
   It ignores string
   it ignores space
   Result will be in xxx-xxx-xxxx this format
*/


function numberToPhone(arr) {
	if(arr) {
		return arr.replace( /\D+/g, "" ).replace( /([0-9]{1,3})([0-9]{3})([0-9]{2,4}$)/gi, "$1-$2-$3" ); //mask numbers (xxx) xxx-xxxx	
	} else {
		return "";
	}
};


alert(numberToPhone('64?/ 555555  55'));