const ansi = require('ansi-style-codes');

module.exports = styles => {
  styles = typeof styles == 'string' ? [styles] : styles;

  return (
    '\x1b[' +
    styles
      .map(effect => {
        return ansi[effect];
      })
      .join(';') +
    'm'
  );
};
