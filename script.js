// TODO:
// * Create the divs using JavaScript. Don’t try to create them by hand by copying and pasting them in your HTML file!
// * It’s best to put your grid squares inside a “container” div. This div can be written in your HTML file.
// * Use Flexbox to make the divs appear as a grid (versus just one on each line). Despite the name, do not be tempted to research or use CSS Grid, as it will be taught in a later lesson after the foundations path. This project is an opportunity specifically to practice Flexbox!

// This will be the "container" div
// I could just add the "container" div to the html doc but I prefer to get some practice with DOM manipulation by strictly using just Javascript to add all of my elements
const body = document.querySelector("body");
const container = document.createElement("div");
container.setAttribute("id", "container");
body.appendChild(container);

// Here is where we will append the 16x16 grid of divs
// I was originally going to append each grid one by one using a for loop, but I found out that doing that within a documentFragment will be much more efficient by appending all of the divs at once
const fragment = document.createDocumentFragment();

for (let i = 1; i <= 256; i++) {
  const gridDiv = document.createElement("div");
  gridDiv.classList.add("grid-div");
  // gridDiv.textContent = `${i}`;
  fragment.appendChild(gridDiv);

  gridDiv.addEventListener("mouseover", (event) => {
    event.target.style.background = "grey";
  });
}

container.appendChild(fragment);
