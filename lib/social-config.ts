import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/rodolfoND",
    label: "GitHub",
    color: "hover:text-gray-900 dark:hover:text-gray-100",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/rodolfo-nascimento-57b701100/",
    label: "LinkedIn",
    color: "hover:text-blue-600",
  },
  {
    icon: Mail,
    href: "mailto:rodolfo.nascimento@hotmail.com",
    label: "Email",
    color: "hover:text-red-500",
  },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rodolfo.nascimento@hotmail.com",
    link: "mailto:rodolfo.nascimento@hotmail.com",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Pará de Minas, MG - Brasil",
    link: "#",
  },
];
