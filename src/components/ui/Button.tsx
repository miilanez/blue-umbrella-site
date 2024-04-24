import Link from "next/link";

interface ButtonProps {
  text: string;
  link: string;
  containerStyles?: string;
}

const Button: React.FC<ButtonProps> = ({ text, link, containerStyles }) => {
  return (
    <button className={`${containerStyles} items-center block text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}>
      <Link href={link} rel="noopener noreferrer">{text}</Link>
    </button>
  );
};

export default Button;
