import { disallowArrayFunction } from './rules/disallowArrayFunction';

module.exports = {
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
