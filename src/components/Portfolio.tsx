import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/portfolio/Portfolio.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Project from "./pure/Project";
import "../styles/portfolio/Portfolio.css";
import AmbienceHub from "../assets/images/ambience-hub.jpg";
import Tenzies from "../assets/images/tenzies-game.jpg";
import TodoList from "../assets/images/todo-list.jpg";
import PokeBattle from "../assets/images/pokebattle.jpg";
import Pomodoro from "../assets/images/Pomodoro.jpg";
import Rick from "../assets/images/rick-and-morty.jpg";

const projectsList = [
  {
    title: "AmbienceHUB",
    description:
      "Its main objective is to provide an appropriate ambience for people to study/work for long hours. This app is connected to Firebase, which means that all modifications are perdurable. This project is completely mobile responsive and it manages the main state through the useReducer hook. \n More versions and features are yet to come...",
    date: "30 Dec 2022",
    technologies: ["React", "JS", "HTML", "CSS"],
    role: "Frontend",
    link: "https://ambiencemusichub.netlify.app/",
    picture: AmbienceHub,
  },
  {
    title: "Rick and Morty GraphQl",
    description:
      "This small React TS app displays information about the different characters of the famous show Rick and Morty in a highly interactive way. It uses the public Rick and Morty GraphQL API and implements important features and libraries such as Ag Grid React, React Query, Mock Service Worker, React Testing Library, and Custom Hooks, among others.",
    date: "02 May 2023",
    technologies: [
      "React",
      "TypeScript",
      "SCSS",
      "Jest",
      "RTL",
      "React Query",
      "GraphQl",
    ],
    role: "Frontend",
    link: "https://graphql-rick-and-morty.netlify.app/",
    picture: Rick,
  },
  {
    title: "Tenzies Game",
    description:
      "This app emulates the famous dice game called 'Tenzies'. I used React.js to organize and render the different components and CSS for style. Also, this app can be installed on phones and be display as a normal mobile app. Finally, it saves the highest (in this case lowest) score on LocalStorage to track for new records",
    date: "03 Mar 2022",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    role: "Frontend",
    link: "https://tenzies-smirlian.netlify.app/",
    picture: Tenzies,
  },
  {
    title: "PokeBattle",
    description:
      "Pokemon card game using the famous PokeApi. This project combines different methods and tools such as JSON, Fetch, CSS framework (NES), sounds/music, and else. Also, you will find the classic Pokedex tab where you can request the information of any pokemon (by id or by name).",
    date: "22 Jan 2022",
    technologies: ["JavaScript", "HTML", "CSS"],
    role: "Frontend",
    link: "https://ignacio0104.github.io/pokemonBattle/",
    picture: PokeBattle,
  },
  {
    title: "Todo App",
    description:
      "This app will help you track and organize all your current activities. It's easy to use, and it offers some animation features in order to improve the UX. The app works with local storage so the users can save all the information about their pending activities as well as the ones already finished.",
    date: "13 Jan 2022",
    technologies: ["JavaScript", "HTML", "CSS"],
    role: "Frontend",
    link: "https://ignacio0104.github.io/Todo-App/",
    picture: TodoList,
  },
  {
    title: "Pomodoro Clock",
    description:
      "This is a customizable and responsive app that is able to help you organize your working and relaxing schedule. The technologies involved are HTML, CSS, and JAVASCRIPT. The bullet points of this project are time management and local storage settings.",
    date: "08 Jan 2022",
    technologies: ["JavaScript", "HTML", "CSS"],
    role: "Frontend",
    link: "https://ignacio0104.github.io/pomodoroClock/",
    picture: Pomodoro,
  },
];

const Portfolio = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {projectsList.map((project) => (
        <SwiperSlide className="project-slide">
          <Project projectInfo={project} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Portfolio;
