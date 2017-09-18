var ready=false;

function setupMIDI() {
	MIDI.loadPlugin({
		soundfontUrl: "./soundfont/",
		instrument: "acoustic_grand_piano",
		onprogress: function(state, progress) {
			//console.log(state, progress);
		},
		onsuccess: function() {
			ready=true;
		}
	});
  }
  var interval;
if(window.location.hash == "#musgen"){
	
  
  function loop() {
  if (document.getElementById("canv") == null) {
    console.log("LOOPING");
  setTimeout(function(){loop()}, 500);
  }
    else {
      document.getElementById("load").style.fontSize = "48px";
      document.getElementById("load").style.lineHeight = "81px";
      document.getElementById("load").innerHTML = "connecting...";
      socket = io.connect('http://35.185.213.7:8080');
      start = true;
      width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      width = width - 50;
      barlength = (width-16) / Math.floor(width/300);
	  setupMIDI();
	  interval = setInterval(function(){if(ready==true){main();}},500);
    }
  }
  loop();
function noteToMIDI(note) {
	if (note.length<3) {
		console.log("Not a valid note");
		return;
	}
	octave=parseInt(note.slice(-1))*12+12;
	switch(note.charAt(0)) {
		case 'd': octave+=2; break;
		case 'e': octave+=4; break;
		case 'f': octave+=5; break;
		case 'g': octave+=7; break;
		case 'a': octave+=9; break;
		case 'b': octave+=11; break;
		default: break;
	}
	if (note.charCodeAt(0)<="c".charCodeAt(0)) octave+12;
	//does not work for flats or sharps yet
	//console.log(octave);
	return octave;
}
function main() {
  clearInterval(interval);
  //playMIDI();
  vf = Vex.Flow;
  dv = document.getElementById("canv");
  dv.parentElement.style.overflow="auto";
  var rend = new vf.Renderer(dv, vf.Renderer.Backends.CANVAS);
  rend.resize((width + 1), 2500); //1401
  var context = rend.getContext();
  context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
  staveposx = 16;
  staveposy = 40;
  staveposy2 = 165;
   socket.on('commnotes', function(data){
     var parsed = JSON.parse(data);
     //console.log(parsed);
      measures(parsed[0], parsed[1], parsed[2], parsed[3]);
	 document.getElementById("load").style.display = "none"; //Remove loading screen
	  var chord = [noteToMIDI(parsed[0]),  noteToMIDI(parsed[3])];
	  var chord2 = [noteToMIDI(parsed[1]), noteToMIDI(parsed[2])];
      console.log(chord);
	  //order is MIDI.chordOn(channel, [note ..] , velocity, delay);
	  //order is MIDI.chordOff(channel, [note ..], delay);
	  MIDI.chordOn(0,chord,127,1.5);
	  MIDI.chordOn(0,chord2,100,1.5);
	  MIDI.chordOff(0,chord,1.75); //odd delays yes i know
	  MIDI.chordOff(0,chord2,1.75); //odd delays yes i know
   });
  var beatnumber = 0;
  var stave;
  var stave2;
  var soprano = []; var countertenor = []; var tenor = []; var basso = [];
  function measures(data_basso, data_tenor, data_countertenor, data_soprano) {
    console.log("SATB: "+data_basso+" "+data_tenor+" "+data_countertenor+" "+data_soprano);
 // if (notedata === undefined || notedata == 0) {return false;}
    
    soprano.push(new vf.StaveNote({clef: "treble", keys: [data_soprano], duration: "q", stem_direction: 1 }));
    countertenor.push(new vf.StaveNote({clef: "treble", keys: [data_countertenor], duration: "q", stem_direction: -1 }));
    tenor.push(new vf.StaveNote({clef: "bass", keys: [data_tenor], duration: "q", stem_direction: 1 }));
    basso.push(new vf.StaveNote({clef: "bass", keys: [data_basso], duration: "q", stem_direction: -1 }));
    if (beatnumber==3) {
        stave = new vf.Stave(staveposx,staveposy,barlength);
        stave2 = new vf.Stave(staveposx,staveposy2,barlength);
        if (staveposx == 16) {
            stave.addClef("treble");
            stave2.addClef("bass"); //there i fixed it :)
          //was there more here?
            var brace = new vf.StaveConnector(stave, stave2).setType(3);
            brace.setContext(context).draw();
            var bothlines = new vf.StaveConnector(stave, stave2).setType(vf.StaveConnector.type.SINGLE_LEFT);
            bothlines.setContext(context).draw();
         //yes there ewas
                            
        }
        staveposx += barlength;
        if (staveposx >= width) {staveposy += 225; staveposy2 += 225; staveposx = 16;}
        if (start) {stave.addTimeSignature("4/4");stave2.addTimeSignature("4/4");}
        start = false;
	    
        stave.setContext(context).draw();
        stave2.setContext(context).draw();
        var lineRight = new vf.StaveConnector(stave, stave2).setType(vf.StaveConnector.type.SINGLE_RIGHT);
        lineRight.setContext(context).draw();
    
  //for (i=0; i<4; i++) {
   
  //  var voices = new vf.Voice({
  //  num_beats: i+1,
  //  beat_value: 4
  //});
    

        var vSoprano = new vf.Voice({num_beats:4, beat_value: 4});
        var vCountertenor = new vf.Voice({num_beats:4, beat_value: 4});
        var vTenor = new vf.Voice({num_beats:4, beat_value: 4});
        var vBasso = new vf.Voice({num_beats:4, beat_value: 4});
        vSoprano.setStrict(false);
        vCountertenor.setStrict(false);
        vTenor.setStrict(false);
        vBasso.setStrict(false);

        vSoprano.addTickables(soprano).setStave(stave);
        vCountertenor.addTickables(countertenor).setStave(stave);
        vTenor.addTickables(tenor).setStave(stave2);
        vBasso.addTickables(basso).setStave(stave2);

        var formatter = new vf.Formatter();

  // Make sure the staves have the same starting point for notes
        var startX = Math.max(stave.getNoteStartX(), stave2.getNoteStartX());
        stave.setNoteStartX(startX);
        stave2.setNoteStartX(startX);

        // the treble and bass are joined independently but formatted together
        formatter.joinVoices([vSoprano], [vCountertenor]);
        formatter.joinVoices([vTenor],[vBasso]);
        formatter.format([vSoprano, vCountertenor], barlength-40);//, barlength - (startX - staveposx+275)
        formatter.format([vTenor, vBasso], barlength-40);//, barlength - (startX - staveposx+275)
        vSoprano.setContext(context).draw();
        vCountertenor.setContext(context).draw();
        vTenor.setContext(context).draw();
        vBasso.setContext(context).draw();

    
        soprano = []; countertenor = []; tenor = []; basso = [];
        beatnumber=-1;
    
   // var voices = [
    //    new vf.Voice({num_beats: 4, beat_value: 4}).addTickables(soprano),
    //    new vf.Voice({num_beats: 4, beat_value: 4}).addTickables(countertenor)
    //  ]
   // voice.setStrict(false) 
  //  var voices2 = new vf.Voice({
  //   num_beats: i+1,
  //    beat_value: 4
      //  new vf.Voice({num_beats: 4}).addTickables(basso),
  //  });
  //  voices.addTickables(soprano);
    //voices.addTickables(countertenor);
    //voices2.addTickables(tenor);
    //voices2.addTickables(basso);
   // voice.setStrict(false);
    //var formatter = new vf.Formatter().joinVoices(voices).format(voices, 400);
  // vf.Formatter.FormatAndDraw(context, stave, notes);
  //  voices.forEach(function(v) {v.draw(context, stave); });
    //voices2.forEach(function(v) {v.draw(context, stave2); });
 //  voice.draw(context, stave);
   // soprano = []; countertenor = []; tenor = []; basso = [];
        }
    beatnumber++;
//  }
       // var beams = vf.Beam.generateBeams(soprano, countertenor);
    
    //beams.forEach(function(b) {b.setContext(context).draw()});
   
    

}

}}
