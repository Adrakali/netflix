import React from "react";
import { IMovie } from "../interfaces";

async function Row({ title, url }: { title: string; url: string }) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${url}?api_key=${process.env.API_KEY}`
  );
  const data = await response.json();
  const movies = data.results;
  return (
    <div>
      <h2 className="">{title}</h2>
      <div className="flex gap-4 overflow-x-scroll">
        {movies.map((movie: IMovie) => {
          return (
            <div key={movie.id}>
              <div className="w-80">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt={movie.title}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Row;
