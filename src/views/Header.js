import React from "react";
import { useNavigate } from "react-router-dom";

const headerlist = [
  {
    name: "About us",
    link: "/",
  },
  {
    name: "Sign up",
    link: "/signup",
  },
  {
    name: "Sign in",
    link: "/signin",
  },
];

export default function Header(props) {
  const navigate = useNavigate();

  const sendTo = link => {
    navigate(link);
  }
  return (
    <header className="mx-auto w-full md:w-[1024px]">
      <div className="flex items-center justify-end px-3 shadow-md">
        {headerlist.map((item) => (
          <a 
          key={item.name}
          onClick={() => sendTo(item.link)}
          className="border-2 border-purple-700 rounded-md px-3 py-2 my-2 ml-3 font-bold"
          >{item.name}</a>
        ))}
      </div>
    </header>
  );
}