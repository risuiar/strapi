"use strict";

module.exports = {
  async afterCreate(event) {
    try {
      const { result } = event;

      await strapi.plugins["email"].services.email.send({
        to: "rvoegeli@gmail.com",
        subject: "Nuevo contacto recibido",
        text: `
          Nombre: ${result.name}
          Email: ${result.email}
          Teléfono: ${result.phone}
          Tipo: ${result.type}
          Mensaje: ${result.message}
          Idioma: ${result.language}
        `,
      });
    } catch (err) {
      strapi.log.error("❌ Error al enviar el email:", err);
    }
  },
};
