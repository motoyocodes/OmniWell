import type { SelectedPage, ClassType } from "@/shared/types";
import { motion } from "framer-motion";
import { fitnessimage2, fii, fiii, fiiiii } from "@/assets/ourclasses";
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
        {/* Header */}
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="">
            <h1 className="text-3xl font-extrabold input-color">OUR CLASSES</h1>
            <p className="py-3 text-white text-[16px] md:text-[20px] ">
              At Omniwell Gym, we offer a variety of classes designed to help
              you reach your fitness goals. From high-energy cardio and strength
              training sessions to calming yoga and flexibility workouts,
              there’s something for everyone. Join our expert trainers and a
              supportive community to stay motivated and make every workout
              count
            </p>
          </div>
        </motion.div>

        {/* Classes Grid */}
        <div className="mt-6 w-full md:px-8 px-5 lg:px-10">
          <ul className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {classes.map((item: ClassType, index) => (
              <motion.li
                key={`${item.name}-${index}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0, duration: 0.3 }}
              >
                <Class
                  name={item.name}
                  description={item.description}
                  image={item.image}
                />
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
