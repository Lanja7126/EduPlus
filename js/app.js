const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.menu ul'); // On cible uniquement le <ul>

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // <-- on ajoute .active au <ul>, pas à .menu
  toggleBtn.classList.toggle('open');  // <-- animation du bouton burger (X)
});
