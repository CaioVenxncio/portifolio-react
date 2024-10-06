import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.jpg";
import CV from "../components/cv.pdf"; // Importando o currículo

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Caio Venancio" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href={CV} className="btn" download>
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
