import { ReactComponent as CustomerIcon } from "../assets/customer_satisfaction_icon.svg";
import { ReactComponent as ContinuousLearningIcon } from "../assets/continuous_learning.svg";
import { ReactComponent as SocialImpactIcon } from "../assets/social_impact.svg";
import {
  AutoFixHigh,
  CheckCircle,
  Handshake,
  Lightbulb,
} from "@mui/icons-material";

const serviceItem = [
  {
    source: "https://ik.imagekit.io/omobaoshoffa/mahch-solution/consulting.jpg?updatedAt=1689284337230",
    title: "consulting",
    text: "consulting",
    link: "/consulting",
  },
  {
    source: "https://ik.imagekit.io/omobaoshoffa/mahch-solution/web-development.jpg?updatedAt=1689283514568",
    title: "web_dev",
    text: "web_dev",
    link: "/web-development",
  },
  {
    source: "https://ik.imagekit.io/omobaoshoffa/mahch-solution/mobile-development.jpg?updatedAt=1689284005683",
    title: "mob_dev",
    text: "mob_dev",
    link: "/mobile-development",
  },
  {
    source: "https://ik.imagekit.io/omobaoshoffa/mahch-solution/devops.jpg?updatedAt=1689281712674",
    title: "devops",
    text: "devops",
    link: "/devops-engineering",
  },
  {
    source: "https://ik.imagekit.io/omobaoshoffa/mahch-solution/graphic-design.jpg?updatedAt=1689284006865",
    title: "gra_design",
    text: "gra_design",
    link: "/graphic-design",
  },
  {
    source: "https://ik.imagekit.io/omobaoshoffa/mahch-solution/ui-ux-design.png?updatedAt=1689281712778",
    title: "uix_design",
    text: "uix_design",
    link: "/uix-design",
  },
  {
    source: "https://ik.imagekit.io/omobaoshoffa/mahch-solution/tutoring.jpg?updatedAt=1689281715141",
    title: "tutoring",
    text: "tutoring",
    link: "/tutoring",
  },
];

const industryItem = [
  { title: "finance", link: "/e-wallet" },
  { title: "bank", link: "/banking" },
  { title: "real_estate", link: "/real-estate" },
  { title: "law_firm", link: "/law-firm" },
  { title: "hum_res", link: "/human-resources" },
  { title: "agro", link: "/agronomy" },
  { title: "lending", link: "/lending" },
  { title: "Donation", link: "/donation" },
];

const standFor = [
  {
    title: "customer centricity",
    icon: <CustomerIcon />,
    style_left: { width: "22px", height: "22px", fill: "#6FD56F" },
    style_right: { width: "52px", height: "52px", fill: "#6FD56F" },
    text: "We place our clients at the heart of everything we do. Our objective is to provide exceptional customer experiences by understanding their unique needs, challenges, and aspirations. We believe in co-creation, collaborating closely with our clients to develop tailored solutions that align with their vision and goals.",
  },
  {
    title: "Excellence",
    icon: <AutoFixHigh />,
    style_left: { width: "22px", height: "22px", fill: "#6FD56F" },
    style_right: { width: "52px", height: "52px", fill: "#6FD56F" },
    text: "We strive for excellence in everything we do, setting high standards and continuously improving our skills, processes, and services to deliver outstanding results.",
  },
  {
    title: "innovation",
    icon: <Lightbulb />,
    style_left: { width: "22px", height: "22px", color: "#6FD56F" },
    style_right: { width: "52px", height: "52px", color: "#6FD56F" },
    text: "We embrace the spirit of innovation, constantly exploring new technologies, trends, and ideas to provide creative and groundbreaking solutions to our clients.",
  },
  {
    title: "Integrity",
    icon: <CheckCircle />,
    style_left: { width: "22px", height: "22px", color: "#6FD56F" },
    style_right: { width: "52px", height: "52px", color: "#6FD56F" },
    text: "We take great pride in conducting our business with honesty, transparency, and accountability. Our clients entrust us with their most ambitious projects, and we honor that trust by delivering on our promises and upholding the highest standards of ethical conduct.",
  },
  {
    title: "collaboration",
    icon: <Handshake />,
    style_left: { width: "22px", height: "22px", color: "#6FD56F" },
    style_right: { width: "52px", height: "52px", color: "#6FD56F" },
    text: "We foster a culture of collaboration, both internally and with our clients, valuing teamwork, open communication, and diverse perspectives to achieve shared success.",
  },
  {
    title: "Continuous learning",
    icon: <ContinuousLearningIcon />,
    style_left: { width: "22px", height: "22px", color: "#6FD56F" },
    style_right: { width: "52px", height: "52px", color: "#6FD56F" },
    text: "We promote a culture of continuous learning and professional growth, investing in our team's development to stay at the forefront of technological advancements and deliver innovative solutions.",
  },
  {
    title: "Social Impact",
    icon: <SocialImpactIcon />,
    style_left: { width: "22px", height: "22px", color: "#6FD56F" },
    style_right: { width: "52px", height: "52px", color: "#6FD56F" },
    text: "We strive to make a positive impact on society and the environment by engaging in sustainable practices, supporting social causes, and giving back to our communities.",
  },
];

export { serviceItem, industryItem, standFor };
