var currentStep = 0;
   var course,subject,name,phone,localit,mode,location,lat,lng,gender,optradio,start_time,specific_req;
   var user_type;
   var subject_name;
   var sessionsinaweek,otpid;
   var tracking_source;
   var url=window.location.href;
   var nakeddomaain=url.search( 'www.' );
   if(nakeddomaain==-1)
   {
   	url="https://gharpeshiksha.com";
   	}else{
   		url="https://www.gharpeshiksha.com";
   		}
   
   
   
   var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

 var robot=false; 
  
  
  
      $(document).ready(function () {
	current_fs = $('#enqformstep0');
	current_fs.show();	 
      
	  });
	  
	  
	  
   function class_selection(id){
        currentStep = 1;
		//$("#previous").css({'display':'block'});
     switch(id)
         {
             case "nursery":
			 	 $("#section1").show();
                 $("#section2,#section3,#section4,#section5").hide();
					break;
            case "class6_8":
                 $("#section2").show();
                 $("#section1,#section3,#section4,#section5").hide();
                     break; 
            case "class9_10":
			
                 $("#section3").show();
                 $("#section1,#section2,#section4,#section5").hide();
                     break;  
                 case "class11_12":
                 $("#section4").show();
                 $("#section1,#section2,#section3,#section5").hide();
                     break;  
                 case "graduation":
                $("#section1,#section2,#section4,#section3,#section5").show();
                     break;  
                  case "language":
                 $("#section5").show();
                 $("#section1,#section2,#section3,#section4").hide();
                     break; 
         }
   $('#enqformstep1').css({'display':'block','opacity':'1'});
  current_fs = $('#enqformstep'+(currentStep-1));
	next_fs = $('#enqformstep'+(currentStep-1)).next();
	    robot=true; 
   //document.getElementById('step1Next').setAttribute("id", 'step2Next'); 
  current_fs.hide();
  next_fs.show();      
  //  nextbuttonclick('step'+(currentStep+1)+'Next');
	robot=false;
    }

function contact_tutor(id){
	
	 currentStep = 1;
	 $('#enqformstep1').css({'display':'block','opacity':'1'});
	 $(".modal-header h3").html("Connect with "+id+" and tutors alike");
	 current_fs = $('#enqformstep'+(currentStep-1));
	next_fs = $('#enqformstep'+(currentStep-1)).next();
	    robot=true;
		current_fs.hide();
  next_fs.show();   
  robot=false;
}	  
	
function contact_student(){
currentStep = 12;


 current_fs = $('#enqformstep0');
		 next_fs = $('#enqformstep12');
		 next_fs.show();
		$("#enqformstep0").css({"opacity": "0", "transform": "scale(1)","position":"relative","display":"none"});
		$("#enqformstep12").css({"opacity": "1","display":"block"});
	//	$("#enqformstep1").css({"opacity": "0", "transform": "scale(1)","position":"relative","display":"none"});
$("#previous,#step12Next,#step1Next").hide();
 $(".modal-header h3").html("Become Part of Our Team");

}
	
	  
   function subject_selection(id)
   {
	//   $("#previous").css({'display':'block'});
	   //alert(id);
	  $(".modal-header h3").html("Looking for "+id+" Classes");
		subject_name=id;
		
	currentStep = 1;
	$('#enqformstep1').css({'display':'block','opacity':'1'});
  current_fs = $('#enqformstep'+(currentStep-1));
	next_fs = $('#enqformstep'+(currentStep-1)).next();
	    robot=true; 
   //document.getElementById('step1Next').setAttribute("id", 'step2Next'); 
  current_fs.hide();
  next_fs.show();      
  //  nextbuttonclick('step'+(currentStep+1)+'Next');
	robot=false;
	$("#section1,#section2,#section3,#section4,#section5").show();
	
	$('#enqformstep0').css({'transform':'scale(1)', 'position':'relative', 'opactiy': '1'});
		//$('#previous').hide();
	 
	
   }
	


    function clear_all(){
		//	$("#previous").css({'display':'inline-block'});

		alert(currentStep);
		$('#enqformstep'+(currentStep)).css({'display': 'none', 'opacity': '0', 'transform': 'scale(1)', 'position': 'relative'});
		 $(".modal-header h3").html("Get a Home Tutor Within 30 Minutes");
		 $("#section1,#section2,#section3,#section4,#section5").show();
         				course="";
						subject= "";
						name= "";
						phone= 0;
						localit= 0;
						mode= "";
					/*	location= ""; */
						lat= 0;
						lng= 0;
						gender= "";
						optradio= "";
						start_time= "";
						specific_req= "";
						subject_name= undefined;
						sessionsinaweek= "";
						otpid= 0;
						tracking_source= "";
						user_type = "";
						robot=false;    
		$('#enqformstep'+currentStep).hide();				   

currentStep=0;
//$("#section1,#section2,#section3,#section4,#section5").show();



//$('#enqformstep0').css({'transform':'scale(1)', 'position':'relative'});
$("#enqformstep0").css("opacity", "1");
 $("#enqformstep0").css("display", "block");
 
 current_fs = $('#enqformstep0');
	//next_fs = $('#enqformstep0').next();
              //currentStep=0; 
			   
			   current_fs.show();
//$("#enqformstep1,#enqformstep2,#enqformstep3,#enqformstep4,#enqformstep5,#enqformstep5,#enqformstep6,#enqformstep7,#enqformstep8,#enqformstep9,#enqformstep10,#enqformstep11,#enqformstep12").css("opacity", "1");
 document.getElementById("enquirystepsform").reset();
 document.getElementById("tutorregister").reset();
	//	$("#step"+currentStep+"Next").show();
		$("#step12Next,#step1Next").show();
		//$("#previous").css({'display':'block'});
		
		} 

	
function nextbuttonclick(id)
{ 
alert(id);
  if(currentStep>=1)
  {
	  $("#previous").css({'display':'inline-block'});
  }
  else
	  $("#previous").css({'display':'none'});
switch(currentStep)
{
	case 0: step0Next();
			break;
	case 1: step1Next();
	        break;
	case 2: step2Next();
	        break;		
	case 3: step3Next();
	        break;		
	case 4: step4Next();
	        break;
	case 5: step5Next();
	        break;	
	case 6: step6Next();
	        break;
	case 7: step7Next();
	        break;
	case 8: step8Next();
	        break;	
	case 9: step9Next();
	        break;
	case 10:step10Next();
	        break;
	case 11:step11Next();
	        break;		
}
if(!robot)
{
	
//  document.getElementById(id).setAttribute("id", 'step'+currentStep+'Next');
}

animate();
  
  }
  
 function animate()
{
	
if (true) {		   
       //    $('#navStep' + currentStep).removeClass('disabled');
		  // alert("working");
     //      $('#navStep' + currentStep).click();

		   if(animating)
			   return false;
	animating = true;
	alert(current_fs.attr('id'));
	alert(next_fs.attr('id'));
	
//	current_fs = $(this).parent();
//	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
//	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
//	next_fs.addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	if(!robot)
	{//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			right = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute',
		'min-height': '4'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			current_fs.css({
        'transform': 'scale(1)',
        'position': 'relative',
		'min-height': '4'
      });
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
	}
	else
	{
			current_fs.hide();
			current_fs.css({
        'transform': 'scale(1)',
        'position': 'relative',
		'min-height': '4'
      });
			animating = false;
		
	}
	
}
}

 
function step0Next()
{
	//$("#previous").css({'display':'none'});
	//$("#previous").hide();
	user_type=document.querySelector('input[name="Select2"]:checked').value ;
	if(user_type=="Tutor")
	{
		 alert(user_type);
		currentStep = 12;
		 alert(currentStep);
		//alert(currentStep);
		//$(nextbuttonclick).click();
		//var $prevStep= $('.li-nav.active');
			//$prevStep.removeClass('active');
			
			
			  // $("#navStep12").addClass('active');
		 current_fs = $('#enqformstep0');
		 next_fs = $('#enqformstep12');
		 next_fs.show();
		$("#enqformstep0").css({"opacity": "0", "transform": "scale(1)","position":"relative","display":"none"});
		$("#enqformstep12").css({"opacity": "1","display":"block"});
	//	$("#enqformstep1").css({"opacity": "0", "transform": "scale(1)","position":"relative","display":"none"});
$("#previous,#step12Next,#step1Next").hide();
 $(".modal-header h3").html("Become Part of Our Team");

//$('#step0Next').attr('id','step12Next');		 
	}
else
	{
		alert("else");
	alert(currentStep);
	currentStep += 1;
	alert(currentStep);
	//$("#previous").css({'display':'inline-block'});
  current_fs = $('#enqformstep'+(currentStep-1));
	next_fs = $('#enqformstep'+(currentStep-1)).next();
	
//	$('#step0Next').attr('id','step1Next');
	}	
}


function step1Next()
{
	//$("#previous").hide();
	currentStep += 1;
updatesubjectlist();
$("input:checkbox[value="+subject_name+"]").each(function(){
   $(this).prop('checked', true);
});

	course=document.querySelector('input[name="Select1"]:checked').value;
    current_fs = $('#enqformstep'+(currentStep-1));
	next_fs = $('#enqformstep'+(currentStep-1)).next();
//$('#step1Next').attr('id','step2Next');
}


function step2Next()
{
  subject="";
	      currentStep += 1;
	      var selectedsubject = document.querySelectorAll('input[name="subjects"]:checked');
	      for (var index = 0; index < selectedsubject.length; index++) {
	    	    subject+=selectedsubject[index].value+",";
	    	}

	   if(subject=="")
		   {
		   document.getElementById('err-msg2').innerHTML="Select atleast one Subject";
			return false;   
		   }
		   
		   

  current_fs = $('#enqformstep'+(currentStep-1));
	next_fs = $('#enqformstep'+(currentStep-1)).next();
//$('#step2Next').attr('id','step3Next');		   
}



function step3Next()
{         currentStep += 1;
	    // alert(currentStep);
		
mode="";
	   //currentStep += 1;
	   var selectedmode = document.querySelectorAll('input[name="mode"]:checked');
	   
	      for (var index = 0; index < selectedmode.length; index++) {
	    	    mode+=selectedmode[index].value+",";
	    	}
			alert(mode)
			
	      if(mode=="")
		   {
		   document.getElementById('err-msg7').innerHTML="Select atleast one class mode";
			return false;   
		   }
		   
current_fs = $('#enqformstep'+(currentStep-1));
	next_fs = $('#enqformstep'+(currentStep-1)).next();
		//   $('#step3Next').attr('id','step4Next');		   

}

     
function step4Next()
{    
			name=document.getElementById('name').value;
	 	 phone=document.getElementById('phone').value;
	 	 	var regExp = "[789][0-9]{9}";
	 	var match = phone.match(regExp);
	 alert(match);	
	 	if(name==""&&phone=="")
		   {
		   document.getElementById('err-msg1').innerHTML="Enter Name and Phone Number";
		  return false;
		   }
	   else if(name=="")
	   {
	   document.getElementById('err-msg1').innerHTML="Enter name";
	  return false;
	   }
	   else if(phone=="")
	   {
	   document.getElementById('err-msg1').innerHTML="Enter Phone Number";
	  return false;
	   }
	   else if(!match)
		   {
		   document.getElementById('err-msg1').innerHTML="Please Enter Correct Phone Number";
			  return false;
			     
		   }
	 
   currentStep += 1;
	   	
	var msg=" Name: "+name+" Phone: "+phone+" Course: "+course+" Subjects: "+subject+" Class Mode: "+mode;  
	 	var url="ajax.jsp?msg="+msg+"&name="+name+"&phone="+phone+"&course="+course+"&subject="+subject+"&mode="+mode;  
	 	  
	 	/*if(window.XMLHttpRequest){  
	 	request=new XMLHttpRequest();  
	 	}  
	 	else if(window.ActiveXObject){  
	 	request=new ActiveXObject("Microsoft.XMLHTTP");  
	 	}  
	 	  
	 	try  
	 	{  
	 	request.onreadystatechange=getInfo;  
	 	request.open("GET",url,true);  
	 	request.send();  
	 	}  
	 	catch(e)  
	 	{  
	 	alert(e);  
	 	}  
	 	*/
current_fs = $('#enqformstep'+(currentStep-1));
	next_fs = $('#enqformstep'+(currentStep-1)).next();
 		  // $('#step4Next').attr('id','step5Next');		   

}



function step5Next(){
	 
	  gender=document.querySelector('input[name="gender"]:checked').value;
		 if(gender==null)
			 {
			 document.getElementById('err-msg3').innerHTML="Select Gender Preference";
			  return false;
			   
			 }
	 currentStep += 1;
	 	 
	current_fs = $('#enqformstep'+(currentStep-1));
	next_fs = $('#enqformstep'+(currentStep-1)).next();
	  // $('#step5Next').attr('id','step6Next');		   

}



function step6Next(){
	if(mode!="Home Tuition at Student's Home,")
			{
				alert('selected');
				currentStep = 6;
				alert(currentStep);
				
current_fs = $('#enqformstep'+(currentStep));
	next_fs = $('#enqformstep'+(currentStep+2));
//next_fs.show();	
$("#enqformstep7").css({"opacity": "0", "transform": "scale(1)","position":"relative","display":"none"});
$("#enqformstep7").hide();
		$("#enqformstep8").css({"opacity": "1","display":"block"});
	}
	
	sessionsinaweek=document.querySelector('input[name="sessionsinaweek"]:checked').value;
	 if(sessionsinaweek==null||sessionsinaweek=="")
		 {
		 document.getElementById('err-msg6').innerHTML="Select number of sessions needed";
		  return false;
		   
		 }
		currentStep += 1;
	feeslist(course,sessionsinaweek);

current_fs = $('#enqformstep'+(currentStep-1));
	next_fs = $('#enqformstep'+(currentStep-1)).next();
	  // $('#step6Next').attr('id','step7Next');		   

}



function step7Next(){
			
 optradio=document.querySelector('input[name="optradio"]:checked').value;
		    if(optradio==null)
		 	 {
		 	 document.getElementById('err-msg4').innerHTML="Select Your Budget";
		 	  return false;
		 	   
		 	 }
currentStep += 1;

	current_fs = $('#enqformstep'+(currentStep-1));
	next_fs = $('#enqformstep'+(currentStep-1)).next();
	  // $('#step7Next').attr('id','step8Next');		   
}



function step8Next(){	
	 var lat1=document.getElementById("latbox1").value;
	   var lng1=document.getElementById("lngbox1").value;
	   var location1=document.getElementById("autocomplete1").value;
	  if(lat1==""||lng1==""||lat1==null||lng1==null)
		 {
		 document.getElementById('err-msg5').innerHTML="Enter your Location Correctly!";
		  return false;
		 }else if(location=="New Delhi, Delhi, India"||location=="Delhi, India")
			 {
			 document.getElementById('err-msg5').innerHTML="Enter your location inside Delhi";
			  return false;	 
			 }else if(location=="Faridabad, Haryana, India")
			 {
				 document.getElementById('err-msg5').innerHTML="Enter your location inside Faridabad";
				  return false;	 
				 }else if(location=="Gurugram, Haryana, India"||location=="Gurgaon, Haryana, India")
				 {
					 document.getElementById('err-msg5').innerHTML="Enter your location inside Gurugram";
					  return false;	 
					 }else if(location=="Rohini, New Delhi, Delhi, India")
					 {
						 document.getElementById('err-msg5').innerHTML="Enter your location inside Rohini";
						  return false;	 
						 }else if(location=="Dwarka, New Delhi, Delhi, India")
						 {
							 document.getElementById('err-msg5').innerHTML="Enter your location inside Dwarka";
							  return false;	 
							 }else if(location=="East Delhi, Delhi, India")
							 {
								 document.getElementById('err-msg5').innerHTML="Enter your location inside East Delhi";
								  return false;	 
								 }else if(location=="North Delhi, Delhi, India")
								 {
									 document.getElementById('err-msg5').innerHTML="Enter your location inside North Delhi";
									  return false;	 
									 }
	
		currentStep += 1;


current_fs = $('#enqformstep'+(currentStep-1));
	next_fs = $('#enqformstep'+(currentStep-1)).next();
	 //  $('#step8Next').attr('id','step9Next');		   

}




function step9Next(){
	
	 start_time=document.querySelector('input[name="start_time"]:checked').value;
		 if(start_time==null)
			 {
			 document.getElementById('err-msg8').innerHTML="Select when you like to start";
			  return false;		   
			 }
currentStep += 1;
	

current_fs = $('#enqformstep'+(currentStep-1));
	next_fs = $('#enqformstep'+(currentStep-1)).next();
 //$('#step9Next').attr('id','step10Next');		   

}

function step10Next(){
	
  var lat1=document.getElementById("latbox1").value;
	   var lng1=document.getElementById("lngbox1").value;
	   var location1=document.getElementById("autocomplete1").value;
	   var sessionsinaweek=document.querySelector('input[name="sessionsinaweek"]:checked').value;
		 
	   var msg="name="+name+" phone="+phone+" course="+course+" subject="+subject+" mode="+mode+" optradio="+optradio+" lat="+lat1+" lng="+lng1+" location="+location1+" start_time="+start_time+" specific_req="+specific_req+" gender="+gender+" classesinaweek"+sessionsinaweek;  
	   specific_req=document.getElementById("specific_req").value;
	   
	   
	   
	    document.getElementById('numberdisplay').innerHTML=phone;
	currentStep += 1;
		
	/*	var xhttp1 = new XMLHttpRequest();
			   xhttp1.open("GET", url+"/ajax.jsp?msg="+msg+"&name="+name+"&phone="+phone+"&course="+course+"&subject="+subject+"&mode="+mode+"&optradio="+optradio+"&lat="+lat1+"&lng="+lng1+"&location="+location1+"&start_time="+start_time+"&specific_req="+specific_req+"&gender="+gender+"&sessionsinaweek="+sessionsinaweek, true);
			   xhttp1.send();
			   xhttp1.onreadystatechange = function() {
			     if (this.readyState == 4 && this.status == 200) {
			    	    	 
			     }};
		*/	      
/*		      var xhttp = new XMLHttpRequest();
				   xhttp.open("GET", url+"/ajax/sendotp.jsp?phone="+phone, true);
				   xhttp.send();
				   xhttp.onreadystatechange = function() {
				     if (this.readyState == 4 && this.status == 200) {
				    	 otpid = this.responseText;
				    	 document.getElementById('otpid').value=otpid;
						    	 
				     }}; 
	*/				 
					  var Timer = setInterval(ntimer,1000);
					 function ntimer(){
		    if(sec==0){
clearInterval(Timer);
document.getElementById('callotp').href="javascript:otp()"; 
 document.getElementById('callotp').style.color="blue";
	  document.getElementById('countdown').style.color="blue";
	  document.getElementById('countdown').innerHTML='';
					  }
					  if(sec>9){
		   document.getElementById('countdown').innerHTML='00:'+sec+'&nbsp ';
					  }else{
						  document.getElementById('countdown').innerHTML='00:0'+sec+'&nbsp ';
					  }
  sec--;}



current_fs = $('#enqformstep'+(currentStep-1));
	next_fs = $('#enqformstep'+(currentStep-1)).next();
 //$('#step10Next').attr('id','step11Next');		   

}


function otp(){
	  sec=30;
	  // var xhttp = new XMLHttpRequest();
	//			   xhttp.open("GET", url+"/ajax/sendotp.jsp?phone="+phone, true);
		/*		   xhttp.send();
				   xhttp.onreadystatechange = function() {
				     if (this.readyState == 4 && this.status == 200) {
				    	 otpid = this.responseText;
				    	 document.getElementById('otpid').value=otpid;
						    	 
				     }}; */
					 
	  document.getElementById('callotp').removeAttribute("href");
	  document.getElementById('callotp').style.color="#cccccc";
	  document.getElementById('countdown').style.color="#cccccc";
	  
					  var Timer = setInterval(ntimer,1000);
					  function ntimer(){
		    if(sec==0){
clearInterval(Timer);
document.getElementById('callotp').href="javascript:otp()"; 
document.getElementById('callotp').style.color="blue";
	  document.getElementById('countdown').style.color="blue";
	  document.getElementById('countdown').innerHTML='';
					  }
					  if(sec>9){
		   document.getElementById('countdown').innerHTML='00:'+sec+'&nbsp ';
					  }else{
						  document.getElementById('countdown').innerHTML='00:0'+sec+'&nbsp ';
					  }
  sec--;}
 
  }


function step11Next(){
	
	var lat1=document.getElementById("latbox1").value;
    	   var lng1=document.getElementById("lngbox1").value;
    	   var location1=document.getElementById("autocomplete1").value;
    	   var otp=document.getElementById("otp").value;
    	   var otpid=document.getElementById("otpid").value;
      	
    	 var  source=document.getElementsByClassName("tracking_source")[0].value;
    	var   sessionsinaweek=document.querySelector('input[name="sessionsinaweek"]:checked').value;
    	   	 
    	 if(otp==null||otp=="")
  		 {
  		 document.getElementById('err-msg10').innerHTML="Please Enter OTP";
  		  return false;		   
  		 }
  		 document.getElementById("err-msg10").innerHTML="<img id=\"loading-image\" src=\"images/loading.gif\" alt=\"Loading...\" />";
  		document.getElementById("stepFinal").style.display="none";
  		
  		 var xhttp = new XMLHttpRequest();
  		   xhttp.open("POST", "/enquiry", true);
  		   xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  		   xhttp.send("otp="+otp+"&otpid="+otpid+"&name="+name+"&phone="+phone+"&location="+location1+"&subject="+subject+"&mode="+mode+"&Select1="+course+"&gender="+gender+"&source="+"Google"+"&lat="+lat1+"&lng="+lng1+"&optradio="+optradio+"&start_time="+start_time+"&specific_req="+specific_req+"&tracking_source="+source+"&sessionsinaweek="+sessionsinaweek);
  		   xhttp.onreadystatechange = function() {
  		     if (this.readyState == 4 && this.status == 200) {
  		    
  		    	  	    	 var obj = JSON.parse(this.responseText);
  		    	 if(obj.Status=='Success')
  		       {	 document.getElementById("success-result").innerHTML =obj.Message;
  		     document.getElementById("err-msg10").innerHTML = "";
  		 //  document.getElementById("finalresult").innerHTML = "";
  		  //   document.getElementById("finalresult").innerHTML = "<input type=\"button\" onclick=\"firststep()\" value=\"Give Another Enquiry\" class=\"next action-button\" >";
  		  document.getElementById("prevStep2").style.display="block";
  		document.getElementById("callotp").style.display="none";
  		document.getElementById("countdown").style.display="none";
		    goog_report_conversion();
  			    	       
  		       }else 
  		       { 	 document.getElementById("err-msg10").innerHTML = obj.Message;
  		//	 document.getElementById("finalresult").innerHTML = "<input  type=\"button\"  id=\"stepFinal\" value=\"Enquire\"  class=\"next action-button\" />";	      
  		     document.getElementById("stepFinal").style.display="block";
  		       }
  		     }
  		   };
  		   return false;
	
	
	current_fs = $('#enqformstep'+(currentStep-1));
	next_fs = $('#enqformstep'+(currentStep-1)).next();
	
}



$(".previous").click(function(){
currentStep -= 1;
	   if(currentStep>1)
	   {
		   $("#previous").show();
	   }
	   else{
		   $("#previous").hide();
	   }
if(animating) 
	return false;
	animating = true;
	
//	current_fs = $(this).parent();
//	previous_fs = $(this).parent().prev();
	
	current_fs = $('#enqformstep'+(currentStep+1));
	previous_fs = $('#enqformstep'+(currentStep));
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			right = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			previous_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute',
		'min-height': '4'
      });
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			previous_fs.css({
        'transform': 'scale(1)',
        'position': 'relative',
		'min-height': '4'
      });
	  
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});
