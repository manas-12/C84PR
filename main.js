$("body").keypress(function(event) {
	switch (event.keyCode) {
	  case 75: 
		$(".K").css("display", "none");
		break;
	 case 69:
		$(".E").css("display", "none");
		break;
	  case 89:
		$(".Y").css("display", "none");
		break;
	  case 98: 
		$(".b").css("display", "none");
		break;
	  case 111: 
		$(".o").css("display", "none");
		break;
	  case 97: 
		$(".a").css("display", "none");
		break;
	  case 114: 
		$(".r").css("display", "none");
		break;
	  case 100: 
		$(".d").css("display", "none");
		break;
	}
  });