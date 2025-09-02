import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function SocialLinks() {
  const socials = [
    { name: "Instagram", icon: <Instagram className="w-6 h-6" />, link: "https://www.instagram.com/srmvmun?igsh=MWM4ZWdnYTU5Y2tlbw==" },
    { name: "LinkedIn", icon: <Linkedin className="w-6 h-6" />, link: "https://www.linkedin.com/company/srmvmun/" },
  ];

  return (
    <div className="flex space-x-4">
      {socials.map((s, i) => (
        <a
          key={i}
          href={s.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full  hover:text-[#EFDB9E] shadow-md transition"
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}
