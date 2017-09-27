var correctAnswer = 0;
var count = 8;
var wrongAnswer = 0;

$(function(){
	$('#game').hide();
});

$(function(){
	$('#doneButton').hide();
});

// This is where we start the game and the timer 
$( "#start-button" ).click(function() {
	$('#star').hide();
	$('#game').show();
	$('#doneButton').show();
	var countDown = setInterval(function(){
		count--;
		$("#seconds").html("<h1>" + count + "</h1>")
		if(count === 0){
			clearInterval(countDown);
			document.getElementById('questionDiv').innerHTML = "<div id='finalscore'class='text-center'><h3>And in summary...</h3> <br> <h5>Correct Answers: <br>" + correctAnswer + "</h5><br><h5>Wrong Answers: <br>" + wrongAnswer + "</h5></div>";
	}

}, 1000);	
	console.log("Start Time");
});


// Count for correct answer
$(".correct").click(function() {
	correctAnswer++
	// $("#").html(count)
	console.log(correctAnswer);
});

// Count for wrong answer
$(".wrongAnswer").click(function(){
	wrongAnswer++
	console.log("wrong answer clicked" + wrongAnswer);
});

// Done button
$('#doneButton').click(function() {
	console.log("done button");
	document.getElementById('questionDiv').innerHTML = "<div id='finalscore'class='text-center'><h3>And in summary...</h3> <br> <h5>Correct Answers: <br>" + correctAnswer + "</h5><br><h5>Wrong Answers: <br>" + wrongAnswer + "</h5></div>";
	$('#doneButton').hide();
	// If changing answer background us this code below
	// $('#questionDiv').removeClass('questionBackground')
});



// This is where I was trying to figure out how to simpliy the code to collect the radio imput at once 
	// var radioButtons = $("input:radio");
	// console.log(radioButtons);
	// for (i = 0;  i < radioButtons.length; i++) {
	// 	// console.log("this is how many times we looped " + i);
	// 	// console.log("how many buttons " + radioButtons.length);
	// 	// console.log(radioButtons[i].checked);

	// 	if(radioButtons[i].className === "correct"){
	// 		// console.log("selected radio button", radioButtons[i].className);
	// 			correctAnswer++
	// 	}
	// }

	// var radioButtons = $("input:radio");
	// for (i = 0;  i < radioButtons.length; i++) {
	// console.log("this is how many times we looped " + i);
	// console.log("how many buttons " + radioButtons.length);
	// console.log(radioButtons[i].checked);
	

