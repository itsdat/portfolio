import BaseHeading from "@/components/common/heading/BaseHeading";
import { CardTilt, CardTiltContent } from "@/components/ui/card-tilt";
import { Radio } from "lucide-react";

const PROJECT_TYPE = {
  WEBSITE: "Website",
  MOBILE_APP: "App Mobile",
} as const;

const projects = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg",
    tech: ["Nextjs", ""],
    name: "Luxe Shop",
    desc: "A modern Spotify clone with core features like user authentication, music streaming, playlists, albums, artists, and responsive UI built with a sleek design.",
    github: "",
    link: "https://shop.hidras.xyz",
    type: PROJECT_TYPE.WEBSITE,
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dxczzdnag/image/upload/v1785311466/eluzjfdbadpw4i7mw4xm.png",
    tech: ["React", ""],
    name: "Quick Chat",
    desc: "A real-time chat app with instant messaging, online status, and image sharing, built using Socket.IO for live communication and a clean, responsive UI.",
    github: "https://github.com/itsdat/quick-chat",
    link: "https://chat.hidras.xyz",
    type: PROJECT_TYPE.WEBSITE,
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dxczzdnag/image/upload/v1785550618/km0qlf2bzfd4gfr5pcz9.png",
    tech: [
      "ReactJS",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
    ],
    name: "Tomato Food",
    desc: "A full-stack food ordering platform with user authentication, cart management, order tracking, and an admin dashboard for managing food items and orders, built with a responsive UI.",
    github: "https://github.com/itsdat/Tomato_Food",
    link: "https://tomato-food.hidras.xyz/",
    type: PROJECT_TYPE.WEBSITE,
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg",
    tech: ["Nextjs", ""],
    name: "Luxe Shop",
    desc: "A modern Spotify clone with core features like user authentication, music streaming, playlists, albums, artists, and responsive UI built with a sleek design.",
    github: "",
    link: "https://shop.hidras.xyz",
    type: PROJECT_TYPE.WEBSITE,
  },
];

export default function ProjectSection() {
  return (
    <div
      className="w-full max-w-7xl mx-auto min-h-screen flex flex-col items-start justify-start gap-6 px-4 mb-10"
      id="projects"
    >
      <BaseHeading title="My projects" />

      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {projects.map((item) => (
          <CardTilt className="w-full" key={item.id}>
            <CardTiltContent className="relative">
              <div className="m-2 rounded-2xl bg-white dark:bg-neutral-950 p-6 shadow-xl">
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="mb-1 text-lg font-bold text-slate-900 dark:text-slate-100">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 dark:bg-neutral-800">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </svg>
                    </div>
                    <span className="font-medium">{item.type}</span>
                  </div>
                </div>

                <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
                  {item.desc}
                </p>

                <img
                  src={item.image}
                  alt="project_image"
                  className="w-full object-cover aspect-video rounded-xl"
                />

                <div className="flex items-center justify-between w-full gap-3">
                  <button
                    onClick={() =>
                      window.open(item.github, "_blank", "noopener,noreferrer")
                    }
                    className="cursor-pointer mt-4 w-full flex items-center justify-center gap-1 rounded-lg border-2 border-dashed border-slate-300 dark:border-neutral-700 py-3 text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors hover:border-slate-400 dark:hover:border-neutral-600 hover:bg-slate-50 dark:hover:bg-neutral-800"
                  >
                    {/* <img
                      src="https://cdn.simpleicons.org/github?color=181717"
                      alt="github_image"
                      className="w-5 h-5"
                    /> */}
                    {/* <Github className="size-5" /> */}
                    <svg
                      width={20}
                      height={20}
                      role="img"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    Github
                  </button>
                  <button
                    onClick={() =>
                      window.open(item.link, "_blank", "noopener,noreferrer")
                    }
                    className="cursor-pointer mt-4 w-full flex items-center justify-center gap-1 rounded-lg border-2 border-dashed border-slate-300 dark:border-neutral-700 py-3 text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors hover:border-slate-400 dark:hover:border-neutral-600 hover:bg-slate-50 dark:hover:bg-neutral-800"
                  >
                    <Radio className="size-5" />
                    Live demo
                  </button>
                </div>
              </div>
            </CardTiltContent>
          </CardTilt>
        ))}
      </div>
    </div>
  );
}
