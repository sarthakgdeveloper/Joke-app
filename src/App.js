import { useState } from "react";

import JokeSearch from "./components/joke_search/JokeSearch";
import JokeResult from "./components/joke_result/JokeResult";

import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <div className="App">
      <header>Chuck Norries</header>
      <JokeSearch setSelectedCategory={setSelectedCategory} />
      <JokeResult selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
