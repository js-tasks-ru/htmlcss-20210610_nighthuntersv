module.exports = {
    syntax: 'postcss-scss',
    map: { inline: true },
    plugins: [
        require('postcss-import'),
        require('precss')({
            lookup: { disable: true },
            properties: {
                disable: true,
                preserve: true,
            },
        }),
        require('postcss-percentage'),
        require('postcss-nested'),
        require('autoprefixer'),
        require('cssnano'),
    ],
}
