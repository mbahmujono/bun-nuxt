module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        '@nuxtjs'
    ],
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        'indent': 'off',
        'vue/html-indent': 'off'
    }
}