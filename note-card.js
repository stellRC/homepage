let newX = 0,
  newY = 0,
  initialX = 0,
  initialY = 0;

let moveStep = 1;

// Post it notes
// Get mouse position to drag note-card around the screen

const card = document.querySelector(".note-card");
card.addEventListener("mousedown", mouseDown);

function mouseDown(e) {
  // Get the event coordinates
  initialX = e.clientX;
  initialY = e.clientY;

  // Trigger events when note-card is moved
  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);
}

function mouseMove(e) {
  // Calculate movement distance

  newX = initialX - e.clientX;
  newY = initialY - e.clientY;

  // New position is now the starting position
  initialX = e.clientX;
  initialY = e.clientY;

  // Set position of note-card
  e.target.style.left = e.target.offsetLeft - newX + "px";
  e.target.style.top = e.target.offsetTop - newY + "px";
}

function mouseUp(e) {
  document.removeEventListener("mousemove", mouseMove);
}

// Key board listener still in progress

// add listener for tab key
card.addEventListener("keyup", (e) => {
  // Check if focused

  if (e.key == "a" || e.key == "w" || e.key == "d" || e.key == "s") {
    registerKey(e);
  }
});

function moveCounter(val) {
  moveStep = val;
}

// Key board input when focused via tab
function registerKey(e) {
  switch (e.key) {
    case "a":
      e.target.style.left = e.target.offsetLeft - moveStep + "px";

      break;
    case "d":
      e.target.style.left = e.target.offsetLeft - -moveStep + "px";
      break;
    case "w":
      e.target.style.top = e.target.offsetTop - moveStep + "px";
      break;
    case "s":
      e.target.style.top = e.target.offsetTop - -moveStep + "px";
      break;
  }
}
