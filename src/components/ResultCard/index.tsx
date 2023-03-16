import EmptyImage from "../../assets/images/vector.jpg";
import "./style.css";

interface ResultCardProps {
  avatar: string;
  url: string;
  followers: string;
  location: string;
  name: string;
}

const ResultCard = ({
  avatar,
  url,
  followers,
  location,
  name,
}: ResultCardProps) => {
  return (
    <>
      <div className="container main-result-container">
        <div className="container result-container">
          <div className="empty-image-container">
            <img alt="none" src={avatar} />
          </div>
          <div className="information-container container">
            <h4 className="text-primary">Informações</h4>
            <div className="card card-content">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  {/* <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Perfil</span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Usuário"
                      aria-label="Usuário"
                      aria-describedby="basic-addon1"
                    />
                  </div> */}
                  <b>Perfil:</b> {url}
                </li>
                <li className="list-group-item">
                  <b>Seguidores:</b> {followers}
                </li>
                <li className="list-group-item">
                  <b>Localidade:</b> {location}
                </li>
                <li className="list-group-item">
                  <b>Nome:</b> {name}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultCard;
