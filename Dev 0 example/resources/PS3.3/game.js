let sprite = true;

"use strict"; // Do NOT remove this directive!

/*
PS.init( system, options )
Called once after engine is initialized but before event-polling begins.
This function doesn't have to do anything, although initializing the grid dimensions with PS.gridSize() is recommended.
If PS.grid() is not called, the default grid dimensions (8 x 8 beads) are applied.
Any value returned is ignored.
[system : Object] = A JavaScript object containing engine and host platform information properties; see API documentation for details.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.init = function( system, options ) {
	

	PS.debug( "PS.init() called\n" );

	
	 PS.gridSize( 8, 8 );

	 PS.gridColor(255, 255, 255);

	PS.bgColor(0,0, 255, 0 ,0); //red
	PS.bgColor(1,0, 255, 165, 0); //orange
	PS.bgColor(2,0, 255, 255, 0); //yellow
	PS.bgColor(3,0, 0, 255, 0); //green
	PS.bgColor(4,0, 0, 255, 255); //cyan
	PS.bgColor(5,0, 0, 0, 255); //dark blue
	PS.bgColor(6,0, 127, 0, 255); //purple
	PS.bgColor(7,0, 255, 0, 255); //pink
	PS.bgColor(0,1, 255, 255, 255); //white
	PS.bgColor(1,1, 127, 127, 127 ); //grey
	PS.bgColor(2,1, 0, 0, 0); //black
	
	PS.color(0,0, 255, 0 ,0);
	PS.color(1,0, 255, 165, 0);
	PS.color(2,0, 255, 255, 0);
	PS.color(3,0, 0, 255, 0);
	PS.color(4,0, 0, 255, 255);
	PS.color(5,0, 0, 0, 255);
	PS.color(6,0, 127, 0, 255);
	PS.color(7,0, 255, 0, 255);
	PS.color(0,1, 255, 255, 255);
	PS.color(1,1, 127, 127, 127 );
	PS.color(2,1, 0, 0, 0);

	 PS.bgColor(3,3, 0,0,0);
	 PS.bgColor(3,4, 0,0,0);
	 PS.bgColor(4,3, 0,0,0);
	 PS.bgColor(4,4, 0,0,0);
	 
	 PS.alpha(3,3, 255);
	PS.alpha(3,4, 255);
	PS.alpha(4,3, 255);
	PS.alpha(4,4, 255);
	 
	//  var mySprite;
	// mySprite = PS.spriteSolid(2,2);
	// PS.spriteMove(mySprite, 3, 3);
	// PS.spriteSolidAlpha(mySprite, 255)
	

	 //PS.spriteMove((PS.spriteSolid(1,1)),7,7);
	 

	 
	// This is also a good place to display
	// your game title or a welcome message
	// in the status line above the grid.
	// Uncomment the following code line and
	// change the string parameter as needed.

	PS.statusText( "Color Mixer" );

	// Add any other initialization code you need here.
};
let currentColor;
let pastColor;
let iteration = 0;
/*
PS.touch ( x, y, data, options )
Called when the left mouse button is clicked over bead(x, y), or when bead(x, y) is touched.
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.touch = function( x, y, data, options ) {
	// Uncomment the following code line
	// to inspect x/y parameters:

	//PS.debug( "PS.touch() @ " + x + ", " + y + "\n" );

	// Add code here for mouse clicks/touches
	// over a bead.
};

/*
PS.release ( x, y, data, options )
Called when the left mouse button is released, or when a touch is lifted, over bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.release = function( x, y, data, options ) {
	// Uncomment the following code line to inspect x/y parameters:

	pastColor = PS.color(3,3);
	//PS.debug( "PS.release() @ " + x + ", " + y + "\n" );
	//PS.bgAlpha( x, y, PS.ALPHA_OPAQUE );
	PS.debug(PS.bgColor( x, y)+ "\n");
	// if(sprite){
	PS.bgColor(3,3, PS.bgColor( x, y ));
	PS.bgColor(3,4, PS.bgColor( x, y));
	PS.bgColor(4,3, PS.bgColor( x, y));
	PS.bgColor(4,4, PS.bgColor( x, y));
	PS.color(3,3, PS.color( x, y ));
	PS.color(3,4, PS.color( x, y));
	PS.color(4,3, PS.color( x, y));
	PS.color(4,4, PS.color( x, y));
	
	iteration++;
	currentColor = PS.color( x, y);

	
		if (currentColor === PS.color(0 ,0 )||pastColor === PS.color(0 ,0 )){ // if red
			if (pastColor===PS.color(1,0)||currentColor===PS.color(1,0)){ // if orange
				changeCenterColor(238,110,47);
			}
			if (pastColor===PS.color(2,0)||currentColor===PS.color(2,0)){ // if yellow
				changeCenterColor(244,153,59);
			}
			if (pastColor===PS.color(3,0)||currentColor===PS.color(3,0)){ // if green
				changeCenterColor(175,152,55);
			}
			if (pastColor===PS.color(4,0)||currentColor===PS.color(4,0)){ // if cyan
				changeCenterColor(175,152,144);
			}
			if (pastColor===PS.color(5,0)||currentColor===PS.color(5,0)){ // if dark blue
				changeCenterColor(116,25,140);
			}
			if (pastColor===PS.color(6,0)||currentColor===PS.color(6,0)){ // if porple
				changeCenterColor(172,35,140);
			}
			if (pastColor===PS.color(7,0)||currentColor===PS.color(7,0)){ // if pink
				changeCenterColor(174,35,140);
			}
			if (pastColor===PS.color(0,1)||currentColor===PS.color(0,1)){ // if white
				changeCenterColor(244,153,145);
			}
			if (pastColor===PS.color(1,1)||currentColor===PS.color(1,1)){ // if grey
				changeCenterColor(180,89,81);
			}
			if (pastColor===PS.color(2,1)||currentColor===PS.color(2,1)){ // if black
				changeCenterColor(116,25,17);
			}
	}else if (pastColor===PS.color(1,0)||currentColor===PS.color(1,0)){
		if (pastColor===PS.color(2,0)||currentColor===PS.color(2,0)){ // if yellow
				changeCenterColor(248,212,71);
			}
			if (pastColor===PS.color(3,0)||currentColor===PS.color(3,0)){ // if green
				changeCenterColor(179,210,67);
			}
			if (pastColor===PS.color(4,0)||currentColor===PS.color(4,0)){ // if cyan
				changeCenterColor(179,210,156);
			}
			if (pastColor===PS.color(5,0)||currentColor===PS.color(5,0)){ // if dark blue
				changeCenterColor(120,84,152);
			}
			if (pastColor===PS.color(6,0)||currentColor===PS.color(6,0)){ // if porple
				changeCenterColor(178,94,152);
			}
			if (pastColor===PS.color(7,0)||currentColor===PS.color(7,0)){ // if pink
				changeCenterColor(237,110,153);
			}
			if (pastColor===PS.color(0,1)||currentColor===PS.color(0,1)){ // if white
				changeCenterColor(248,212,157);
			}
			if (pastColor===PS.color(1,1)||currentColor===PS.color(1,1)){ // if grey
				changeCenterColor(184,148,93);
			}
			if (pastColor===PS.color(2,1)||currentColor===PS.color(2,1)){ // if black
				changeCenterColor(120,84,29);
			}
	}
	else if (pastColor===PS.color(2,0)||currentColor===PS.color(2,0)){
		if (pastColor===PS.color(3,0)||currentColor===PS.color(3,0)){ // if green
				changeCenterColor(186,254,80);
			}
			else if (pastColor===PS.color(4,0)||currentColor===PS.color(4,0)){ // if cyan
				changeCenterColor(186,254,169);
			}
			else if (pastColor===PS.color(5,0)||currentColor===PS.color(5,0)){ // if dark blue
				changeCenterColor(127,127,165);
			}
			else if (pastColor===PS.color(6,0)||currentColor===PS.color(6,0)){ // if porple
				changeCenterColor(185,137,165);
			}
			else if (pastColor===PS.color(7,0)||currentColor===PS.color(7,0)){ // if pink
				changeCenterColor(244,153,166);
			}
			else if (pastColor===PS.color(0,1)||currentColor===PS.color(0,1)){ // if white
				changeCenterColor(255,255,170);
			}
			else if (pastColor===PS.color(1,1)||currentColor===PS.color(1,1)){ // if grey
				changeCenterColor(191,191,106);
			}
			else if (pastColor===PS.color(2,1)||currentColor===PS.color(2,1)){ // if black
				changeCenterColor(127,127,42);
			}
	}
	else if (pastColor===PS.color(3,0)||currentColor===PS.color(3,0)){
		if (pastColor===PS.color(4,0)||currentColor===PS.color(4,0)){ // if cyan
				changeCenterColor(117,252,165);
			}
			else if (pastColor===PS.color(5,0)||currentColor===PS.color(5,0)){ // if dark blue
				changeCenterColor(58,125,161);
			}
			else if (pastColor===PS.color(6,0)||currentColor===PS.color(6,0)){ // if porple
				changeCenterColor(116,135,161);
			}
			else if (pastColor===PS.color(7,0)||currentColor===PS.color(7,0)){ // if pink
				changeCenterColor(175,151,162);
			}
			else if (pastColor===PS.color(0,1)||currentColor===PS.color(0,1)){ // if white
				changeCenterColor(186,253,166);
			}
			else if (pastColor===PS.color(1,1)||currentColor===PS.color(1,1)){ // if grey
				changeCenterColor(122,189,102);
			}
			else if (pastColor===PS.color(2,1)||currentColor===PS.color(2,1)){ // if black
				changeCenterColor(58,125,38);
			}
	}
	else if (pastColor===PS.color(4,0)||currentColor===PS.color(4,0)) {
		if (pastColor===PS.color(5,0)||currentColor===PS.color(5,0)){ // if dark blue
				changeCenterColor(58,125,249);
			}
			else if (pastColor===PS.color(6,0)||currentColor===PS.color(6,0)){ // if porple
				changeCenterColor(116,135,249);
			}
			else if (pastColor===PS.color(7,0)||currentColor===PS.color(7,0)){ // if pink
				changeCenterColor(175,151,250);
			}
			else if (pastColor===PS.color(0,1)||currentColor===PS.color(0,1)){ // if white
				changeCenterColor(186,253,254);
			}
			else if (pastColor===PS.color(1,1)||currentColor===PS.color(1,1)){ // if grey
				changeCenterColor(122,189,190);
			}
			else if (pastColor===PS.color(2,1)||currentColor===PS.color(2,1)){ // if black
				changeCenterColor(58,125,126);
			}
	}
	else if (pastColor===PS.color(5,0)||currentColor===PS.color(5,0)){
		if (pastColor===PS.color(6,0)||currentColor===PS.color(6,0)){ // if porple
				changeCenterColor(58,10,245);
			}
			else if (pastColor===PS.color(7,0)||currentColor===PS.color(7,0)){ // if pink
				changeCenterColor(117,26,246);
			}
			else if (pastColor===PS.color(0,1)||currentColor===PS.color(0,1)){ // if white
				changeCenterColor(128,128,250);
			}
			else if (pastColor===PS.color(1,1)||currentColor===PS.color(1,1)){ // if grey
				changeCenterColor(64,64,186);
			}
			else if (pastColor===PS.color(2,1)||currentColor===PS.color(2,1)){ // if black
				changeCenterColor(0,0,122);
			}
	}
	else if (pastColor===PS.color(6,0)||currentColor===PS.color(6,0)){
		if (pastColor===PS.color(7,0)||currentColor===PS.color(7,0)){ // if pink
				changeCenterColor(175,36,246);
			}
			else if (pastColor===PS.color(0,1)||currentColor===PS.color(0,1)){ // if white
				changeCenterColor(186,138,250);
			}
			else if (pastColor===PS.color(1,1)||currentColor===PS.color(1,1)){ // if grey
				changeCenterColor(122,74,186);
			}
			else if (pastColor===PS.color(2,1)||currentColor===PS.color(2,1)){ // if black
				changeCenterColor(58,10,122);
			}
	}
	else if (pastColor===PS.color(7,0)||currentColor===PS.color(7,0)){
		if (pastColor===PS.color(0,1)||currentColor===PS.color(0,1)){ // if white
				changeCenterColor(244,153,251);
			}
			else if (pastColor===PS.color(1,1)||currentColor===PS.color(1,1)){ // if grey
				changeCenterColor(180,89,187);
			}
			else if (pastColor===PS.color(2,1)||currentColor===PS.color(2,1)){ // if black
				changeCenterColor(116,25,123);
			}
	}
	else if (pastColor===PS.color(0,1)||currentColor===PS.color(0,1)){
		if (pastColor===PS.color(1,1)||currentColor===PS.color(1,1)){ // if grey
				changeCenterColor(191,191,191);
			}
			else if (pastColor===PS.color(2,1)||currentColor===PS.color(2,1)){ // if black
				changeCenterColor(127,127,127);
			}
	}
	else if (pastColor===PS.color(1,1)||currentColor===PS.color(1,1)){
		if (pastColor===PS.color(2,1)||currentColor===PS.color(2,1)){ // if black
				changeCenterColor(63,63,63);
			}
	}

	};


/*
PS.enter ( x, y, button, data, options )
Called when the mouse cursor/touch enters bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.enter = function( x, y, data, options ) {
	// Uncomment the following code line to inspect x/y parameters:

	//PS.debug( "PS.enter() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch enters a bead.
};
function changeCenterColor(r, g, b){
	PS.color(3,3, r, g, b);
	PS.color(3,4, r, g, b);
	PS.color(4,3, r, g, b);
	PS.color(4,4, r, g, b);
	return null;
}
/*
PS.exit ( x, y, data, options )
Called when the mouse cursor/touch exits bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.exit = function( x, y, data, options ) {
	// Uncomment the following code line to inspect x/y parameters:

	//PS.debug( "PS.exit() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch exits a bead.
};

/*
PS.exitGrid ( options )
Called when the mouse cursor/touch exits the grid perimeter.
This function doesn't have to do anything. Any value returned is ignored.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.exitGrid = function( options ) {
	// Uncomment the following code line to verify operation:

	//PS.debug( "PS.exitGrid() called\n" );

	// Add code here for when the mouse cursor/touch moves off the grid.
};

/*
PS.keyDown ( key, shift, ctrl, options )
Called when a key on the keyboard is pressed.
This function doesn't have to do anything. Any value returned is ignored.
[key : Number] = ASCII code of the released key, or one of the PS.KEY_* constants documented in the API.
[shift : Boolean] = true if shift key is held down, else false.
[ctrl : Boolean] = true if control key is held down, else false.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.keyDown = function( key, shift, ctrl, options ) {
	// Uncomment the following code line to inspect first three parameters:

	//PS.debug( "PS.keyDown(): key=" + key + ", shift=" + shift + ", ctrl=" + ctrl + "\n" );

	// Add code here for when a key is pressed.
};

/*
PS.keyUp ( key, shift, ctrl, options )
Called when a key on the keyboard is released.
This function doesn't have to do anything. Any value returned is ignored.
[key : Number] = ASCII code of the released key, or one of the PS.KEY_* constants documented in the API.
[shift : Boolean] = true if shift key is held down, else false.
[ctrl : Boolean] = true if control key is held down, else false.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.keyUp = function( key, shift, ctrl, options ) {
	// Uncomment the following code line to inspect first three parameters:

	// PS.debug( "PS.keyUp(): key=" + key + ", shift=" + shift + ", ctrl=" + ctrl + "\n" );

	// Add code here for when a key is released.
};

/*
PS.input ( sensors, options )
Called when a supported input device event (other than those above) is detected.
This function doesn't have to do anything. Any value returned is ignored.
[sensors : Object] = A JavaScript object with properties indicating sensor status; see API documentation for details.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
NOTE: Currently, only mouse wheel events are reported, and only when the mouse cursor is positioned directly over the grid.
*/

PS.input = function( sensors, options ) {
	// Uncomment the following code lines to inspect first parameter:

	 var device = sensors.wheel; // check for scroll wheel
//
	 if ( device ) {
	   PS.debug( "PS.input(): " + device + "\n" );
	 }

	// Add code here for when an input event is detected.
};

// REMOVE BELOW IF BROKEN

// Color_mixer.toCymk = function(color){
//   cyan    = 255 - color._rgba[0];
//   magenta = 255 - color._rgba[1];
//   yellow  = 255 - color._rgba[2];
//   black   = Math.min(cyan, magenta, yellow);
//   cyan    = ((cyan - black) / (255 - black));
//   magenta = ((magenta - black) / (255 - black));
//   yellow  = ((yellow  - black) / (255 - black));

//   return {c:cyan,m:magenta,y:yellow,k:black/255,a:color._rgba[3]};
// }

// Color_mixer.toRgba = function(color){
//   color.c = color.c;
//   color.m = color.m;
//   color.y = color.y;
//   color.k = color.k;
//   R = color.c * (1.0 - color.k) + color.k;
//   G = color.m * (1.0 - color.k) + color.k;
//   B = color.y * (1.0 - color.k) + color.k;
//   R = Math.round((1.0 - R) * 255.0 + 0.5);
//   G = Math.round((1.0 - G) * 255.0 + 0.5);
//   B = Math.round((1.0 - B) * 255.0 + 0.5);
//   color = $.Color(R,G,B,color.a);
//   return color;
// }

// Color_mixer.mix = function(color1,color2){
//   if(typeof(color1)=='object'&&(color1 instanceof Array)==false)
//     color1 = new Array(color1,color2);

//   C = 0;
//   M = 0;
//   Y = 0;
//   K = 0;
//   A = 0;
//   for(var i=0;i<color1.length;i++){
//     color1[i] = Color_mixer.toCymk(color1[i]);
//     C += color1[i].c;
//     M += color1[i].m;
//     Y += color1[i].y;
//     K += color1[i].k;
//     A += color1[i].a;
//   }
//   C = C/color1.length;
//   M = M/color1.length;
//   Y = Y/color1.length;
//   K = K/color1.length;
//   A = A/color1.length;
//   color = {c:C,m:M,y:Y,k:K,a:A};
//   color = Color_mixer.toRgba(color);
//   return color;
// }