function sounds(x)
	{
		switch(x)
			{
				case 1:
					document.getElementById("audio").src = "./sounds/bear.mp3";
					break;
				case 2:
					document.getElementById("audio").src = "./sounds/fox.mp3";
					break;
				case 3:
					document.getElementById("audio").src = "./sounds/koala.mp3";
					break;
				case 4:
					document.getElementById("audio").src = "./sounds/wolf.mp3";
					break;
				case 5:
					document.getElementById("audio").src = "./sounds/panda.mp3";
					break;
				case 6:
					document.getElementById("audio").src = "./sounds/otter.mp3";
					break;
			}
		audio.play();
	}

function desc(x)
	{
		switch(x)
			{
				case 1:
					src = "./text/bear.txt";
					break;
				case 2:
					src = "./text/fox.txt";
					break;
				case 3:
					src = "./text/koala.txt";
					break;
				case 4:
					src = "./text/wolf.txt";
					break;
				case 5:
					src = "./text/panda.txt";
					break;
				case 6:
					src = "./text/otter.txt";
					break;
			}
		window.open(src, "popUpWindow", "height: 20px; width: 50px;");
	}
	
function stop()
	{
		document.getElementById("audio").pause();
	}