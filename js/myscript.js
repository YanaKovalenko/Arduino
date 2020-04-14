document.addEventListener("DOMContentLoaded", () => {
    setTimeout(animatedDelete, 2600);
});

function animatedDelete() {
  setTimeout("document.querySelector('.main-info').classList.remove('animated')", 650);
  setTimeout("document.querySelector('.main-title').classList.remove('animated');", 200);
  setTimeout("document.querySelector('.main-link').classList.remove('animated');", 400);  
  document.querySelector('.main-subtitle').classList.remove('animated');
  document.querySelector('.main-year').classList.remove('animated');     
}

function hmenu() {
  alert('hello');
}