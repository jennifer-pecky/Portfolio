import project3 from "../../../Assets/isshot.png";
import project1 from "../../../Assets/ffcut.jpg";
import project2 from "../../../Assets/spotify-clone-app4.jpg";
import project5 from "../../../Assets/Paybox-screenshot.png";
import project4 from "../../../Assets/dashboard-screenshot2.jpg";
import project6 from "../../../Assets/dashtrackimg.png";

export const ProjectsData = [
  {
    id: "1",
    title: "Dashtrack",
    img: project6,
    info: "A performance monitoring tool that is used to diagose performance issues, and also suggests best ways to fix or prevent them.",
    stacks: [
      "Tech Stack:",
      "Typescript",
      "React Js",
      "Context API",
      "Tailwind CSS",
    ],
    url: "https://dasht-rack.vercel.app",
    github: "https://github.com/Racheal-spec/dash-track",
  },
  {
    id: "2",
    title: "Instamoviesearch",
    img: project3,
    info: "A react movie app built using The Movie DB Api. Users can get list of trending, popular and top rated movies. What's more? Users can also search for their favourite movies and add these movies to their watchlist.",
    stacks: [
      "Tech Stack:",
      "React Js",
      "Typescript",
      "Supabase",
      "RTK Query",
      "SCSS",
      "Redux",
    ],
    url: "https://instasearchmovie.vercel.app/",
    github: "https://github.com/Racheal-spec/Instasearchmovie",
  },
  {
    id: "3",
    title: "Spotify Clone",
    img: project2,
    info: "This is a front-end clone of the spotify web player. The UI was modelled after the spotify desktop app using React Js, Spotify Web Api, Redux for state management and Material UI for styling.",
    stacks: [
      "Tech Stack:",
      "React Js",
      "CSS",
      "Redux",
      "Material UI",
      "Spotify Web Api",
    ],
    url: "https://tomi-spotify.vercel.app/",
    github: "https://github.com/Racheal-spec/Tomi-spotify-clone",
  },

  {
    id: "4",
    title: "FashionFiesta",
    img: project1,
    info: "FashionFiesta is an ecommerce website I developed using react js.A user can create an account, login, add items to cart, remove items from cart, view details of each item and proceed to make a payment using Paystack.",
    stacks: [
      "Tech Stack:",
      "React Js",
      "SCSS",
      "Context Api",
      "Firebase",
      "Paystack",
    ],
    url: "https://fashionfiesta-a4172.web.app",
    github: "https://github.com/Racheal-spec/FashionFiesta",
  },
  {
    id: "5",
    title: "Paybox Dashboard",
    img: project4,
    info: "Paybox dashboard UI design- built with React Js and SCSS",
    stacks: ["Tech Stack:", "React Js", "SCSS", "Material UI", "Recharts"],
    url: "https://paybox-dashboard.netlify.app/",
    github: "https://github.com/Racheal-spec/PayBox-Dashboard",
  },

  {
    id: "6",
    title: "Paybox",
    img: project5,
    info: "A financial application landing page.P.S-landing page and all assets designed by me",
    stacks: ["Tech Stack:", "HTML", "CSS", "Javascript", "GSAP"],
    url: "https://payboxapp.netlify.app",
    github: "https://github.com/Racheal-spec/PayBox",
  },
];
