i = 1;
j=1;
trig = 0;
massOtvetov = ["","","","","","","",""];

  



function ajax_send(){

	// function fun_send(){


	// }

	dlina = $("#dlinazakaza").val();
	telefon = $("#telefonklienta").val(); 


	$.ajax({

		url: "send.php",
		type: "POST",
		data: ({form_subject:"Заявка из КАЛЬКУЛЯТОРА",type_of_job: massOtvetov[1], color:massOtvetov[2], length: dlina,height: massOtvetov[3],location: massOtvetov[5], phone: telefon}),
		dataType: "html"
		//success: fun_send
		        						
	});

	$("body").css("overflow", "auto");
	$(".sk").removeClass('scrol'); 
	massOtvetov = ["","","","","","","",""];


	

		vale = $('#telefonklienta').val();

		if(vale == ""){
			$("#telefonklienta").css("border", "2px solid red");
			exit();

		}
		else{
			$("#telefonklienta").css("border", "2px solid black");
			$(".remodal-wrapper").css("display", "none");
			$(".remodal-overlay").css("display", "none");
			i = 1;

			$('#slide7').removeClass('active').addClass('close'); 
					
			$('#slide1').removeClass('close').addClass('active');
			$('#slide1 .quiz__input-group').css("opacity", "1");

		}
		
	

	// if(i == 7){

		// $(".remodal-wrapper").css("display", "none");
		// $(".remodal-overlay").css("display", "none");

		// exit();
	// }
	

}

function send_otvetov(obj){

	var data = $(obj).attr("data");	

	if(massOtvetov[i].includes(data)){

		massOtvetov[i] = massOtvetov[i].replace(data, "").replace(" ", "");;
		$(obj).css("background","#f2f2f2").css("color","black");
		exit();	
	}
	
	$(obj).css("background","#068f56");
	$(obj).css("color","#fff");

	massOtvetov[i] += data + " ";

	

}



function prev(){
	

	if(i == 1){ exit(); }

		$('#slide' + i + ' .quiz__input-group').css("transition-duration", ".2s");
		$('#slide' + i + ' .quiz__input-group').css("opacity", "0");	
		setTimeout(function() {
		  			
				$('#slide' + i).removeClass('active').addClass('close'); 

				i--;

				if(i == 8){ i = 7 }
					
				massOtvetov[i] = "";
				$("#slide" + i + " .quiz__input").css("background","#f2f2f2").css("color","black");

				$('#slide' + i).removeClass('close').addClass('active');
				$("#hag").text(i);
				
				setTimeout(function() {
		  			
					$('#slide' + i + ' .quiz__input-group').css("transition-duration", ".2s");
					$('#slide' + i + ' .quiz__input-group').css("opacity", "1");

				}, 100);	

		}, 200);
 
}


function next(){
	


	if(i == 4){
		
		vale = $('#dlinazakaza').val();
		
		if(vale == ""){
			$("#dlinazakaza").css("border", "2px solid red");
			exit();

		}
		else{
			$("#dlinazakaza").css("border", "2px solid black");
		}
		

	}

	if(i <= 5){

		$(".quiz__step").css("opacity", "1");
		
	}
	
	


		$('#slide' + i + ' .quiz__input-group').css("transition-duration", ".2s");
		$('#slide' + i + ' .quiz__input-group').css("opacity", "0");	

		setTimeout(function() {
		  			
				$('#slide' + i).removeClass('active').addClass('close'); 
				i++;

				$('#slide' + i).removeClass('close').addClass('active');
				
				$("#hag").text(i);

				setTimeout(function() {
		  			
					$('#slide' + i + ' .quiz__input-group').css("transition-duration", ".2s");
					$('#slide' + i + ' .quiz__input-group').css("opacity", "1");

				}, 100);	

		}, 200);	

		if(i==5){
			$(".quiz__step").css("opacity", "0");
			setTimeout(function() {

		  			

					$('#slide' + i).removeClass('active').addClass('close'); 
					i++;
					$('#slide' + i).removeClass('close').addClass('active');

					$("#hag").text(i);

			}, 1800);
		}

}


// $(function(){
//   $("#telefon").mask("8(999) 999-9999");
// });