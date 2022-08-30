import "./styles.css";
import { useState } from "react";
import { animes } from "./animes";

export default function App() {
  const [type, setType] = useState("Movies");

  return (
    <div className="App">
      <h1>
        <span>🍥</span> animeBuzz
      </h1>
      <p>
        Here are some of my favorite anime. Select a category to get started
      </p>
      <div>
        {Object.keys(animes).map((i) => (
          <span id="category" key={i} onClick={() => setType(i)}>
            {i}
          </span>
        ))}
      </div>
      <div className="divider"></div>
      <div>
        {animes[type].map(({ name, japanese, rating }, index) => {
          return (
            <div className="description" key={index}>
              <div className="title">
                {name} ({japanese})
              </div>
              <div className="info">{rating}/10</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
