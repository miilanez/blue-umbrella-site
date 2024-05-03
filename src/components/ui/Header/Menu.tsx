import { Link } from "react-scroll";

interface MenuProps {
  containerStyles?: string;
  onLinkClick?: () => void;
}

const links = [
  { name: "Principal", target: "/", offset: "-100" },
  { name: "Sobre", target: "sobre", offset: "-80" },
  { name: "Serviços", target: "servicos", offset: "-80" },
  { name: "Contato", target: "contato", offset: "0" },
];

const Menu: React.FC<MenuProps> = ({ containerStyles, onLinkClick }) => {
  return (
    <div id="menu" className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            activeClass="active"
            key={index}
            to={link.target}
            spy={true}
            smooth={true}
            duration={500}
            rel="noopener noreferrer"
            onClick={onLinkClick}
            className="overflow-hidden hover:cursor-pointer mx-3 text-blue-950 hover:text-blue-700 relative font-medium hover:text-principal before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-secondary before:transition hover:before:scale-x-100"
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
