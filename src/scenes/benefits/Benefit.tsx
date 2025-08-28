import { type JSX } from "react";
import type { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};
const childVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
    },
  },
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariants}
      className="mt-5 rounded-md border-2 border-gray-100 bg-gray-50 px-5 py-16 text-center "
    >
      <div className="mb-4 flex items-center justify-center">
        <div className="rounded-full border-2 border-gray-100 p-4">{icon}</div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>

      <AnchorLink
        className="text-sm font-bold text-primary-300 hover:text-primary-100 transition underline"
        onClick={() => setSelectedPage("contactus")}
        href={"#contactUs"}
      >
        Learn More
      </AnchorLink>
    </motion.div>
  );
};

export default Benefit;
