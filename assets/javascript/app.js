$(document).ready(function () {

    var counter = 15;
    var isRunning = false;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var N = 1

    var triviaGame = {

        question1: {
            question: "What injury did Margaret Hamilton endure while filming the classic 1939 movie?",
            otherAnswers: ["Broken leg", "Puncture wound from a piece of the flying monkey's costume", "Bad Burns", "Bitten by a dog"],
            // correctAnswer: triviaGame.this.otherAnswers[2],
            answerInfo: "Bad Burns - Margaret Hamilton suffered severe burns while filming her “puff of smoke” scene and the cameras kept on filming. As Hamilton went below the stage, she was trapped in the elevator with the fire. Dorthy and Glinda kept acting above her none the wiser about what was going on below. ",
            // picture: <iframe src="https://giphy.com/embed/ihBXdfRh5uJOM" width="480" height="356" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/ihBXdfRh5uJOM">via GIPHY</a></p>,
        },

        question2: {
            question: "What did the real life “Dorothy” say about Frank L. Baum’s book?",
            // correctAnswer: triviaGame.question2.otherAnswers[1],
            otherAnswers: ['It was the “most flattering” thing someone could have done.', "Nothing at all", 'She was outraged and demanded he change the name of the character.', 'It was the “most enduring” thing someone could have done.'],
            answerInfo: "Nothing at all - Dorthy was named after Baum’s niece who passed away at just five months old."
            // picture: <iframe src="https://giphy.com/embed/AldqHdVi1m7Be" width="480" height="448" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/film-wizard-of-oz-woz-AldqHdVi1m7Be">via GIPHY</a></p>,

        },

        question3: {
            question: "What color was the original Emerald City?",
            // correctAnswer: triviaGame.question3.otherAnswers[1],
            otherAnswers: ["pink", "white", "green", "yellow"],
            answerInfo: "In Baum’s book, the city is white. The inhabitants of the emerald city only see it as green because of special green spectacles the Wizard forces them to wear. ",
            // picture: <iframe src="https://giphy.com/embed/dsSndFyw5bjIk" width="480" height="255" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/wizard-of-oz-emerald-city-dsSndFyw5bjIk">via GIPHY</a></p>,
        }

    }

    var countDown = function () {
        counter--;
        $("#timer").html("00:" + counter);

    }

    var timer = function() {setInterval(countDown, 1000)};

    var Questions = function (N) {

        $("#buttons").empty();

        $("#location-status").text("Here we go ...");
        
        $("#question-area").append(triviaGame.question(N).question);
      
        $("#a").text(triviaGame.question(N).otherAnswers[0]);
     
        $("#b").text(triviaGame.questionN.otherAnswers[1]);
     
        $("#c").text(triviaGame.questionN.otherAnswers[2]);
     
        $("#d").text(triviaGame.questionN.otherAnswers[3]);

        i++;

        timer();

    }




$("#start-button").on("click", function ()  {

     Questions();

   
// $(".answer").on("click", function() {

// //    clearInterval(timer, 3000);

//     if ($(this).hasClass("correct")) {
   
})

})


// GIF 1
//     < iframe src = "https://giphy.com/embed/ihBXdfRh5uJOM" width = "480" height = "356" frameBorder = "0" class="giphy-embed" allowFullScreen ></iframe > <p><a href="https://giphy.com/gifs/ihBXdfRh5uJOM">via GIPHY</a></p>

// GIF 2
//     < iframe src = "https://giphy.com/embed/AldqHdVi1m7Be" width = "480" height = "448" frameBorder = "0" class="giphy-embed" allowFullScreen ></iframe > <p><a href="https://giphy.com/gifs/film-wizard-of-oz-woz-AldqHdVi1m7Be">via GIPHY</a></p>

// GIF 3
//     < iframe src = "https://giphy.com/embed/dsSndFyw5bjIk" width = "480" height = "255" frameBorder = "0" class="giphy-embed" allowFullScreen ></iframe > <p><a href="https://giphy.com/gifs/wizard-of-oz-emerald-city-dsSndFyw5bjIk">via GIPHY</a></p>

// GIF 4
//     < iframe src = "https://giphy.com/embed/1y0tWGimBNYHu" width = "480" height = "480" frameBorder = "0" class="giphy-embed" allowFullScreen ></iframe > <p><a href="https://giphy.com/gifs/wizard-of-oz-judy-garland-dorothy-gale-1y0tWGimBNYHu">via GIPHY</a></p>

// GIF 5
//     < iframe src = "https://giphy.com/embed/YHPoWDuPAOREI" width = "480" height = "480" frameBorder = "0" class="giphy-embed" allowFullScreen ></iframe > <p><a href="https://giphy.com/gifs/wizard-of-oz-judy-garland-the-YHPoWDuPAOREI">via GIPHY</a></p>



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