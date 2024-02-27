const showDetails_1 = document.getElementById("box1");
const showDetails_2 = document.getElementById("box2");
const showDetails_3 = document.getElementById("box3");

showDetails_1.addEventListener("click", () => {
  showDetails_1.classList.add("active_box");
  showDetails_2.classList.remove("active_box");
  showDetails_3.classList.remove("active_box");
});

showDetails_2.addEventListener("click", () => {
  showDetails_1.classList.remove("active_box");
  showDetails_2.classList.add("active_box");
  showDetails_3.classList.remove("active_box");
});

showDetails_3.addEventListener("click", () => {
  showDetails_1.classList.remove("active_box");
  showDetails_2.classList.remove("active_box");
  showDetails_3.classList.add("active_box");
});
