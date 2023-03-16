import axios from "axios";
import { useState } from "react";
import ResultCard from "../../components/ResultCard";
import "./style.css";

type FormData = {
  name: string;
};

type User = {
  avatar_url: string;
  url: string;
  followers: string;
  location: string;
  name: string;
};

const Result = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
  });
  const [user, setUser] = useState<User>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${formData.name}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        setUser(undefined);
      });
  };

  return (
    <>
      <div className="main-search-container">
        <div className="container search-container">
          <h1>Encontre um perfil Github</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <input
                type="text"
                name="name"
                value={formData.name}
                className="search-input"
                placeholder="Usuário Github"
                onChange={handleChange}
              />

              <button type="submit" className="btn btn-primary search-button">
                Encontrar
              </button>
            </div>
          </form>
        </div>

        {user && (
          <ResultCard
            avatar={user.avatar_url}
            url={user.url}
            followers={user.followers}
            location={user.location}
            name={user.name}
          />
        )}
      </div>
    </>
  );
};

export default Result;
