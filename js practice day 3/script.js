let a = document.getElementById("farm");
function abc() {
  a.style.transform = "scale(1)";
}

let snd = document.getElementById("send");

snd.addEventListener("click", function xyz() {
  a.style.transform = "scale(0)";
});
