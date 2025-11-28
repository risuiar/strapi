module.exports = ({ env }) => {
  const url = env("URL", "http://localhost:1337");
  // Extract host from URL (remove protocol and port if present)
  const host = url.replace(/^https?:\/\//, "").replace(/:\d+$/, "");

  return {
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
    app: {
      keys: env.array("APP_KEYS"),
    },
    url: url,
    proxy: env.bool("PROXY", true),
    allowedHosts: [host, "localhost"],
    webhooks: {
      populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
    },
  };
};
