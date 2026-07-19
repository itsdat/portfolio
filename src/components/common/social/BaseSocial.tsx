const socials = [
  {
    id: 1,
    image: "https://cdn.simpleicons.org/github",
    link: "https://github.com/itsdat",
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#0A66C2"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    link: "https://www.linkedin.com/in/dat-vinh-8720b9361/",
  },
  {
    id: 3,
    image: "https://cdn.simpleicons.org/facebook",
    link: "https://www.facebook.com/vinh.at.333967/",
  },
  {
    id: 4,
    image: "https://cdn.simpleicons.org/instagram",
    link: "https://www.linkedin.com/in/dat-vinh-8720b9361/",
  },
];

export default function BaseSocial() {
  return (
    <div className="flex items-center justify-center gap-3 my-5">
      {socials.map((item) => (
        <button
          className="w-8 h-8 cursor-pointer"
          onClick={() =>
            window.open(item.link, "_blank", "noopener,noreferrer")
          }
        >
          {item.image ? <img src={item.image} alt={item.image} /> : item.icon}
        </button>
      ))}
    </div>
  );
}
