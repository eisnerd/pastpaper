function remove_fields (link) {
 /* $(link).previous("input[type=hidden]").value = "1";
  $(link).up(".fields").hide();
  */
  $(link).siblings("input[type=hidden]:first").attr('value', '1');
	$(link).parents(".fields:first").hide();
  
}

/*function add_fields(link, association, content) {
  var new_id = new Date().getTime();
  var regexp = new RegExp("new_" + association, "g")
  /*$(link).next().({
    before: content.replace(regexp, new_id)
  });
  */
  
 /* $(link).next().html(content.replace(regexp, new_id));
  //alert(content.replace(regexp, new_id));
  // $(link).next().before(content.replace(regexp, new_id));
}
*/
function add_fields(link, association, content) {
  var new_id = new Date().getTime();
  var regexp = new RegExp("new_" + association, "g")
  $(link).parent().before(content.replace(regexp, new_id));
}


$(function() {
  $(".ajaxpaging .pagination a").live("click", function() {
    $(".ajaxpaging .pagination").html("Page is loading...");
    $.getScript(this.href);
    return false;
  });
});

function hideshow(elem)
{
	var a='#pdetail_'+elem;
	var link=$("#viewlink_"+elem);
	
	if(link.html()=="View")
		{
		link.html("hide");
		}else{
			link.html("View");
		}
	$(a).toggle();
}
