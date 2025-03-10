import { Project } from "@/components/ProjectRow";

export const MAX_WIDTH = 1452;

export enum Categories {
  EVENT = "događaji",
  ADVERTISEMENT = "reklame",
  WEDDING = "vjenčanja",
}

export enum breakpoints {
  XS = 0,
  SM = 600,
  MD = 900,
  LG = 1200,
  XL = 1536,
}

export const projects = [
  {
    name: "Dani Mlina",
    location: "Rastoke",
    image1: "/images/dp_1.png",
    image2: "/images/dp_2.png",
    mp4: "/videos/Dani_mlina_2022.mp4",
    webm: "/videos/Dani_mlina_2022.webm",
    poster: "/images/Dani_mlina.jpg",
    fullVideo: "/videos/dani_piva_2.mp4",
    date: "08/21",
    category: Categories.ADVERTISEMENT,
  },
  {
    name: "Dani Piva",
    location: "Karlovac",
    image1: "/images/dp_3.png",
    image2: "/images/dp_4.png",
    mp4: "/videos/dani_piva_2.mp4",
    fullVideo: "/videos/dani_piva_2.mp4",
    poster: "/images/dp_3.png",
    date: "08/21",
    category: Categories.WEDDING,
  },
  {
    name: "Dani Piva",
    location: "Karlovac",
    image1: "/images/dp_5.png",
    image2: "/images/dp_6.png",
    mp4: "/videos/dani_piva_3.mp4",
    fullVideo: "/videos/dani_piva_3.mp4",
    poster: "/images/dp_6.png",
    date: "08/21",
    category: Categories.WEDDING,
  },
  {
    name: "Dani Piva",
    location: "Karlovac",
    image1: "/images/dp_2.png",
    image2: "/images/dp_7.jpg",
    mp4: "/videos/dani_piva_4.mp4",
    fullVideo: "/videos/dani_piva_4.mp4",
    poster: "/images/dp_7.jpg",
    date: "08/21",
    category: Categories.EVENT,
  },
  {
    name: "Dani Piva",
    location: "Karlovac",
    image1: "/images/dp_4.png",
    image2: "/images/dp_3.png",
    mp4: "/videos/dani_piva_5.mp4",
    fullVideo: "/videos/dani_piva_5.mp4",
    poster: "/images/dp_4.png",
    date: "08/21",
    category: Categories.EVENT,
  },
  {
    name: "Dani Piva",
    location: "Karlovac",
    image1: "/images/dp_4.png",
    image2: "/images/dp_3.png",
    mp4: "/videos/dani_piva_5.mp4",
    fullVideo: "/videos/dani_piva_5.mp4",
    poster: "/images/dp_4.png",
    date: "08/21",
    category: Categories.EVENT,
  },
];
