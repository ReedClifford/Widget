import React, { useState } from "react";
import Route from "./components/Router";
import Header from "./components/Header";
import Accordion from "./components/Accordion";
import WikiSearch from "./components/WikiSearch";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React?",
    content: "React is the best Javascript Framework :kekw:",
  },
  {
    title: "Best Waifu?",
    content: "Komi Shouko",
  },
  {
    title: "Whats your name?",
    content: "Reed Clifford Palbacal",
  },
];
const options = [
  {
    label: "React",
    value: "Rank 1 JS frontend framework/library",
  },
  {
    label: "Angular",
    value: "It Suck but popular Js framework",
  },
  {
    label: "Vue JS",
    value:
      "New Js Framework ,has both the good features of angular and react on it",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <section className="container mx-auto ">
        <Route path="/">
          <Accordion items={items} />;
        </Route>
        <Route path="/translate">
          <Translate />;
        </Route>
        <Route path="/search">
          <WikiSearch />;
        </Route>
        <Route path="/dropdown">
          <Dropdown
            label="Select a Framework"
            selected={selected}
            onSelectedChange={setSelected}
            options={options}
          />
        </Route>
      </section>
    </div>
  );
};
export default App;
