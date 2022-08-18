function popup() {
	let options = "toolbar=no,scrollbars=no,resizable=yes,status=no,menubar=no,width=1000, height=600, top=100, left=270";
	
	var userId = document.getElementById("userID").value;
	var url = 'popup.open?userId=' +userId;
	
	alert(userId);
	
	window.open(url,"_blank", options);
}

function popupclose(){
	
	window.close();
}


$(document).ready(function () {
	  $("a#pageLink").click(function () {
	    $("a#pageLink").removeClass("active");
	    $(this).addClass("active");
	  });

	  $(".menu-button").click(function () {
	    $(".left-area").removeClass("hide-on-mobile");
	  });

	  $(".close-menu").click(function () {
	    $(".left-area").addClass("hide-on-mobile");
	  });

	  $(".more-button").click(function () {
	    $(".more-menu-list").toggle("hide");
	  });
	  
	  //Show contextmenu:
	  $(document).contextmenu(function(e){
	    //Get window size:
	    var winWidth = $(document).width();
	    var winHeight = $(document).height();
	    //Get pointer position:
	    var posX = e.pageX;
	    var posY = e.pageY;
	    //Get contextmenu size:
	    var menuWidth = $(".contextmenu").width();
	    var menuHeight = $(".contextmenu").height();
	    //Security margin:
	    var secMargin = 10;
	    //Prevent page overflow:
	    if(posX + menuWidth + secMargin >= winWidth
	    && posY + menuHeight + secMargin >= winHeight){
	      //Case 1: right-bottom overflow:
	      posLeft = posX - menuWidth - secMargin + "px";
	      posTop = posY - menuHeight - secMargin + "px";
	    }
	    else if(posX + menuWidth + secMargin >= winWidth){
	      //Case 2: right overflow:
	      posLeft = posX - menuWidth - secMargin + "px";
	      posTop = posY + secMargin + "px";
	    }
	    else if(posY + menuHeight + secMargin >= winHeight){
	      //Case 3: bottom overflow:
	      posLeft = posX + secMargin + "px";
	      posTop = posY - menuHeight - secMargin + "px";
	    }
	    else {
	      //Case 4: default values:
	      posLeft = posX + secMargin + "px";
	      posTop = posY + secMargin + "px";
	    };
	    //Display contextmenu:
	    $(".contextmenu").css({
	      "left": posLeft,
	      "top": posTop
	    }).show();
	    //Prevent browser default contextmenu.
	    return false;
	  });
	  //Hide contextmenu:
	  $(document).click(function(){
	    $(".contextmenu").hide();
	  });
	  

})

