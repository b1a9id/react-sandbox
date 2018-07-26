module.exports = {
	mode: 'production',
	entry: {
		pOne: './src/index.js',
	},
	output: {
		path: __dirname + '/dist',
		filename: '[name].bundle.js'
	},
	optimization: {
		splitChunks: {
			name: 'vendor',
			chunks: "initial"
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.css/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
	}
};