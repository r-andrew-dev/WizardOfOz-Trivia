var isRunnning = false;
var timerRunning = false;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var N = 0;
var L = 0;
var interval;
var counter = 15;

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
    counter = 10;
    clearInterval(interval);
    interval = setInterval(function() {
        counter--;
        $("#timer-space").text(counter);
        timerRunning = true;
 
         if (counter === 0) {
            console.log("Done");
            clearInterval(interval);
            console.log(counter);
            timerRunning = false;
            $("#timer-space").html(" ")
    }
    console.log(counter);

}, 1000); }

$(document).ready(function () {
 
    var Questions = function () {
        
        N++;

        if (timerRunning === true) {

            return;

        }

        else {

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

            return;
        }

    }

$("#start-button").one("click", function () {

    // creating a clone of the game after click listener has been added. 
    divClone = $("div.container").clone(true);


    if (isRunnning === true) {
        return;
    }

    else {

        isRunning = true;
        Questions();
        console.log(counter);
    }

})

})

