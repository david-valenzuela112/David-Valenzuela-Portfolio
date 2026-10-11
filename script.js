const content = {
  es: {
    toggleBtn: "English",
    aboutTitle: "Sobre Mí",
    aboutSubtitle: "Universidad de Monterrey, México | University of Ottawa, Canada",
    aboutDesc: "Soy un estudiante de Ingeniería en Mecatrónica con experiencia práctica en manufactura, ensamblaje, pruebas y validación de sistemas mecánicos. He coordinado equipos multidisciplinarios, gestionando recursos y dado seguimiento a requerimientos y actividades de ingeniería. Destaco por mi capacidad de resolver problemas, trabajar en equipo y aprender en entornos prácticos. Cuento con experiencia académica internacional e inglés C1.",
    projectsTitle: "Proyectos Destacados",
    projects: [
      {
        title: "Liderazgo y Manufactura de Rover (NASA)",
        image: "foto-rover-26.png",
        bullets: [
          "Rover mecánico desarrollado bajo restricciones ingenieriles reales.",
          "Lideré equipo multidisciplinario a través de diseño, manufactura, documentación y validación.",
          "Dirigí toma de decisiones sobre diseño mecánico e integración de sistemas.",
          "Gestión de $13,000+ USD en patrocinio y recursos.",
          "Validación completa de sistema a través de pruebas.",
          "Coordinación de ejecución técnica y logística del proyecto."
        ],
        tags: ["Diseño Mecánico", "Manufactura", "Dirección de Proyectos", "Liderazgo"]
      },
      {
        title: "Diseño de Fuente de Voltaje Regulable DC",
        image: "fotos-fuente-de-voltaje.png",
        bullets: [
          "Fuente de voltaje DC funcional con salida constante de 5V y salida regulable de 0-12V.",
          "Diseño de circuito electrónico y PCB.",
          "Construcción y ensamblaje del sistema físico.",
          "Pruebas y validación de regulación de voltaje y manejo de corriente.",
          "Salida de voltaje estable, diseño robusto resistente a ruido y cargas inductivas.",
          "Validación del rendimiento del sistema mediante pruebas experimentales."
        ],
        tags: ["Diseño de Circuito", "Diseño de PCB", "Integración de Sistemas"]
      },
      {
        title: "Detección de Grietas por Machine Learning",
        image: "fotos-deteccion-de-grietas.png",
        badge: "Accuracy: 92.11%",
        bullets: [
          "Modelo de visión computacional capaz de detectar y clasificar grietas estructurales en concreto.",
          "Desarrollo de sistema de procesamiento de imagen e implementación de clasificador Random Forest.",
          "Diseño de metodología para detección y segmentación de grietas.",
          "Identificación y clasificación de grietas en set de prueba exitosa.",
          "Aplicación demostrada para la monitorización de salud estructural."
        ],
        tags: ["Machine Learning", "Visión Computacional", "Análisis de Datos"]
      },
      {
        title: "Gestión de Operaciones y Logística de Rover",
        image: "foto-crash-and-burn.png",
        bullets: [
          "Apoyo al desarrollo y despliegue de un rover mediante la coordinación de logística y recursos.",
          "Gestión de compras, proveedores y adquisición de materiales.",
          "Coordinación de la logística de viaje para el vehículo y el equipo.",
          "Elaboración de presupuestos y seguimiento financiero.",
          "Aportación al éxito del equipo, ganando el premio 'Crash and Burn' (2025).",
          "Garantizar la disponibilidad de materiales y correcto desarrollo de operaciones de competencia."
        ],
        tags: ["Logística", "Compras", "Gestión de Presupuesto", "Operaciones"]
      },
      {
        title: "Reconocimiento de Dígitos Manuscritos",
        image: "foto-deteccion-de-numeros.png",
        badge: "Accuracy: 96.94%",
        bullets: [
          "Sistema de reconocimiento de alta precisión, alcanzando 96.94% de precisión.",
          "Diseño y entrenamiento de una Red Neuronal Convolucional (CNN) para clasificación de imágenes y video en tiempo real.",
          "Procesamiento y preparación de dataset para aprendizaje supervisado.",
          "Rendimiento confiable en todo el conjunto de prueba.",
          "Eficacia del modelo validada para tareas de visión computacional."
        ],
        tags: ["Deep Learning (CNNs)", "Procesamiento de Imagen", "Python", "IA"]
      }
    ]
  },
  en: {
    toggleBtn: "Español",
    aboutTitle: "About Me",
    aboutSubtitle: "Universidad de Monterrey, Mexico | University of Ottawa, Canada",
    aboutDesc: "I'm a Mechatronics Engineering student driven by a passion for building systems that integrate hardware and software. My projects explore embedded systems, artificial intelligence, and electronic design, with a growing focus on aerospace, robotics, and intelligent automation.",
    projectsTitle: "Featured Projects",
    projects: [
      {
        title: "Human-Powered Rover Design & Leadership",
        image: "foto-rover-26.png",
        bullets: [
          "Human-powered rover developed under real-world competition constraints.",
          "Led a multidisciplinary team across design, manufacturing, and validation.",
          "Directed mechanical design decisions and system integration.",
          "Managed $13,000+ USD in sponsorship and project resources.",
          "Achieved full system validation through testing and competition readiness.",
          "Coordinated execution across technical and logistical domains."
        ],
        tags: ["Mechanical Design", "Manufacturing", "Project Management", "Leadership"]
      },
      {
        title: "Robust Adjustable DC Power Supply Design",
        image: "fotos-fuente-de-voltaje.png",
        bullets: [
          "Fully functional 0-12V adjustable and 5V constant DC power supply system.",
          "Designed electronic circuit and PCB layout.",
          "Built and assembled physical system including enclosure.",
          "Conducted testing and validation of voltage regulation.",
          "Achieved stable voltage output across the specified range, with a robust design resistant to electrical noise and inductive loads.",
          "Verified system performance through experimental testing under varying operating conditions."
        ],
        tags: ["Circuit Design", "PCB Design", "Electronics Testing", "System Integration"]
      },
      {
        title: "Concrete Crack Detection by Machine Learning",
        image: "fotos-deteccion-de-grietas.png",
        badge: "Accuracy: 92.11%",
        bullets: [
          "Computer vision model capable of detecting and classifying structural cracks in concrete.",
          "Developed image processing pipeline and implemented Random Forest classifier.",
          "Designed methodology for crack detection and segmentation.",
          "Successfully identified and classified structural defects in test images.",
          "Demonstrated applicability for structural health monitoring."
        ],
        tags: ["Machine Learning", "Computer Vision", "Data Analysis"]
      },
      {
        title: "Rover Logistics & Operations Management",
        image: "foto-crash-and-burn.png",
        bullets: [
          "Supported development and deployment of a competition rover through logistics and resource coordination.",
          "Managed procurement, supplier sourcing, and material acquisition.",
          "Coordinated travel logistics including flights and accommodations.",
          "Supported budgeting and financial tracking for project execution.",
          "Contributed to team success, earning the 'Crash and Burn' award (2025).",
          "Ensured timely availability of materials and smooth competition operations."
        ],
        tags: ["Logistics", "Procurement", "Budget Management", "Operations"]
      },
      {
        title: "Handwritten Digit Recognition with CNN",
        image: "foto-deteccion-de-numeros.png",
        badge: "Accuracy: 96.94%",
        bullets: [
          "High-accuracy digit recognition system achieving 96.94% classification accuracy.",
          "Designed and trained a Convolutional Neural Network (CNN) for image classification.",
          "Processed and prepared dataset for supervised learning.",
          "Achieved reliable performance across test dataset.",
          "Validated model effectiveness for computer vision tasks."
        ],
        tags: ["Deep Learning (CNNs)", "Image Processing", "Python"]
      }
    ]
  }
};

let currentLang = 'es';

function render() {
  const data = content[currentLang];
  document.getElementById('lang-toggle').innerText = data.toggleBtn;
  document.getElementById('about-title').innerText = data.aboutTitle;
  document.getElementById('about-subtitle').innerText = data.aboutSubtitle;
  document.getElementById('about-desc').innerText = data.aboutDesc;
  document.getElementById('projects-title').innerText = data.projectsTitle;

  const grid = document.getElementById('projects-grid');
  grid.innerHTML = '';

  data.projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'card';

    let imgHTML = project.image ? `<img src="${project.image}" alt="${project.title}" class="project-img">` : '';
    let badgeHTML = project.badge ? `<span class="badge">${project.badge}</span>` : '';
    let bulletsHTML = project.bullets.map(b => `<li>${b}</li>`).join('');
    let tagsHTML = project.tags.map(t => `<span class="tag">${t}</span>`).join('');

    card.innerHTML = `
      ${imgHTML}
      <h3>${project.title}</h3>
      ${badgeHTML}
      <ul>${bulletsHTML}</ul>
      <div class="tags">${tagsHTML}</div>
    `;

    grid.appendChild(card);
  });
}

function toggleLanguage() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  render();
}

render();
