import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-row py-5 px-10 shadow bg-green-400 justify-center">
      <h2 className="text-black text-center font-bold">
        Menonton dan Bergaming
      </h2>
      <nav className="hidden md:flex gap-10" />
    </div>
  );
};

export default Footer;
