$(document).ready(function() {

  // Toggle the receive spam checkbox
  $("#receivespambutton").click(function() {

    $("#message1").show();

    if($($("#receivespambutton").children()[0]).attr("src")=="pics/unchecked.png") {
      $($("#receivespambutton").children()[0]).attr("src","pics/checked.png");
      $("#message3").show();
      $("#message4").hide();
      $("#spamyn").val("y");
      
    } else {
      $($("#receivespambutton").children()[0]).attr("src","pics/unchecked.png");
      $("#message4").show();
      $("#message3").hide();
      $("#spamyn").val("n");
    }
  });

  //Enter key for spam box 
  $("#receivespambutton").keypress(function(event) {

    var keycode = (event.keyCode ? event.keyCode : event.which);
      if(keycode == '13'){

        $("#message1").show();

      if($($("#receivespambutton").children()[0]).attr("src")=="pics/unchecked.png") {
        $($("#receivespambutton").children()[0]).attr("src","pics/checked.png");
        $("#message3").show();
        $("#message4").hide();
        $("#spamyn").val("y");
        
      } else {
        $($("#receivespambutton").children()[0]).attr("src","pics/unchecked.png");
        $("#message4").show();
        $("#message3").hide();
        $("#spamyn").val("n");
      }
      }

  });


  // Play video
  $("#videoplayer").mousedown(function() {

    if($($("#videoplayer").children()[0]).attr("src")=="pics/play.png") {
      $($("#videoplayer").children()[0]).attr("src","pics/pause.jpg");
      $("#thevideo")[0].play();
    } else {
      $($("#videoplayer").children()[0]).attr("src","pics/play.png");
      $("#thevideo")[0].pause();
    }
  });

  $("input").click(function(){

    $("input").css('border-color', 'none');
    
  }); 

  // Form validation
  $("#signupbutton").click(function() {

    //$("input").css('border-color', '');

    if($("#firstname").val()!="" && $("#lastname").val()!="" && $("#email").val()!=""){
      $("#firstname").css('border-color', ''); 
      $("#lastname").css('border-color', ''); 
      $("#email").css('border-color', ''); 
      alert("Thank you!  Please watch your email for our exciting newsletter and offers!");
      

    }else if($("#firstname").val()=="" || $("#lastname").val()=="" || $("#email").val()=="") {
      $("#firstname").css('border-color', 'red'); 
      $("#lastname").css('border-color', 'red'); 
      $("#email").css('border-color', 'red'); 
      alert("Please insert your First and Last Name & Email! ");

      

    }

  });

});


