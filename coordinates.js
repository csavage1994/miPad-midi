//Center Pad
function centerPad() {

	var click =          [ 'row-3 column-3' ];

	var firstWaveRed =   [ "row-2 column-3", "row-3 column-2", 
					 	   "row-3 column-4", "row-4 column-3" ];

	var firstWaveBlue =  [ "row-2 column-2", "row-2 column-4", 
					  	   "row-4 column-2", "row-4 column-4" ];

	var secondWaveRed =  [ "row-1 column-2", "row-1 column-4",
					 	   "row-2 column-5", "row-4 column-5",
					 	   "row-5 column-4", "row-5 column-2", 
					  	   "row-2 column-1", "row-4 column-1" ];

	var secondWaveBlue = [ "row-1 column-1", "row-1 column-3",
					 	   "row-1 column-5", "row-3 column-5",
					 	   "row-5 column-5", "row-5 column-3", 
					 	   "row-5 column-1", "row-3 column-1" ];

	play('r3-c3');

	centerPadLights(click, firstWaveRed, firstWaveBlue, secondWaveRed, secondWaveBlue);
};

// Left-top Corner Pad
function LTCornerPad() {

	var click =      [ "row-1 column-1" ];

	var firstWave =  [ "row-2 column-1", "row-2 column-2", 
					   "row-1 column-2" ];

	var secondWave = [ "row-1 column-3", "row-2 column-3",
					   "row-3 column-3", "row-3 column-2",
					   "row-3 column-1" ];

	var thirdWave =  [ "row-1 column-4", "row-2 column-4",
					   "row-3 column-4", "row-4 column-4",
					   "row-4 column-3", "row-4 column-2",
					   "row-4 column-1" ];

	var fourthWave = [ "row-1 column-5", "row-2 column-5",
					   "row-3 column-5", "row-4 column-5",
					   "row-5 column-5", "row-5 column-4",
					   "row-5 column-3", "row-5 column-2",
				       "row-5 column-1" ];

	play('r1-c1');

	cornerPadLights(click, firstWave, secondWave, thirdWave, fourthWave);
};

//Right-top Corner Pad
function RTCornerPad() {

	var click =      [ "row-1 column-5" ];
		
	var firstWave =  [ "row-1 column-4", "row-2 column-4", 
					   "row-2 column-5" ];
		
	var secondWave = [ "row-1 column-3", "row-2 column-3",
					   "row-3 column-3", "row-3 column-4",
					   "row-3 column-5" ];

	var thirdWave =  [ "row-1 column-2", "row-2 column-2",
					   "row-3 column-2", "row-4 column-2",
				       "row-4 column-3", "row-4 column-4",
				       "row-4 column-5" ];

	var fourthWave = [ "row-1 column-1", "row-2 column-1",
					   "row-3 column-1", "row-4 column-1",
					   "row-5 column-1", "row-5 column-2",
					   "row-5 column-3", "row-5 column-4",
					   "row-5 column-5" ];

	play('r1-c5');

	cornerPadLights(click, firstWave, secondWave, thirdWave, fourthWave);
};
	
//Left-Bottom Corner Pad
function LBCornerPad() {

	var click =      [ "row-5 column-1" ];
		
	var firstWave =  [ "row-4 column-1", "row-4 column-2", 
				       "row-5 column-2" ];
		
	var secondWave = [ "row-3 column-1", "row-3 column-2",
					   "row-3 column-3", "row-4 column-3",
					   "row-5 column-3" ];

	var thirdWave =  [ "row-2 column-1", "row-2 column-2",
					   "row-2 column-3", "row-2 column-4",
					   "row-3 column-4", "row-4 column-4",
				       "row-5 column-4" ];

	var fourthWave = [ "row-1 column-1", "row-1 column-2",
					   "row-1 column-3", "row-1 column-4",
					   "row-1 column-5", "row-2 column-5",
					   "row-3 column-5", "row-4 column-5",
					   "row-5 column-5" ];

	play('r5-c1');

	cornerPadLights(click, firstWave, secondWave, thirdWave, fourthWave);
};

//Right-Bottom Corner Pad	
function RBCornerPad() {
		
	var click =      [ "row-5 column-5" ];
	
	var firstWave =  [ "row-4 column-5", "row-4 column-4", 
					   "row-5 column-4" ];
	
	var secondWave = [ "row-3 column-5", "row-3 column-4",
					   "row-3 column-3", "row-4 column-3",
					   "row-5 column-3" ];

	var thirdWave =  [ "row-2 column-5", "row-2 column-4",
					   "row-2 column-3", "row-2 column-2",
					   "row-3 column-2", "row-4 column-2",
					   "row-5 column-2" ];

	var fourthWave = [ "row-1 column-5", "row-1 column-4",
					   "row-1 column-3", "row-1 column-2",
					   "row-1 column-1", "row-2 column-1",
					   "row-3 column-1", "row-4 column-1",
				       "row-5 column-1" ];

	play('r5-c5');

	cornerPadLights(click, firstWave, secondWave, thirdWave, fourthWave);
};
	
//CROSSPAD LIGHTS

//Left-top Crossppad
function LTCrossPad() {

	var click = 	 [ "row-2 column-2" ];
		
	var firstWave =  [ "row-1 column-2", "row-2 column-1", 
					   "row-2 column-3", "row-3 column-2" ];
		
	var secondWave = [ "row-2 column-4", "row-4 column-2" ];

	var thirdWave =  [ "row-2 column-5", "row-5 column-2" ];

	play('r2-c2');

	crossPadLights(click, firstWave, secondWave, thirdWave);
};

//Right-top Crosspad
function RTCrossPad() {
	
	var click =      [ "row-2 column-4"];
		
	var firstWave =  [ "row-1 column-4", "row-2 column-3", 
					   "row-2 column-5", "row-3 column-4" ];
		
	var secondWave = [ "row-2 column-2", "row-4 column-4" ];

	var thirdWave =  [ "row-2 column-1", "row-5 column-4" ];

	play('r2-c4');

	crossPadLights(click, firstWave, secondWave, thirdWave);
};

//Left-Bottom Crossppad
function LBCrossPad() {
	
	var click = 	 [ "row-4 column-2"];
		
	var firstWave =  [ "row-4 column-1", "row-3 column-2", 
					   "row-5 column-2", "row-4 column-3" ];
		
	var secondWave = [ "row-2 column-2", "row-4 column-4" ];

	var thirdWave =  [ "row-1 column-2", "row-4 column-5" ];

	play('r4-c2')

	crossPadLights(click, firstWave, secondWave, thirdWave);
};

//Right-Bottom Crossppad
function RBCrossPad() {

	var click =		 [ "row-4 column-4"];
		
	var firstWave =  [ "row-3 column-4", "row-4 column-3", 
					   "row-4 column-5", "row-5 column-4" ];
		
	var secondWave = [ "row-2 column-4", "row-4 column-2" ];

	var thirdWave =  [ "row-1 column-4", "row-4 column-1" ];

	play('r4-c4');
		
	crossPadLights(click, firstWave, secondWave, thirdWave);
};

//X-Pads
// Left X Pad
function LXPad() {

	var click =      [ "row-3 column-2"];

	var firstWave =  [ "row-2 column-1", "row-4 column-1", 
					   "row-2 column-3", "row-4 column-3" ];

	var secondWave = [ "row-1 column-4", "row-5 column-4" ];

	play('r3-c2');

	xPads(click, firstWave, secondWave);

};	

// Right X Pad
function RXPad() {

	var click =      [ "row-3 column-4"];

	var firstWave =  [ "row-2 column-3", "row-4 column-3", 
					   "row-2 column-5", "row-4 column-5" ];

	var secondWave = [ "row-1 column-2", "row-5 column-2" ];

	play('r3-c4');

	xPads(click, firstWave, secondWave);
};	

// Top X Pad
function TXPad() {

	var click =      [ "row-2 column-3"];

	var firstWave =  [ "row-1 column-2", "row-1 column-4", 
					   "row-3 column-2", "row-3 column-4" ];

	var secondWave = [ "row-4 column-1", "row-4 column-5" ];

	play('r2-c3');

	xPads(click, firstWave, secondWave);
};	

// Bottom X Pad
function BXPad() {

	var click =      [ "row-4 column-3" ];

	var firstWave =  [ "row-3 column-2", "row-3 column-4", 
					   "row-5 column-2", "row-5 column-4" ];

	var secondWave = [ "row-2 column-1", "row-2 column-5" ];

	play('r4-c3');

	xPads(click, firstWave, secondWave);

};	

//BORDER PADS
//top-left border pad
function TLBorderPad() {

	var cRes= [ "row-1 column-2", "row-2 column-2",
				"row-3 column-2", "row-4 column-2",
				"row-5 column-2", '#ff0000' ];

	play('r1-c2');

	borderPads_LR(cRes[0], cRes[1], cRes[2], cRes[3], cRes[4], cRes[5]);					  
};

//top-right border pad
function TRBorderPad() {

	var cRes = [ "row-1 column-4", "row-2 column-4",
				 "row-3 column-4", "row-4 column-4",
				 "row-5 column-4", "#007FFF" ];

	play('r1-c4');

	borderPads_LR( cRes[0], cRes[1], cRes[2], cRes[3], cRes[4], cRes[5] );					  
};

//bottom-left border pad
function BLBorderPad() {

	var cRes = [ "row-5 column-2", "row-4 column-2",
				 "row-3 column-2", "row-2 column-2",
				 "row-1 column-2", "#FF0000" ];

	play('r5-c2');

	borderPads_LR( cRes[0], cRes[1], cRes[2], cRes[3], cRes[4], cRes[5] );					  
};

//bottom-right border pad
function BRBorderPad() {

	var cRes = [ "row-5 column-4", "row-4 column-4",
				 "row-3 column-4", "row-2 column-4",
				 "row-1 column-4", '#007FFF' ];

	play('r5-c4');

	borderPads_LR( cRes[0], cRes[1], cRes[2], cRes[3], cRes[4], cRes[5]);					  
};

//left-top border pad
function LTBorderPad() {

	var cRes = [ "row-2 column-1", "row-2 column-2",
				 "row-2 column-3", "row-2 column-4",
				 "row-2 column-5", '#ff0000' ];

	play('r2-c1');

	borderPads_LR(cRes[0], cRes[1], cRes[2], cRes[3], cRes[4], cRes[5]);					  
};

//left-bottom border pad
function LBBorderPad() {

	var cRes = [ "row-4 column-1", "row-4 column-2",
				 "row-4 column-3", "row-4 column-4",
				 "row-4 column-5", '#007FFF' ];

	play('r4-c1');

	borderPads_LR(cRes[0], cRes[1], cRes[2], cRes[3], cRes[4], cRes[5]);					  
};

//right-top border pad
function RTBorderPad() {

	var cRes = [ "row-2 column-5", "row-2 column-4",
				 "row-2 column-3", "row-2 column-2",
				 "row-2 column-1", '#ff0000' ];

	play('r2-c5');

	borderPads_LR(cRes[0], cRes[1], cRes[2], cRes[3], cRes[4], cRes[5]);					  
};

//right-bottom border pad
function RBBorderPad() {

	var cRes = [ "row-4 column-5", "row-4 column-4",
				 "row-4 column-3", "row-4 column-2",
				 "row-4 column-1", '#007FFF' ];

	play('r4-c5');

	borderPads_LR(cRes[0], cRes[1], cRes[2], cRes[3], cRes[4], cRes[5]);					  
};

//CENTER BORDER PADS

//top-center border pad
function TCBorderPad() {

	var cRes = [ "row-1 column-3", "row-2 column-3",
				 "row-3 column-3", "row-3 column-2",
				 "row-3 column-4", "row-3 column-1",
				 "row-3 column-5", '#00ff00' ];

	play('r1-c3');

	borderPads_Center( cRes[0], cRes[1], cRes[2], cRes[3], 
					   cRes[4], cRes[5], cRes[6], cRes[7] );					  
};

//bottom-center border pad
function BCBorderPad() {

	var cRes = [ "row-5 column-3", "row-4 column-3",
				 "row-3 column-3", "row-3 column-2",
				 "row-3 column-4", "row-3 column-1",
				 "row-3 column-5", "#00ff00" ];

	play('r5-c3')

	borderPads_Center( cRes[0], cRes[1], cRes[2], cRes[3], 
					   cRes[4], cRes[5], cRes[6], cRes[7] );
};

//left-center border pad
function LCBorderPad() {

	var cRes = [ "row-3 column-1", "row-3 column-2",
				 "row-3 column-3", "row-2 column-3",
				 "row-4 column-3", "row-1 column-3",
				 "row-5 column-3", "#00ff00" ];

	play('r3-c1');

	borderPads_Center( cRes[0], cRes[1], cRes[2], cRes[3], 
					   cRes[4], cRes[5], cRes[6], cRes[7] );					  
};	

//right-center border pad
function RCBorderPad() {

	var cRes = [ "row-3 column-5", "row-3 column-4",
				 "row-3 column-3", "row-2 column-3",
				 "row-4 column-3", "row-1 column-3",
				 "row-5 column-3", "#00ff00" ];

	play('r3-c5');

	borderPads_Center( cRes[0], cRes[1], cRes[2], cRes[3], 
					   cRes[4], cRes[5], cRes[6], cRes[7] );					  					  
};

