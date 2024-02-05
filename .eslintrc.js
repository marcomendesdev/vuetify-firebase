module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
  rules: {
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 1
      },
      "multiline": {
        "max": 1
      }
    }]
  }
}
