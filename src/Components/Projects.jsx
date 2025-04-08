import "../assets/Projects.css";
import Cards from "./Cards";

export default function Projects() {
  return (
    <>
    <div className="container">
      <h1>Projetos Recentes</h1>
      <a href="#">Ver Todos</a>
    </div>

    <div>
      <Cards/>
    </div>
    </>
  );
}
