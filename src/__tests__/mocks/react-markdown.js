/**
 * react-markdown builds ESM only, it seems Jest cannot help with this kind of module now (see: https://github.com/remarkjs/react-markdown/issues/635)
 */
var ReactMarkdown = function ({ children }) {
  return children;
};

module.exports = ReactMarkdown;
