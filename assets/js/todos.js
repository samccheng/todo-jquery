// check off todos
$('ul').on("click", "li", function () {
	$(this).toggleClass("completed")
})

$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function () {
		$(this).remove();
	})
	event.stopPropagation();
})

$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		var todoText = $(this).val();
		$(this).val("")
		//create new li to ul
		$("ul").append("<li>" + todoText + "<span>delete</span></li>")
	}
})

$(".material-icons").click(function() {
	$("input[type='text']").fadeToggle(200)
})
