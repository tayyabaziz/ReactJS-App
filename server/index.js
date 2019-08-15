require("ignore-styles");

require("@babel/register")({
    ignore: [/(node_modules)/],
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: [["@babel/plugin-transform-runtime", {
        "helpers": false,
        "regenerator": true,
    }]]
});

require("./server");