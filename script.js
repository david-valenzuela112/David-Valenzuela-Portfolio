const content = {
  es: {
    toggleBtn: "English",
    navAbout: "Sobre mí",
    navProjects: "Proyectos Destacados",
    navCertifications: "Certificaciones",
    heroSubtitle: "Estudiante de Ingeniería Mecatrónica enfocado en Sistemas Embebidos, Inteligencia Artificial y Robótica.",
    aboutTitle: "Sobre Mí",
    aboutDesc: "Soy un estudiante de Ingeniería en Mecatrónica con experiencia práctica en manufactura, ensamblaje, pruebas y validación de sistemas mecánicos. He coordinado equipos multidisciplinarios, gestionando recursos y dado seguimiento a requerimientos y actividades de ingeniería. Destaco por mi capacidad de resolver problemas, trabajar en equipo y aprender en entornos prácticos. Cuento con experiencia académica internacional e inglés C1.",
    projectsTitle: "Proyectos Destacados",
    certTitle: "Certificaciones & Logros",
    filterAll: "Todos",
    filterRobotics: "Robótica",
    filterCourses: "Cursos",
    filterProjects: "Proyectos",
    filterAchievements: "Logros",
    badgeAchievement: "Logro",
    certificates: [
      {
        isTextOnly: true,
        title: "IELTS Academic C1",
        issuer: "IELTS Official",
        category: "achievements",
        detail: "Acreditación de dominio avanzado de idioma inglés en ámbito profesional e ingenieril."
      },
      {
        isTextOnly: true,
        title: "Diploma de Bachillerato Internacional",
        issuer: "International Baccalaureate (IB)",
        category: "achievements",
        detail: "Programa académico de alto rigor internacional con enfoque analítico global."
      },
      {
        isTextOnly: true,
        title: "Premio Crash and Burn 2025 NASA",
        issuer: "NASA Human Exploration Rover Challenge",
        detail: "Reconocimiento otorgado a la perseverancia y superación técnica del equipo."
      },
      { name: "Certificación Universal Robots", issuer: "Universal Robots", category: "robotics", image: "cert-ur.png" },
      { name: "Programación UR20 / UR30", issuer: "Universal Robots", category: "robotics", image: "cert-ur20-30.png" },
      { name: "Evaluación de Riesgos Robóticos", issuer: "Universal Robots", category: "robotics", image: "cert-evaluacion-riesgos.png" },
      { name: "Controlador CB3 Universal Robots", issuer: "Universal Robots", category: "robotics", image: "cert-cb3.png" },
      { name: "Itinerario de Aplicaciones", issuer: "Universal Robots", category: "robotics", image: "cert-itinerario-aplicaciones.png" },
      { name: "Itinerario Profesional", issuer: "Universal Robots", category: "robotics", image: "cert-itinerario-profesional.png" },
      { name: "Itinerario Básico de Robótica", issuer: "Universal Robots", category: "robotics", image: "cert-itinerario-basico.png" },
      { name: "Supervised Machine Learning", issuer: "Coursera / DeepLearning.AI", category: "courses", image: "cert-supervised-ml.png" },
      { name: "Neural Networks and Deep Learning", issuer: "Coursera / DeepLearning.AI", category: "courses", image: "cert-neural-networks.png" },
      { name: "MATLAB Onramp", issuer: "MathWorks", category: "courses", image: "cert-matlab-onramp.png" },
      { name: "Introduction to Linear Algebra", issuer: "MathWorks", category: "courses", image: "cert-matlab-linear-algebra.png" },
      { name: "Symbolic Math with MATLAB", issuer: "MathWorks", category: "courses", image: "cert-matlab-symbolic-math.png" },
      { name: "Drone Testing Platform", issuer: "Proyecto de Ingeniería", category: "projects", image: "cert-drone-testing.png" },
      { name: "Computational Fluid Dynamics (CFD)", issuer: "Simulación de Spoiler", category: "projects", image: "cert-cfd-spoiler.png" }
    ],
    projects: [
      {
        title: "Liderazgo y Manufactura de Rover (NASA)",
        image: "foto-rover-26.png",
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
        image: "fotos-fuente-de-voltaje.png",
        bullets: [
          "Fuente de voltaje DC funcional con salida constante de 5V y regulable de 0-12V.",
          "Diseño de circuito electrónico, PCB y ensamblaje físico.",
          "Salida de voltaje estable y diseño resistente a cargas inductivas."
        ],
        tags: ["Circuito", "PCB", "Integración"]
      },
      {
        title: "Detección de Grietas por Machine Learning",
        image: "fotos-deteccion-de-grietas.png",
        badge: "Accuracy: 92.11%",
        bullets: [
          "Modelo de visión computacional para clasificar grietas estructurales en concreto.",
          "Implementación de pipeline de imagen y clasificador Random Forest."
        ],
        tags: ["Machine Learning", "Visión Computacional"]
      },
      {
        title: "Gestión de Operaciones y Logística de Rover",
        image: "foto-crash-and-burn.png",
        bullets: [
          "Coordinación de logística, compras y viajes para despliegue del rover.",
          "Elaboración de presupuestos y seguimiento financiero.",
          "Premio 'Crash and Burn' (2025)."
        ],
        tags: ["Logística", "Compras", "Operaciones"]
      },
      {
        title: "Reconocimiento de Dígitos Manuscritos",
        image: "foto-deteccion-de-numeros.png",
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
    navAbout: "About Me",
    navProjects: "Featured Projects",
    navCertifications: "Certifications",
    heroSubtitle: "Mechatronics Engineering Student focused on Embedded Systems, AI, and Robotics.",
    aboutTitle: "About Me",
    aboutDesc: "I'm a Mechatronics Engineering student driven by a passion for building systems that integrate hardware and software. My projects explore embedded systems, artificial intelligence, and electronic design, with a growing focus on aerospace, robotics, and intelligent automation.",
    projectsTitle: "Featured Projects",
    certTitle: "Certifications & Achievements",
    filterAll: "All",
    filterRobotics: "Robotics",
    filterCourses: "Courses",
    filterProjects: "Projects",
    filterAchievements: "Achievements",
    badgeAchievement: "Achievement",
    certificates: [
      {
        isTextOnly: true,
        title: "IELTS Academic C1",
        issuer: "IELTS Official",
        category: "achievements",
        detail: "Accredited C1 advanced English proficiency in professional and engineering domains."
      },
      {
        isTextOnly: true,
        title: "International Baccalaureate Diploma",
        issuer: "International Baccalaureate (IB)",
        category: "achievements",
        detail: "Rigorous global academic diploma focusing on analytical problem-solving."
      },
      {
        isTextOnly: true,
        title: "Crash and Burn Award 2025 NASA",
        issuer: "NASA Human Exploration Rover Challenge",
        detail: "Awarded for team technical resilience and perseverance under constraints."
      },
      { name: "Universal Robots Certification", issuer: "Universal Robots", category: "robotics", image: "cert-ur.png" },
      { name: "UR20 / UR30 Programming", issuer: "Universal Robots", category: "robotics", image: "cert-ur20-30.png" },
      { name: "Robotic Risk Assessment", issuer: "Universal Robots", category: "robotics", image: "cert-evaluacion-riesgos.png" },
      { name: "CB3 Universal Robots Controller", issuer: "Universal Robots", category: "robotics", image: "cert-cb3.png" },
      { name: "Applications Path", issuer: "Universal Robots", category: "robotics", image: "cert-itinerario-aplicaciones.png" },
      { name: "Professional Path", issuer: "Universal Robots", category: "robotics", image: "cert-itinerario-profesional.png" },
      { name: "Basic Robotics Path", issuer: "Universal Robots", category: "robotics", image: "cert-itinerario-basico.png" },
      { name: "Supervised Machine Learning", issuer: "Coursera / DeepLearning.AI", category: "courses", image: "cert-supervised-ml.png" },
      { name: "Neural Networks and Deep Learning", issuer: "Coursera / DeepLearning.AI", category: "courses", image: "cert-neural-networks.png" },
      { name: "MATLAB Onramp", issuer: "MathWorks", category: "courses", image: "cert-matlab-onramp.png" },
      { name: "Introduction to Linear Algebra", issuer: "MathWorks", category: "courses", image: "cert-matlab-linear-algebra.png" },
      { name: "Symbolic Math with MATLAB", issuer: "MathWorks", category: "courses", image: "cert-matlab-symbolic-math.png" },
      { name: "Drone Testing Platform", issuer: "Engineering Project", category: "projects", image: "cert-drone-testing.png" },
      { name: "Computational Fluid Dynamics (CFD)", issuer: "Spoiler Airflow Simulation", category: "projects", image: "cert-cfd-spoiler.png" }
    ],
    projects: [
      {
        title: "Human-Powered Rover Design & Leadership",
        image: "foto-rover-26.png",
        bullets: [
          "Human-powered rover developed under real-world competition constraints.",
          "Led a multidisciplinary team across design, manufacturing, and validation.",
          "Managed $13,000+ USD in sponsorship and project resources."
        ],
        tags: ["Mechanical Design", "Manufacturing", "Leadership"]
      },
      {
        title: "Robust Adjustable DC Power Supply Design",
        image: "fotos-fuente-de-voltaje.png",
        bullets: [
          "Fully functional 0-12V adjustable and 5V constant DC power supply system.",
          "Designed electronic circuit and PCB layout.",
          "Verified system performance through experimental testing."
        ],
        tags: ["Circuit Design", "PCB Design", "Testing"]
      },
      {
        title: "Concrete Crack Detection by Machine Learning",
        image: "fotos-deteccion-de-grietas.png",
        badge: "Accuracy: 92.11%",
        bullets: [
          "Computer vision model capable of detecting structural cracks in concrete.",
          "Developed image processing pipeline and Random Forest classifier."
        ],
        tags: ["Machine Learning", "Computer Vision"]
      },
      {
        title: "Rover Logistics & Operations Management",
        image: "foto-crash-and-burn.png",
        bullets: [
          "Supported development and deployment through logistics coordination.",
          "Managed procurement and travel logistics.",
          "Earned the 'Crash and Burn' award (2025)."
        ],
        tags: ["Logistics", "Procurement", "Operations"]
      },
      {
        title: "Handwritten Digit Recognition with CNN",
        image: "foto-deteccion-de-numeros.png",
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
let activeCategory = 'all';

function render() {
  const data = content[currentLang];
  
  if (document.getElementById('lang-toggle')) document.getElementById('lang-toggle').innerText = data.toggleBtn;
  if (document.getElementById('nav-about')) document.getElementById('nav-about').innerText = data.navAbout;
  if (document.getElementById('nav-projects')) document.getElementById('nav-projects').innerText = data.navProjects;
  if (document.getElementById('nav-certifications')) document.getElementById('nav-certifications').innerText = data.navCertifications;
  if (document.getElementById('hero-tagline')) document.getElementById('hero-tagline').innerText = data.heroSubtitle;
  if (document.getElementById('about-title')) document.getElementById('about-title').innerText = data.aboutTitle;
  if (document.getElementById('about-desc')) document.getElementById('about-desc').innerText = data.aboutDesc;
  if (document.getElementById('projects-title')) document.getElementById('projects-title').innerText = data.projectsTitle;
  if (document.getElementById('cert-title')) document.getElementById('cert-title').innerText = data.certTitle;

  if (document.getElementById('filter-all')) document.getElementById('filter-all').innerText = data.filterAll;
  if (document.getElementById('filter-robotics')) document.getElementById('filter-robotics').innerText = data.filterRobotics;
  if (document.getElementById('filter-courses')) document.getElementById('filter-courses').innerText = data.filterCourses;
  if (document.getElementById('filter-projects')) document.getElementById('filter-projects').innerText = data.filterProjects;
  if (document.getElementById('filter-achievements')) document.getElementById('filter-achievements').innerText = data.filterAchievements;

  const grid = document.getElementById('projects-grid');
  if (grid) {
    grid.innerHTML = '';
    data.projects.forEach(project => {
      const item = document.createElement('div');
      item.className = 'project-item reveal active';
      let imgHTML = project.image ? `<div class="project-media"><img src="${project.image}" alt="${project.title}" class="project-img" loading="lazy"></div>` : '';
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
  }

  renderCertificates();
  setupScrollAnimations();
}

function renderCertificates() {
  const data = content[currentLang];
  const track = document.getElementById('carousel-track');
  if (!track) return;
  
  track.innerHTML = '';

  const filtered = activeCategory === 'all' 
    ? data.certificates 
    : data.certificates.filter(c => c.category === activeCategory);

  filtered.forEach(cert => {
    const card = document.createElement('div');
    
    if (cert.isTextOnly) {
      card.className = 'cert-item text-only-card';
      card.innerHTML = `
        <div class="text-card-content">
          <span class="text-card-badge">${data.badgeAchievement}</span>
          <h3 class="text-card-title">${cert.title}</h3>
          <p class="text-card-issuer">${cert.issuer}</p>
          <span class="text-card-detail">${cert.detail}</span>
        </div>
      `;
    } else {
      card.className = 'cert-item';
      card.innerHTML = `
        <div class="cert-img-box">
          <img src="${cert.image}" alt="${cert.name}" loading="lazy">
        </div>
        <h3>${cert.name}</h3>
        <p>${cert.issuer}</p>
      `;
    }

    track.appendChild(card);
  });
}

function filterCertificates(category) {
  activeCategory = category;
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  
  const activeBtn = document.getElementById(`filter-${category}`);
  if (activeBtn) activeBtn.classList.add('active');

  renderCertificates();
}

function moveCarousel(direction) {
  const container = document.getElementById('carousel-track');
  if (container) {
    const scrollAmount = 350;
    container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }
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
  }, { threshold: 0.05 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

let touchStartX = 0;
let touchEndX = 0;

function setupTouchCarousel() {
  const track = document.getElementById('carousel-track');
  if (!track) return;

  track.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  track.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    const swipeThreshold = 50;
    if (touchStartX - touchEndX > swipeThreshold) {
      moveCarousel(1);
    } else if (touchEndX - touchStartX > swipeThreshold) {
      moveCarousel(-1);
    }
  }, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
  render();
  setupTouchCarousel();
});
