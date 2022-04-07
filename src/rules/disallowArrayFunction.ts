import { Rule } from 'eslint';
import { PrivateIdentifier } from 'estree';

export const disallowArrayFunction = (
  context: Rule.RuleContext,
  disallowFunctionName: 'reduce' | 'reduceRight',
): Rule.RuleListener => {
  return {
    MemberExpression(node) {
      const functionName = (node.property as PrivateIdentifier).name;

      if (functionName === disallowFunctionName) {
        context.report({
          node,
          message: `Usage of "${disallowFunctionName}()" method is disallowed.`,
        });
      }
    },
  };
};
