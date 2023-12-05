let mainContainer = document.querySelector("#main-container");
let gridSizeInput = document.querySelector("#gridSize");
let colorPick = document.querySelector("#colorPicker");
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
    case "eraser":
      div.style.backgroundColor = "white";
      break;
    case "pick":
      div.style.backgroundColor = colorPick.value;
      break;
  }
}

function getRandomColor() {
  return "#" + Math.floor(Math.random()*16777215).toString(16);
}

document.querySelectorAll("nav > ul > li").forEach(function(li) {
  li.addEventListener("click", function() {
    colorOption = li.textContent.toLowerCase();
    setActiveButton(li);
  });
});

function setActiveButton(activeButton) {
  document.querySelectorAll("nav > ul > li").forEach(function(li) {
    li.classList.remove("active");
  });

  activeButton.classList.add("active");
}

generateDivs();

gridSizeInput.addEventListener("input", generateDivs);

colorPick.addEventListener("input", function() {
  colorOption = "pick";
  setActiveButton(document.querySelector("#pick"));
});

document.querySelector(".clear").addEventListener("click", function() {
  clearSketch();
});

function clearSketch() {
  let divs = mainContainer.querySelectorAll("div");
  divs.forEach(function(div) {
    div.style.backgroundColor = "white";
  });
}
