module.exports = {
  clean: {
    run: {
      del: 'dist',
    },
  },
  lint: {
    run: 'eslint --max-warnings 0 --ext .ts src/',
  },
  dev: {
    run: ['#clean', 'rollup -c -w'],
    env: {
      NODE_ENV: 'development',
    },
  },
  build: {
    run: ['#clean', 'rollup -c'],
    env: {
      NODE_ENV: 'production',
    },
  },
};
