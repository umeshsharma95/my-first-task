const showDetails_1 = document.getElementById("box1");
const showDetails_2 = document.getElementById("box2");
const showDetails_3 = document.getElementById("box3");

showDetails_1.addEventListener("click", () => {
  let x = document.getElementById("hide_a");
  let y = document.getElementById("hide_b");
  let z = document.getElementById("hide_c");

  if ((x.style.display = "none")) {
    x.style.display = "flex";
    z.style.display = "none";
    y.style.display = "none";
  } else {
    x.style.display = "flex";
  }
});
showDetails_2.addEventListener("click", () => {
  let x = document.getElementById("hide_a");
  let y = document.getElementById("hide_b");
  let z = document.getElementById("hide_c");

  if ((y.style.display = "none")) {
    y.style.display = "flex";
    z.style.display = "none";
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
});
showDetails_3.addEventListener("click", () => {
  let x = document.getElementById("hide_a");
  let y = document.getElementById("hide_b");
  let z = document.getElementById("hide_c");

  if ((z.style.display = "none")) {
    z.style.display = "flex";
    y.style.display = "none";
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
});
