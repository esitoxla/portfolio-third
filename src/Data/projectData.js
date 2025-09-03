import textImg from "../assets/images/image.jpg";
import todoImg from "../assets/images/todo-app.png";
import CocohuskImg from "../assets/images/cocohusk.png";
import minanaImg from "../assets/images/minanaImg.1.png"
import QrCodeImg from "../assets/images/QrCode.png"
import insectImg from "../assets/images/insect.api.png";


const projectsData = [
  {
    id: 1,
    title: "Todo Website",
    category: "static",
    description:
      "A simple, responsive todo app for organizing tasks efficiently anywhere",
    image: todoImg,
    link: "https://esitoxla.github.io/todo-div/",
  },
  {
    id: 2,
    title: "Cocohusk Enterprise",
    category: "static",
    description:
      "Responsive landing page showcasing eco-friendly cocopeat products.",
    image: CocohuskImg,
    link: "https://esitoxla.github.io/CocoFert/",
  },
  {
    id: 3,
    title: "E-commerce React App",
    category: "react-apps",
    description:
      "Full-stack e-commerce website with admin dashboard and product management.",
    image: minanaImg,
    link: "https://minana-services-ltd.netlify.app/",
  },
  {
    id: 4,
    title: "Qr Code Generator App",
    category: "react-apps",
    description: "A habit-tracking application with daily goals and analytics.",
    image: QrCodeImg,
    link: "https://esitoxla.github.io/todo-div/",
  },
  {
    id: 5,
    title: "Insects-borne Diseases API",
    category: "api-development",
    description: "RESTful API that shares data on insect-transmitted diseases.",
    image: insectImg,
    link: "https://documenter.getpostman.com/view/38771481/2sB3HjNMuw",
  },
  {
    id: 6,
    title: "Qr Code Generator API",
    category: "api-development",
    description: "RESTful API to track and analyze drug efficacy reports",
    image: textImg,
    link: "https://esitoxla.github.io/todo-div/",
  },
];

export default projectsData;
