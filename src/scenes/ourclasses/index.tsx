import type { SelectedPage, ClassType } from "@/shared/types";
import { motion } from "framer-motion";
import {
  fitnessimage2,
  fitnessimage3,
  fii,
  fiii,
  fiiiii,
} from "@/assets/ourclasses";
import Class from "./Class";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const classes: Array<ClassType> = [
  {
    name: "Cardio Blast",
    description:
      "Get your heart racing and sweat it out in our high-energy cardio sessions—fun, fast, and effective!",
    image: fii,
  },
  {
    name: "Strength Training",
    description:
      "Transform your body with guided strength workouts that build muscle and boost confidence.",
    image: fitnessimage2,
  },
  {
    name: "Yoga Flow",
    description:
      "Find your inner calm while increasing flexibility and balance with our rejuvenating yoga classes.",
    image: fitnessimage3,
  },
  {
    name: "HIIT Express",
    description:
      "Maximize results in minimal time with our fast-paced, heart-pumping HIIT sessions.",
    image: fiiiii,
  },
  {
    name: "Functional Fitness",
    description:
      "Train smarter for everyday life with exercises that improve mobility, balance, and overall strength.",
    image: fiii,
  },
];

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-nav py-10">
      <motion.div onViewportEnter={() => setSelectedPage("ourclasses")}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md-w-3/5">
            <h1 className="text-3xl input-color font-w font-extrabold">
              OUR CLASSES
            </h1>
            <p className="py-3 text-white">
              At Omniwell Gym, we offer a variety of classes designed to help
              you reach your fitness goals. From high-energy cardio and strength
              training sessions to calming yoga and flexibility workouts,
              there’s something for everyone. Join our expert trainers and a
              supportive community to stay motivated and make every workout
              count!
            </p>
          </div>
        </motion.div>
        <div className="mt-6 h-[330px] w-full overflow-hidden relative">
          <motion.ul
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }} // move left 50%
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30, // speed, increase for slower
                ease: "linear",
              },
            }}
            whileHover={{ x: 0 }}
          >
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
            {/* Duplicate items for smooth loop */}
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-duplicate-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
