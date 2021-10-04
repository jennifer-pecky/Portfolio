
import project3 from '../../../Assets/IMS trending.png';
import project1 from '../../../Assets/FF-watches.png';
import project2 from '../../../Assets/Paybox-screenshot.png';

export const ProjectsData = [
    {
      id: "1",
      title: "FashionFiesta",
      img: project1,
      info: "FashionFiesta is an ecommerce website I handed coded from scratch using react js.A user can create an account, login, add items to cart, remove items from cart, view details of each item and proceed to make a payment using Paystack.",
      stacks: [
         "Tech Stack",
         "React Js",
         "SCSS",
         "Context Api",
         "Firebase",
         "Paystack"
      ],
      url: "https://fashionfiesta-a4172.web.app",
      github: "https://github.com/Racheal-spec/FashionFiesta",
    },
    { 
        id: "2",
        title: "Paybox",
        img: project2,
        info: "A financial application landing page.P.S-landing page and all assets designed by me",
        stacks: [
           "Tech Stack",
           "HTML",
           "CSS",
           "Javascript",
           "GSAP",
        ],
        url: "https://payboxapp.netlify.app",
        github: "https://github.com/Racheal-spec/PayBox",
      },
      {
        id: "3",
        title: "Instamoviesearch",
        img: project3,
        info: "A react movie app built using The Movie DB Api. Users can get list of trending, popular and top rated movies. What's more? Users can also search for their favourite movies and add these movies to their watchlist.",
        stacks: [
           "Tech Stack",
           "React Js",
           "SCSS",
           "Redux",
        ],
        url: "https://instamoviesearch.netlify.app/",
        github: "https://github.com/Racheal-spec/Instasearchmovie",
      },
]
