document.addEventListener('DOMContentLoaded', function() {
  // Afficher/masquer le mot de passe
  const togglePassword = document.getElementById('togglePassword');
  const password = document.getElementById('password');
  
  if (togglePassword && password) {
    togglePassword.addEventListener('click', function() {
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
      this.innerHTML = type === 'password' ? '<i class="far fa-eye"></i>' : '<i class="far fa-eye-slash"></i>';
    });
  }

  // Validation du mot de passe en temps réel
  if (password) {
    password.addEventListener('input', function() {
      const strengthBars = document.querySelectorAll('.strength-bar');
      const strengthText = document.querySelector('.strength-text');
      const value = this.value;
      
      // Réinitialiser
      strengthBars.forEach(bar => {
        bar.style.backgroundColor = '#eee';
      });
      
      if (value.length === 0) {
        strengthText.textContent = 'Force du mot de passe';
        return;
      }
      
      // Calcul de la force
      let strength = 0;
      if (value.length > 5) strength += 1;
      if (value.length > 8) strength += 1;
      if (/[A-Z]/.test(value)) strength += 1;
      if (/[0-9]/.test(value)) strength += 1;
      if (/[^A-Za-z0-9]/.test(value)) strength += 1;
      
      // Mise à jour de l'UI
      const colors = ['#ff4d4d', '#ffa64d', '#ffcc00', '#33cc33'];
      const texts = ['Très faible', 'Faible', 'Moyen', 'Fort', 'Très fort'];
      
      for (let i = 0; i < strengthBars.length; i++) {
        if (i < strength) {
          strengthBars[i].style.backgroundColor = colors[Math.min(strength-1, colors.length-1)];
        }
      }
      
      strengthText.textContent = texts[Math.min(strength, texts.length-1)];
    });
  }

  // Validation du formulaire
  const form = document.getElementById('registrationForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validation basique
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirm-password').value;
      
      if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas');
        return;
      }
      
      if (!document.getElementById('terms').checked) {
        alert('Veuillez accepter les conditions d\'utilisation');
        return;
      }
      
      // Soumission du formulaire (simulée)
      alert('Inscription réussie ! Redirection...');
      // window.location.href = 'compte.html';
    });
  }
});