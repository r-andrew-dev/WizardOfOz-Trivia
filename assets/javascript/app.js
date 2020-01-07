// once user presses the start button, 

// timer should start 

// a question needs to display 

// along with four answer choices as buttons (?)

// if user chooses correct answer -
//  should show winning message and picture after timer runs to zero.
// add one to Correct count

// else if user chooses incorrect answer - 
// should show losing message and picture with correct answer after timer runs to zero. 
// add one to incorrect count 

// else user does not choose an answer - 
// should show losing message and picture with correct answer after timer runs to zero. 
// add one to unanswered count


$(document).ready(function() {

    var counter = 30;
    var isRunning = false;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;



function countDown () {

    counter--;
    $("#timer").html("00:" + counter);

}




    $("#start-button").on("click", function() {
        $("#location-status").text("Here we go ...")
        $("#buttons").empty();
        var counterId = setInterval(countDown, 1000);
        questions()
    })


    function questions() {

        

    }













})



