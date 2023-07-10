import carousel from "../assets/consulting.jpg";
import carousel_1 from "../assets/web-development.jpg";
import carousel_2 from "../assets/mobile-development.jpg";
import carousel_3 from "../assets/graphic-design.jpg";
import carousel_4 from "../assets/devops.jpg";
import carousel_5 from "../assets/graphic-design.jpg";
import carousel_6 from "../assets/tutoring.jpg";

const serviceItem = [
  {
    source: carousel,
    title: "Consulting",
    text: "Consulting",
    link: "/consulting",
  },
  {
    source: carousel_1,
    title: "Web development",
    text: "Web development",
    link: "web-development",
  },
  {
    source: carousel_2,
    title: "Mobile development",
    text: "Mobile development",
    link: "mobile-development",
  },
  {
    source: carousel_3,
    title: "Devops engineering",
    text: "Devops engineering",
    link: "devops-engineering",
  },
  {
    source: carousel_4,
    title: "graphic design",
    text: "graphic design",
    link: "graphic-design",
  },
  {
    source: carousel_5,
    title: "ui/ux design",
    text: "ui/ux design",
    link: "uix-design",
  },
  {
    source: carousel_6,
    title: "programming tutoring",
    text: "programming tutoring",
    link: "tutoring",
  },
];

const industryItem = [
  { title: "eWallet", link: "/e-wallet" },
  { title: "Banking", link: "/banking" },
  { title: "Real Estate", link: "/real-estate" },
  { title: "Lending", link: "/lending" },
  { title: "Donation", link: "/donation" },
];
export { serviceItem, industryItem };
