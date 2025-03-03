function addChange() {
  const colorText = document.getElementById("colorinput").value;
  const colorBottontt = document.createElement("button");
  colorBottontt.innerText = colorText;
  colorBottontt.addEventListener("click", () => {
    document.body.style.backgroundColor = colorText;
  });
  colorBottontt.style = `background-color: ${colorText}`;
  document.getElementById("colorButtons").append(colorBottontt);
  document.getElementById("colorinput").value = "";
}
