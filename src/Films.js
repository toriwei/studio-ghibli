import React from "react";
import { useState, useEffect } from "react";
import FilmCard from "./FilmCard";
import "./App.css";
import "./Films.css";

export default function Films({ setter }) {
  const [films, setFilms] = useState([]);
  const film = films[Math.floor(Math.random() * films.length)];
  useEffect(() => {
    const url = `https://ghibliapi.herokuapp.com/films/`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => setFilms(r))
      .catch((e) => setFilms(null));
  }, []);

  return (
    <div>
      <button onClick={(e) => setter(film)}>Gimme the Ghibli</button>
      {!film ? "" : <FilmCard key={film.id} film={film} />}
    </div>
  );
}
