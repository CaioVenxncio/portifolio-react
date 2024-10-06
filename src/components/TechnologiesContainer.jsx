import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiPython,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, description: "Estrutura a base de todas as páginas da web, permitindo organizar e formatar conteúdo de maneira clara e acessível." },
  { id: "css", name: "CSS3", icon: <DiCss3 />, description: "Linguagem de estilo que transforma páginas HTML em experiências visuais atraentes, controlando layout, cores e fontes." },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, description: "Linguagem de programação que traz interatividade e dinamismo para a web, possibilitando a criação de aplicações ricas e responsivas." },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, description: "Ambiente de execução JavaScript no lado do servidor que permite construir aplicações escaláveis e de alto desempenho com uma única linguagem." },
  { id: "python", name: "Python", icon: <DiPython />, description: "Linguagem de programação poderosa e versátil, amplamente utilizada em diversas áreas, incluindo desenvolvimento web, análise de dados e inteligência artificial." },
  { id: "react", name: "React", icon: <DiReact />, description: "Biblioteca JavaScript que simplifica a construção de interfaces de usuário, promovendo desenvolvimento modular e reutilização de componentes." },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p> {/* Substitua o texto aqui */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
