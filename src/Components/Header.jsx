import "../assets/Header.css";

export default function Header() {
  return (
    <>
      <header>
        <div className="navbar">
          <nav>
            <a href="#">Sobre</a>
            <a href="#">Contato</a>
            <a href="#">Projetos</a>
          </nav>
        </div>
        <div className="container">
          <div className="AboutMe">
            <h1> Olá, eu sou o Arthur, desenvolvedor Full Stack</h1>
            <p>
              Sou desenvolvedor fullstack com foco atual em backend, com
              experiência em Node.js, NestJS, Express, Sequelize, Prisma e
              bancos de dados relacionais como MySQL e PostgreSQL. Tenho
              conhecimento sólido em React, Tailwind CSS e integração de APIs
              REST.
            </p>
          </div>
          <div>
            <img className="myself" src="IMG_2923.PNG" alt="minha foto" />
          </div>
        </div>
      </header>
    </>
  );
}
