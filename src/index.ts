import { Rule, Linter } from 'eslint';

import { disallowArrayMethod } from './rules/disallowArrayMethod';

const config: {
  rules: { [key: string]: Rule.RuleModule };
  configs: { [key: string]: Linter.Config };
} = {
  rules: {
    'no-reduce': {
      create: (context) => disallowArrayMethod({ context, disallowMethodName: 'reduce' }),
    },
    'no-reduce-right': {
      create: (context) => disallowArrayMethod({ context, disallowMethodName: 'reduceRight' }),
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
