import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/caio-venancio/" }, // Substitua "seu-perfil" pelo seu perfil do LinkedIn
  { name: "github", icon: <FaGithub />, url: "https://github.com/CaioVenxncio" }, // Substitua "seu-usuario" pelo seu usuário do GitHub
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a 
          href={network.url} 
          className="social-btn" 
          id={network.name} 
          key={network.name} 
          target="_blank" // Abre o link em uma nova aba
          rel="noopener noreferrer" // Para segurança ao abrir em nova aba
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;

