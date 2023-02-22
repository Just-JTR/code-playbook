/* Dark Mode */
const toggle = document.getElementById('darkMode');
const body = document.body;

toggle.addEventListener('input', (e) => {
  const isChecked = e.target.checked;
  
  if(isChecked) {
    body.classList.remove('dark-mode');
  } else {
    body.classList.add('dark-mode');
  }
});

/* Forms Slider */

const price = document.querySelector("#forms-slider");
const output = document.querySelector(".forms-slider-output");

output.textContent = price.value;

price.addEventListener("input", () => {
  output.textContent = price.value;
});
