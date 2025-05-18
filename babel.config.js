module.exports = {
    presets: [
      ['@babel/preset-react', {
        runtime: 'classic',       // required for custom JSX pragma
        pragma: 'h',              // custom JSX function (your createElement)
        pragmaFrag: 'Fragment',   // optional
      }]
    ],
  }
  