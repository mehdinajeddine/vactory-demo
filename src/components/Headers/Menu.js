import React from "react";

const Menu = ({ items }) => {
  return (
    <ul className="flex justify-around ">
      {items.map((item, key) => {
        return (
          <li key={key} className="text-sm font-bold underline m-24">
            {item.label}
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
