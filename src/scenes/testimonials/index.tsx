import HText from "@/shared/HText";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Yusuf Eniola",
    feedback: "The classes are fun and effective. I feel stronger every week",
    image: "src/assets/homepage/testimonial1.jpg",
    rating: 5,
  },
  {
    name: "Ayoola Ibukunoluwa",
    feedback: "Omniwell helped me stay motivated and achieve my fitness goals",
    image: "src/assets/homepage/testimonial2.jpg",
    rating: 5,
  },
  {
    name: "Williams Faith",
    feedback: "Amazing gym environment and friendly trainers. Highly recommend",
    image: "src/assets/homepage/testimonial3.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-12 text-white">
      <div className="mx-auto w-5/6">
        <HText>What Our Members Say</HText>
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              className="bg-action-button-primary-hover p-6 py-10 rounded-lg text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.2 }}
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-25 h-25 mx-auto rounded-full object-cover"
              />
              <p className="mt-4 text-sm italic">"{t.feedback}"</p>
              <p className="mt-2 font-bold">{t.name}</p>
              <p className="text-yellow-400">
                {"★".repeat(t.rating)}
                {"☆".repeat(5 - t.rating)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
