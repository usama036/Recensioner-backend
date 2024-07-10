module.exports = () => ({
  tinymce: {
    enabled: true,
    resolve: "./src/plugins/editor",
  },
  seo: {
    enabled: true,
  },
  "import-export-entries": {
    enabled: true,
  },
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      // playgroundAlways: false,
      // defaultLimit: 10,
      // maxLimit: 20,
      apolloServer: {
        introspection: true,
        // tracing: true,
      },
    },
  },
});
