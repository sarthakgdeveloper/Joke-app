import React, { useState, useEffect } from "react";
import Styles from "./jokeSearch.module.scss";

function JokeSearch({ setSelectedCategory }) {
  const [categories, getCategories] = useState([]);

  useEffect(() => {
    setSelectedCategory("Random");
    const syncingCategories = async () => {
      const recievedCategories = await fetch(
        "https://api.chucknorris.io/jokes/categories"
      );
      const data = await recievedCategories.json();
      getCategories([...data]);
    };

    syncingCategories();
  }, []);
  return (
    <div className={Styles.container}>
      <div className={Styles.jokesOptionContainer}>
        {categories.map((eCat, index) => (
          <div key={index} onClick={() => setSelectedCategory(eCat)}>
            {eCat.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
}

export default JokeSearch;
