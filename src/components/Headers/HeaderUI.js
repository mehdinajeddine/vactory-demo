import React from "react";

const HeaderUI = ({ children = [] }) => {
  const logo = children.find((item) => item.type.name === "Logo");
  const mainMenu = children.find((item) => item.props.id === "mainMenu");
  const userMenu = children.find((item) => item.props.id === "userMenu");
  const secondaryMenu = children.find(
    (item) => item.props.id === "secondaryMenu"
  );
  const customBloc = children.find((item) => item.props.id === "customBloc");
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>{customBloc}</div>
        <div>{logo}</div>
        <div>{userMenu}</div>
      </div>
      <div className="flex justify-between items-center">
        <div>{mainMenu ? mainMenu : <div>Main Menu to put here</div>}</div>
        <div>{secondaryMenu}</div>
      </div>
    </div>
  );
};

export default HeaderUI;
