import {
  FaTruck,
  FaMapMarkedAlt,
  FaBoxOpen,
  FaMoneyBillWave,
  FaWarehouse,
  FaUndo,
} from "react-icons/fa";

const services = [
  {
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    icon: <FaTruck className="text-4xl" style={{ color: "#03464d" }} />,
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    icon: <FaMapMarkedAlt className="text-4xl" style={{ color: "#03464d" }} />,
  },
  {
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    icon: <FaBoxOpen className="text-4xl" style={{ color: "#03464d" }} />,
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    icon: <FaMoneyBillWave className="text-4xl" style={{ color: "#03464d" }} />,
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
    icon: <FaWarehouse className="text-4xl" style={{ color: "#03464d" }} />,
  },
  {
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    icon: <FaUndo className="text-4xl" style={{ color: "#03464d" }} />,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-12 rounded-2xl my-3  bg-[#03373D]">
      <div className="container mx-auto px-4 text-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg max-w-2xl mx-auto">
            We provide a wide range of logistics and delivery solutions tailored
            to meet your business needs, ensuring fast, reliable, and secure
            services across Bangladesh.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 primary mx-3  gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
