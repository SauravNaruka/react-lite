module.exports = {
    presets: [
      ['@babel/preset-react', {
        runtime: 'classic',       // required for custom JSX pragma
        pragma: 'React.createElement',
        pragmaFrag: 'React.createElement',   // optional
      }]
    ],
  }
  