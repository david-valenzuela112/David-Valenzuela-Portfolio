const content = {
  es: {
    toggleBtn: "English",
    heroSubtitle: "Estudiante de Ingeniería Mecatrónica enfocado en Sistemas Embebidos, Inteligencia Artificial y Robótica.",
    aboutTitle: "Sobre Mí",
    aboutDesc: "Soy un estudiante de Ingeniería en Mecatrónica con experiencia práctica en manufactura, ensamblaje, pruebas y validación de sistemas mecánicos. He coordinado equipos multidisciplinarios, gestionando recursos y dado seguimiento a requerimientos y actividades de ingeniería. Destaco por mi capacidad de resolver problemas, trabajar en equipo y aprender en entornos prácticos. Cuento con experiencia académica internacional e inglés C1.",
    projectsTitle: "Proyectos Destacados",
    projects: [
      {
        title: "Liderazgo y Manufactura de Rover (NASA)",
        image: "./Foto-rover-26.png",
        bullets: [
          "Rover mecánico desarrollado bajo restricciones ingenieriles reales.",
          "Lideré equipo multidisciplinario a través de diseño, manufactura y validación.",
          "Dirigí toma de decisiones sobre diseño mecánico e integración de sistemas.",
          "Gestión de $13,000+ USD en patrocinio y recursos."
        ],
        tags: ["Diseño Mecánico", "Manufactura", "Liderazgo"]
      },
      {
        title: "Diseño de Fuente de Voltaje Regulable DC",
        image: "./Fotos-fuente-de-voltaje.png",
        bullets: [
          "Fuente de voltaje DC funcional con salida constante de 5V y regulable de 0-12V.",
          "Diseño de circuito electrónico, PCB y ensamblaje físico.",
          "Salida de voltaje estable y diseño resistente a cargas inductivas."
        ],
        tags: ["Circuito", "PCB", "Integración"]
      },
      {
        title: "Detección de Grietas por Machine Learning",
        image: "./Fotos-detección-de-grietas.png",
        badge: "Accuracy: 92.11%",
        bullets: [
          "Modelo de visión computacional para clasificar grietas estructurales en concreto.",
          "Implementación de pipeline de imagen y clasificador Random Forest."
        ],
        tags: ["Machine Learning", "Visión Computacional"]
      },
      {
        title: "Gestión de Operaciones y Logística de Rover",
        image: "./Foto-crash-and-burn.png",
        bullets: [
          "Coordinación de logística, compras y viajes para despliegue del rover.",
          "Elaboración de presupuestos y seguimiento financiero.",
          "Premio 'Crash and Burn' (2025)."
        ],
        tags: ["Logística", "Compras", "Operaciones"]
      },
      {
        title: "Reconocimiento de Dígitos Manuscritos",
        image: "./Foto-detección-de-numeros.png",
        badge: "Accuracy: 96.94%",
        bullets: [
          "Sistema de reconocimiento mediante Redes Neuronales Convolucionales (CNN).",
          "Clasificación y procesamiento de imágenes en tiempo real."
        ],
        tags: ["Deep Learning", "Python", "IA"]
      }
    ]
  },
  en: {
    toggleBtn: "Español",
    heroSubtitle: "Mechatronics Engineering Student focused on Embedded Systems, AI, and Robotics.",
    aboutTitle: "About Me",
    aboutDesc: "I'm a Mechatronics Engineering student driven by a passion for building systems that integrate hardware and software. My projects explore embedded systems, artificial intelligence, and electronic design, with a growing focus on aerospace, robotics, and intelligent automation.",
    projectsTitle: "Featured Projects",
    projects: [
      {
        title: "Human-Powered Rover Design & Leadership",
        image: "./Foto-rover-26.png",
        bullets: [
          "Human-powered rover developed under real-world competition constraints.",
          "Led a multidisciplinary team across design, manufacturing, and validation.",
          "Managed $13,000+ USD in sponsorship and project resources."
        ],
        tags: ["Mechanical Design", "Manufacturing", "Leadership"]
      },
      {
        title: "Robust Adjustable DC Power Supply Design",
        image: "./Fotos-fuente-de-voltaje.png",
        bullets: [
          "Fully functional 0-12V adjustable and 5V constant DC power supply system.",
          "Designed electronic circuit and PCB layout.",
          "Verified system performance through experimental testing."
        ],
        tags: ["Circuit Design", "PCB Design", "Testing"]
      },
      {
        title: "Concrete Crack Detection by Machine Learning",
        image: "./Fotos-detección-de-grietas.png",
        badge: "Accuracy: 92.11%",
        bullets: [
          "Computer vision model capable of detecting structural cracks in concrete.",
          "Developed image processing pipeline and Random Forest classifier."
        ],
        tags: ["Machine Learning", "Computer Vision"]
      },
      {
        title: "Rover Logistics & Operations Management",
        image: "./Foto-crash-and-burn.png",
        bullets: [
          "Supported development and deployment through logistics coordination.",
          "Managed procurement and travel logistics.",
          "Earned the 'Crash and Burn' award (2025)."
        ],
        tags: ["Logistics", "Procurement", "Operations"]
      },
      {
        title: "Handwritten Digit Recognition with CNN",
        image: "./Foto-detección-de-numeros.png",
        badge: "Accuracy: 96.94%",
        bullets: [
          "High-accuracy digit recognition system achieving 96.94% accuracy.",
          "Designed and trained a Convolutional Neural Network (CNN)."
        ],
        tags: ["Deep Learning", "Python", "AI"]
      }
    ]
  }
};

let currentLang = 'es';

function render() {
  const data = content[currentLang];
  document.getElementById('lang-toggle').innerText = data.toggleBtn;
  document.getElementById('hero-tagline').innerText = data.heroSubtitle;
  document.getElementById('about-title').innerText = data.aboutTitle;
  document.getElementById('about-desc').innerText = data.aboutDesc;
  document.getElementById('projects-title').innerText = data.projectsTitle;

  const grid = document.getElementById('projects-grid');
  grid.innerHTML = '';

  data.projects.forEach(project => {
    const item = document.createElement('div');
    item.className = 'project-item reveal';

    let imgHTML = project.image ? `
      <div class="project-media">
        <img src="${project.image}" alt="${project.title}" class="project-img" loading="lazy">
      </div>` : '';
    let badgeHTML = project.badge ? `<span class="apple-badge">${project.badge}</span>` : '';
    let bulletsHTML = project.bullets.map(b => `<li>${b}</li>`).join('');
    let tagsHTML = project.tags.map(t => `<span class="apple-tag">${t}</span>`).join('');

    item.innerHTML = `
      ${imgHTML}
      <div class="project-info">
        <h3 class="project-title">${project.title}</h3>
        ${badgeHTML}
        <ul class="project-bullets">${bulletsHTML}</ul>
        <div class="tags-container">${tagsHTML}</div>
      </div>
    `;

    grid.appendChild(item);
  });

  setupScrollAnimations();
}

function toggleLanguage() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  render();
}

function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  render();
});
