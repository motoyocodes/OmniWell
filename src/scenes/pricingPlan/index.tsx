import { motion } from "framer-motion";

const pricingPlans = [
  {
    title: "Basic",
    price: "₦30,000/month",
    features: [
      "Access to all gym equipment",
      "1 free class per week",
      "Free personal trainer consultation",
    ],
  },
  {
    title: "Premium",
    price: "₦50,000/month",
    features: [
      "Unlimited classes",
      "Free personal trainer consultation",
      "Access to sauna",
    ],
  },
  {
    title: "Student",
    price: "₦20,000/month",
    features: [
      "Discounted rate",
      "Access to all gym equipment",
      "2 classes per week",
    ],
  },
];

const PricingPlans = () => {
  return (
    <section id="pricing" className="py-16 md:mt-10">
      <div className="mx-auto w-5/6">
        <h1 className="text-3xl input-color font-w font-extrabold">
          Pricing Plans
        </h1>
        <p className="my-5 text-md">
          Choose the plan that fits your fitness goals. Flexible monthly and
          student plans available!
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              className=" p-6 py-8 rounded-lg flex-1 text-center bord-color"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold t-color">{plan.title}</h3>
              <p className="mt-2 text-xl">{plan.price}</p>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature}> {feature}</li>
                ))}
              </ul>
              <button className="mt-5 px-6 py-2 rounded-lg cursor-pointer btn-hov bg-mobile-modal t-color transition duration-500">
                Join Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
