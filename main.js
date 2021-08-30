var slider = document.getElementById("slideRange");
var viewsNum = document.getElementById("value");
var viewsCost = document.getElementById("cost");
var checkbox = document.getElementById("myToggle");
var x = 8;

viewsNum.innerHTML = slider.value;
slider.oninput = function () {
  viewsNum.innerHTML = this.value;
  if (this.value <= 10) {
    viewsCost.innerHTML = "$" + x.toFixed(2);
  } else if (this.value <= 50) {
    viewsCost.innerHTML = "$" + (x + 4.0).toFixed(2);
  } else if (this.value <= 100) {
    viewsCost.innerHTML = "$" + (x + 8.0).toFixed(2);
  } else if (this.value <= 500) {
    viewsCost.innerHTML = "$" + (x + 8.0).toFixed(2);
  } else if (this.value <= 999) {
    viewsCost.innerHTML = "$" + (x + 16.0).toFixed(2);
  } else if ((this.value = 1000)) {
    viewsCost.innerHTML = "$" + (x + 24.0).toFixed(2);
  }
  if (this.value <= 10 && checkbox.checked == true) {
    viewsCost.innerHTML = "$" + (x.toFixed(2) * 0.75).toFixed(2);
  } else if (this.value <= 50 && checkbox.checked == true) {
    viewsCost.innerHTML = "$" + ((x + 4.0).toFixed(2) * 0.75).toFixed(2);
  } else if (this.value <= 100 && checkbox.checked == true) {
    viewsCost.innerHTML = "$" + ((x + 8.0).toFixed(2) * 0.75).toFixed(2);
  } else if (this.value <= 500 && checkbox.checked == true) {
    viewsCost.innerHTML = "$" + ((x + 8.0).toFixed(2) * 0.75).toFixed(2);
  } else if (this.value <= 999 && checkbox.checked == true) {
    viewsCost.innerHTML = "$" + ((x + 16.0).toFixed(2) * 0.75).toFixed(2);
  } else if (this.value <= 1000 && checkbox.checked == true) {
    viewsCost.innerHTML = "$" + ((x + 24.0).toFixed(2) * 0.75).toFixed(2);
  }
};

slider.addEventListener("mousemove", function () {
  var x = slider.value;
  var color =
    "linear-gradient(90deg, rgba(165, 243, 235)" +
    x * 0.1 +
    "%,  rgba(214, 214, 214)" +
    x * 0.1 +
    "%)";
  slider.style.background = color;
});
