// @ts-check
import plugin from 'eslint-plugin-vue'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.vue'],
  rules: {
    ...plugin.configs['flat/recommended'].map(c => c.rules).reduce((acc, c) => ({ ...acc, ...c }), {}),
    'vue/multi-word-component-names': 'off',
    'vue/max-attributes-per-line': [2, { singleline: 2 }],
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'ignore',
      multiline: 'below',
    }],
    'import/order': 'off',
    'vue/attribute-hyphenation': 'off',
    //                                        Check why is this missing from eslint nuxt. Do I have the eslint rules for nuxt ?
    // 'vue/no-multiple-template-root': 2, // TODO - create a discussion regarding this and propose it as a vue-recommended (at least) if not essential
  },
})
