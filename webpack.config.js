module.exports = {
	mode: 'production',
	entry: {
		pOne: './src/index.js',
		pTwo: './src/components/index.js'
	},
	output: {
		path: __dirname + '/dist',
		filename: '[name].bundle.js'
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				test: /node_modules/,
				name: 'vendor',
				chunks: "initial",
				enforce: true
			}
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	}
};