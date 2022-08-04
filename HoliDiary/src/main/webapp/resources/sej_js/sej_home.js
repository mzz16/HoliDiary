function openNav() {
  $(".top_menu_img_box_a").click(function() {
	  document.getElementById("menu_bar").style.width = "300px";
	  
	  /*if (document.getElementById("menu_bar").style.width = "300px") {
		  $("#menu_bar").focusout(function() {
			  document.getElementById("menu_bar").style.width = "0";	
		  });
		} */
  });
}

function closeNav() {
	$(".closebtn").click(function() {
		document.getElementById("menu_bar").style.width = "0";	
	})
}

/*function closeNav2() {
	$("#menu_bar").focusout(function() {
		alert('11');
	});
}*/







$(function() {
	openNav();
	closeNav();
	closeNav2();
});