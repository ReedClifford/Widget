import React, { useState, useEffect } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.addEventListener(
      "click",
      () => {
        setOpen(false);
      },
      { capture: true }
    );
  }, []);

  const option = options.map(({ label }, index) => {
    if (options[index].label === selected.label) {
      return null;
    }

    return (
      <div
        className="container mx-auto  p-5   cursor-pointer hover:bg-gray-300"
        key={label}
        onClick={() => {
          onSelectedChange(options[index]);
        }}
      >
        <p>{label}</p>
      </div>
    );
  });

  return (
    <div>
      <h1 className="font-bold text-lg my-5">{label}</h1>
      <div
        className={`border-2 p-5 font-bold text-lg bg-slate-200 hover:cursor-pointer ${
          open ? "rounded-t-lg shadow-sm" : "rounded-lg"
        }`}
        onClick={() => {
          setOpen(!open);
        }}
      >
        {selected.label}
      </div>
      <div className={`border ${open ? "rounded-b-lg" : "hidden"}`}>
        {option}
      </div>
    </div>
  );
};

export default Dropdown;
