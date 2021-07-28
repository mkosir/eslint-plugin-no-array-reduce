import { Rule } from 'eslint';

export function noArrayReduce(context: Rule.RuleContext): Rule.RuleListener {
  return {
    ImportDeclaration(node) {
      context.report({
        node,
        message: 'Do not use "reduce()" method to keep code clean and maintainable.',
      });
    },
  };
}
