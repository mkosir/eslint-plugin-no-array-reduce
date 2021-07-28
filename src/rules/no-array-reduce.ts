import { Rule } from 'eslint';

export function noArrayReduce(context: Rule.RuleContext): Rule.RuleListener {
  const disallowFunctionName = 'reduce';
  return {
    // ImportDeclaration(node) {
    //   context.report({
    //     node,
    //     message: 'Do not use "reduce()" method to keep code clean and maintainable.',
    //   });
    // },

    // MemberExpression: function reportUnwantedName(node) {
    MemberExpression(node) {
      // @ts-ignore
      const functionName = node.property.name;

      if (functionName === disallowFunctionName) {
        context.report({
          node,
          message: `Usage of "${disallowFunctionName}()" method is disallowed.`,
        });
      }
    },
  };
}
