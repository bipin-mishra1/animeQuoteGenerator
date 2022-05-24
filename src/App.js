import React, { useState, useEffect } from "react";
import Quote from "./components/Quote";
import "./styles.css";

export default function App() {
  const [quote, setQuote] = useState({
    anime: "",
    character: "",
    quote: ""
  });

  useEffect(() => {
    const fetchQuote = async () => {
      await fetch("https://animechan.vercel.app/api/random")
        .then((response) => response.json())
        .then((quote) => setQuote(quote));
    };
    fetchQuote();
  }, []);

  return (
    <div className="App">
      <Quote
        anime={quote.anime}
        quote={quote.quote}
        character={quote.character}
      />
    </div>
  );
}
