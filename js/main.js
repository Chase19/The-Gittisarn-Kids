
$(document).ready(function() {
	
	$("form").submit(function() {
		return false;
	});
	
 	$(".submit").click(function(){
	
		var searchTerms = {
			"home": "index.php",
			"chase": "Chase.php",
			"london": "London.php",
			"holland": "Holland.php",
			"brooklyn": "Brooklyn.php",
			"rome": "Rome.php"
		};
		
		var value = searchTerms[$("input").val().toLowerCase()];
		
		if(typeof(value) == "undefined"){
			alert("Page Not Found");
		}
		else{
			location.href = value;
		}
	});
});

	
	
	
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	