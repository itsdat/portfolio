import BaseHeading from "@/components/common/heading/BaseHeading";
import { SocialOrbit } from "@/components/ui/social-orbit";
import {
  Code,
  CodeXml,
  Flame,
  Layers,
  LayoutGrid,
  Palette,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import SolvingIMG from "@/assets/home/Solving.png";
import CollaborationIMG from "@/assets/home/Collaboration.png";
import InnovationIMG from "@/assets/home/Innovation.png";
import CleanIMG from "@/assets/home/Clean.png";
import LearningIMG from "@/assets/home/Learning.png";
import PerformanceIMG from "@/assets/home/Performance.png";

const items = [
  {
    tag: "01",
    title: "Clean Code",
    body: "I believe in writing clean, maintainable code that stands the test of time.",
    image: CleanIMG,
  },
  {
    tag: "02",
    title: "Problem Solving",
    body: "I enjoy tackling complex problems and finding elegant solutions.",
    image: SolvingIMG,
  },
  {
    tag: "03",
    title: "Innovation",
    body: "Always exploring new technologies and approaches to stay ahead.",
    image: InnovationIMG,
  },
  {
    tag: "04",
    title: "Collaboration",
    body: "I thrive in collaborative environments where ideas flow freely.",
    image: CollaborationIMG,
  },
  {
    tag: "05",
    title: "Performance Optimization",
    body: "Focused on building fast, efficient systems with smooth user experiences.",
    image: PerformanceIMG,
  },
  {
    tag: "06",
    title: "Continuous Learning",
    body: "Committed to lifelong learning and constantly improving my skills.",
    image: LearningIMG,
  },
];

export default function AboutSection() {
  return (
    <div
      className="w-full max-w-7xl mx-auto md:h-screen flex flex-col items-center justify-center gap-6 px-4"
      id="about"
    >
      <BaseHeading title="About me" />
      <div className="flex md:flex-row flex-col items-start justify-between gap-5 w-full">
        <div className="w-full md:w-1/2">
          <div className="w-full md:w-[80%] rounded-xl mx-auto aspect-square bg-white dark:bg-neutral-950 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-neutral-100/20 dark:bg-neutral-800/20 blur-3xl"></div>

            <div className="relative z-10 flex flex-col h-full justify-between p-5">
              <div>
                <h2 className="text-2xl flex items-center justify-start gap-2 font-medium text-neutral-900 dark:text-white leading-snug">
                  <CodeXml /> Itsdat
                </h2>
                <p className="mt-3 text-neutral-600 dark:text-neutral-400 text-sm ">
                  I'm a passionate developer with a love for creating beautiful,
                  functional, and user-friendly applications. My journey in tech
                  started with a curiosity about how things work, which evolved
                  into a career building digital experiences that make a
                  difference.
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-50 h-50">
              <div className="absolute bottom-0 right-0 translate-x-5 translate-y-5">
                <div className="relative origin-bottom-right scale-115 md:scale-125 translate-x-[25%] translate-y-[50%]">
                  <SocialOrbit
                    rippleCount={3}
                    rippleDuration={2}
                    textOrbitIndex={3}
                    textDuration={20}
                    orbitDuration={30}
                    iconDelay={200}
                    iconDuration={800}
                    icons={[
                      { icon: <Zap size={20} />, orbitIndex: 1, position: 0 },
                      {
                        icon: <Sparkles size={20} />,
                        orbitIndex: 2,
                        position: 45,
                      },
                      {
                        icon: <Terminal size={20} />,
                        orbitIndex: 2,
                        position: 90,
                      },
                      {
                        icon: <Palette size={20} />,
                        orbitIndex: 1,
                        position: 135,
                      },
                      {
                        icon: <Code size={20} />,
                        orbitIndex: 1,
                        position: 180,
                      },
                      {
                        icon: <LayoutGrid size={20} />,
                        orbitIndex: 2,
                        position: 225,
                      },
                      {
                        icon: <Layers size={20} />,
                        orbitIndex: 1,
                        position: 270,
                      },
                      {
                        icon: <Flame size={20} />,
                        orbitIndex: 2,
                        position: 315,
                      },
                    ]}
                  >
                    <div className="flex items-center justify-center w-16 h-16 rounded-full">
                      <svg
                        data-testid="geist-icon"
                        height="32"
                        strokeLinejoin="round"
                        viewBox="0 0 16 16"
                        width="32"
                      >
                        <path
                          d="M8 0C8.26264 0 8.5144 0.104413 8.7002 0.290039L10.4639 2.05273H12.9551C13.0853 2.05258 13.2146 2.07819 13.335 2.12793C13.4554 2.17773 13.5651 2.25063 13.6572 2.34277C13.7494 2.43492 13.8223 2.54461 13.8721 2.66504C13.9218 2.7854 13.9474 2.91468 13.9473 3.04492V5.53711L15.71 7.2998C15.8956 7.4856 16 7.73736 16 8C16 8.26264 15.8956 8.5144 15.71 8.7002L13.9473 10.4639V12.9551C13.9474 13.0853 13.9218 13.2146 13.8721 13.335C13.8223 13.4554 13.7494 13.5651 13.6572 13.6572C13.5651 13.7494 13.4554 13.8223 13.335 13.8721C13.2146 13.9218 13.0853 13.9474 12.9551 13.9473H10.4639L8.7002 15.71C8.5144 15.8956 8.26264 16 8 16C7.73736 16 7.4856 15.8956 7.2998 15.71L5.53613 13.9473H3.04492C2.49748 13.9473 2.05273 13.5037 2.05273 12.9551V10.4639L0.290039 8.7002C0.104413 8.5144 0 8.26264 0 8C0 7.73736 0.104413 7.4856 0.290039 7.2998L2.05273 5.53613V3.04492C2.05258 2.91468 2.07819 2.7854 2.12793 2.66504C2.17773 2.54461 2.25063 2.43492 2.34277 2.34277C2.43492 2.25063 2.54461 2.17773 2.66504 2.12793C2.7854 2.07819 2.91468 2.05258 3.04492 2.05273H5.53711L7.2998 0.290039C7.4856 0.104413 7.73736 0 8 0ZM6.9375 8.5332L5.875 7.4707L4.81445 8.53125L6.40723 10.124C6.70012 10.4169 7.17488 10.4169 7.46777 10.124L11.1855 6.40625L10.125 5.3457L6.9375 8.5332Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </SocialOrbit>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <LayerStackDemo />
        </div>
      </div>
    </div>
  );
}

import { LayerStack, Card } from "@/components/ui/layer-stack";

const LayerStackDemo = () => {
  return (
    <LayerStack
      cardWidth={300}
      cardGap={14}
      stageHeight={380}
      lastCardFullWidth={true}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        if (isLast) {
          return (
            <Card
              key={item.tag}
              className="bg-white dark:bg-neutral-950 text-foreground border border-gray-200 dark:border-transparent overflow-hidden"
            >
              <div className="flex h-full flex-col md:flex-row">
                <div className="relative md:w-1/2 h-48 md:h-full overflow-hidden">
                  <img
                    src={`${item.image}?w=600&q=75&auto=format`}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{
                      contentVisibility: "auto",
                      transform: "translateZ(0)",
                      backfaceVisibility: "hidden",
                    }}
                  />
                </div>

                <div className="flex md:w-1/2 flex-col justify-between p-8 gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-muted-foreground">
                      {item.tag}
                    </span>
                    <div className="size-1.5 rounded-full bg-foreground/20 dark:bg-foreground/40" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-px w-8 bg-border" />
                    <h2 className="text-2xl font-semibold tracking-tight leading-tight">
                      {item.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          );
        }

        return (
          <Card
            key={item.tag}
            className="bg-white dark:bg-neutral-950 text-foreground border border-gray-200 dark:border-transparent overflow-hidden"
          >
            <div className="flex h-full flex-col p-8 gap-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-muted-foreground">
                  {item.tag}
                </span>
                <div className="size-1.5 rounded-full bg-foreground/20 dark:bg-foreground/40" />
              </div>

              <div className="relative flex-1 overflow-hidden rounded-sm">
                <img
                  src={`${item.image}?w=600&q=75&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{
                    contentVisibility: "auto",
                    transform: "translateZ(0)",
                    backfaceVisibility: "hidden",
                  }}
                />
              </div>

              <div className="space-y-3">
                <div className="h-px w-8 bg-border" />
                <h2 className="text-2xl font-semibold tracking-tight leading-tight">
                  {item.title}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </div>
          </Card>
        );
      })}
    </LayerStack>
  );
};
