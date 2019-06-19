var start = new Date().getTime();
var newArray = new Array();

//Used to track the amount of user clicks
var count = 0;

//Generates a random colour
function getRandomColour() 
{
	var letters = '0123456789ABCDEF'.split('');
	var colour = '#';
	for(var i = 0; i < 6; i++){
		colour += letters[Math.floor(Math.random() * 16)];
	}
	return colour;
}

//Function to display the shape randomly on the display
function makeShapeAppear() 
{
	var top = Math.random() * 250;
	var left = Math.random() * 400;
	var width = (Math.random() * 160) + 100;

	if(Math.random() > 0.5) 
	{
		//Creates a Circle shape
		document.getElementById("shape").style.borderRadius = "50%";
	}
	else
	{
		//Creates a Square shape
		document.getElementById("shape").style.borderRadius = "0";
	}

	document.getElementById("shape").style.backgroundColor = getRandomColour();
	document.getElementById("shape").style.top = top + "px";
	document.getElementById("shape").style.left = left + "px";
	document.getElementById("shape").style.width = width + "px";
	document.getElementById("shape").style.height = width + "px";

	document.getElementById("shape").style.display = "block";

	start = new Date().getTime();
}

//Function to delay the shape appearing
function appearAfterDelay() 
{
	//delays the shape appearing by a random number up to 2 seconds
	setTimeout(makeShapeAppear, Math.random() * 2000); 
}

appearAfterDelay();

//When the shape is clicked
document.getElementById("shape").onclick = function()
{

	document.getElementById("shape").style.display = "none";
	
	//increments when user clicks the shapes
	count++;

	var end = new Date().getTime();
	var timeTaken = (end -start)/1000;
	//Displays the time taken for the user to click the shape
	document.getElementById("timeTaken").innerHTML = timeTaken + "s";
	//Displays the amount of goes the user has taken
	document.getElementById("clickNumber").innerHTML = count;

	appearAfterDelay();
  
  	//Adds the users time taken to the newArray array
	newArray.push(timeTaken);
		
}



//When the button is clicked
document.getElementById("timeButton").onclick = function() 
{
	//Seperates it from the original arrays memory location
	var clone = newArray.slice(0);

	//sorts the best times
	clone.sort();
	
	//Clears the previous enteries into the two tables	
	results1.innerHTML = '';
	results2.innerHTML = '';
	
	for(var i = 0; i < count; i++){
		//If its the top 5 scores it will populate the 1st table
		if(i < 5 && i !== 10)
		{
			var newRow = results1.insertRow(-1);
		  	var cell1 = newRow.insertCell(-1);
		  	var cell2 = newRow.insertCell(-1);
	  		cell1.innerHTML = i + 1;
	  		cell2.innerHTML = clone[i];
	  	}
	  	//If its the 2nd best 5 scores it will populate the 2st table
	  	else if(i > 4 && i !== 10)
	  	{
	  		var newRow = results2.insertRow(-1);
		  	var cell1 = newRow.insertCell(-1);
		  	var cell2 = newRow.insertCell(-1);
	  		cell1.innerHTML = i + 1;
	  		cell2.innerHTML = clone[i];
	  	}
	  	//Any score after the best 10 will not display
	  	else if (i === 10) {
	    	break;
	  	}
	}	
	
}