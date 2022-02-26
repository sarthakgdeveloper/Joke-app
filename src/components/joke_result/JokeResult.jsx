import React, { useState, useEffect } from "react";
import Styles from "./jokeResult.module.scss";

function JokeResult({ selectedCategory }) {
  const [joke, getJoke] = useState("");

  const syncingJoke = async () => {
    const RecievedJoke =
      selectedCategory === "Random"
        ? await fetch(`https://api.chucknorris.io/jokes/random`)
        : await fetch(
            `https://api.chucknorris.io/jokes/random?category=${selectedCategory}`
          );
    const data = await RecievedJoke.json();
    getJoke(data.value);
  };
  useEffect(() => {
    selectedCategory.length > 0 && syncingJoke();
  }, [selectedCategory]);
  return (
    <div className={Styles.container}>
      <div className={Styles.selectedJoke}>
        <span>Selected Category: {selectedCategory.toUpperCase()}</span>
      </div>
      <div className={Styles.jokeContainer}>
        <span>{joke}</span>
      </div>
      <span
        onClick={async () => await syncingJoke()}
        className={Styles.newJoke}
      >
        New Joke
      </span>
    </div>
  );
}

export default JokeResult;
