var webpack = require('webpack'),
    path = require('path'),
    fs = require('fs')

// Read all apps as new entries
// There are a couple of assumptions here:
//      - folder name is the same as the javascript entry file name
//      - any folder not called "components" is treated as an entry
var entries = fs.readdirSync('./src').reduce(function (prev, curr) {
    if (curr !== 'components') {
        prev[curr] = path.resolve(__dirname, './src/' + curr + '/' + curr + '.js')
    }

    return prev
}, {})

module.exports = {
    entry: entries,

    output: {
        path: path.resolve(__dirname, '.build'),
        publicPath: '/.build/',
        filename: '[name].js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: [
                        'es2015',
                        'stage-0',
                        'react'
                    ]
                }
            }
        ]
    },

    resolve: {
        extensions: [ '', '.js', '.jsx' ]
    }
}
