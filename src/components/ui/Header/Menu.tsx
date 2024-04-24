import Link from "next/link";

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
            key={index}
            href={link.target}
            rel="noopener noreferrer"
            onClick={onLinkClick}
            className="mx-3 text-blue-950 hover:text-blue-700"
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
