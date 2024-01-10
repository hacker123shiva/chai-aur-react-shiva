import React from 'react';

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600 justify-center">
              Welcome to Pet Care We are passionate about providing exceptional
              care for your beloved pets. Our dedicated team of professionals is
              committed to ensuring the health and happiness of your furry
              friends. With years of experience, we offer a range of services,
              from grooming to medical care, tailored to meet your pet's unique
              needs. At Our Website, we believe in building lasting
              relationships with both pets and their owners. Trust us to create
              a nurturing environment where your pets thrive. Discover the
              difference of compassionate and personalized pet care with pet
              Care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
