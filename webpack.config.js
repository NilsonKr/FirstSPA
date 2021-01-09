const path = require('path')  //Nos permite acceder a donde estámos en las carpetas. Ya sea en local o en la nube.
const HtmlWebpackPlugin = require('html-webpack-plugin') //Archivo necesario para trabajar con HTML.

module.exports = {
    entry: './src/index.js',        //Punto de entrada de nuestro projecto
    output:{
        path: path.resolve(__dirname, 'dist'),      //Punto de salidad luego de compilarlo en la carpeta distribucion con el nombre main.js
        filename: 'main.js'
    },
    resolve: ['.js'],       //Manejamos las extensiones de los archivos que vamos a manejar
    module: {           //Estructura de babel
        rules:[
            {
               test: /\.js?$/,              //Nos permite identificar los archivos según se encuentran en nuestro entorno.
               exclude: /node_modules/,     //Excluimos node_modules de nuestro compilamiento
               use: {
                   loader: 'babel-loader'       //Usamos el loader de babel que instalamos
               } 
            }
        ]
    },
    plugins:[                           //Declaramos los puglins que utilizaremos en la configuracion del proyecto
        new HtmlWebpackPlugin([{    //Permite trabajar con los archivos HTML
            inject: true,
            template: './public/index.html',   //Dirección donde se encuentra el template principal
            filename: './index.html'        //El nombre que tendra el archivo final del output html
        }])
    ]
}