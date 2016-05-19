var $data=

[
	{"name": "Test Task #1", "date": "12-01-2012", "assigned": "John Doe" },
	{"name": "Test Task #2", "date": "12-02-2012", "assigned": "John Doe" },
	{"name": "Test Task #3", "date": "12-03-2012", "assigned": "John Doe" },
	{"name": "Test Task #4", "date": "12-04-2012", "assigned": "John Doe" },
	{"name": "Test Task #5", "date": "12-05-2012", "assigned": "John Doe" },
	{"name": "Test Task #6", "date": "12-06-2012", "assigned": "John Doe" },
	{"name": "Test Task #7", "date": "12-07-2012", "assigned": "John Doe" }
]

$(document).ready(function() {
console.log($data);

$.each($data, function(key, val){
$("ul").append("<li>"+val.name+"&nbsp;&nbsp;&nbsp;"+val.date+"&nbsp;&nbsp;&nbsp;"+val.assigned+"</li><br>");

})
$('button').click(function(){
    $('ul').prepend('<li>'+ $('.task').val()+"&nbsp;&nbsp;&nbsp;"+$('.tDate').val()+"&nbsp;&nbsp;&nbsp;"+$('.assign').val()+'</li><br>')
    $('input').val(" ");
    
});
});