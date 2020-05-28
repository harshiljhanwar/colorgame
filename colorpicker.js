var num = 6;
var colors = [];
var pickedcolor;

var body = document.querySelector("body");
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var message = document.querySelector("#message");
var restart = document.querySelector("#restart");
var mode = document.querySelectorAll(".mode");

init();

restart.addEventListener("click", function(){
	repeat();
})

function init(){
	setupModeButtons();
	setupSquares();
	repeat();
}

function setupModeButtons(){
	for(var i =0; i<mode.length; i++){
		mode[i].addEventListener("click", function(){
			mode[0].classList.remove("selected");
			mode[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? num = 3 :num = 6;
			repeat();
		})
	}
}

function setupSquares(){
	for(var i = 0; i<squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				changeColors(clickedColor);
				message.textContent = "Correct!";
				restart.textContent = "Play Again?";
			}
			else{
				this.style.backgroundColor = body.style.backgroundColor;
				message.textContent = "Try Again!";
			}
		})
	}
}

function repeat(){
	restart.textContent = "New Colors";
 	colors = generateRandomColors(num);
 	for(var i = 0; i<squares.length; i++){
 		if(colors[i]){
 			squares[i].style.display = "block";
 			squares[i].style.backgroundColor = colors[i];
 		}
 		else{
 			squares[i].style.display = "none";
 		}
 	}
 	pickedColor = pickRandomColor();
 	document.querySelector("#pickedcolor").textContent = pickedColor;
 	h1.style.backgroundColor = "steelblue";
 	message.textContent = "";	
}

function generateRandomColors(num){
	var arr = [];
	for(var i=0; i<num; i++){
		var red = Math.floor(Math.random()*256);
		var green = Math.floor(Math.random()*256);
		var blue = Math.floor(Math.random()*255);
		var color = "rgb(" + red + ", " + green + ", " + blue + ")";
		arr.push(color);
	}
	return arr;
}

function pickRandomColor(){
	var randomColor = Math.floor(Math.random()*colors.length);
	return colors[randomColor];
}

function changeColors(changedColor){
	for(var i = 0; i<colors.length; i++){
		squares[i].style.backgroundColor = changedColor;
	}
	h1.style.backgroundColor = changedColor;
}
