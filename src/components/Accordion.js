import React, { useState } from "react";
const Accordion = ({ items }) => {
  const [itemIndex, setItemIndex] = useState(null);
  const onTitleClick = (index) => {
    setItemIndex(index);
  };
  const list = items.map(({ title, content }, index) => {
    const hide = index === itemIndex ? "" : "hidden";
    return (
      <div
        className="shadow-lg rounded-md my-5 p-5 cursor-pointer bg-slate-100"
        onClick={() => onTitleClick(index)}
        key={title}
      >
        <h1 className="font-bold text-color-black text-xl ">{title}</h1>
        <div className="mt-5">
          <p className={`${hide}`}>{content}</p>
        </div>
      </div>
    );
  });
  return <div>{list}</div>;
};
export default Accordion;
