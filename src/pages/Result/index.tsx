import ResultCard from "../../components/ResultCard";
import "./style.css";

const Result = () => {
  return (
    <>
      <div className="main-search-container">
        <div className="container search-container">
          <h1>Encontre um perfil Github</h1>
          <form>
            <div className="form-container">
              <input
                type="text"
                name="name"
                className="search-input"
                placeholder="Usuário Github"
              />

              <button type="submit" className="btn btn-primary search-button">
                Encontrar
              </button>
            </div>
          </form>
        </div>
        <ResultCard />
      </div>
    </>
  );
};

export default Result;
