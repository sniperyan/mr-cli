module.exports = {
    extends: [
        'fbjs'
    ],
    "rules": {
        'jsx-a11y/no-static-element-interactions': [
            'error',
            {
              handlers: [
              ]
            }
          ],
        'max-len': [0, 160, 4],
        'radix':'off',
        'consistent-return':'off',
        'default-case':'off',
        'eqeqeq':'off'
    }
}
