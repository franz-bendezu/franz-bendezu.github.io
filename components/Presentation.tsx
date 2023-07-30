import React from "react";
import Image from "next/image";
import profile from "../public/profile.jpeg";

const About: React.FC = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <div className="mt-6 text-gray-800 dark:text-white">
            <div className="container mx-auto">
              <h1 className="text-md font-semibold">Hola, soy</h1>
              <h1 className="text-4xl mb-2 font-semibold">Franz Bendezu</h1>
              <h2 className="text-3xl mb-2 font-semibold">Desarrollador de Software</h2>
              <p className="mb-4  text-display">
                Disfruto creando soluciones que simplifican la vida de las personas,
                optimizando cada paso del proceso para entregar resultados eficientes y de alta calidad.              </p>
            </div>

          </div>
        </div>
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
          <Image
            src={profile}
            alt="Profile"
            priority={true}
            className="rounded-full mx-auto"
            width={250}
            height={250}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
