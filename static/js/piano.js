(function () {
  const keyboard = document.querySelector('#keyboard');
  const keyElements = document.querySelectorAll('.key');
  const pressedKeys = new Set();
  let sustainPedal = false;

  const sampler = createSampler();

  // Initialize sampler with sound files
  function createSampler() {
    return new Tone.Sampler({
      urls: {
        C4: 'C4.mp3',
        'D#4': 'Ds4.mp3',
        'F#4': 'Fs4.mp3',
        A4: 'A4.mp3',
        C5: 'C5.mp3',
        'D#5': 'Ds5.mp3',
      },
      baseUrl: 'https://tonejs.github.io/audio/salamander/',
      onload: () => console.log('Sampler loaded'),
    }).toDestination();
  }

  // Handle mouse click events for triggering notes
  function handleMouseDown(e) {
    const key = e.target.dataset.note;
    if (key) {
      playKey(e.target, key);
    }
  }

  function handleMouseUp(e) {
    const key = e.target.dataset.note;
    if (key && !sustainPedal) {
      releaseKey(e.target, key);
    }
  }

  // Handle keyboard events for triggering notes
  function handleKeyDown(e) {
    const keyPressed = e.key.toLowerCase();
    if (pressedKeys.has(keyPressed)) return;

    pressedKeys.add(keyPressed);

    if (keyPressed === ' ') {
      sustainPedal = true;
      return;
    }

    triggerKeyFromKeyboard(keyPressed);
  }

  function handleKeyUp(e) {
    const keyReleased = e.key.toLowerCase();
    pressedKeys.delete(keyReleased);

    if (keyReleased === ' ') {
      sustainPedal = false;
      releaseAllKeys();
      return;
    }

    releaseKeyFromKeyboard(keyReleased);
  }

  // Trigger note functions
  function playKey(element, note) {
    sampler.triggerAttack(`${note}4`);
    element.classList.add('active');
  }

  function releaseKey(element, note) {
    sampler.triggerRelease(`${note}4`);
    element.classList.remove('active');
  }

  function triggerKeyFromKeyboard(keyPressed) {
    keyElements.forEach((keyElement) => {
      if (keyElement.dataset.key === keyPressed) {
        playKey(keyElement, keyElement.dataset.note);
      }
    });
  }

  function releaseKeyFromKeyboard(keyReleased) {
    keyElements.forEach((keyElement) => {
      if (keyElement.dataset.key === keyReleased && !sustainPedal) {
        releaseKey(keyElement, keyElement.dataset.note);
      }
    });
  }

  function releaseAllKeys() {
    keyElements.forEach((keyElement) => {
      if (!pressedKeys.has(keyElement.dataset.key)) {
        releaseKey(keyElement, keyElement.dataset.note);
      }
    });
  }

  // Event listeners
  keyboard.addEventListener('mousedown', handleMouseDown);
  document.addEventListener('mouseup', handleMouseUp);
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('keyup', handleKeyUp);
})();
