let mainContainer = document.querySelector("#main-container");
let gridSizeInput = document.querySelector("#gridSize");
let colorOption = "black";

function generateDivs() {
  mainContainer.innerHTML = "";
  let defaultNumber = gridSizeInput.value ** 2;

  for (let i = 0; i < defaultNumber; i++) {
    let div = document.createElement("div");
    mainContainer.appendChild(div);

    div.addEventListener("mouseover", function() {
      setColor(div);
    });
  }

  let divSize = 100 / gridSizeInput.value;
  mainContainer.style.setProperty("--grid-size", divSize + "%");
}

function setColor(div) {
  switch (colorOption) {
    case "black":
      div.style.backgroundColor = "black";
      break;
    case "rainbow":
      div.style.backgroundColor = getRandomColor();
      break;
    case "gray-scale":
      let currentColor = div.style.backgroundColor || "white";
      let currentBrightness = calculateBrightness(currentColor);
      let newColor = lightenColor(currentColor, currentBrightness);
      div.style.backgroundColor = newColor;
      break;
    case "eraser":
      div.style.backgroundColor = "white";
      break;
    case "pick":
      break;
    default:
      break;
  }
}

function getRandomColor() {
  return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function calculateBrightness(color) {

  const rgb = parseInt(color.slice(1), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;
  return r + g + b;
}

function lightenColor(color, brightness) {
  const factor = 0.2; 
  const rgb = parseInt(color.slice(1), 16);
  const r = Math.min(255, Math.round((brightness + (255 - brightness) * factor) * (rgb >> 16) / brightness));
  const g = Math.min(255, Math.round((brightness + (255 - brightness) * factor) * (rgb >> 8) / brightness));
  const b = Math.min(255, Math.round((brightness + (255 - brightness) * factor) * (rgb >> 0) / brightness));
  return "#" + (r << 16 | g << 8 | b).toString(16);
}

document.querySelectorAll("nav > ul > li").forEach(function(li) {
  li.addEventListener("click", function() {
    colorOption = li.textContent.toLowerCase();
  });
});

generateDivs();

gridSizeInput.addEventListener("input", generateDivs);
