import Link from "next/link";

const links = [
  { name: "Principal", target: "/", offset: "-100" },
  { name: "Sobre", target: "sobre", offset: "-80" },
  { name: "Serviços", target: "servicos", offset: "-80" },
  { name: "Contato", target: "contato", offset: "0" },
];

const MobileNav = ({
  containerStyles,
  onLinkClick,
}: {
  containerStyles: string;
  onLinkClick: () => void;
}) => {
  return (
    <div className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.target}
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

export default MobileNav;
