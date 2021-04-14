const path = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

// webpack所有配置信息
module.exports = [
    {
        mode: "development",
        // 指定入口文件
        entry:"./src/index.ts",
        // 指定打包后文件的文件
        output:{    
            path: path.resolve(__dirname, 'dist'),
            filename:"bundle.js",
            environment:{
                arrowFunction:false,
                const:false
            }
        },
        
        // 指定webpack.js 打包时要使用的模块
        module: {
            // 指定加载的规则
            "rules":[
                {
                    // test 指定的是规则生成的文件
                    test:/\.ts$/,
                    // 要使用的loader
                    use:[
                        {
                            //配置babel
                            loader:'babel-loader',
                            // 设置babel
                            options:{
                                // 设置预定义环境
                                "presets": [
                                    ["@babel/preset-env", {
                                    "corejs": "3",
                                    "useBuiltIns": "usage",
                                    "targets":{
                                        "chrome":"88",
                                        "ie":"11"
                                    }
                                  }]
                                ]
                            }
                        },
                        
                        "ts-loader"

                    ],
                    // 要排除的文件
                    exclude:/node-modules/
                },
                {
                    test:/\.less$/,
                    use:[
                        "style-loader",
                        "css-loader",
                        {
                            loader:"postcss-loader",
                            options:{
                                postcssOptions:{
                                    plugins:[
                                        [
                                            "postcss-preset-env",{
                                                "browsers":"last 2 versions"
                                            }
                                        ]    
                                    ]
                                }
                            }
                        },
                        "less-loader"

                    ]
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HTMLWebpackPlugin(
                    {
                      template:'./src/index.html',
                    filename:'index.html'  
                    }   
            )
            
        ],
        resolve:{
            extensions:[
                '.ts','.js'
            ]
        }
}]