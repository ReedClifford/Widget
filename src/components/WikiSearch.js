import React, { useState, useEffect } from "react";
import axios from "axios";
const WikiSearch = () => {
  const [term, setTerm] = useState("komi shouko");
  const [results, setResult] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          format: "json",
          list: "search",
          action: "query",
          origin: "*",
          srsearch: term,
        },
      });
      setResult(data.query.search);
    };

    if (term && !results.length) {
      fetch();
    } else {
      const timeOut = setTimeout(() => {
        if (term) {
          fetch();
        }
      }, 500);

      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [results.length, term]);

  const searchResults = results.map(({ pageid, title, snippet }) => {
    return (
      <a key={pageid} href={`https://en.wikipedia.org?curid=${pageid}`}>
        <div className="shadow-md rounded-md p-5 my-5 bg-slate-100">
          <h1 className="font-bold mb-3">{title}</h1>
          <p
            className="font-medium"
            dangerouslySetInnerHTML={{ __html: snippet }}
          ></p>
        </div>
      </a>
    );
  });

  return (
    <div>
      <div className="container mx-auto rounded-lg shadow-lg p-10 mt-10 bg-slate-100">
        <h1 className="font-bold text-lg">Search</h1>
        <input
          className="w-full rounded-lg border-2 mt-2 p-2 focus:shadow-md outline-slate-200 "
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
      </div>

      {searchResults}
    </div>
  );
};
export default WikiSearch;
