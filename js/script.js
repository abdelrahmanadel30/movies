$(document).ready(function(){

	

	
	/////////////////////////////////////////////////////////////////
	$("#price").click(function(){
		$("#commitments ,#devices").hide(500);
		$("#table").show(500);
	
	});
	 
	  $("#tv").click(function(){
		$("#commitments ,#table").hide(500);
		$("#devices").show(500);
	
	});
	
	  $("#circle").click(function(){
		$("#devices ,#table").hide(500);
		$("#commitments").show(500);
	
	});
	
	

	
	


	
	
});
