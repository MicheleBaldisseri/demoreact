module.exports = {  //eslint-disable-line
    babel: {
        presets: ["@babel/react", "@babel/env"],
        plugins: [
            ["@babel/plugin-proposal-class-properties", { "loose": true }],
            ["@babel/plugin-proposal-nullish-coalescing-operator"]
        ]
    }
};