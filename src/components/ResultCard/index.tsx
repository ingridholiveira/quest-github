/* eslint-disable react/jsx-no-target-blank */
import "./style.css";

interface ResultCardProps {
  avatar: string;
  url: string;
  followers: string;
  location: string;
  name: string;
  html: string;
}

const ResultCard = ({
  avatar,
  url,
  followers,
  location,
  name,
  html,
}: ResultCardProps) => {
  return (
    <>
      <div className="container main-result-container">
        <div className="container result-container">
          <div className="empty-image-container">
            <img alt="none" src={avatar} />
          </div>
          <div className="information-container container card">
            <h4 className="text-primary">Informações</h4>
            <div className=" card-content">
              <div className="row">
                <div className="col div-container-row">
                  <p>
                    <b>Perfil: </b>
                    <a href={html} target="_blank" className="link-primary">
                      {url}
                    </a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col div-container-row">
                  <p>
                    <b>Seguidores: </b>
                    {followers}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col div-container-row">
                  <p>
                    <b>Localidade: </b>
                    {location}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col div-container-row">
                  <p>
                    <b>Nome: </b>
                    {name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultCard;
