import { NextPage } from "next";
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Script from 'next/script'

const ContactPage: NextPage = () => {
  const [state, handleSubmit] = useForm("xyyqkeen");
  
  if (state.succeeded) {
    return <p>¡Gracias por ponerte en contacto!</p>;
  }
  
  return (
    <div className="flex h-full w-full flex-col">
      <h2 className="text-center text-3xl font-semibold">Contáctame</h2>
      <p className="text-center text-lg font-light">
        Estoy interesado en oportunidades de trabajo independiente, proyectos
        increíblemente ambiciosos o grandes. Sin embargo, no dudes en usar el
        formulario si tienes otras solicitudes o preguntas.
      </p>

    <Script src="https://www.google.com/recaptcha/api.js" async defer></Script>
    <form onSubmit={handleSubmit} className="relative mt-6 h-full">
      <div className="mb-4">
        <label htmlFor="email" className="block font-medium text-gray-700">Correo Electrónico</label>
        <input
          id="email"
          type="email" 
          name="email"
          className="focus:ring-primary-500 focus:border-primary-500 w-full rounded-md border border-gray-300 px-4 py-2"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block font-medium text-gray-700">Mensaje</label>
        <textarea
          id="message"
          name="message"
          className="focus:ring-primary-500 focus:border-primary-500 w-full rounded-md border border-gray-300 px-4 py-2"
          rows={5}
        />
        <ValidationError 
          prefix="Mensaje" 
          field="message"
          errors={state.errors}
        />
      </div>
      <div class="g-recaptcha" data-sitekey="your_site_key"></div>
      <button 
        type="submit" 
        disabled={state.submitting}
        className="bg-primary-500 hover:bg-primary-600 cursor-pointer rounded-md px-4 py-2 font-bold uppercase text-white transition-colors duration-300"
      >
        Enviar mensaje
      </button>
    </form>
      </div>
  
  );
};

export default ContactPage;
