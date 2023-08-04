import React from "react";
import Image from "next/image";
import profile from "../../public/profile.jpeg";

const HomePresentation: React.FC = () => {
  return (
    <div className="item-center flex flex-col-reverse text-center lg:-mx-4 lg:flex lg:flex-row lg:space-x-5 lg:text-left">
      <div className="lg:mt-12 lg:px-4">
        <div className="mt-6">
          <h1 className="text-md font-semibold">Hola, soy</h1>
          <h1 className="mb-2 text-4xl font-semibold">Franz Bendezu Isidro</h1>
          <h2 className="mb-2 text-3xl font-semibold">
            Desarrollador de{" "}
            <span
              className="
                bg-blue-400
                px-1
                 dark:bg-blue-500"
            >
              Software
            </span>
          </h2>
          <p className="mb-4 text-lg">
            Disfruto crear soluciones que simplifican la vida de las personas,
            optimizando cada paso del proceso para entregar resultados{" "}
            <span
              className="bg-green-300
                px-1
                   dark:bg-green-500"
            >
              eficientes
            </span>{" "}
            y de alta{" "}
            <span
              className="bg-gray-300 
                px-1
                  dark:bg-gray-500"
            >
              calidad
            </span>
            .
          </p>
        </div>
      </div>
      <div className="mb-10 flex-shrink-0 lg:mt-12 lg:px-4">
        <Image
          src={profile}
          alt="Profile"
          priority={true}
          className="mx-auto rounded-full"
          width={250}
          height={250}
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default HomePresentation;
