import HText from "@/shared/HText";
import type { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyle = `w-full rounded-lg bg-mobile-modal 
            px-5 py-3 mt-5 input-color`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-18 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage("contactus")}
        className="md:w-3/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.3 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <HText>
          <span>JOIN NOW</span>
        </HText>
        <p className="my-3">
          Join now and take the first step to a stronger, healthier you!
        </p>
      </motion.div>

      {/* FORM */}

      <div className="mt-8 gap-8 md:flex max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
        <motion.div
          className="mt-10 basis-3/5 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            method="POST"
            action="https://formsubmit.co/motoyosilove@gmail.com"
          >
            <input
              type="text"
              className={inputStyle}
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="mt-1 text-red-500">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" &&
                  "Max length is 100 characters."}
              </p>
            )}

            <input
              type="text"
              className={inputStyle}
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
            />

            {errors.email && (
              <p className="mt-1 text-red-500">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" &&
                  "Please enter a valid email address."}
              </p>
            )}

            <textarea
              className={inputStyle}
              placeholder="MESSAGE"
              rows={4}
              cols={50}
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />

            {errors.message && (
              <p className="mt-1 text-red-500">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "pattern" &&
                  "Please enter a valid email address."}
              </p>
            )}

            <button
              type="submit"
              className="mt-5 rounded-lg bg-mobile-modal px-20 py-3 
            transition duration-500 btn-hov hover:text-white input-color cursor-pointer"
            >
              SUBMIT
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
