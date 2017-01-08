// 本地开发配置
var path = require('path');
var glob = require('glob');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var entry = {};
var root = path.join(__dirname, '../../');
var srcPath = path.join(root, 'app');
var buildPath = path.join(root, 'build');

glob.sync(path.join(srcPath, '{common,pages}/*/*.js')).forEach(function (filePath) {
    var chunk = path.relative(srcPath, filePath).slice(0, -3);

	if( chunk.indexOf("/components/") == -1 ) {
		entry[chunk] = chunk;
	}
});

var publicPath = path.join(root, 'build');
var modulesDirectories = module.paths.concat( path.join(srcPath + "/pages/components") );

var config = {
    devtool: 'cheap-module-source-map',
    debug: true,
    context: srcPath,
    entry: entry,
    output: {
        path: buildPath,
        pathinfo: true,
        publicPath: publicPath,
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    resolve: {
        root: srcPath,
        alias: {
            c: path.join(srcPath, 'components')
        },
        modulesDirectories: [
            'components',
            'node_modules'
        ]
    },
    resolveLoader: {
        modulesDirectories: modulesDirectories
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json'
            },
			{
				test: /\.js$/,
				loader: 'babel'
			},
            {
                test: /\.tpl$/,
                loader: 'dot-tpl'
            },
            {
                test: /\.(png|gif|jpg|jpeg|svg)$/,
                loader: 'file?name=[path][name].[ext]'
            },
            {
                test: /\.(png|gif|jpg|jpeg|svg)(\?.*)$/,
                loader: 'url'
            },
            {
                test: /\.(ttf|eot|woff|aac|mp3|mp4)(\?.*)?$/,
				loader: "url"
            },
            {
                test: /\.(less|css)$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap!autoprefixer!less?sourceMap')
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $ : 'jquery'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(true),
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common/common',
            filename: 'common/common.js',
            minChunks: 2
        })
    ]
};

module.exports = config;
