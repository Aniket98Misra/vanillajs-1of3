const keys = Array.from(document.querySelectorAll(".key"));

const keyCode = {
  A: 65,
  S: 83,
  D: 68,
  F: 70,
  G: 71,
  H: 72,
  J: 74,
  K: 75,
  L: 76,
};

// const basicBeatPattern = [
//   { key: "a", time: 0 },
//   { key: "s", time: 500 },
//   { key: "d", time: 1000 },
//   { key: "s", time: 1500 },
//   { key: "f", time: 2000 },
//   { key: "s", time: 2500 },
//   { key: "d", time: 3000 },
//   { key: "s", time: 3500 },
// ];
// function playBeat(basicBeatPattern) {
//   beatPattern.forEach((note) => {
//     setTimeout(() => {
//       const event = new KeyboardEvent("keydown", { key: note.key });
//       document.dispatchEvent(event);
//     }, note.time);
//   });
// }

// document.addEventListener("keyup", () => {
//   keys.forEach((key) => {
//     key.classList.remove("playing");
//   });
// });
document.addEventListener("keydown", (event) => {
  const audio = document.querySelector(`audio[data-key="${event.key}"]`);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
});

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

function playSound(e) {
  const audio = document.querySelector(
    `audio[data-key="${e.keyCode || keyCode[e.target.innerHTML]}"]`
  );

  const key = document.querySelector(
    `div[data-key="${e.keyCode || keyCode[e.target.innerHTML]}"]`
  );

  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);

keys.forEach((key) =>
  key.addEventListener("click", (e) => {
    playSound(e);
  })
);
