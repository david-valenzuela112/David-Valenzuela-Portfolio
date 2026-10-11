:root {
  --bg-color: #f4f6f8;
  --card-bg: #ffffff;
  --text-color: #222222;
  --accent-color: #0056b3;
  --tag-bg: #e9ecef;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  background-color: var(--bg-color);
  color: var(--text-color);
  line-height: 1.6;
}

header {
  background-color: #111;
  color: #fff;
  padding: 1.5rem 2rem;
}

.header-container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#lang-toggle {
  background: var(--accent-color);
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
}

.container {
  max-width: 1100px;
  margin: 2rem auto;
  padding: 0 1rem;
}

/* Sección Sobre Mí y Perfil */
.about-profile {
  display: flex;
  gap: 2rem;
  align-items: center;
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.profile-img {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--accent-color);
}

.about-info {
  flex: 1;
}

.institution-logos {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.institution-logos img {
  height: 40px;
  width: auto;
  opacity: 0.85;
  transition: opacity 0.2s;
}

.institution-logos img:hover {
  opacity: 1;
}

.subtitle {
  font-weight: bold;
  color: #555;
}

/* Grilla de Proyectos */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.card {
  background: var(--card-bg);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
}

.project-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 1rem;
}

.card h3 {
  margin-top: 0;
  color: var(--accent-color);
}

.badge {
  background: #d4edda;
  color: #155724;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.85rem;
  display: inline-block;
  margin-bottom: 0.8rem;
  align-self: flex-start;
}

.tags {
  margin-top: auto;
  padding-top: 1rem;
}

.tag {
  background-color: var(--tag-bg);
  font-size: 0.8rem;
  padding: 0.3rem 0.6rem;
  border-radius: 3px;
  margin-right: 0.4rem;
  margin-bottom: 0.4rem;
  display: inline-block;
}

@media (max-width: 768px) {
  .about-profile {
    flex-direction: column;
    text-align: center;
  }
  .institution-logos {
    justify-content: center;
  }
}
