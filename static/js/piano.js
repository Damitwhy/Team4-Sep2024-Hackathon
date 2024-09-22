// IIFE to prevent global namespace pollution
(function () {

	const keyboard = document.querySelector('#keyboard');

	const keyElements = document.querySelectorAll('.key');
	const sampler = new Tone.Sampler({
		urls: {
			"C4": "C4.mp3",
			"D#4": "Ds4.mp3",
			"F#4": "Fs4.mp3",
			"A4": "A4.mp3",
			"C5": "C5.mp3",
			"D#5": "Ds5.mp3",
		},
		baseUrl: "https://tonejs.github.io/audio/salamander/",
		onload: () => {
			console.log('Sampler loaded');
		}
	}).toDestination();

	keyboard.addEventListener("click", e => {
		const key = e.target.dataset.note;
		sampler.triggerAttackRelease(`${key}4`, "8n");
	});

	keyboard.addEventListener("mouseup", e => {
		sampler.triggerRelease();
	});

	// Set to track pressed keys
	const pressedKeys = new Set()

	// Handle keydown event
	document.addEventListener("keydown", (e) => {
		const keyPressed = e.key; // the key that was pressed (e.g., "a", "s", etc.)
		
		// If the key is already pressed, ignore further keydown events
		if (pressedKeys.has(keyPressed)) {
			return;
		}

		pressedKeys.add(keyPressed); // Mark the key as pressed

		keyElements.forEach((key) => {
			// Check if the key element's data-key matches the keyPressed
			if (key.dataset.key === keyPressed) {
				key.classList.add('active');  // Add the 'active' class for styling when key is pressed
				sampler.triggerAttack(`${key.dataset.note}4`, "8n");  // Play the note using Tone.js
			}
			
		});
	});

	// Handle keyup event
	document.addEventListener("keyup", (e) => {
		const keyReleased = e.key;  // the key that was released

		pressedKeys.delete(keyReleased); // Mark the key as released

		keyElements.forEach((key) => {
			// Check if the key element's data-key matches the keyReleased
			if (key.dataset.key === keyReleased) {
				key.classList.remove('active');  // Remove the 'active' class when key is released
				sampler.triggerRelease();  // Release the note using Tone.js
			}
		});
	});

})();