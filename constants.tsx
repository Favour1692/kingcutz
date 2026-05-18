import {
  feature,
  images,
  stat,
  service,
  pricingcol,
  testimonial,
  socialLink,
  navlink,
  contacts,
} from "@/type";
import { FaRegClock } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { ImScissors } from "react-icons/im";
import { LuDiamond } from "react-icons/lu";
import { RiHexagonLine } from "react-icons/ri";
import { FaDiamond } from "react-icons/fa6";
import { GiDandelionFlower } from "react-icons/gi";
import { GiDiamonds } from "react-icons/gi";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";

export const navLinks: navlink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const styles: images[] = [
  { label: "Classic Cut", image: "/style1.webp" },
  { label: "Fade Cut", image: "/style2.webp" },
  { label: "Curly Style", image: "/style3.webp" },
];

export const stats: stat[] = [
  { value: "15+", label: "Years Experience" },
  { value: "2k+", label: "Satisfied Clients" },
  { value: "20+", label: "Hair Styles Mastered" },
  { value: "4.9", label: "Average Star Rating" },
];

export const services: service[] = [
  {
    icon: <ImScissors />,
    title: "Precision Haircuts",
    description:
      "Tailored haircuts crafted with precision, balance, and attention to detail for a sharp and confident everyday appearance.",
  },
  {
    icon: <LuDiamond />,
    title: "Fade Styling",
    description:
      "Clean low, mid, and skin fades blended seamlessly to deliver a modern, polished look that stands out effortlessly.",
  },
  {
    icon: <RiHexagonLine />,
    title: "Beard Grooming",
    description:
      "Professional beard trimming and shaping designed to enhance facial structure while maintaining a clean, refined finish.",
  },
  {
    icon: <FaDiamond />,
    title: "Classic Shaves",
    description:
      "Traditional razor shaves paired with hot towel treatment for a smooth, refreshing, and luxurious grooming experience.",
  },
  {
    icon: <GiDandelionFlower />,
    title: "Hair Coloring",
    description:
      "Custom color treatments ranging from subtle enhancements to bold transformations, professionally matched to your style.",
  },
  {
    icon: <GiDiamonds />,
    title: "Luxury Treatment",
    description:
      "Premium grooming sessions designed to help you relax, refresh your appearance, and elevate your overall style experience.",
  },
];

export const pricingColumns: pricingcol[] = [
  {
    heading: "Hair Cuts",
    items: [
      { name: "Basic Haircut", price: "$25" },
      { name: "Executive Cut", price: "$35" },
      { name: "Style and Trim", price: "$45" },
      { name: "Skin Fade", price: "$55" },
    ],
  },
  {
    heading: "Beard & More",
    items: [
      { name: "Kids Haircut", price: "$15" },
      { name: "Hot Towel Shave", price: "$25" },
      { name: "Beard Trim", price: "$35" },
      { name: "Full Grooming Package", price: "$50" },
    ],
  },
];

export const testimonials: testimonial[] = [
  {
    name: "Michael Brown",
    role: "Regular Client",
    avatar: "/images/avatar-marcus.jpg",
    quote:
      "The attention to detail here is unmatched. Every haircut feels carefully crafted, and the atmosphere always makes the experience feel premium.",
  },
  {
    name: "Ryan Carter",
    role: "Monthly Member",
    avatar: "/images/avatar-ryan.jpg",
    quote:
      "Best fade I've had in years. The barbers are professional, consistent, and genuinely know how to deliver a clean modern look every single time.",
  },
  {
    name: "Daniel Smith",
    role: "First-Time Client",
    avatar: "/images/avatar-gabriel.jpg",
    quote:
      "The customer service and quality haircuts all feel polished and professional. I always leave looking sharper and more confident.",
  },
];

export const quickLinks: string[] = [
  "Home",
  "About Us",
  "Services",
  "Pricing",
  "Contact Us",
];
export const servicelist: string[] = [
  "Haircut & Styling",
  "Beard Grooming",
  "Hot Shave",
  "Luxury Treatments",
  "Color Services",
  "Scalp Therapy",
];
export const socialLinks: socialLink[] = [
  { label: "Facebook", href: "#", icon: <FiFacebook /> },
  { label: "Instagram", href: "#", icon: <FiInstagram /> },
  { label: "Twitter", href: "#", icon: <RiTwitterXLine /> },
  { label: "YouTube", href: "#", icon: <FiYoutube /> },
];

export const contactinfo: contacts[] = [
  {
    icon: <FaRegClock />,
    title: "opening hours",
    info: "Mon-Sat: 9:00 AM - 7:00 PM, Sunday: 12:00 PM - 5:00 PM",
  },
  {
    icon: <FiPhone />,
    title: "call us",
    info: "+234 801 234 5678",
  },
  {
    icon: <SlLocationPin />,
    title: "visit us",
    info: "18 Admiralty Way, Lekki Phase 1, Lagos, Nigeria",
  },
  {
    icon: <MdOutlineEmail />,
    title: "email us",
    info: "hello@kingcutz.com",
  },
];
