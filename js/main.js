/*
 $("html").hide();
 
var pass = prompt("Please Enter Password");

 if(pass === "gittisarn"){
 	$("html").show();
 }
 else{
 	alert("Wrong Password Please Refresh And Try Again");
 }
*/


$("form").submit(function() {
	return false;
});


$("button").click(function(){
	
	var searchTerms = {
		"home": "index.php",
		"chase": "Chase.php"
	};
	
	var input = $("input").val();
	
	
	console.log(searchTerms["home"]);
	
	
	// switch (input) {
		
	// 	case "home":
	// 		location.href = 'index.php';
	// 	break;
		
	// 	case "chase":
	// 		location.href = 'Chase.php';
	// 	break;
	// }
	
	
	
	
	// if(input == "home"){
	// 	location.href = 'index.php';
	// }
		
	// if(input == "chase"){
	// 		location.href = 'Chase.php';
	// }
		
	// if(input == "london"){
	// 		location.href = 'London.php';
	// }
		
	// if(input == "holland"){
	// 		location.href = 'Holland.php';
	// }
		
	// if(input == "brooklyn"){
	// 		location.href = 'Brooklyn.php';
	// }
		
	// if(input == "rome"){
	// 		location.href = 'Rome.php';
	// }
	
});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	