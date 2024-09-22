// IIFE to prevent global namespace pollution
(function() {
	const { Factory } = Vex.Flow;
	let notesArr = [];

	const createVexFlowFactory = () => {
		return new Factory({ renderer: { elementId: 'output', width: 500, height: 200 } });
	};

	const initStaff = () => {
		const vf = createVexFlowFactory();
		const score = vf.EasyScore();
		const system = vf.System();

		system.addStave({ voices: [] }).addClef('treble');
		vf.draw();
	};

	const removePreviousStaff = () => {
		const output = document.getElementById('output');
		output.innerHTML = '';  // Clear previous SVG elements
	};

	const renderStaff = () => {
		removePreviousStaff();
		const vf = createVexFlowFactory();
		const score = vf.EasyScore();
		const system = vf.System();

		const voices = notesArr.map((note) => score.voice(score.notes(note)));
		system.addStave({ voices: voices }).addClef('treble');
		vf.draw();
	};

	const getNoteFromKey = (key) => {
		const keyPressed = document.querySelector(`[data-key='${key}']`);
		return keyPressed ? keyPressed.dataset.note : null;
	};

	const handleKeyDown = (event) => {
		const note = getNoteFromKey(event.key);
		if (!note) return;

		const voice = `${note}4/w`;
		if (!notesArr.includes(voice)) {
			notesArr.push(voice);
			renderStaff();
		}
	};

	const handleKeyUp = (event) => {
		const note = getNoteFromKey(event.key);
		if (!note) return;

		const voice = `${note}4/w`;
		notesArr = notesArr.filter((n) => n !== voice);
		renderStaff();
	};

	const attachEventListeners = () => {
		document.addEventListener('keydown', handleKeyDown);
		document.addEventListener('keyup', handleKeyUp);
	};

	// Initialize the staff and event listeners
	initStaff();
	attachEventListeners();

})();
