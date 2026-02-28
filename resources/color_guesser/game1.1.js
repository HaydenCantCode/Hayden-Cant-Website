"use strict";
//Version 1.1


PS.init = function( system, options ) {
	PS.gridSize(4,5);
	PS.debug("Level 1\nThis uses RBG color mixing, yes it is evil.");
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
var startingXY = [0,0];
var movingColor = PS.COLOR_GREEN;

//COLOR VARIABLES:
if(placeholder){ //should always be true, if not then uh somethings wrong
var red_orange = PS.makeRGB(238,110,47);
var red_yellow = PS.makeRGB(244,153,59); //yeah this is just orange lol
var red_green = PS.makeRGB(175,152,55);
var red_cyan = PS.makeRGB(175,152,144);
var red_blue = PS.makeRGB(116,25,140);
var red_purple = PS.makeRGB(172,35,140);
var red_pink = PS.makeRGB(174,35,140);
var red_white = PS.makeRGB(244,153,145);
var red_grey = PS.makeRGB(180,89,81);
var red_black = PS.makeRGB(116,25,17);
var orange_yellow = PS.makeRGB(248,212,71);
var orange_green = PS.makeRGB(179,210,67);
var orange_cyan = PS.makeRGB(179,210,156);
var orange_blue = PS.makeRGB(120,84,152);
var orange_purple = PS.makeRGB(178,94,152);
var orange_pink = PS.makeRGB(237,110,153);
var orange_white = PS.makeRGB(248,212,157);
var orange_grey = PS.makeRGB(184,148,93);
var orange_black = PS.makeRGB(120,84,29);
var yellow_green = PS.makeRGB(186,254,80);
var yellow_cyan = PS.makeRGB(186,254,169);
var yellow_blue = PS.makeRGB(127,127,165); //geen. WDYM ITS NOT GREEN
var yellow_purple = PS.makeRGB(185,137,165);
var yellow_pink = PS.makeRGB(244,153,166);
var yellow_white = PS.makeRGB(255,255,170);
var yellow_grey = PS.makeRGB(191,191,106);
var yellow_black = PS.makeRGB(127,127,42);
var green_cyan = PS.makeRGB(117,252,165);
var green_blue = PS.makeRGB(58,125,161);
var green_purple = PS.makeRGB(116,135,161);
var green_pink = PS.makeRGB(175,151,162);
var green_white = PS.makeRGB(186,253,166);
var green_grey = PS.makeRGB(122,189,102);
var green_black = PS.makeRGB(58,125,38);
var cyan_blue = PS.makeRGB(58,125,249);
var cyan_purple = PS.makeRGB(116,135,249);
var cyan_pink = PS.makeRGB(175,151,250);
var cyan_white = PS.makeRGB(186,253,254);
var cyan_grey = PS.makeRGB(122,189,190);
var cyan_black = PS.makeRGB(58,125,126);
var blue_purple = PS.makeRGB(58,10,245);
var blue_pink = PS.makeRGB(117,26,246);
var blue_white = PS.makeRGB(128,128,250);
var blue_grey = PS.makeRGB(64,64,186);
var blue_black = PS.makeRGB(0,0,122);
var purple_pink = PS.makeRGB(175,36,246);
var purple_white = PS.makeRGB(186,138,250);
var purple_grey = PS.makeRGB(122,74,186);
var purple_black = PS.makeRGB(58,10,122);
var pink_white = PS.makeRGB(244,153,251);
var pink_grey = PS.makeRGB(180,89,187);
var pink_black = PS.makeRGB(116,25,123);
var white_grey = PS.makeRGB(191,191,191);
var white_black = PS.makeRGB(127,127,127);
var grey_black = PS.makeRGB(63,63,63);
}

PS.touch = function( x, y, data, options ){
	startingXY = [x,y];
	//play click sound if it is within the selectable colors or change level button
	if (currentLvl === 1){
		if (x<=3 && x >=0&& y<=4 &&y>0){
			PS.audioPlay("fx_powerup3");
			movingColor = PS.color(x,y);
		}
	}
	else if (currentLvl === 2){
		if (x<=3 && x >=0&& y<=10 &&y>0){
			PS.audioPlay("fx_powerup3");
			movingColor = PS.color(x,y);
		}
	}
	else if (currentLvl === 3){
		
	}
	else if (currentLvl === 4){
		
	}
	else{

	}
};

//startingXY[0]>= "where the color choices start(x)" && startingXY[0]<= "where the color choices end(x)" && startingXY[1]>= "where the color choices start(y)" && startingXY[1]<= "where the color choices end(y)" && x<= "where the end of the area that you can drop colors in is" && x >0&& y<="where the end of the area that you can drop colors in is" &&y>0
PS.release = function( x, y, data, options ){
	if (currentLvl === 1){
		if (startingXY[0] === 3&&startingXY[1] === 4&& (x===3)&&(y===4)){
			if((PS.color(1,2)===PS.color(0,4)||PS.color(2,1)===PS.color(0,4))&&(PS.color(1,3)===PS.color(1,4)||PS.color(3,1)===PS.color(1,4))&&(PS.color(2,3)===PS.color(2,4)||PS.color(3,2)===PS.color(2,4))){
				correct = true;
			}
			changeLevel(1,correct);
		}
		else if(startingXY[0]>=0&&startingXY[0]<=3&&startingXY[1]===4&& x<=3 && x >0&& y<=3 &&y>0){//if starting x is between 0 and 3 and starting y is 4 and (if 3 >= x > 0 and 3 >= y > 0)
			PS.color(x,y, movingColor);
			PS.audioPlay("fx_pop");
			
		}
	}
	else if (currentLvl === 2){
		if (startingXY[0] === 3&&startingXY[1] === 10&& (x===3)&&(y===10)){
			if((PS.color(1,2)==red_orange)&&(PS.color(1,3)==red_yellow||PS.color(2,1)==red_yellow)&&PS.color(1,4)==red_green&&(PS.color(1,5)==red_blue||PS.color(3,1)==red_blue)&&PS.color(1,6)==red_purple&&PS.color(2,2)==orange_yellow&&PS.color(3,2)==orange_blue&&(PS.color(3,3)==yellow_blue||PS.color(2,5)==yellow_blue)&&PS.color(2,4)==yellow_green&&PS.color(2,6)==yellow_purple&&PS.color(3,4)==green_blue&&PS.color(3,6)==blue_purple){
				correct = true;
			}
			changeLevel(1,correct);
		}
		else if(startingXY[0]>=0&&startingXY[0]<=3&&startingXY[1]===7&& x<=3 && x >0&& y<=6 &&y>0){//if starting x is between 0 and 3 and starting y is 4 and (if 3 >= x > 0 and 3 >= y > 0)
			PS.color(x,y, movingColor);
			PS.audioPlay("fx_pop");
			
		}
	}
	else if (currentLvl === 3){
		
	}
	else if (currentLvl === 4){
		
	}
	else{

	}
};

PS.enter = function( x, y, data, options ){
	//have the border change color 
}

PS.exit = function( x, y, data, options ){
	//have the border change color back to original
}

function changeLevel(lastLevel, isCorrect){
	PS.debugClear();
	if(isCorrect){
		correct = false;
	if(lastLevel===1){
		currentLvl = 2;
		PS.debug("Level 2\n");

		PS.gridSize(4, 11);
		PS.gridColor(PS.COLOR_GRAY_LIGHT);

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
	for(i=1; i< 7; i+=1){//sets the border for the y axis
		PS.border(0,i,1);
		PS.borderColor(0,i,0,0,0);
	}

	for(i=1;i<4;i+=1){//sets the border and shape for the slots you place colors in
		
		for(j=1;j<7;j+=1){
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
	PS.color(1,0,255,0,0);
	PS.color(2,0,255, 255, 0);
	PS.color(3,0,0,0,255);

	PS.color(0,1,255,0,0);
	PS.color(0,2, 255, 165, 0);
	PS.color(0,3, 255, 255, 0);
	PS.color(0,4, 0, 255, 0);
	PS.color(0,5, 0,0,255);
	PS.color(0,6, 127, 0, 255);

	//color mixing
	PS.color(0,7, blue_purple);
	PS.color(1,7, yellow_green);
	PS.color(2,7, red_orange);
	PS.color(3,7, red_purple);
	
	PS.color(0,8, green_blue);
	PS.color(1,8, orange_yellow);
	PS.color(2,8, red_yellow);
	PS.color(3,8, yellow_blue);

	PS.color(0,9, orange_blue);
	PS.color(1,9, red_green);
	PS.color(2,9, red_blue);
	PS.color(3,9, blue_purple);

	PS.color(0,10, yellow_purple);

	
	PS.glyph(3,10, 62);
	PS.glyphColor(3,10,PS.COLOR_GREEN);
		return null;
	}
	else if(lastLevel===2){
		currentLvl = 3;
		PS.debug("Level 3\n");
		return null;
	}
	else if(lastLevel===3){
		currentLvl = 4;
		PS.debug("Level 4\n");
		return null;
	}
	else if(lastLevel===4){
		PS.debug("Test Level\n");
		currentLvl = 0;
		
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
	return null;
	}
	else{
	currentLvl = 1;
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

	
	PS.glyph(3,4, 62);
	PS.glyphColor(3,4,PS.COLOR_GREEN);
	return null;
	}
}else{
	PS.debug("Wrong answers, try again\n");
	//play buzzer
	return null;
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
		grid: 4 by 10
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