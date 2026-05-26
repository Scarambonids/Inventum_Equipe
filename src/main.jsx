import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const members = [
  { name: 'Cristhian Felicio Toledo', email: 'cristhianfeliciotol@gmail.com', phone: '5515981737372', image: '/assets/cris.jpeg' },
  { name: 'Gabriel Flora', email: 'floragabriel2006@gmail.com', phone: '5515996661507', image: '/assets/Gabriel.jpeg' },
  { name: 'Giovane Ponciano Vicente', email: 'giponvi@gmail.com', phone: '5515996665692', linkedin: 'https://linkedin.com/in/giovane-vicente', github: 'https://github.com/giponvi', image: '/assets/Giovane.jpeg' },
  { name: 'Lucas Alexandre Rodrigues Sandim', email: 'lucas.alexandre.sandim@gmail.com', phone: '5515981793137', linkedin: 'https://www.linkedin.com/in/lucas-sandim-273118321', image: '/assets/lucas.jpeg' },
  { name: 'Matheus Henrique Antunes Martins', email: 'mhantunes.martins@gmail.com', phone: '5515997509584', linkedin: 'https://www.linkedin.com/in/math-antunes', image: '/assets/matheusH.jpeg' },
  { name: 'Matheus Silveira Escaramboni', email: 'escarambonimatheussilveira@gmail.com', phone: '5515997563727', linkedin: 'https://www.linkedin.com/in/matheus-escaramboni', image: '/assets/MatheusSilveira.png' },
];

function initials(name) {
  return name.split(' ').map((part) => part[0]).slice(0, 2).join('');
}

function App() {
  return (
    <main className="page">
      <section className="hero">
        <nav className="topbar">
          <div className="brand">F.<span>O</span>.M.E.</div>
        </nav>

        <div className="hero-grid">
          <div className="intro">
            <p className="pill">Equipe Inventum</p>
            <h1>Conecte-se com a nossa equipe</h1>
            <p className="subtitle">
              Portfólio criado para apresentar os contatos e informações dos membros da equipe Inventum durante a Usina de Projetos Experimentais (UPX) da UniFacens, no curso de Análise e Desenvolvimento de Sistemas.
            </p>
          </div>

          <aside className="project-card">
            <p>Projeto</p>
            <h2>F.O.M.E.</h2>
            <div className="mini-card">Fraterno Oferecimento de Mantimentos e Esperança</div>
            <a className="main-link" href="#contatos">Ver contatos</a>
          </aside>
        </div>
      </section>

      <section id="contatos" className="contacts">
        <div className="section-title">
          <p>Contatos profissionais</p>
          <h2>Integrantes da Inventum</h2>
        </div>

        <div className="cards">
          {members.map((member) => (
            <article className="member-card" key={member.email}>
              <img className="avatar" src={member.image} alt={`Foto de ${member.name}`} />
              <h3>{member.name}</h3>

              <div className="actions">
                <a href={`mailto:${member.email}`}>E-mail</a>
                <a href={`https://wa.me/${member.phone}`} target="_blank" rel="noreferrer">WhatsApp</a>
                {member.linkedin && <a href={member.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
                {member.github && <a href={member.github} target="_blank" rel="noreferrer">GitHub</a>}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
