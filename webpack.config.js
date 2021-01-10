const path = require('path')  //Allow us to access to the current path of our project either on local o on cloud
const HtmlWebpackPlugin = require('html-webpack-plugin') //Neccesary File to work with Html

module.exports = {
    entry: './src/index.js',        //Entry point of our project
    output:{
        path: path.resolve(__dirname, 'dist'),      //Output Point when the project have finished of compile
        filename: 'main.js'
    },
    resolve: {
      extensions: ['.js'],  //Drive the extension that we going to use
    },      
    module: {           //Babel Structure
        rules:[
            {
               test: /\.js?$/,              //Allow us to identify files on our enviroment
               exclude: /node_modules/,     //Exclude the unnecesary files
               use: {
                   loader: 'babel-loader'       //Using the loader from babel
               } 
            }
        ]
    },
    plugins:[                           //Declare the plugins that we going to need in the development 
        new HtmlWebpackPlugin([{    //Allow to compile html files
            inject: true,
            template: './public/index.html',   //Main address where find our principal main template
            filename: './index.html'        //The name that it will have the template file on the output
        }])
    ]
}

