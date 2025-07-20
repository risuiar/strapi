module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("EMAIL_SMTP_HOST"),
        port: env.int("EMAIL_SMTP_PORT"),
        secure: true, // ⚠️ para STARTTLS debe ser false
        auth: {
          user: env("EMAIL_SMTP_USER"),
          pass: env("EMAIL_SMTP_PASS"),
        },
      },
      settings: {
        defaultFrom: env("EMAIL_SMTP_USER"),
        defaultReplyTo: env("EMAIL_SMTP_USER"),
      },
    },
  },
});
