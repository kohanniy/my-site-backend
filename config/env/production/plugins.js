module.exports = ({ env }) => ({
  upload: {
    provider: "local",
    providerOptions: {
      sizeLimit: 100000,
    },
  },
});
