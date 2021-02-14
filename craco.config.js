module.exports = {  //eslint-disable-line
    babel: {
        plugins: [
            ["@babel/plugin-proposal-class-properties", { "loose": true }],
            ["@babel/plugin-proposal-nullish-coalescing-operator"]
        ]
    },
    jest: {
        configure(config) {
            config.transformIgnorePatterns = [
              "/node_modules/@saehrimnir/druidjs/",
            ];
            return config;
          }
    }
};