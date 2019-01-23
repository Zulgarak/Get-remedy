$(document).ready(function() {
	$(".form").trigger("reset");
	$('.form--order').submit(function() {
		$.ajax({
			type: "POST",
			url: "form.php",
			data: $(this).serialize()
		}).done(function() {
			window.location = 'success.html';
		});
		return false;
	});

});



