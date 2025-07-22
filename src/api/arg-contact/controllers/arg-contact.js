"use strict";

/**
 * arg-contact controller
 */

const fs = require("fs");
const path = require("path");

const { createCoreController } = require("@strapi/strapi").factories;

function sendWithTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout al enviar email")), ms)
    ),
  ]);
}

module.exports = createCoreController(
  "api::arg-contact.arg-contact",
  ({ strapi }) => ({
    async create(ctx) {
      // Crear el registro normalmente
      const response = await strapi
        .service("api::arg-contact.arg-contact")
        .create({ data: ctx.request.body.data });
      const result = response;

      // Cargar el template HTML
      const templatePath = path.join(
        __dirname,
        "../../../email-templates/contact.html"
      );
      let html = fs.readFileSync(templatePath, "utf8");

      // Reemplazar variables en el template
      const variables = {
        name: result.name,
        email: result.email,
        phone: result.phone,
        message: result.message,
        language: result.language,
      };
      Object.keys(variables).forEach((key) => {
        html = html.replace(
          new RegExp(`{{${key}}}`, "g"),
          variables[key] || ""
        );
      });

      // Enviar el email con timeout (5 segundos)
      sendWithTimeout(
        strapi
          .plugin("email")
          .service("email")
          .send({
            to: process.env.ARG_DESTINATION_EMAIL,
            subject: "Nuevo contacto recibido",
            html,
            text: `Nuevo contacto de: ${result.name}\nEmail: ${result.email}\nTeléfono: ${result.phone}\nMensaje: ${result.message}\nIdioma: ${result.language}`,
          }),
        5000
      )
        .then(() => {
          strapi.log.info("Email de contacto enviado correctamente");
        })
        .catch((error) => {
          strapi.log.error(
            "Error o timeout al enviar email de contacto:",
            error
          );
        });

      // Responder al usuario aunque falle el email
      return { data: result };
    },
  })
);
