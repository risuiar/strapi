// src/api/arg-contact/content-types/arg-contact/lifecycles.js

module.exports = {
  async afterCreate(event) {
    const { result } = event;

    console.log("🔥 afterCreate ejecutado con:", result);

    // Enviamos el email en segundo plano
    setImmediate(() => {
      const controller = new AbortController();
      const timeout = setTimeout(() => {
        controller.abort(); // abortamos si tarda demasiado
        console.error(
          "⏰ Timeout: el envío de email tardó demasiado y fue abortado."
        );
      }, 5000); // 5 segundos máximo

      // Intentamos enviar el email
      strapi.plugins["email"].services.email
        .send({
          to: process.env.ARG_DESTINATION_EMAIL,
          subject: "Nuevo contacto recibido",
          text: `
              Nuevo contacto de: ${result.name}
              Email: ${result.email}
              Teléfono: ${result.phone}
              Mensaje: ${result.message}
              Idioma: ${result.language}
            `,
          html: `
              <h3>Nuevo contacto recibido</h3>
              <p><strong>Nombre:</strong> ${result.name}</p>
              <p><strong>Email:</strong> ${result.email}</p>
              <p><strong>Teléfono:</strong> ${result.phone}</p>
              <p><strong>Mensaje:</strong></p>
              <p>${result.message}</p>
              <hr>
              <p><em>Idioma del formulario: ${result.language}</em></p>
            `,
        })
        .then(() => {
          console.log("✅ Email enviado correctamente");
        })
        .catch((error) => {
          console.error("❌ Error al enviar email:", error.message);
        })
        .finally(() => {
          clearTimeout(timeout);
        });
    });
  },
};
