// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const kickDrum = new Audio('sounds/kick-drum.mp3');
const hiHat = new Audio('sounds/hi-hat.mp3');
const snareDrum = new Audio('sounds/snare-drum.mp3');

const kickDrumTimes = document.querySelector('#kick-drum-times');
const snareDrumTimes = document.querySelector('#snare-drum-times');
const hiHatTimes = document.querySelector('#hi-hat-times');

const counter = document.getElementById('count');
let interval = null;

// select all the checkboxes

// This function is called every 600ms
let tickPlayed = 0;

let kickDrumFlag = false;
let hiHatFlag = false;
let snareDrumFlag = false;
function update() {
	// Play the 'tick' sound
	if (kickDrumFlag == true) {
		if (tickPlayed == kickDrumTimes.value) {
			kickDrum.play();
		}
	}
	if (hiHatFlag == true) {
		if (tickPlayed == hiHatTimes.value) {
			hiHat.play();
		}
	}
	if (snareDrumFlag == true) {
		if (tickPlayed == snareDrumTimes.value) {
			snareDrum.play();
		}
	}
	counter.innerHTML = '';
	counter.innerHTML = tickPlayed;
	if (tickPlayed % 4 == 0) {
		tock.play();
		tickPlayed = 0;
		tickPlayed++;
	} else {
		tick.play();
		tickPlayed++;
	}
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
	interval = setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);

const allCbx = document.querySelectorAll("input[type='checkbox']");
allCbx.forEach((cbx) => {
	cbx.addEventListener('change', function (event) {
		if (!cbx.checked && event.target.value == 'metronome') {
			//stop ticktock
			clearInterval(interval);
		} else if (cbx.checked && event.target.value == 'metronome') {
			setupUpdate();
		}

		if (cbx.checked && event.target.value == 'kick-drum') {
			kickDrumFlag = true;
		} else if (!cbx.checked && event.target.value == 'kick-drum') {
			kickDrumFlag = false;
		}

		if (cbx.checked && event.target.value == 'hi-hat') {
			hiHatFlag = true;
		} else if (!cbx.checked && event.target.value == 'hi-hat') {
			hiHatFlag = false;
		}

		if (cbx.checked && event.target.value == 'snare-drum') {
			snareDrumFlag = true;
		} else if (!cbx.checked && event.target.value == 'snare-drum') {
			snareDrumFlag = false;
		}
	});
});

/* Julian Code */

// Setup 'tick' sound
// const tick = new Audio('sounds/tick.mp3');
// const tock = new Audio('sounds/tock.mp3');

// // This function is called every 600ms
// let beat = 0;
// function update() {
// 	let counter = document.querySelector('#count');
// 	beat + 1;
// 	if (beat % 4) {
// 		tock.play;
// 	} else {
// 		// Play the 'tick' sound
// 		tick.play();
// 	}
// }

// // This function sets up update() to be called every 600ms
// function setupUpdate() {
// 	setInterval(update, 600);
// }

// // Call setupUpdate() once after 300ms
// setTimeout(setupUpdate, 300);
