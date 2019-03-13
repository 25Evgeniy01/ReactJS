module.exports ={
    entry: __dirname + '/client/mainApp.js',
    output: {
        path: __dirname + '/client/js/',
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