const body = document.querySelector("body");

// A button will placed above the grid and will prompt the user for a grid size
const newGridButton = document.createElement("button");
newGridButton.setAttribute("id", "new-grid-button");
newGridButton.textContent = "New Grid";
body.appendChild(newGridButton);

newGridButton.addEventListener("click", (event) => {
  let gridSizePrompt = prompt("Enter squares per side (max 100):");
  if (gridSizePrompt > 100) {
    console.log(
      "You have entered a number greater than 100! \nDefaulting to 100 ...."
    );
    gridSizePrompt = 100;
  }
  let gridSize = gridSizePrompt ** 2;

  // This will check if there is an existing grid. If so, it will remove the old one and continue with the event
  let oldGrid = document.getElementById("container");
  if (oldGrid !== null) {
    console.log(
      "Old Grid Exists! \n\nRemoving Old Grid ....\n\nCreating New Grid ...."
    );
    oldGrid.remove();
  } else {
    console.log("Grid Does NOT exist! \n\nCreating New Grid ....");
  }

  // Container for all of the divs
  const container = document.createElement("div");
  container.setAttribute("id", "container");
  body.appendChild(container);

  // This, along with the for loop, will efficiently append all divs at once rather than one at a time.
  const fragment = document.createDocumentFragment();

  for (let i = 1; i <= gridSize; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("grid-div");
    fragment.appendChild(gridDiv);

    gridDiv.addEventListener("mouseover", (event) => {
      event.target.style.background = "grey";
    });
  }
  container.appendChild(fragment);
});
