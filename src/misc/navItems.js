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
    title: "consulting",
    text: "consulting",
    link: "/consulting",
  },
  {
    source: carousel_1,
    title: "web_dev",
    text: "web_dev",
    link: "/web-development",
  },
  {
    source: carousel_2,
    title: "mob_dev",
    text: "mob_dev",
    link: "/mobile-development",
  },
  {
    source: carousel_3,
    title: "devops",
    text: "devops",
    link: "/devops-engineering",
  },
  {
    source: carousel_4,
    title: "gra_design",
    text: "gra_design",
    link: "/graphic-design",
  },
  {
    source: carousel_5,
    title: "uix_design",
    text: "uix_design",
    link: "/uix-design",
  },
  {
    source: carousel_6,
    title: "tutoring",
    text: "tutoring",
    link: "/tutoring",
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
