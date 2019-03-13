module.exports ={
    entry: __dirname + '/client/code/index.js',
    output: {
        path: __dirname + '/client/src/js/',
        filename: 'bundle.js'
    },
    devtool: "#sourcemap",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loaders: ['babel-loader']
            }
        ]
    }
};