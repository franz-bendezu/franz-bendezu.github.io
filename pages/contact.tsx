import { NextPage } from "next";

const ContactPage: NextPage = () => {
  return (
    <div className="flex h-full w-full flex-col ">
      <h2 className="text-center text-3xl font-semibold">Contáctame</h2>
      <p className="text-center text-lg font-light">
        Estoy interesado en oportunidades de trabajo independiente, proyectos
        increíblemente ambiciosos o grandes. Sin embargo, no dudes en usar el
        formulario si tienes otras solicitudes o preguntas.
      </p>
      <form className="relative mt-6 h-full">
        <div className="mb-4">
          <label className="block font-medium text-gray-700">Nombre</label>
          <input
            className="focus:ring-primary-500 focus:border-primary-500 w-full rounded-md border border-gray-300 px-4 py-2"
            type="text"
            name="name"
            placeholder="Tu Nombre"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium text-gray-700">
            Correo Electrónico
          </label>
          <input
            className="focus:ring-primary-500 focus:border-primary-500 w-full rounded-md border border-gray-300 px-4 py-2"
            type="email"
            name="email"
            placeholder="Tu Correo Electrónico"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium text-gray-700">Asunto</label>
          <input
            className="focus:ring-primary-500 focus:border-primary-500 w-full rounded-md border border-gray-300 px-4 py-2"
            type="text"
            name="subject"
            placeholder="Asunto"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium text-gray-700">Mensaje</label>
          <textarea
            className="focus:ring-primary-500 focus:border-primary-500 w-full rounded-md border border-gray-300 px-4 py-2"
            name="message"
            cols={30}
            rows={5}
            placeholder="Tu Mensaje"
            required
          />
        </div>
        <input
          className="bg-primary-500 hover:bg-primary-600 cursor-pointer rounded-md px-4 py-2 font-bold uppercase text-white transition-colors duration-300"
          type="submit"
          value="Enviar mensaje"
        />
      </form>
    </div>
  );
};
export default ContactPage;
