import HText from "@/shared/HText";
import type { SelectedPage, BenefitTypes } from "@/shared/types";
import Benefit from "./Benefit";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const benefits: Array<BenefitTypes> = [
  {
    icon: <HomeModernIcon className="h-8 w-8 link-color" />,
    title: "State of the Art Facilities",
    description:
      "Our gym features the latest equipment and amenities to provide you with a top-notch fitness experience.",
  },
  {
    icon: <UserGroupIcon className="h-8 w-8 link-color" />,
    title: "Expert Trainers",
    description:
      "Our certified trainers are here to guide you through your fitness journey and help you achieve your goals.",
  },
  {
    icon: <AcademicCapIcon className="h-8 w-8 link-color" />,
    title: "Personalized Classes",
    description:
      "We offer a variety of classes tailored to different fitness levels and interests, ensuring there's something for everyone.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3, staggerDirection: 1 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 md:py-30">
      <motion.div onViewportEnter={() => setSelectedPage("benefits")}>
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm"></p>
          <p>
            We provide world class fitness equipment, trainers, and classes to
            help you achieve your fitness goals. Our state-of-the-art facilities
            and expert staff ensure that you have everything you need to
            succeed.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.3 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitTypes) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Benefits;
