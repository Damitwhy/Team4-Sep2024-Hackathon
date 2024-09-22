// IIFE to prevent global namespace pollution
(function() {
	const { Factory } = Vex.Flow;
	let notesArr = [];

	const initStaff = () => {
		const vf = new Factory({ renderer: { elementId: 'output', width: 500, height: 200 } });
		const score = vf.EasyScore();
		const system = vf.System();

		system
			.addStave({
				voices: [
				],
			})
			.addClef('treble');

		vf.draw();
	}

	initStaff();

	const removePreviousStaff = () => {
		const output = document.getElementById('output');
		output.innerHTML = '';
	}



	const addNotesToArr = (voice) => {
		notesArr.push(voice);
	}


	// document.addEventListener('keydown', (event) => {

	// 	// Define the easyscore and vexflow systems
	// 	vf = new Factory({ renderer: { elementId: 'output', width: 500, height: 200 } });
	// 	score = vf.EasyScore();
	// 	system = vf.System();

	// 	// get the key that is being pressed and the note that corresponds to it
	// 	const keyPressed = document.querySelector("[data-key='" + event.key + "']");
	// 	const note = keyPressed.dataset.note;

	// 	// Constructs the note to be added to the staff
	// 	const voice = `${note}4/w`;

	// 	// Add the note to the notes array
	// 	notesArr.push(voice);
	// 	const voices = notesArr.map((note) => score.voice(score.notes(note)));

	// 	console.log(voices);

	// // 	for (let note of notesArr) {
	// // 		notesArr.push(score.voice(score.notes(voice + "/w")));  // Add each note wrapped in a voice
	// // 	}
		
	// 	// Remove the previous SVG element
	// 	// removePreviousStaff();

	// 	// Gets the key target
	// 	system
	// 	  .addStave({
	// 		voices: voices,
	// 	  })
	// 	  .addClef('treble');

	// 	vf.draw();
	// });

	document.addEventListener('keydown', (event) => {
		// Remove the previous staff by clearing the 'output' div
		const output = document.getElementById('output');
		output.innerHTML = '';  // Clear previous SVG elements
	
		// Define the easyscore and vexflow systems
		vf = new Vex.Flow.Factory({ renderer: { elementId: 'output', width: 500, height: 200 } });
		score = vf.EasyScore();
		system = vf.System();
	
		// Get the key that is being pressed and the note that corresponds to it
		const keyPressed = document.querySelector("[data-key='" + event.key + "']");
		
		// If keyPressed is null, ignore (e.g., key doesn't correspond to a valid note)
		if (!keyPressed) return;
		
		const note = keyPressed.dataset.note;
	
		// Construct the note to be added to the staff
		const voice = `${note}4/w`;
	
		// Add the note to the notes array
		notesArr.push(voice);
	
		// Map the notes array to voices
		const voices = notesArr.map((note) => score.voice(score.notes(note)));
	
		// Add the stave with all the voices
		system
		  .addStave({
			voices: voices,
		  })
		  .addClef('treble');
	
		// Draw the new staff
		vf.draw();
	});
	

})();
