!(function () {
  if (!document.getElementById("loader")) {
    let e = document.createElement("div");
    e.id = "loader";
    let d = document.createElement("div");
    (d.id = "loader_inner"),
      e.appendChild(d),
      document.documentElement.appendChild(e);
  }
  $("#loader_inner").fadeIn(), $("#loader").delay(400).fadeIn("slow");
})();
