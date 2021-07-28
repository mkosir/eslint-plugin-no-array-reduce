// import { Rule } from 'eslint';

import { disallowArrayFunction } from './rules/disallowArrayFunction';

// const plugin: { rules: { [key: string]: Rule.RuleModule }; [key: string]: any } = {
//   rules: {
//     'no-reduce': {
//       create: (context) => disallowArrayFunction(context, 'reduce'),
//     },
//     'no-reduce-right': {
//       create: (context) => disallowArrayFunction(context, 'reduceRight'),
//     },
//   },

//   configs: {
//     recommended: {
//       plugins: ['no-array-reduce'],
//       rules: {
//         'no-array-reduce/no-reduce': 'error',
//         'no-array-reduce/no-reduce-right': 'error',
//       },
//     },
//   },
// };

module.exports = {
  rules: {
    'no-reduce': {
      create: function (context) {
        return disallowArrayFunction(context, 'reduce');
      },
    },
    'no-reduce-right': {
      create: function (context) {
        return disallowArrayFunction(context, 'reduceRight');
      },
    },
  },

  // configs: {
  //   recommended: {
  //     plugins: ['no-array-reduce'],
  //     rules: {
  //       'no-array-reduce/no-reduce-test': 'error',
  //       'no-array-reduce/no-reduce': 'error',
  //       'no-array-reduce/no-reduce-right': 'error',
  //     },
  //   },
  // },
};
