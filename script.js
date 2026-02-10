const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const container = document.querySelector(".container");
const celebration = document.getElementById("Celebration");

// window.addEventListener('load', () => {
//     const btnWidth = noBtn.offsetWidth;
//     const btnHeight = noBtn.offsetHeight;
//     const maxX = window.innerWidth * 0.6 - btnWidth - 40;
//     const maxY = window.innerHeight * 0.6 - btnHeight - 40;
//     const offsetX = (window.innerWidth * 0.6 - maxX) / 2;
//     const offsetY = (window.innerHeight * 0.6 - maxY) / 2;

//     const initX = offsetX + Math.random() * maxX;
//     const initY = offsetY + Math.random() * maxY;

//     noBtn.style.left = `${initX}px`;
//     noBtn.style.top = `${initY}px`;
// });





// Define safe positions (adjust these % values to your liking)
const safePositions = [
  { left: '0%', top: '-130%' },
  { left: '70%', top: '125%' },
  { left: '15%', top: '70%' },
  { left: '65%', top: '-65%' },
  { left: '100%', top: '40%' },
  { left: '80%', top: '-50%' },
  { left: '30%', top: '80%' },
  { left: '15%', top: '120%' },
  { left: '90%', top: '-30%' },
  { left: '70%', top: '-25%' },
  { left: '-15%', top: '70%' },
  { left: '16%', top: '-65%' },
  { left: '-40%', top: '40%' },
  { left: '80%', top: '-50%' },
  { left: '-30%', top: '80%' },
  { left: '15%', top: '-20%' },
  { left: '20%', top: '-130%' },
  { left: '-70%', top: '25%' },
  { left: '-15%', top: '0%' },
  { left: '-65%', top: '-15%' },
  { left: '-40%', top: '10%' },
  { left: '0%', top: '-50%' },
  { left: '-30%', top: '80%' },
  { left: '55%', top: '-120%' }
];

let lastIndex = -1;

noBtn.addEventListener('mouseover', () => {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * safePositions.length);
  } while (newIndex === lastIndex); // avoid same position twice in a row

  lastIndex = newIndex;
  const pos = safePositions[newIndex];

  noBtn.style.left = pos.left;
  noBtn.style.top  = pos.top;
});
yesBtn.addEventListener('click', () => {;
    container.style.display = 'none';
    celebration.classList.remove('hidden');
});