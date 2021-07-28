import { noArrayReduce } from './no-array-reduce';

module.exports = {
  rules: {
    'no-reduce': {
      create: noArrayReduce,
    },
  },
};
