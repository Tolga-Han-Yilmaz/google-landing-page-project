let light = document.getElementById("change");

let back = document.getElementById("body");

light.addEventListener("click", allBack);

function allBack() {
  if (light.innerHTML == "Dark") {
    back.style.backgroundColor = "black";
    back.style.color = "white";

    allA();
    darkLight();
  } else if (light.innerHTML == "Light") {
    light.innerHTML = "Dark";
    back.style.backgroundColor = "white";
    back.style.color = "black";
    light.style.backgroundColor = "white";
    light.style.color = "black";
    allA1();
  }
}
function darkLight() {
  light.innerHTML = "Light";
}

function allA() {
  const myCollection2 = document.getElementsByTagName("a");
  for (let i = 0; i < myCollection2.length; i++) {
    myCollection2[i].style.color = "white";
  }
}

function allA1() {
  const myCollection2 = document.getElementsByTagName("a");
  for (let i = 0; i < myCollection2.length; i++) {
    myCollection2[i].style.color = "black";
  }
}
