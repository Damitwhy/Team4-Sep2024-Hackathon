// // IIFE to prevent global namespace pollution
// (function() {
// 	const { Factory } = Vex.Flow;
// 	let notesArr = [];

// 	const initStaff = () => {
// 		const vf = new Factory({ renderer: { elementId: 'output', width: 500, height: 200 } });
// 		const score = vf.EasyScore();
// 		const system = vf.System();

// 		system
// 			.addStave({
// 				voices: [
// 				],
// 			})
// 			.addClef('treble');

// 		vf.draw();
// 	}

// 	initStaff();

// 	const removePreviousStaff = () => {
// 		const output = document.getElementById('output');
// 		output.innerHTML = '';
// 	}



// 	const addNotesToArr = (voice) => {
// 		notesArr.push(voice);
// 	}

// 	document.addEventListener('keydown', (event) => {
// 		// Remove the previous staff by clearing the 'output' div
// 		const output = document.getElementById('output');
// 		output.innerHTML = '';  // Clear previous SVG elements
	
// 		// Define the easyscore and vexflow systems
// 		vf = new Vex.Flow.Factory({ renderer: { elementId: 'output', width: 500, height: 200 } });
// 		score = vf.EasyScore();
// 		system = vf.System();
	
// 		// Get the key that is being pressed and the note that corresponds to it
// 		const keyPressed = document.querySelector("[data-key='" + event.key + "']");
		
// 		// If keyPressed is null, ignore (e.g., key doesn't correspond to a valid note)
// 		if (!keyPressed) return;
		
// 		const note = keyPressed.dataset.note;
	
// 		// Construct the note to be added to the staff
// 		const voice = `${note}4/w`;
	
// 		// Add the note to the notes array
// 		notesArr.push(voice);
	
// 		// Map the notes array to voices
// 		const voices = notesArr.map((note) => score.voice(score.notes(note)));
	
// 		// Add the stave with all the voices
// 		system
// 		  .addStave({
// 			voices: voices,
// 		  })
// 		  .addClef('treble');
	
// 		// Draw the new staff
// 		vf.draw();
// 	});


	

// })();

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
				voices: [],
			})
			.addClef('treble');

		vf.draw();
	};

	initStaff();

	const removePreviousStaff = () => {
		const output = document.getElementById('output');
		output.innerHTML = '';  // Clear previous SVG elements
	};

	const renderStaff = () => {
		// Remove the previous staff by clearing the 'output' div
		removePreviousStaff();
	
		// Define the easyscore and vexflow systems
		const vf = new Vex.Flow.Factory({ renderer: { elementId: 'output', width: 500, height: 200 } });
		const score = vf.EasyScore();
		const system = vf.System();
	
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
	};

	// Handle keydown event to add notes
	document.addEventListener('keydown', (event) => {
		const keyPressed = document.querySelector("[data-key='" + event.key + "']");
		
		// If keyPressed is null, ignore (e.g., key doesn't correspond to a valid note)
		if (!keyPressed) return;
		
		const note = keyPressed.dataset.note;

		// Construct the note to be added to the staff
		const voice = `${note}4/w`;
	
		// Add the note to the notes array if it's not already present
		if (!notesArr.includes(voice)) {
			notesArr.push(voice);
			renderStaff();  // Re-render the staff with updated notes
		}
	});

	// Handle keyup event to remove notes
	document.addEventListener('keyup', (event) => {
		const keyPressed = document.querySelector("[data-key='" + event.key + "']");
		
		// If keyPressed is null, ignore (e.g., key doesn't correspond to a valid note)
		if (!keyPressed) return;
		
		const note = keyPressed.dataset.note;

		// Construct the note to be removed from the staff
		const voice = `${note}4/w`;

		// Remove the note from the notes array
		notesArr = notesArr.filter((n) => n !== voice);
		renderStaff();  // Re-render the staff with updated notes
	});

})();
