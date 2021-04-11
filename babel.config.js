module.exports = {
  presets: [
    "@babel/preset-typescript",
    "@babel/preset-react",
    //"@babel/preset-env",
  ],
  plugins: [
    [
      "@babel/plugin-proposal-class-properties",
      {
        loose: true,
      },
    ],
    ["@babel/plugin-transform-modules-commonjs"],
  ],
}
