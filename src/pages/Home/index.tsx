import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <>
      <div className="home-container container">
        <div className="title">
          <h1>Desafio Github API</h1>
        </div>
        <div className="subtitle">
          <h4>DevSuperior - Escola de programação</h4>
        </div>
        <Link to="/result">
          <button className="btn btn-primary btn-lg btn-init">Começar</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
