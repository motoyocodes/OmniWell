import type { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { homeimage } from "@/assets/homepage";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className="py-20 mt-12  bg-body ">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between w-5/6 mx-auto h-full md:mt-15 mb-10"
        onViewportEnter={() => setSelectedPage("home")}
      >
        {/* MAIN HEADER */}
        <div className="md:w-1/2 w-full flex flex-col items-center space-y-6">
          {/* HEADINGS */}
          <motion.div
            className="relative space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {/* Background OMNIWELL */}
            <p
              className="absolute -top-7 -left-7 md:-left-8 md:-top-10 
             lg:-left-8 lg:-top-12 xl:-top-17 xl:-left-20 2xl:-top-24 2xl:-left-24 
             md:text-6xl text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl 
             font-extrabold opacity-4 select-none logo-color z-0
              pointer-events-none"
            >
              OMNIWELL
            </p>
            <h1 className="relative md:text-5xl 2xl:text-8xl text-4xl lg:text-6xl font-extrabold logo-color z-10">
              OMNIWELL
            </h1>
            <h2 className="md:text-3xl text-2xl lg:text-4xl font-semibold text-red-700">
              Be Well. Live Omni.
            </h2>
            <p
              className=" text-gray-600 leading-relaxed md:text-lg 
            lg:text-2xl 2xl:text-4xl font-light "
            >
              Full-body fitness and recovery. Mindfulness and mental clarity.
              Personalized wellness guidance. Supportive, inclusive community.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="flex items-center gap-6 mt-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-300 hover:text-primary-100 transition underline"
              onClick={() => setSelectedPage("contactus")}
              href={"#contactUs"}
            >
              Learn More
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <motion.div
          className="md:w-1/2 w-full mt-10 md:mt-0 flex md:justify-end "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img
            loading="lazy"
            className="w-full md:max-w-lg h-100 md:max-h-[450px] object-cover rounded-xl shadow-lg"
            src={homeimage}
            alt="homePage-image"
          />
        </motion.div>
      </motion.div>

      {/* SPONSORS */}

      <div>
        <div className="flex justify-center items-center md:gap-16 gap-3 bg-nav font-medium text-sm md:p-6 lg:mt-30 md:mt-30 p-5 link-color md:text-2xl ">
          <p>FORTUNE</p>
          <p>FORBES</p>
          <p>HEALTHLINE</p>
          <p>WELL+GOOD</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
