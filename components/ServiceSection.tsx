import React from "react";

const ServiceSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-800 to-indigo-800 pb-[300px] py-16">
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-white">Our Services</h1>
          <p className="mt-4 text-xl text-gray-300">
            we offer a variety of services
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"></div>
      </div>
    </section>
  );
};

export default ServiceSection;
