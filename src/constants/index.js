import {
  benefitCard1,
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "About Us",
    url: "#about",
  },
  {
    id: "1",
    title: "ExeCom",
    url: "#execom",
  },
  {
    id: "2",
    title: "Gallery",
    url: "#gallery",
  },
  {
    id: "3",
    title: "Contact Us",
    url: "#contact",
  },
  // {
  //   id: "4",
  //   title: "New account",
  //   url: "#signup",
  //   onlyMobile: true,
  // },
  // {
  //   id: "5",
  //   title: "Sign in",
  //   url: "#login",
  //   onlyMobile: true,
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [

  {
    id: "1",
    title: "Web development",
    text: "Web development is a key focus area at ACM AJCE, where we aim to empower students with the skills needed to build and maintain dynamic, responsive, and user-friendly websites. Our workshops and coding sessions cover a wide range of topics, from the basics of HTML, CSS, and JavaScript to advanced frameworks and libraries like React, Angular, and Vue.js. .",
    date: "May 2024",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Machine Learning",
    text: "At ACM AJCE, we are at the forefront of the machine learning revolution, helping students explore and master one of the most transformative fields in technology today.",
    date: "May 2024",
    status: "done",
    imageUrl: roadmap3,
  },
 
];

export const collabText =
  "At ACM AJCE, we are committed to fostering a community where innovation, knowledge, and technology converge.";

export const collabContent = [
  {
    id: "0",
    title: "ACM AJCE",
    text: collabText,
  },
  {
    id: "1",
    title: "Worshops",
  },
  {
    id: "2",
    title: "Tech Events",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Tiranga Online quizz",
    text: "Online quizz compettion As we celebrate India's 78th Independence Day, let us not just celebrate our freedom, but also reflect on our responsibilities as citizens.🙌🏻 🪔To inculcate the values of patriotism, democracy and unity among the youth, ACM AJCE presents .",
    backgroundUrl: "./src/assets/benefits/card-1.png",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "RoadMap to Cyber Security",
    text: "To explore a new world of cyber security and dive into its important aspects, ACM AJCE presents you a webinar on the topic: 'Roadmap to Cyber-Security' 🛡️ 💫<br> Speaker: Angel Rose Cyber Security Expert, (AJCE 2018 pass out).",
    // backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Project Management Talk",
    text: "Do you have an innovative idea but aren't sure how to bring it to life? Are you struggling to make your projects stand out from the crowd? Join us for a special talk session hosted by ACM and CSE Association!.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  // {
  //   id: "3",
  //   title: "Fast responding",
  //   text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
  //   backgroundUrl: "./src/assets/benefits/card-4.svg",
  //   iconUrl: benefitIcon4,
  //   imageUrl: benefitImage2,
  //   light: true,
  // },
  // {
  //   id: "4",
  //   title: "Ask anything",
  //   text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
  //   backgroundUrl: "./src/assets/benefits/card-5.svg",
  //   iconUrl: benefitIcon1,
  //   imageUrl: benefitImage2,
  // },
  // {
  //   id: "5",
  //   title: "Improve everyday",
  //   text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
  //   backgroundUrl: "./src/assets/benefits/card-6.svg",
  //   iconUrl: benefitIcon2,
  //   imageUrl: benefitImage2,
  // },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
