$(document).ready(function() {
	var autoParts = $(".main_menu_item.auto-parts");
	var dropdownMenu = $(".dropdown-menu");

	autoParts.mouseover(function (e) {
		dropdownMenu.css("display", "block");
	});	

	autoParts.mouseout(function (e) {
		dropdownMenu.css("display", "none");
	});
});
