module.exports = ({ env }) => {
  // Get the backend URL, defaulting to URL if STRAPI_ADMIN_BACKEND_URL is not set
  const backendUrl = env('STRAPI_ADMIN_BACKEND_URL') || env('URL', 'http://localhost:1337');
  
  return {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    apiToken: {
      salt: env('API_TOKEN_SALT'),
    },
    transfer: {
      token: {
        salt: env('TRANSFER_TOKEN_SALT'),
      },
    },
    secrets: {
      encryptionKey: env('ENCRYPTION_KEY'),
    },
    url: backendUrl,
    serveAdminPanel: true,
    flags: {
      nps: env.bool('FLAG_NPS', true),
      promoteEE: env.bool('FLAG_PROMOTE_EE', true),
    },
  };
};
