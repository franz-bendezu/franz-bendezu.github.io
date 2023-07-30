import React from "react";
import Image from "next/image";
import profile from "../../public/profile.jpeg";

const HomePresentation: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
          <div className="lg:px-4 lg:mt-12">
            <div className="mt-6">
              <h1 className="text-md font-semibold">Hola, soy</h1>
              <h1 className="text-4xl mb-2 font-semibold">Franz Bendezu Isidro</h1>
              <h2 className="text-3xl mb-2 font-semibold">
                Desarrollador de <span className="
                bg-blue-400
                dark:bg-blue-500
                 px-1">Software</span>
              </h2>
              <p className="mb-4 text-lg">
                Disfruto creando soluciones que simplifican la vida de las personas,
                optimizando cada paso del proceso para entregar
                resultados <span
                  className="bg-green-300
                dark:bg-green-500
                   px-1">eficientes</span> y de alta <span
                  className="bg-gray-300 
                dark:bg-gray-500
                  px-1">calidad</span>.
              </p>

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
    </div>
  );
};

export default HomePresentation;
