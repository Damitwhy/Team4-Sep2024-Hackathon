# Manual Testing Plan for Piano and Staff Rendering

This document outlines the manual testing procedures for the piano interface and staff rendering functionality. It covers key aspects such as note playing, sustain pedal usage, staff display, and UI responsiveness.

## Test Case 1: Piano Interface Loads

- **Steps**:
  - [ ] Open the piano page.
  - [ ] Check if all piano keys are visible.
- **Expected Result**: Piano keys should be visible.

---

## Test Case 2: Mouse Click Plays Note

- **Steps**:
  - [ ] Click a white key (C).
  - [ ] Click a black key (C#).
- **Expected Result**: Correct sound plays for each key.

---

## Test Case 3: Keyboard Press Plays Note

- **Steps**:
  - [ ] Press 'A' for C note.
  - [ ] Press 'W' for C# note.
- **Expected Result**: Sound and key highlight match pressed key.

---

## Test Case 4: Note Stops on Release

- **Steps**:
  - [ ] Hold and release a key (mouse and keyboard).
- **Expected Result**: Sound stops after releasing the key.

---

## Test Case 5: Sustain Pedal (Spacebar)

- **Steps**:
  - [ ] Hold space bar and press a note.
  - [ ] Release the note while still holding space.
  - [ ] Release space to stop sound.
- **Expected Result**: Sound sustains while space is pressed.

---

## Test Case 6: Notes Display on Staff

- **Steps**:
  - [ ] Press a piano key (e.g., C).
  - [ ] Check if note appears on staff.
- **Expected Result**: Correct note is displayed on staff.

---

## Test Case 7: Chords on Staff

- **Steps**:
  - [ ] Press multiple keys at once (C + E).
  - [ ] Check if the chord name is displayed.
- **Expected Result**: Correct notes and chord appear.

---

## Test Case 8: Responsive Design

- **Steps**:
  - [ ] Open the piano on desktop and mobile.
  - [ ] Resize the window and check key layout.
- **Expected Result**: Piano adjusts to screen size.

---

## Test Case 9: Missing Audio Files

- **Steps**:
  - [ ] Simulate a missing audio file.
  - [ ] Check if an error message is shown.
- **Expected Result**: Error is handled without breaking the app.
