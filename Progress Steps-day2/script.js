const progress = document.getElementById("progress");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const saveButton = document.getElementById("save");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

nextButton.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  updateProgress();
});

prevButton.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  updateProgress();
});

function updateProgress() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const activeCircles = document.querySelectorAll(".active");
  progress.style.width =
    ((activeCircles.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prevButton.disabled = true;
  } else if (currentActive === circles.length) {
    nextButton.disabled = true;
    saveButton.hidden = false;
    saveButton.disabled = false;
  } else {
    prevButton.disabled = false;
    nextButton.disabled = false;

    saveButton.hidden = true;
    saveButton.disabled = true;
  }
}
