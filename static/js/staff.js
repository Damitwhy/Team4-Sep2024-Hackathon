// IIFE to prevent global namespace pollution
(function() {
	const { Factory } = Vex.Flow;
	const { Chord } = Tonal;
	let notesArr = [];

	// Create a VexFlow factory
	const createVexFlowFactory = () => {
		return new Factory({ renderer: { elementId: 'output', width: 500, height: 200 } });
	};

	// Initialize an empty staff
	const initStaff = () => {
		const vf = createVexFlowFactory();
		const score = vf.EasyScore();
		const system = vf.System();

		system.addStave({ voices: [] }).addClef('treble');
		vf.draw();
	};

	// Remove the current staff
	const removePreviousStaff = () => {
		const output = document.getElementById('output');
		output.innerHTML = '';  // Clear previous SVG elements
	};

	// Render the updated staff with notes
	const renderStaff = () => {
		removePreviousStaff(); // Clear existing staff

		const vf = createVexFlowFactory();
		const score = vf.EasyScore();
		const system = vf.System();

		// Map notes to voices for rendering
		const voices = notesArr.map((note) => score.voice(score.notes(note)));
		system.addStave({ voices: voices }).addClef('treble');

		vf.draw();
		updateChordDisplay();  // Update the chord display when rendering the staff
	};

	// Get note from the key that was pressed
	const getNoteFromKey = (key) => {
		const keyPressed = document.querySelector(`[data-key='${key}']`);
		return keyPressed ? keyPressed.dataset.note : null;
	};

	// Update the chord display based on the current notes array
	const updateChordDisplay = () => {
		// Clean the notes by removing /w
		const cleanedNotes = notesArr.map(note => note.replace(/\/w$/, ''));
		
		// Get the chord based on cleaned notes
		const chord = Chord.detect(cleanedNotes)[0] || "No Chord"; // Using `Chord.detect` to get the chord name
		const chordDisplay = document.getElementById('chordDisplay');
		chordDisplay.textContent = chord;
		chordDisplay.style.fontSize = '2rem';  // Set the display font size to 2rem
	};

	// Handle key down event - adds the note to the array and re-renders
	const handleKeyDown = (event) => {
		const note = getNoteFromKey(event.key);
		if (!note) return; // Ignore if key is not mapped to a note

		const voice = `${note}4/w`; // Add note in the format C4/w (whole note)

		// Add the note to the array if not already present
		if (!notesArr.includes(voice)) {
			notesArr.push(voice);
			renderStaff();  // Re-render the staff with updated notes
		}
	};

	// Handle key up event - removes the note from the array and re-renders
	const handleKeyUp = (event) => {
		const note = getNoteFromKey(event.key);
		if (!note) return; // Ignore if key is not mapped to a note

		const voice = `${note}4/w`;

		// Remove the note from the array
		notesArr = notesArr.filter((n) => n !== voice);
		renderStaff();  // Re-render the staff with updated notes
	};

	// Attach event listeners to handle keydown and keyup
	const attachEventListeners = () => {
		document.addEventListener('keydown', handleKeyDown);
		document.addEventListener('keyup', handleKeyUp);
	};

	// Initialize the staff and event listeners
	initStaff();
	attachEventListeners();

})();