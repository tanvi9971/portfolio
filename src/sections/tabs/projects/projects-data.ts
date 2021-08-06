import meididoc from "../../../assets/projects/meididoc.png";
import meididocCover from "../../../assets/projects/meididoc-cover.jpg";
import supersehat from "../../../assets/projects/supersehat.png";
import supersehatCover from "../../../assets/projects/supersehat-cover.jpg";
import vamstar from "../../../assets/experience/vamstar.png";
import vamstarCover from "../../../assets/projects/vamstar-cover.jpg";

export interface IProject {
  projectName: string;
  coverPhotoUrl: string;
  iconUrl: string;
  url: string;
  technologies: string;
  description: string;
  myRole: string;
}

export const projects: IProject[] = [
  {
    projectName: "Vamstar",
    coverPhotoUrl: vamstarCover,
    iconUrl: vamstar,
    url: "https://vamstar.io",
    technologies: "ReactJS, NodeJS, ElasticSearch, Material UI",
    description:
      "Pharma domain-specific search engine and AI powered marketplace that matches supply and demand. Vamstar brings together expertise in commercialisation and market access, artificial intelligence, as well as software engineering and data science to transform the way healthcare organizations discover and connect with suppliers.",
    myRole:
      "Working in a team of 4 people, I was responsible for development of the frontend of the application for search and filtering the tenders.",
  },
  {
    projectName: "SuperSehat",
    coverPhotoUrl: supersehatCover,
    iconUrl: supersehat,
    url: "https://www.facebook.com/supersehat.in",
    technologies:
      "React Native, Victory Native charting libraries, MongoDB, GraphQL",
    description:
      "Created for Indian lifestyle, an app that empowers you to take complete control of your diabetes. Log sugar, Insulin, BP, exercise, find food choices and recipes. Talk with diet coaches and diabetic educators in real time. Create Prescriptions and stay on track with your medicines.",
    myRole:
      "Working in a team of 5 people, I was involved in the development of some of the screens of the mobile app, as well as the admin web application. I also attended promotion events as an official representative.",
  },
  {
    projectName: "Meididoc",
    coverPhotoUrl: meididocCover,
    iconUrl: meididoc,
    url: "https://meididoc.com",
    technologies: "React Native, ReactJS, Twilio Video, GraphQL",
    description:
      "A web and mobile platform for telemedicine and remote management and communication with patients. MEIDIDOC enables the provider’s office to engage with their patients through a virtual office visit. MEIDIDOC will also track the patients in-between visit data such as activity (steps, sleep, miles) and vitals (heart rate, blood pressure, blood sugar), and then can be shared with their providers.",
    myRole:
      "Working in a team of 5, I was involved in developing some screens and parts of some flows of the app.",
  },
];
