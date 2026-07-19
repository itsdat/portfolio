import BaseHeading from "@/components/common/heading/BaseHeading";
import { LogoStepper } from "@/components/ui/logo-stepper";

const logos = [
  {
    icon: (
      <img
        src="https://cdn.simpleicons.org/nodedotjs?color=339933"
        alt="Node.js"
        className="w-full h-full object-contain"
      />
    ),
    label: "Node.js",
  },
  {
    icon: (
      <img
        src="https://cdn.simpleicons.org/nextdotjs?color=000000"
        alt="Next.js"
        className="w-full h-full object-contain"
      />
    ),
    label: "Next.js",
  },
  {
    icon: (
      <img
        src="https://cdn.simpleicons.org/react?color=61DAFB"
        alt="React"
        className="w-full h-full object-contain"
      />
    ),
    label: "React",
  },
  {
    icon: (
      <img
        src="https://cdn.simpleicons.org/tailwindcss?color=06B6D4"
        alt="Tailwind CSS"
        className="w-full h-full object-contain"
      />
    ),
    label: "Tailwind CSS",
  },
  {
    icon: (
      <img
        src="https://cdn.simpleicons.org/typescript?color=3178C6"
        alt="TypeScript"
        className="w-full h-full object-contain"
      />
    ),
    label: "TypeScript",
  },
  {
    icon: (
      <img
        src="https://cdn.simpleicons.org/javascript?color=F7DF1E"
        alt="JavaScript"
        className="w-full h-full object-contain"
      />
    ),
    label: "JavaScript",
  },
  {
    icon: (
      <img
        src="https://cdn.simpleicons.org/nestjs?color=E0234E"
        alt="NestJS"
        className="w-full h-full object-contain"
      />
    ),
    label: "NestJS",
  },
  {
    icon: (
      <img
        src="https://cdn.simpleicons.org/mongodb?color=47A248"
        alt="MongoDB"
        className="w-full h-full object-contain"
      />
    ),
    label: "MongoDB",
  },
  {
    icon: (
      <img
        src="https://cdn.simpleicons.org/mysql?color=4479A1"
        alt="MySQL"
        className="w-full h-full object-contain"
      />
    ),
    label: "MySQL",
  },
  {
    icon: (
      <img
        src="https://cdn.simpleicons.org/vercel?color=000000"
        alt="Vercel"
        className="w-full h-full object-contain"
      />
    ),
    label: "Vercel",
  },
  {
    icon: (
      <img
        src="https://cdn.simpleicons.org/vite?color=646CFF"
        alt="Vite"
        className="w-full h-full object-contain"
      />
    ),
    label: "Vite",
  },
  {
    icon: (
      <img
        src="https://cdn.simpleicons.org/firebase?color=FFCA28"
        alt="Firebase"
        className="w-full h-full object-contain"
      />
    ),
    label: "Firebase",
  },
  {
    icon: (
      <img
        src="https://cdn.simpleicons.org/github?color=181717"
        alt="GitHub"
        className="w-full h-full object-contain"
      />
    ),
    label: "GitHub",
  },
  {
    icon: (
      <img
        src="https://cdn.simpleicons.org/figma?color=F24E1E"
        alt="Figma"
        className="w-full h-full object-contain"
      />
    ),
    label: "Figma",
  },
  {
    icon: (
      <img
        src="https://cdn.simpleicons.org/git?color=F05032"
        alt="Git"
        className="w-full h-full object-contain"
      />
    ),
    label: "Git",
  },
];

export default function SkillSection() {
  return (
    <div className="w-full max-w-7xl mx-auto h-auto flex flex-col items-start justify-start gap-6 px-4" id="skills">
      <BaseHeading title="My skills" />

      <LogoStepper
        logos={logos}
        direction="loop"
        animationDelay={1.2}
        animationDuration={0.6}
        visibleCount={7}
      />
    </div>
  );
}
