// Function to start a new game
function startNewGame() {
    targetNumber = Math.floor(Math.random() * 10 + 1);  
    attempts = 0;  
    $("h2").text("Start guessing!");  
    $(".guess").val("");  
    $(".again").hide();  
    $(".guess-btn").show();
}


let targetNumber = Math.floor(Math.random() * 10 + 1);  
let attempts = 0; 

$(".again").hide();


$(".guess-btn").click(function() {
    var getValue = parseInt($(".guess").val());  
    attempts++;  


    if (attempts > 3) {
        $("h2").text("Sorry, you have run out of attempts.");
        $(".guess-btn").hide();
        $(".again").show();  
    } else if (getValue < targetNumber) {
        $("h2").text("The number is bigger.");
    } else if (getValue > targetNumber) {
        $("h2").text("The number is smaller.");
    } else {
        $("h2").text("You guessed the number right!");
        $(".guess-btn").hide();
        $(".again").show();  
    }
});

$(".again").click(function() {
    startNewGame();  // Restart the game
});
