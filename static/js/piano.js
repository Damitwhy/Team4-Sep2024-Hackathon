const keyboard = document.getElementById("keyboard");
const synth = new Tone.Synth().toDestination();
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

console.log(keyboard);
keyboard.addEventListener("click", (e) => {
	const key = e.target.dataset.note;
	sampler.triggerAttackRelease(`${key}4`, "8n");
});

keyboard.addEventListener("mouseup", (e) => {
	synth.triggerRelease();
});

addEventListener("keydown", (e) => {
	const keyPressed = e.keyCode;
	const keyArr = document.querySelectorAll('.key');
	let keyTarget = keyArr.find(key => key.dataset.keyCode == keyPressed);

	console.log(keyTarget);
	

});


keyboard.addEventListener("keyup", (e) => {
	synth.triggerRelease();
});
