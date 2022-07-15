import { Rule } from 'eslint';
import { PrivateIdentifier } from 'estree';

type DisallowArrayMethodsParams = {
  context: Rule.RuleContext;
  disallowMethodName: 'reduce' | 'reduceRight';
};

type DisallowArrayMethods = (params: DisallowArrayMethodsParams) => Rule.RuleListener;

export const disallowArrayMethod: DisallowArrayMethods = ({ context, disallowMethodName }) => {
  return {
    MemberExpression(node) {
      const methodName = (node.property as PrivateIdentifier).name;

      if (methodName === disallowMethodName) {
        context.report({
          node,
          message: `Usage of "${disallowMethodName}()" method is disallowed.`,
        });
      }
    },
  };
};
