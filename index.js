document.getElementById("switchButton").onclick = function () {
  document.getElementById("myBody").classList.toggle("theme-dark");
  let listClass = document.getElementById("myBody").classList;
  if (listClass.contains("theme-dark")) {
    localStorage.setItem("theme", "theme-dark");
  } else {
    localStorage.setItem("theme", "theme-light");
  }
};
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.getElementById("myBody").classList.add(currentTheme);
}

// const btn = document.querySelector('.switchTheme input[type="checkbox"]');
// const currentTheme = localStorage.getItem("theme");
// if (currentTheme) {
//   document.getElementById("myBody").classList.add(currentTheme);
//   if (currentTheme === "theme-dark") {
//     btn.checked = true;
//   }
// }

// function applyTheme(e) {
//   if (e.target.checked) {
//     document.getElementById("myBody").classList.add("theme-dark");
//     localStorage.setItem("theme", "theme-dark");
//   } else {
//     document.getElementById("myBody").classList.add("theme-light");
//     localStorage.setItem("theme", "theme-light");
//   }
// }

// document
//   .getElementById("switchButton")
//   .addEventListener("change", applyTheme, false);
