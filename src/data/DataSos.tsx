import {
  FaLinkedin,
  FaInstagram,
  FaGithubSquare,
  FaDownload,
} from "react-icons/fa";
import type { SocialItem } from "../types";

const DataSos: SocialItem[] = [
  {
    logo: <FaDownload />,
    sosmed: "Resume",
    link: "/assets/cv/CV_Muhammad_Rifa_2026.pdf",
    isDownload: true,
  },
  {
    logo: <FaLinkedin />,
    sosmed: "LinkedIn",
    link: "https://www.linkedin.com/in/rifaaziz23/",
  },
  {
    logo: <FaGithubSquare />,
    sosmed: "Github",
    link: "https://github.com/ivaraz/",
  },
  {
    logo: <FaInstagram />,
    sosmed: "Instagram",
    link: "http://instagram.com/ivaraz_",
  },
];

export default DataSos;
