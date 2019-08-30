module.exports = {
  rules: {
    'async-func-name': {
      create: function (context) {
        return {
          FunctionDeclaration (node) {
            if (node.async && !/Async/.test(node.id.name)) {
              context.report({
                node,
                message:
                  "A sua função precisa utilizar o acrônimo 'Async' no final da declaração, por exemplo: myFunctionAsync()"
              });
            }
          },

          ArrowFunctionExpression (node) {
            if (node.async && !/Async/.test(node.parent.id.name)) {
              context.report({
                node,
                message:
                  "A sua função precisa utilizar o acrônimo 'Async' no final da declaração, por exemplo: myFunctionAsync()"
              });
            }
          }
        };
      }
    },
    'template-literal': {
      create: function (context) {
        return {
          TemplateLiteral (node) {
            context.report({
              node,
              message: 'Do not use template literals',

              fix (fixer) {
                if (node.expressions.length) {
                  return;
                }

                return [
                  fixer.replaceTextRange([node.start, node.start + 1], '"'),
                  fixer.replaceTextRange([node.end - 1, node.end], '"')
                ];
              }
            });
          }
        };
      }
    }
  }
};
