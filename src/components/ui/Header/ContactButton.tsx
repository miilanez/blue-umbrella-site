import Link from "next/link";

interface ContactButtonProps {
  text: string;
  link: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ text, link }) => {
  return (
    <button className="bg-blue-800 hover:bg-blue-500 p-2 rounded-lg text-sm font-bold text-slate-50">
      <Link href={link}>{text}</Link>
    </button>
  );
};

export default ContactButton;
