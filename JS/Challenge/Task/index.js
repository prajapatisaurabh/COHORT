function myFunction() {
  const colorText = document.getElementById("colortext").innerText;
  const colorBottontt = document.createElement("button");
  colorBottontt.innerText = colorText;
  colorBottontt.style = `background-color: ${colorText}`;
  document.getElementById("colorButtons").append(colorBottontt);
}
