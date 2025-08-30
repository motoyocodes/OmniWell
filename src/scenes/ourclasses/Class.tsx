import { motion } from "framer-motion";

type Props = {
  name: string;
  description: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  return (
    <li className="relative w-full h-80 rounded-lg overflow-hidden ">
      {/* Image */}
      <img
        loading="lazy"
        className="h-full w-full object-cover rounded-2xl shadow-lg"
        src={image}
        alt={name}
      />

      {/* Overlay Footer for mobile */}
      <motion.div
        className="absolute bottom-0 w-full bg-nav/20 img-hov  backdrop-blur-md shadow-lg rounded-t-lg text-white p-4 flex flex-col text-center items-center justify-center xl:hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-lg font-extrabold topic">{name}</p>
        <p className="mt-1 text-sm link-color-hover">{description}</p>
      </motion.div>

      {/* Desktop Hover Overlay */}
      <div className="hidden md:flex absolute inset-0 flex-col items-center justify-center text-center text-white bg-button-primary opacity-0 scale-95 transition-all duration-500 ease-in-out hover:opacity-90 hover:scale-100 cursor-pointer p-5 rounded-lg">
        <p className="text-xl md:text-2xl font-semibold">{name}</p>
        <p className="mt-2 text-sm md:text-base">{description}</p>
      </div>
    </li>
  );
};

export default Class;
