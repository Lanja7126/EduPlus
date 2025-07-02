const translations = {
  en: {
    hero_title: "Learn for a better future",
    hero_subtitle: "Our platform supports SDG 4: quality education for all.",
    cta_button: "Start learning now",
    course_popular: "Popular Courses",
  },
  fr: {
    hero_title: "Apprendre pour un avenir meilleur",
    hero_subtitle: "Notre plateforme soutient l’ODD 4 : une éducation de qualité accessible à tous.",
    cta_button: "Commencer maintenant",
    course_popular: "Nos cours populaires",
  }
};

const langSelect = document.getElementById('lang-select');
langSelect.addEventListener('change', (e) => {
  const lang = e.target.value;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    el.textContent = translations[lang][key];
  });
});
