$("#add_button").one('click',function() {

  $("#bill_table").append("<tr><td>" + $("#item_name:text").val() + "</td>" + "<td>" + $("#item_price:text").val() + "</td>" + "<td>" + $("#item_quant").val() + "</td>" + "<td>" + $("#item_quantity").val() + "</td></tr>");
});
$('#item_name').keyup(function() {
            if (this.value.match(/[^a-zA-Z]/g)) {
                this.value = this.value.replace(/[^a-zA-Z]/g, '');
            }
        });
$('#item_price').keyup(function() {
            if (this.value.match(/[^a-zA-Z]/g)) {
                this.value = this.value.replace(/[^a-zA-Z]/g, '');
            }
        });

$("#reset_button").click(function() {
  $("#bill_table").hide();
  $(".item_value").val('');
  /*$("#item_name").val('');
  $("#item_quant").val('');
  $("#item_quantity").val('');
  $("#item_price").val('');*/
  $("center").hide();
});