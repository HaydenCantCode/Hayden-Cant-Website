"use strict";



PS.init = function( system, options ) {
	PS.gridSize(4,5);
	PS.debug("Level 1: Match the colors with what two colors mix to make them! \nThis uses RBG color mixing, yes it is evil.");
	PS.statusText( "Color Mixer: The Game" );
	PS.gridColor(PS.COLOR_GRAY_LIGHT);
	//PS.gridShadow(true, PS.COLOR_GRAY);
	var i = 0;
	var j = 0;
	PS.scale( PS.ALL, PS.ALL, 100 );
	PS.border(0,0,0);
	PS.alpha(0,0,0);
	PS.bgAlpha(0,0,0);
	for(i=1; i< 4; i+=1){//sets the border for the x axis
		PS.border(i,0,1);
		PS.borderColor(i,0,0,0,0);
	}
	for(i=1; i< 4; i+=1){//sets the border for the y axis
		PS.border(0,i,1);
		
		PS.borderColor(0,i,0,0,0);
		
	}

	for(i=1;i<4;i+=1){//sets the border and shape for the slots you place colors in
		
		for(j=1;j<4;j+=1){
			PS.bgColor(i,j,0,0,0);
			PS.bgAlpha(i,j,100);
			PS.scale( i, j, 97 );
			PS.radius(i,j,50);
			PS.border(i,j,0);
			PS.borderColor(i,j,PS.COLOR_GRAY_LIGHT);
			PS.color(i,j,255,255,255);
			
		}
		PS.alpha(i,i,0);
	}

	PS.color(0,1,255,0,0);
	PS.color(1,0,255,0,0);
	PS.color(0,2, 255, 255, 0);
	PS.color(2,0,255, 255, 0);
	PS.color(0,3, 0,0,255);
	PS.color(3,0,0,0,255);
	
	PS.color(0,4, red_yellow);
	PS.color(1,4, red_blue);
	PS.color(2,4, yellow_blue);

	PS.gridColor(255, 255, 255);
	PS.glyph(3,4, 62);
	PS.glyphColor(3,4,PS.COLOR_GREEN);
	
}
var levels = [0,1,2,3,4];
var currentLvl = levels[1];
var correct = false;
var placeholder = true;

//COLOR VARIABLES:
if(placeholder){ //should always be true, if not then uh somethings wrong
var red_orange = [238,110,47];
var red_yellow = [244,153,59]; //yeah this is just orange lol
var red_green = [175,152,55];
var red_cyan = [175,152,144];
var red_blue = [116,25,140];
var red_purple = [172,35,140];
var red_pink = [174,35,140];
var red_white = [244,153,145];
var red_grey = [180,89,81];
var red_black = [116,25,17];
var orange_yellow = [248,212,71];
var orange_green = [179,210,67];
var orange_cyan = [179,210,156];
var orange_blue = [120,84,152];
var orange_purple = [178,94,152];
var orange_pink = [237,110,153];
var orange_white = [248,212,157];
var orange_grey = [184,148,93];
var orange_black = [120,84,29];
var yellow_green = [186,254,80];
var yellow_cyan = [186,254,169];
var yellow_blue = [127,127,165]; //geen. WDYM ITS NOT GREEN
var yellow_purple = [185,137,165];
var yellow_pink = [244,153,166];
var yellow_white = [255,255,170];
var yellow_grey = [191,191,106];
var yellow_black = [127,127,42];
var green_cyan = [117,252,165];
var green_blue = [58,125,161];
var green_purple = [116,135,161];
var green_pink = [175,151,162];
var green_white = [186,253,166];
var green_grey = [122,189,102];
var green_black = [58,125,38];
var cyan_blue = [58,125,249];
var cyan_purple = [116,135,249];
var cyan_pink = [175,151,250];
var cyan_white = [186,253,254];
var cyan_grey = [122,189,190];
var cyan_black = [58,125,126];
var blue_purple = [58,10,245];
var blue_pink = [117,26,246];
var blue_white = [128,128,250];
var blue_grey = [64,64,186];
var blue_black = [0,0,122];
var purple_pink = [175,36,246];
var purple_white = [186,138,250];
var purple_grey = [122,74,186];
var purple_black = [58,10,122];
var pink_white = [244,153,251];
var pink_grey = [180,89,187];
var pink_black = [116,25,123];
var white_grey = [191,191,191];
var white_black = [127,127,127];
var grey_black = [63,63,63];
}

function changeLevel(lastLevel, isCorrect){
	PS.debugClear();
	if(isCorrect){
	if(lastLevel===1){
	
	}
	else if(lastLevel===2){

	}
	else if(lastLevel===3){

	}
	else if(lastLevel===4){

		
	PS.gridSize( 12, 13 );
	
	PS.gridColor(PS.COLOR_GRAY_LIGHT);
	//PS.gridShadow(true, PS.COLOR_GRAY);
	var i = 0;
	var j = 0;
	//PS.debug( "PS.init() called\n" );
	PS.scale( PS.ALL, PS.ALL, 100 );
	PS.border(0,0,0);
	PS.alpha(0,0,0);
	PS.bgAlpha(0,0,0);
	for(i=1; i< 12; i+=1){//sets the border for the x and y axis
		PS.border(0,i,1);
		PS.border(i,0,1);
		PS.borderColor(0,i,0,0,0);
		PS.borderColor(i,0,0,0,0);
	}
	for(i=1;i<12;i+=1){//sets the border and shape for the slots you place colors in
		
		for(j=1;j<12;j+=1){
			PS.bgColor(i,j,0,0,0);
			PS.bgAlpha(i,j,100);
			PS.scale( i, j, 97 );
			PS.radius(i,j,50);
			PS.border(i,j,0);
			PS.borderColor(i,j,PS.COLOR_GRAY_LIGHT);
			PS.color(i,j,255,255,255);
			
		}
		PS.alpha(i,i,0);
	}
	 

	 PS.gridColor(255, 255, 255);

	
	
	PS.color(1,0, 255, 0 ,0);
	PS.color(2,0, 255, 165, 0);
	PS.color(3,0, 255, 255, 0);
	PS.color(4,0, 0, 255, 0);
	PS.color(5,0, 0, 255, 255);
	PS.color(6,0, 0, 0, 255);
	PS.color(7,0, 127, 0, 255);
	PS.color(8,0, 255, 0, 255);
	PS.color(9,0, 255, 255, 255);
	PS.color(10,0, 127, 127, 127 );
	PS.color(11,0, 0, 0, 0);
	
	PS.color(0,1, 255, 0 ,0);
	PS.color(0,2, 255, 165, 0);
	PS.color(0,3, 255, 255, 0);
	PS.color(0,4, 0, 255, 0);
	PS.color(0,5, 0, 255, 255);
	PS.color(0,6, 0, 0, 255);
	PS.color(0,7, 127, 0, 255);
	PS.color(0,8, 255, 0, 255);
	PS.color(0,9, 255, 255, 255);
	PS.color(0,10, 127, 127, 127 );
	PS.color(0,11, 0, 0, 0);

	PS.debug("This is a test level\nClick the green arrow to go back to level 1");
	PS.glyph(11,12, 62);
	PS.glyphColor(11,12,PS.COLOR_GREEN);
	}
	else{
	
	PS.gridSize(4,5);
	PS.debug("Level 1: Match the colors with what two colors mix to make them! \nThis uses RBG color mixing, yes it is evil.");
	PS.statusText( "Color Mixer: The Game" );
	PS.gridColor(PS.COLOR_GRAY_LIGHT);
	//PS.gridShadow(true, PS.COLOR_GRAY);
	var i = 0;
	var j = 0;
	PS.scale( PS.ALL, PS.ALL, 100 );
	PS.border(0,0,0);
	PS.alpha(0,0,0);
	PS.bgAlpha(0,0,0);
	for(i=1; i< 4; i+=1){//sets the border for the x axis
		PS.border(i,0,1);
		PS.borderColor(i,0,0,0,0);
	}
	for(i=1; i< 4; i+=1){//sets the border for the y axis
		PS.border(0,i,1);
		
		PS.borderColor(0,i,0,0,0);
		
	}

	for(i=1;i<4;i+=1){//sets the border and shape for the slots you place colors in
		
		for(j=1;j<4;j+=1){
			PS.bgColor(i,j,0,0,0);
			PS.bgAlpha(i,j,100);
			PS.scale( i, j, 97 );
			PS.radius(i,j,50);
			PS.border(i,j,0);
			PS.borderColor(i,j,PS.COLOR_GRAY_LIGHT);
			PS.color(i,j,255,255,255);
			
		}
		//PS.alpha(i,i,0);
	}

	PS.color(0,1,255,0,0);
	PS.color(1,0,255,0,0);
	PS.color(0,2, 255, 255, 0);
	PS.color(2,0,255, 255, 0);
	PS.color(0,3, 0,0,255);
	PS.color(3,0,0,0,255);
	
	PS.color(0,4, red_yellow);
	PS.color(1,4, red_blue);
	PS.color(2,4, yellow_blue);

	PS.gridColor(255, 255, 255);
	PS.glyph(3,4, 62);
	PS.glyphColor(3,4,PS.COLOR_GREEN);
	}
}else{
	PS.debug("Wrong answers, try again\n");
}};

/**
 * when > clicked, go to lvl 1.
 * Lvl 1:
		grid: 4 by 5
		x axis: red, yellow, blue
		y axis: red, yellow, blue
		choices: orange, green, purple
		drag colors to slots, play sounds when picking up and dropping down the colors
		click on green arrow to check if you're right. 
		screen flashes red if wrong and plays buzzer
		screen flashes green if right and plays a ding ding noise
 * Lvl 2:
		grid: 4 by 9
		x axis: red, yellow, blue
		y axis: red, orange, yellow, green, (dark)blue, purple
		choices: orange, red-orange, yellow-orange, yellow-green, green, 
		(dark)blue-green, blue-purple, purple, red-purple
 * Lvl 3:
		grid: 6 by 16? not sure
		x axis: orange, green, purple, pink
		y axis: red, orange, yellow, green, cyan, dark blue, purple, pink
		choices: orange-green, orange-cyan, orange-dark blue, orange-purple, 
		orange-pink, green-red, green-cyan, green-purple, green-pink, 
		purple-yellow, purple-green, purple-cyan, purple-pink, pink-red,
		pink-yellow, purple-cyan, purple-dark-blue 
 * Lvl 4:
		grid: 
		x axis: white, grey, black
		y axis: red, orange, yellow, green, cyan, dark blue, purple, pink
 */