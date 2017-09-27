var correctAnswer = 0;
var count = 100;
var wrongAnswer = 0;

$(function(){
	$('#game').hide();
});

$(function(){
	$('#doneButton').hide();
});


$( "#start-button" ).click(function() {
	$('#star').hide();
	$('#game').show();
	$('#doneButton').show();
	var countDown = setInterval(function(){
	count--;
	console.log("time " + count);
	$("#seconds").html("<h1>" + count + "</h1>")
	if(count === 0){
		clearInterval(countDown);
		document.getElementById('questionDiv').innerHTML = "<div id='finalscore'class='text-center'><h3>And in summary...</h3> <br> <h5>Correct Answers: <br>" + correctAnswer + "</h5><br><h5>Wrong Answers: <br>" + wrongAnswer + "</h5></div>";
	}

}, 1000);	
	console.log("Start Time");
});

$(".correct").click(function() {
	correctAnswer++
	// $("#").html(count)
	console.log(correctAnswer);
});

$(".wrongAnswer").click(function(){
	wrongAnswer++
	console.log("wrong answer clicked" + wrongAnswer);
});

