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
          to: "rvoegeli@gmail.com",
          subject: "Nuevo contacto recibido",
          text: `${result.name} envió un mensaje, ${result.phone}, ${result.email}, ${result.message}, idioma: ${result.language}`,
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
