module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("EMAIL_SMTP_HOST"),
        port: env.int("EMAIL_SMTP_PORT"),
        secure: false, // ⚠️ para STARTTLS debe ser false
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
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY_ID"),
        secretAccessKey: env("AWS_SECRET_ACCESS_KEY"),
        region: env("AWS_REGION", "eu-north-1"),
        params: {
          Bucket: env("AWS_BUCKET"),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
