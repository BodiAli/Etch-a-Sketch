let mainContainer = document.querySelector("#main-container");
let gridSizeInput = document.querySelector("#gridSize");
let clearButton = document.querySelector(".clear");
let defaultNumber = gridSizeInput.value ** 2;

function generateDivs() {
  mainContainer.innerHTML = ""; // Clear existing divs
  defaultNumber = gridSizeInput.value ** 2;
  
  for (let i = 0; i < defaultNumber; i++) {
    let div = document.createElement("div");
    mainContainer.appendChild(div);
  }

  // Set the size of each div based on the grid size
  let divSize = 100 / gridSizeInput.value;
  mainContainer.style.setProperty("--grid-size", divSize + "%");
}

generateDivs();

gridSizeInput.addEventListener("input", generateDivs);
clearButton.addEventListener("click", generateDivs); // You may need to implement clearing logic here
