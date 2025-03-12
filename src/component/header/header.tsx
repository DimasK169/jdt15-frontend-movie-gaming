import React, { useState } from "react";

const navData = [
  {
    route: "/",
    label: "Home",

  },
  {
    route: "/airing",
    label: "Airing",

  },
];

const Header: React.FC = () => {
    const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="flex flex-row justify-between py-5 px-10 shadow bg-green-400 text-lg font-semibold">
      <h2 className="text-black">
        MOVIE APP GAMING
      </h2>
      <nav className="hidden md:flex gap-10">
        {navData.map((item) => (
          <a
            key={item.route}
            className="hover:text-blue-400 hover:underline"
            href={item.route}
          >

            {item.label}
          </a>
        ))}
      </nav>
      <button onClick={() =>setToggle((prev: boolean) => !prev)}  className="flex md:hidden">
        {toggle ? "Close" : "Open"}</button>
    </div>
  );
};

export default Header;
