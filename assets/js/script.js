const disabledKeys = ["c", "C", "x", "J", "u", "I"]; // keys that will be disabled

const showAlert = e => {
  e.preventDefault(); // preventing its default behaviour
  // return alert("Sorry, you can't view or copy source codes this way!");
  return alert("Lo Sentimos, pero no tienes permitido ver o copiar este código, es material privado.");
}

document.addEventListener("contextmenu", e => {
  showAlert(e); // calling showAlert() function on mouse right click
});

document.addEventListener("keydown", e => {
  // calling showAlert() function, if the pressed key matched to disabled keys
  if((e.ctrlKey && disabledKeys.includes(e.key)) || e.key === "F12") {
    showAlert(e);
  }
});