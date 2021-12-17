import React from "react";
import "./FilmCard.css";

export default function FilmCard({ film }) {
  return (
    <div key={film.id}>
      <h2>{film.title}</h2>
      <img src={film.image} alt="poster" id="mainImage" />
      <div className="content">
        <p id="filmDescription">{film.description}</p>
        <ul>
          <p>Director: {film.director}</p>
          <p>Producer: {film.producer}</p>
          <p>Release date: {film.release_date}</p>
          <p>Runtime: {film.running_time} minutes</p>
        </ul>
      </div>
    </div>
  );
}
