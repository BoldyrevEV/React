// Импорт webpack.
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: { // Установили точку входа
        //app: './index.jsx',
        app: './test.js',
    },
    context: `${__dirname}/static_src`, // Путь до входного файла
    output: { // Установили точку выхода
        path: `${__dirname}/static/build`, // Путь до точки выхода
        filename: '[name].js',
        //filename: NODE_ENV === 'development' ? '[name].js' : '[name]-[hash].js',
        publicPath: '/static/build/', // Нужно для браузера (изучить!)
    },

//    optimization: {
//        minimize: NODE_ENV !== 'development',
//    },
//
//    plugins: [
//        new webpack.NoEmitOnErrorsPlugin(),
//    ],
//
//    module: {
//        rules: [
//            {
//                test: /\.(js|jsx)$/,
//                include: `${__dirname}/static_src`,
//                loader: 'babel-loader?presets[]=react&presets[]=es2015&presets[]=stage-1',
//                exclude: /node_modules/,
//            },
//            {
//                test: /\.css$/,
//                loader: 'style-loader!css-loader',
//            },
//            {
//                test: /\.scss$/,
//                loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded',
//            },
//            {
//                test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2)$/,
//                loader: 'url-loader?limit=4096&name=[path][name].[ext]',
//            },
//        ],
//    },
//
//    resolve: {
//        modules: [`${__dirname}/static_src`, 'node_modules'],
//        extensions: ['.js', '.jsx'],
//    },
//
//    watch: NODE_ENV === 'development',
//    watchOptions: {
//        aggregateTimeout: 100,
//    },
//
//    devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : false,
};
