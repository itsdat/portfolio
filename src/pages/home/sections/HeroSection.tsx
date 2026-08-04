import { BackgroundPaths } from "@/components/ui/background-paths";
import BackgroundMeteors from "@/components/ui/backgroundmeteors";
import ProfileCard from "@/components/ui/profilecard";
import MeIMG from "@/assets/me.jpg";

export default function HeroSection() {
  return (
    <div className="w-full" id="#">
      <BackgroundMeteors>
        <div className="w-full max-w-7xl flex md:flex-row flex-col items-center justify-between gap-5">
          <BackgroundPaths className="w-full md:w-3/4 flex items-center justify-center flex-col px-4">
            <h2 className="bg-clip-text text-transparent text-center bg-linear-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
              Hi, I'm Dat. <br /> I build digital experiences.
            </h2>
            <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-100 text-center">
              A developer who enjoys building responsive, well-crafted digital
              experiences with modern tools — with an eye for detail,
              performance, and smooth user experience.
            </p>
          </BackgroundPaths>

          <div className="w-full max-w-[80%] md:w-1/4">
            <ProfileCard
              spotlight={true}
              spotlightColor="99,102,241"
              img={MeIMG}
              name="Itsdat"
              position="Full-Stack Developer"
              bio="Passionate Full-Stack Developer specializing in modern web technologies. I build scalable, high-performance applications with a strong focus on clean architecture, user experience, and maintainable code."
              skills={[
                {
                  name: "TypeScript",
                  icon: "https://cdn.simpleicons.org/github",
                  link: "https://github.com/itsdat",
                },
                {
                  name: "Next.js",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#0A66C2"
                      width={40}
                      height={40}
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  ),
                  link: "https://www.linkedin.com/in/dat-vinh-8720b9361/",
                },
                {
                  name: "Node.js",
                  icon: "https://cdn.simpleicons.org/facebook",
                  link: "https://www.facebook.com/vinh.at.333967/",
                },
                {
                  name: "JavaScript",
                  icon: "https://cdn.simpleicons.org/instagram",
                  link: "https://www.facebook.com/vinh.at.333967/",
                },
              ]}
            />
          </div>
        </div>
      </BackgroundMeteors>
    </div>
  );
}
