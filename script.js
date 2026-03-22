let currentPage = 1;

function nextPage() {
  document.getElementById("page" + currentPage).classList.remove("active");
  currentPage++;
  document.getElementById("page" + currentPage).classList.add("active");
}

function moveNo() {
  let btn = document.getElementById("noBtn");
  let x = Math.random() * (window.innerWidth - 100);
  let y = Math.random() * (window.innerHeight - 50);
  btn.style.left = x + "px";
  btn.style.top = y + "px";
}

function playMusic() {
  document.getElementById("bgMusic").play();
}
