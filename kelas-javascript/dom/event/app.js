const buttonAlert = document.querySelector("#btn");

buttonAlert.onclick = function () {
  console.log("You clicked me");
};

buttonAlert.onmouseover = function () {
  console.log("Don't touch me");
};

buttonAlert.addEventListener("click", () => {
  alert("You clicked me!!!");
});
