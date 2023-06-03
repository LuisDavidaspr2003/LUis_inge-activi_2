document.getElementById("searchInput").addEventListener("keyup", function() {
    var input = this.value.toLowerCase();
    var slides = document.getElementsByClassName("carousel-slide");

    for (var i = 0; i < slides.length; i++) {
      var slide = slides[i];
      var name = slide.querySelector("p").innerText.toLowerCase();

      if (name.includes(input)) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    }
  });