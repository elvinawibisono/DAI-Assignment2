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

  // Form validation
  $("#signupbutton").click(function() {
    if($("#fn").val()=="" || $("#mi").val()=="" || $("#ln").val()=="") {
      $("#name").addClass("error");

      return;
    } else {
      $("#name").removeClass("error");
    }

    if($("#em").val()=="") {
      $("#email").addClass("error");

      return;
    } else {
      $("#name").removeClass("error");
    }

    alert("Thank you!  Please watch your email for our exciting newsletter and offers!");
  });


/*
  //Enter
  $("signupbotton").focus(function(){

    $("#signupbutton").keypress(function(event) {
      var keycode = (event.keyCode ? event.keyCode : event.which);
      if(keycode == '13'){
  
        if($("#fn").val()=="" || $("#mi").val()=="" || $("#ln").val()=="") {
          $("#name").addClass("error");
    
          return;
        } else {
          $("#name").removeClass("error");
        }
    
        if($("#em").val()=="") {
          $("#email").addClass("error");
    
          return;
        } else {
          $("#name").removeClass("error");
        }
    
        alert("Thank you!  Please watch your email for our exciting newsletter and offers!");
  
      }
      
    })
  
  });
  /*





  // enter
  /*$("#signupbutton").keypress(function(event) {
    if (event.code == 'Enter') {
      if($("#fn").val()=="" || $("#mi").val()=="" || $("#ln").val()=="") {
        $("#name").addClass("error");
  
        return;
      } else {
        $("#name").removeClass("error");
      }
  
      if($("#em").val()=="") {
        $("#email").addClass("error");
  
        return;
      } else {
        $("#name").removeClass("error");
      }
  
      alert("Thank you!  Please watch your email for our exciting newsletter and offers!");
    }
  });

  $("#signupbutton").keyup(function(event) {
    if (event.code == 'Enter') {
      
    }
  });
  */ 
});


