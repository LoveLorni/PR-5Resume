
document.addEventListener('DOMContentLoaded', function () {
 
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');
  
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('active');
    });
  

    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const tab = button.dataset.tab;
        tabContents.forEach(content => {
          content.classList.toggle('active', content.dataset.tab === tab);
        });
      });
    });
  
    
    document.addEventListener('scroll', () => {
      const section = document.querySelector('.landing-page');
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight) {
        section.classList.add('visible');
      }
    });
  
 
    function closeModal() {
      document.querySelector('.modal').style.display = 'none';
    }
  
    
    document.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.classList.toggle('active');
      });
    });
  
   
    document.querySelectorAll('.gallery button').forEach(button => {
      button.addEventListener('click', () => {
        const category = button.dataset.category;
        document.querySelectorAll('.gallery-item').forEach(item => {
          item.style.display = item.classList.contains(category) || category === 'all' ? 'inline-block' : 'none';
        });
      });
    });
  

    document.getElementById('toggle-theme').addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  
    
    const translations = {
      en: {
        greeting: "Hello, welcome to our website!",
      },
      fr: {
        greeting: "Bonjour, bienvenue sur notre site web!",
      }
    };
  
    document.getElementById('language-select').addEventListener('change', (event) => {
      const language = event.target.value;
      document.getElementById('greeting').innerText = translations[language].greeting;
    });
  });
  