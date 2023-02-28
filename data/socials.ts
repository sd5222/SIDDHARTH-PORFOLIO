/**
 * Portfolio Socials
 */

import { ReactComponentElement } from "react";

// Dependencies
import { IconType } from "react-icons/lib";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

export interface Social {
  name: string;
  url: string;
  Icon: IconType;
}

type Socials = Social[];

// Social Container
const SOCIALS: Socials = [
  {
    name: "instagram",
    url: "https://instagram.com/sid_27_10",
    Icon: FaInstagram,
  },
  {
    name: "linkedin",
    url: "https://linkedin.com/in/siddharth-daga-a3a3531bb",
    Icon: FaLinkedin,
  },
  { name: "github", url: "https://github.com/sd5222", Icon: FaGithub },
  
  
  { name: "youtube", url: "https://youtube.com/@sidandsangam", Icon: FaYoutube },
  { name: "email", url: "dagasiddharth27@gmail.com", Icon: FaEnvelope },
];

export default SOCIALS;
