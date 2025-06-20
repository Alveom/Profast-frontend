import React from "react";
import {
  FaTruck,
  FaMoneyBillWave,
  FaWarehouse,
  FaBriefcase,
} from "react-icons/fa";

const HowItWorks = () => {
  const services = [
    {
      icon: <FaTruck className="text-4xl text-[#03373D]" />,
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-[#03373D]" />,
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <FaWarehouse className="text-4xl text-[#03373D]" />,
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <FaBriefcase className="text-4xl text-[#03373D]" />,
      title: "Booking SME & Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-left text-[#03373D] mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card rounded-lg  bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="card-body items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#03373D] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#03373D]">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
