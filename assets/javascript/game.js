// Pseudocode Below:
$(document).ready(function(){

    // Random Generator of Number between 19 - 120
    var gameProperties = {

        init: {
            // maximum value  is 120
            targetPts:  Math.floor(Math.random() * (120 - 19 + 1) + 19),
            currentPts: 0,
            wins:0,
            losses:0,
        },

    // Each Crystal has a random value between 1 - 12 

    crystals: {
		crystal1: {
			img:$("#crystal1"),
			val: Math.floor(Math.random() * (5 - 1 + 1) + 1)},
	    crystal2: {
			img:$("#crystal2"),
			val: Math.floor(Math.random() * (8 - 1 + 1) + 1)},
		crystal3: {
			img:$("#crystal3"),
			val: Math.floor(Math.random() * (11 - 1 + 1) + 1)},
		crystal4: {
			img:$("#crystal4"),
			val: Math.floor(Math.random() * (12 - 1 + 1) + 1)},
        },
    
    // Crystal value hidden until clicked (doens't load until it's reset)

    // Once clicked, crystal value is added and shown on user's counter

    // Option A: counter value = random number --> win ++ --> user score & counter resets to zero & random number resets & crystal value resets

    // Option B: counter value > random number --> lose ++ --> user score & counter resets to zero & random number resets & crystal value resets
	render: {
		dispTargetPts: $("#targetPts"),
		dispCurrentPts: $("#currentPts"),
		dispWinCount: $("#wins"),
		dispLossCount: $("#losses"),
	    }
    };
    // Each time crystal is clicked it sums up the values until 

    $("#targetPts").html("Target Points: " + gameProperties.init.targetPts);
    $(".crystal").on("click", function(){
	    $("#gameAlert").html("");
       

        var g = "gameProperties.crystals."+$(this).attr("id")+".val";
            gameProperties.init.currentPts += eval(g);
            gameProperties.render.dispCurrentPts.html("Current Points: " + gameProperties.init.currentPts);
        
        var audio = new Audio("https://p.scdn.co/mp3-preview/ed5a443bc86176135ebca8a114f66f4d814d4c90");

		if (gameProperties.init.currentPts === gameProperties.init.targetPts){
            gameProperties.init.wins++;
            audio.play();
            $("#gameAlert").html("You've Won!");
            alert ("You Won!");
            resetGame();
		}

		else if (gameProperties.init.currentPts > gameProperties.init.targetPts){
			gameProperties.init.losses++;
            $("#gameAlert").html("You've Lost!");
            alert("You Lost!");
			resetGame();
        }
        });

    // Win/Lose Panel should show total games won / lost. Entire page does NOT reset (just the score counters do) 

    function resetGame(){
            gameProperties.init.targetPts = Math.floor(Math.random() * (80 - 19 + 1) + 19);
            gameProperties.crystals.crystal1.val = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            gameProperties.crystals.crystal2.val = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            gameProperties.crystals.crystal3.val = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            gameProperties.crystals.crystal4.val = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        $("#targetPts").html("Target Points: " + gameProperties.init.targetPts);
            gameProperties.init.currentPts = 0;
            gameProperties.render.dispCurrentPts.html("Current Points: " + gameProperties.init.currentPts);
            gameProperties.render.dispWinCount.html("Wins: " + gameProperties.init.wins);
            gameProperties.render.dispLossCount.html("Losses: " + gameProperties.init.losses);
        }
        });