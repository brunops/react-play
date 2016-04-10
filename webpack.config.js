var webpack = require('webpack'),
    path = require('path')


module.exports = {
    entry: {
        app1: path.resolve(__dirname, './src/app1/app1.js'),
        app2: path.resolve(__dirname, './src/app2/app2.js'),
        app3: path.resolve(__dirname, './src/app3/app3.js')
    },

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
