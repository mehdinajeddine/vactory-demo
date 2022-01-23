import React from "react";
import HeaderUI from "./Headers/HeaderUI";
import Menu from "./Headers/Menu";
import Logo from "./Headers/Logo";
import logoImg from "../logo.png";

const HeaderContainer = () => {
  const mainMenu = [
    { label: "Accueil", link: "#" },
    { label: "Qui sommes-nous ?", link: "#2" },
  ];

  const userMenu = [
    {
      label: "User",
      link: "#",
      icon: "icon-user",
    },
    {
      label: "user",
      link: "#",
      icon: "icon-user",
    },
  ];

  return (
    <div>
      <HeaderUI>
        <div id="customBloc">
          <button className="bg-red-400">Ceci est mon bloc</button>
          <p className="text-sm">Ceci est réservé aux personnes connectés</p>
        </div>
        <Logo src={logoImg} alt="" id="logo" className="w-64" />
        <Menu items={mainMenu} id="mainMenu" />
      </HeaderUI>
    </div>
  );
};

export default HeaderContainer;
