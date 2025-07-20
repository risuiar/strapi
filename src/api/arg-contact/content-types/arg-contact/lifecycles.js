export default {
  async afterCreate(event) {
    const { result } = event;

    await strapi.plugins["email"].services.email.send({
      to: "rvoegeli@gmail.com", // o el destinatario fijo
      subject: "Nueva contacto recibido",
      text: `${result.name} envio un mensaje, ${result.phone} ${result.email} ${result.message} ${result.language}`,
    });
  },
};
