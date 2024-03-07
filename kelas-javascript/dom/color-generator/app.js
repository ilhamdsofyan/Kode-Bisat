const buttonGenerate = document.querySelector("#btn-generate");
const containerRgb = document.querySelector("#rgb");

buttonGenerate.addEventListener("click", () => {
  let r = Math.floor(Math.random() * 255) + 1;
  let g = Math.floor(Math.random() * 255) + 1;
  let b = Math.floor(Math.random() * 255) + 1;

  let rgb = `rgb(${r}, ${g}, ${b})`;

  document.querySelector("body").style.backgroundColor = rgb;

  containerRgb.textContent = rgb;
});
