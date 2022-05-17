const path=require('path');
const VueloaderPlugin=require('vue-loader/lib/plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const ExtractPlugin=require('extract-text-webpack-plugin');
module.exports={
	entry:path.join(__dirname,'/src/index.js'),
	output:{
		filename:'bundle.[contenthash:8].js',
		path:path.join(__dirname,'/dist')
	},
	plugins:[
		new VueloaderPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '/src/index.html'),
			title:'王彬'
		}),
		new ExtractPlugin('styles-[name].css')
	],
	module:{
		rules:[
			{
				test:/\.vue$/,
				loader:'vue-loader'
			},
			{
				test:/\.css$/,
				use:ExtractPlugin.extract({
					fallback:'style-loader',
					use:[
						'css-loader'
					]
				})
			},
			{
				test:/\.(jpg|png|gif|svg|jpeg|otf|eot|ttf|woff|woff2)$/,
				use:[
					{
						loader:'url-loader',
						options:{
							limit:1024,
							name:'images/[name].[ext]'
						}
					}
				]
			}
		]
	}
}