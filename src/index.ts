import { Rule, Linter } from 'eslint';

import { disallowArrayFunction } from './rules/disallowArrayFunction';

const config: {
  rules: { [key: string]: Rule.RuleModule };
  configs: { [key: string]: Linter.Config };
} = {
  rules: {
    'no-reduce': {
      create: (context) => disallowArrayFunction(context, 'reduce'),
    },
    'no-reduce-right': {
      create: (context) => disallowArrayFunction(context, 'reduceRight'),
    },
  },

  configs: {
    recommended: {
      plugins: ['no-array-reduce'],
      rules: {
        'no-array-reduce/no-reduce': 'error',
        'no-array-reduce/no-reduce-right': 'error',
      },
    },
  },
};

module.exports = config;
