// import { CodeXml } from "lucide-react";
import { Lamphome } from "../ui/lamphome";
import LogoIMG from "@/assets/logo.png";

export default function Navbar({ children }: { children?: React.ReactNode }) {
  return (
    <Lamphome
      logoSrc={<img src={LogoIMG} alt="logo" className="object-contain w-20" />}
      logoAlt="My Logo"
      navItems={[
        { href: "#", label: "Home" },
        { href: "#about", label: "About me" },
        { href: "#skills", label: "My skills" },
        { href: "#projects", label: "My projects" },
        { href: "#contact", label: "Contact me" },
      ]}
    >
      {children}
    </Lamphome>
  );
}
