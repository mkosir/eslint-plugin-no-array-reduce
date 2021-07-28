import { noArrayReduce } from './rules/no-array-reduce';

module.exports = {
  rules: {
    'no-array-reduce': {
      create: noArrayReduce,
    },
  },
};
