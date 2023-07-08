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

document.getElementById("reply").onclick = function () {
  document.getElementById("replyRespond").style.display = "block";
  document.getElementById("leaveComment").style.display = "none";
};

document.getElementById("cancelReply").onclick = function () {
  document.getElementById("replyRespond").style.display = "none";
  document.getElementById("leaveComment").style.display = "block";
};
