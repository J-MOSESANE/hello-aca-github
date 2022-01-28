function Toggle() {
    var x = document.getElementById("DivMessage");
    var btn = document.getElementById("btnRead");

    if (x.style.display === "block") {
      x.style.display = "none";
      btn.textContent = "Read Message"
    } else {
      x.style.display = "block";
      btn.textContent = "Hide Message";
    }
  }