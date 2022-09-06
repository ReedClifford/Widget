import React, { useState } from "react";
import Dropdown from "./Dropdown";
import ConvertedText from "./ConvertedText";
const options = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "French",
    value: "fr",
  },
  {
    label: "German",
    value: "de",
  },
  {
    label: "Greek",
    value: "el",
  },
  {
    label: "Indonesian",
    value: "id",
  },
  {
    label: "Chinese (Traditional)",
    value: "zh-TW",
  },
  {
    label: " Korean",
    value: "ko",
  },
];
const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div className="p-8 shadow-md rounded-lg mt-5">
      <div className="container mx-auto p-10 my-10 shadow-md">
        <h1 className="mb-3 font-bold">Enter a Text</h1>
        <input
          className="border-2 border-slate-200 focus:outline-slate-300 w-full p-2"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <Dropdown
        label="Select a Language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <ConvertedText language={language} input={text} />
    </div>
  );
};
export default Translate;
