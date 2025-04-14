let sliders = document.querySelectorAll(".adjust-input");

// Filters change values based on slider input

sliders.forEach((slider) => {
  slider.oninput = function () {
    adjustFilter(this.value, this.dataset.type, this.dataset.name);
  };
});

function adjustFilter(value, type, name) {
  document.querySelector(`#${name}`).style = `filter:${name}(${value}${type});`;
}
