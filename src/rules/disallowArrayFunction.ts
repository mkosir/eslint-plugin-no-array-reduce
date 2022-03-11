import { Rule } from 'eslint';

export const disallowArrayFunction = (
  context: Rule.RuleContext,
  disallowFunctionName: 'reduce' | 'reduceRight',
): Rule.RuleListener => {
  return {
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
};
