import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="flex content-center items-center p-5 bg-zinc-900 w-full">
        <ul className="flex content-center items-center gap-5 font-bold text-slate-100 mx-auto ">
          <li className="hover:text-slate-200">
            <a href="/">Accordion</a>
          </li>
          <li className="hover:text-slate-200">
            <a href="/translate">Translate</a>
          </li>
          <li className="hover:text-slate-200">
            <a href="/search">Wiki</a>
          </li>
          <li className="hover:text-slate-200">
            <a href="/dropdown">Dropdown</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
