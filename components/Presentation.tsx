import React from "react";
import Image from "next/image";
import profile from "../public/profile.jpeg";

const About: React.FC = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
            Estudiante de pregrado de la carrera de Ingeniería de Sistemas en la
               Universidad Nacional de Ingeniería. Apasionado de la tecnología, yo
               disfruto conociendo y usando nuevas herramientas que me permitan resolver problemas
               de forma óptima y eficiente según los casos que vengan
               a mi manera. Creo que siempre debes estar en constante aprendizaje.
               y me gusta compartir los conocimientos que he adquirido.
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
          <Image
            src={profile}
            alt="Profile"
            priority={true}
            className="rounded-full"
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
