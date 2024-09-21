const keyboard = document.querySelector('#keyboard');
const synth = new Tone.Synth().toDestination();
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
	synth.triggerRelease();
});

// Handle keydown event
document.addEventListener("keydown", (e) => {
    const keyPressed = e.key; // the key that was pressed (e.g., "a", "s", etc.)

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

    keyElements.forEach((key) => {
        // Check if the key element's data-key matches the keyReleased
        if (key.dataset.key === keyReleased) {
            key.classList.remove('active');  // Remove the 'active' class when key is released
            synth.triggerRelease();  // Release the note using Tone.js
        }
    });
});
