var isRunnning = false;
var timerRunning = false;
var answersRunning = false;
var counter = 3;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var N = 0;
var L = 0;
var interval; 
var timer;
var timeElapsed = 0
var divClone;

var triviaGame = {

    1: {
        question: "What injury did Margaret Hamilton endure while filming the classic 1939 movie?",
        answers: ["Broken leg", "Puncture wound from a piece of the flying monkey's costume", "Bad Burns", "Bitten by a dog"],
        correctAnswer: 2,
        answerInfo: "Bad Burns - Margaret Hamilton suffered severe burns while filming her “puff of smoke” scene and the cameras kept on filming. As Hamilton went below the stage, she was trapped in the elevator with the fire. Dorthy and Glinda kept acting above her none the wiser about what was going on below. ",
        picture: "<iframe src = 'https://giphy.com/embed/ihBXdfRh5uJOM' width = '480' height = '356' frameBorder = '0' class='giphy-embed' allowFullScreen ></iframe > <p><a href='https://giphy.com/gifs/ihBXdfRh5uJOM'>via GIPHY</a></p>",
    },

    2: {
        question: "What did the real life “Dorothy” say about Frank L. Baum’s book?",
        answers: ['It was the “most flattering” thing someone could have done.', "Nothing at all", 'She was outraged and demanded he change the name of the character.', 'It was the “most enduring” thing someone could have done.'],
        correctAnswer: 1,
        answerInfo: "Nothing at all - Dorthy was named after Baum’s niece who passed away at just five months old.",
        picture: '<iframe src="https://giphy.com/embed/AldqHdVi1m7Be" width="480" height="448" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/film-wizard-of-oz-woz-AldqHdVi1m7Be">via GIPHY</a></p>',

    },

    3: {
        question: "What color was the original Emerald City?",
        answers: ["pink", "white", "green", "yellow"],
        correctAnswer: 1,
        answerInfo: "In Baum’s book, the city is white. The inhabitants of the emerald city only see it as green because of special green spectacles the Wizard forces them to wear. ",
        picture: "<iframe src='https://giphy.com/embed/dsSndFyw5bjIk' width='480' height='255' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/wizard-of-oz-emerald-city-dsSndFyw5bjIk'>via GIPHY</a></p>",
    },

    4: {
        question: "The munchkins were paid $50 a week. Who was paid $125?",
        answers: ["Clara Blandick (Auntie Em)", "Judy Garland (Dorthy)", "Billie Burke (Glinda the Good)", "Toto"],
        correctAnswer: 3,
        answerInfo: "Toto - The highest paid actor for the film was Roy Bolger, the scarecrow, making $300 a week",
        picture: '<iframe src = "https://giphy.com/embed/1y0tWGimBNYHu" width = "480" height = "480" frameBorder = "0" class="giphy-embed" allowFullScreen ></iframe > <p><a href="https://giphy.com/gifs/wizard-of-oz-judy-garland-dorothy-gale-1y0tWGimBNYHu">via GIPHY</a></p>',
    },

    5: {
        question: "How many witches were originally in Oz? ",
        answers: ["3", "5", "2", "1"],
        correctAnswer: 1,
        answerInfo: "Five - East: The Wicked Witch of the East --- South: The Wicked Witch of The South and Glinda the Good---North: The Wicked Witch Mombi and The Good Witch of the North (Locasta or Tattypo).",
        picture: '<iframe src = "https://giphy.com/embed/YHPoWDuPAOREI" width = "480" height = "480" frameBorder = "0" class="giphy-embed" allowFullScreen ></iframe > <p><a href="https://giphy.com/gifs/wizard-of-oz-judy-garland-the-YHPoWDuPAOREI">via GIPHY</a></p>',
    },

    locations: ["You met the scarecrow!", "The Tinman joined your journey!", "You helped the Cowardly Lion!", "You made it to OZ!", "You've melted the witch!", "Congratulations! You made it back home to Kansas!", "Oh no! I'm sorry. You didn't make it back home to Kansas."],

}

function timer() {

    clearInterval(interval);
    interval = setInterval(function() {
        timeElapsed = timeElapsed + counter;
        counter--;
        $("#timer-space").text(counter);
        timerRunning = true;
 
         if (counter === 0) {
            console.log("Done");
            clearInterval(interval);
            console.log(counter);
            timerRunning = false;
            $("#timer-space").text(" ");
            
            if (answersRunning === true) {
                Questions()
                answersRunning = false;
            }

            else {
                answerScreen()
            }
    }
    console.log(counter);

}, 1000); }


$(document).ready(function () {



initializeGame = function () {

        if (isRunnning === true) {
            return false;
        }

        else {

            $("body").html(divClone.clone(true));
            console.log("appended")

        }

    }


Questions = function() {

        if (timerRunning === true) {

            return;

        }

        else if (N === 5) {

            N++
            answerScreen()
        }
            
        else{    
            
            answer = false; 

            N++;

            counter = 3;

            timer();

            $("#location-status").removeClass("wrong");

            $("#image-div").empty();

            $("#start-button").hide();

            $(".answer").show();

            $("#location-status").text("Here we go ...");

            $("#question-area").text(triviaGame[N].question);

            $("#a").text(triviaGame[N].answers[0]);

            $("#b").text(triviaGame[N].answers[1]);

            $("#c").text(triviaGame[N].answers[2]);

            $("#d").text(triviaGame[N].answers[3]);

        }


    }

answerScreen = function() {

    console.log(counter)
    console.log(N)
    console.log(L)

    timerRunning = false;
    answersRunning = true;
    counter = 3
    
    console.log(timerRunning);
    
    if (N === 6) {

            $("#question-area").text(" ");
            $(".answer").hide();

            isRunning = false;

            $("#image-div").html("<li>Correct: " + correct + "</li><li>Incorrect: " + incorrect + "</li><li>Unanswered: " + (5 - incorrect - correct) + "</li><button class='reset'>Play again?</button>");

            if (L < 5) {
                
                $("#location-status").text(triviaGame.locations[6]);
            }

            else {

                $("#location-status").text(triviaGame.locations[5]);

            }

        } else {

            if (timerRunning === true) {

                return;

            }

            else {

                timer();

                $(".answer").hide();

                $("#question-area").text(triviaGame[N].answerInfo);


                $("#image-div").html(triviaGame[N].picture);

                if (answer === false) {


                    $("#location-status").addClass("wrong");
                    $("#location-status").text("Incorrect - Oh no! You have not moved forward");
                    return;

                }

                else {
                  
                    $("#location-status").text("correct - " + triviaGame.locations[L]);
                    L++;
                    return;
                }
            
            }

        }

    }


    $("#start-button").on("click", function () {

        // creating a clone of the game after click listener has been added.
        if (isRunnning === true) {
            return;
        }

        else {

            isRunnning = false;
            timerRunning = false;
            answersRunning = false;
            counter = 3;
            correct = 0;
            incorrect = 0;
            unanswered = 0;
            N = 0;
            L = 0;
            interval; 
            timer;
            timeElapsed = 0

            divClone = $("#container").clone(true);
            $(".answer").show();
            isRunning = true;
            Questions();
        }

    })

    $("#image-div").on("click", ".reset", function () {

        console.log(this);
        initializeGame();


    })


    $(".answer").on("click", function () {

        if (triviaGame[N].answers.indexOf($(this).text()) != triviaGame[N].correctAnswer && triviaGame[N].answers.indexOf($(this).text()) > -1 ) {

            incorrect++;
            answer = false;
            return;

        }

        else {

            correct++;
            answer = true;
            return;
        }

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