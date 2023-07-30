import { NextPage } from "next";

const ContactPage: NextPage = () => {
  return (
    <div className="flex flex-col w-full h-full ">
      <h2 className="text-3xl text-center font-semibold">Contáctame</h2>
      <p className="text-center text-lg font-light">
        Estoy interesado en oportunidades de trabajo independiente, proyectos
        increíblemente ambiciosos o grandes. Sin embargo, no dudes en usar el
        formulario si tienes otras solicitudes o preguntas.
      </p>
      <form className="h-full relative mt-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Nombre</label>
          <input
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
            type="text"
            name="name"
            placeholder="Tu Nombre"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Correo Electrónico
          </label>
          <input
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
            type="email"
            name="email"
            placeholder="Tu Correo Electrónico"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Asunto</label>
          <input
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
            type="text"
            name="subject"
            placeholder="Asunto"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Mensaje</label>
          <textarea
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
            name="message"
            cols={30}
            rows={5}
            placeholder="Tu Mensaje"
            required
          />
        </div>
        <input
          className="uppercase bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded-md cursor-pointer transition-colors duration-300"
          type="submit"
          value="Enviar mensaje"
        />
      </form>
    </div>
  );
};
export default ContactPage;
