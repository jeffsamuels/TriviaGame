//  step 1. copy code from stopwatch activity to update counter/speedometer on html file.

$("#start").on("click", start);

var intervalId;
var clockRunning = false;
var time = 0;

function start() { 

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) { 
      intervalId = setInterval(count, 1000); 
      clockRunning = true; 
    }
  }

  function count() {

    // DONE: increment time by 1, remember we cant use "this" here.
    time++; 
  
    // DONE: Get the current time, pass that into the timeConverter function,
    //       and save the result in a variable.
    var converted = timeConverter(time); 
    console.log(converted); 
  
    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").text(converted);
  }





// step 2. set up listner events for start button and for flux capacitor button.







// step 3. create if/else function and display trivia answers.

if ("#1-C" === true && "#2-B" ===true && "#3-C" === true) {
    alert("You've saved the day!")};

else {alert("Oh no, you're trapped in time!");}
