var currentStep = 0;
   var course,subject,name,phone,localit,mode,location,lat,lng,gender,optradio,start_time,specific_req;
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
   
   
   
   $(document).ready(function () {

       $('.li-nav').click(function () {         // to active and disable li

		   currentStep = parseInt($(this).attr('id').substr(7));
           if (!$(this).hasClass('disabled')) {
			var $prevStep= $('.li-nav.active');
			$prevStep.removeClass('active');
			
			   $(this).addClass('active');

			  }
			
       });

       $('#navStep0').click();
	    
   });
  

   var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

 



 var robot=false; 
  
   
   function class_selection(id){
        
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
       currentStep = 0;
       robot=true; 
   //document.getElementById('step1Next').setAttribute("id", 'step2Next'); 
        
    nextbuttonclick('step'+(currentStep+1)+'Next');
	robot=false;
    }
   

  
   function subject_selection(id){
		subject_name=id;
		
	    currentStep = 0;
       robot=true; 
	   nextbuttonclick('step'+(currentStep+1)+'Next');
	robot=false;
	
	
	
	
   }
   

function animate()
{
	
if (true) {		   
           $('#navStep' + currentStep).removeClass('disabled');
		  // alert("working");
           $('#navStep' + currentStep).click();

		   if(animating)
			   return false;
	animating = true;
	
//	current_fs = $(this).parent();
//	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
//	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	next_fs.addClass("active");
	
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

function nextbuttonclick(id)
{ //alert(id); 
 // currentStep += 1;
//  alert(currentStep);
//step0Next();	
 // $('#navStep'+currentStep).click();
  //$('#step0Next').click();
  
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
  document.getElementById(id).setAttribute("id", 'step'+currentStep+'Next');

//alert("Next");
//	alert(current_fs.attr('id'));
//alert(next_fs.attr('id'));

animate();



  }

function step0Next()
{
	currentStep += 1;
  current_fs = $('#enqformstep'+(currentStep-1));
	next_fs = $('#enqformstep'+(currentStep-1)).next();
  
} 


function step1Next()
{

	currentStep += 1;
updatesubjectlist();
$("input:checkbox[value="+subject_name+"]").each(function(){
   $(this).prop('checked', true);
});
	course=document.querySelector('input[name="Select1"]:checked').value;
    current_fs = $('#enqformstep'+(currentStep-1));
	next_fs = $('#enqformstep'+(currentStep-1)).next();

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
	      if(mode=="")
		   {
		   document.getElementById('err-msg7').innerHTML="Select atleast one class mode";
			return false;   
		   }
		   
current_fs = $('#enqformstep'+(currentStep-1));
	next_fs = $('#enqformstep'+(currentStep-1)).next();
		   
}
           
function step4Next()
{       currentStep += 1;
	   
			name=document.getElementById('name').value;
	 	 phone=document.getElementById('phone').value;
	 	 	var regExp = "[789][0-9]{9}";
	 	var match = phone.match(regExp);
	 	
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
 
}
function step5Next(){
	 currentStep += 1;
	 
	 
	  gender=document.querySelector('input[name="gender"]:checked').value;
		 if(gender==null)
			 {
			 document.getElementById('err-msg3').innerHTML="Select Gender Preference";
			  return false;
			   
			 }
	 
	 
	 
	 
	 
	 
	 
	 
	 
	current_fs = $('#enqformstep'+(currentStep-1));
	next_fs = $('#enqformstep'+(currentStep-1)).next();
}


function step6Next(){
	currentStep += 1;
	
	
	sessionsinaweek=document.querySelector('input[name="sessionsinaweek"]:checked').value;
	 if(sessionsinaweek==null||sessionsinaweek=="")
		 {
		 document.getElementById('err-msg6').innerHTML="Select number of sessions needed";
		  return false;
		   
		 }
	 feeslist(course,sessionsinaweek);
	
	
	
	
	

current_fs = $('#enqformstep'+(currentStep-1));
	next_fs = $('#enqformstep'+(currentStep-1)).next();
}



function step7Next(){
			currentStep += 1;

 optradio=document.querySelector('input[name="optradio"]:checked').value;
		    if(optradio==null)
		 	 {
		 	 document.getElementById('err-msg4').innerHTML="Select Your Budget";
		 	  return false;
		 	   
		 	 }




	current_fs = $('#enqformstep'+(currentStep-1));
	next_fs = $('#enqformstep'+(currentStep-1)).next();
}



function step8Next(){
	currentStep += 1;
	
	
	
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
	
	
	
	
	
	
	
	

current_fs = $('#enqformstep'+(currentStep-1));
	next_fs = $('#enqformstep'+(currentStep-1)).next();

}




function step9Next(){
	currentStep += 1;
	
	 start_time=document.querySelector('input[name="start_time"]:checked').value;
		 if(start_time==null)
			 {
			 document.getElementById('err-msg8').innerHTML="Select when you like to start";
			  return false;
			   
			 }


current_fs = $('#enqformstep'+(currentStep-1));
	next_fs = $('#enqformstep'+(currentStep-1)).next();

}
function step10Next(){
	currentStep += 1;
	
  var lat1=document.getElementById("latbox1").value;
	   var lng1=document.getElementById("lngbox1").value;
	   var location1=document.getElementById("autocomplete1").value;
	   var sessionsinaweek=document.querySelector('input[name="sessionsinaweek"]:checked').value;
		 
	   var msg="name="+name+" phone="+phone+" course="+course+" subject="+subject+" mode="+mode+" optradio="+optradio+" lat="+lat1+" lng="+lng1+" location="+location1+" start_time="+start_time+" specific_req="+specific_req+" gender="+gender+" classesinaweek"+sessionsinaweek;  
	   specific_req=document.getElementById("specific_req").value;
	   
	   
	   
	    document.getElementById('numberdisplay').innerHTML=phone;
			   var xhttp1 = new XMLHttpRequest();
			   xhttp1.open("GET", url+"/ajax.jsp?msg="+msg+"&name="+name+"&phone="+phone+"&course="+course+"&subject="+subject+"&mode="+mode+"&optradio="+optradio+"&lat="+lat1+"&lng="+lng1+"&location="+location1+"&start_time="+start_time+"&specific_req="+specific_req+"&gender="+gender+"&sessionsinaweek="+sessionsinaweek, true);
			   xhttp1.send();
			   xhttp1.onreadystatechange = function() {
			     if (this.readyState == 4 && this.status == 200) {
			    	    	 
			     }};
			      
		      var xhttp = new XMLHttpRequest();
				   xhttp.open("GET", url+"/ajax/sendotp.jsp?phone="+phone, true);
				   xhttp.send();
				   xhttp.onreadystatechange = function() {
				     if (this.readyState == 4 && this.status == 200) {
				    	 otpid = this.responseText;
				    	 document.getElementById('otpid').value=otpid;
						    	 
				     }};    
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

