import React, { useState, useEffect } from "react";
import axios from "axios";
const ConvertedText = ({ input, language }) => {
  const [convertedText, setConvertedText] = useState("");
  useEffect(() => {
    const convert = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: input,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setConvertedText(data.data.translations[0].translatedText);
    };
    const timer = setTimeout(() => {
      convert();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <div className="p-4 ">
      <h1 className="font-bold text-xl">Output</h1>
      <p className="text-md font-sm">{convertedText}</p>
    </div>
  );
};
export default ConvertedText;
