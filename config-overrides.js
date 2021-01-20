/*
 * @Author: wangfeng
 * @Date: 2020-02-20 12:02:39
 * @LastAuthor: wangfeng
 * @lastTime: 2021-01-20 19:15:06
 * @FilePath: /yit-h5/Users/wangfeng/work/reactnew-demo/config-overrides.js
 */
const { override, fixBabelImports, addWebpackAlias, addDecoratorsLegacy, addPostcssPlugins, addLessLoader } = require('customize-cra');
const path = require('path');

const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

const getStyleLoaders = (cssOptions, preProcessor, lessOptions) => { // 这个是use里要设置的，封装了下
    const loaders = [
        require.resolve('style-loader'),
        {
            loader: require.resolve('css-loader'),
            options: cssOptions
        },
        {
            loader: require.resolve('postcss-loader'),
            options: {
                ident: 'postcss',
                plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    require('postcss-preset-env')({
                        autoprefixer: {
                            flexbox: 'no-2009'
                        },
                        stage: 3
                    })
                ]
            }
        }
    ];
    if (preProcessor) {
        loaders.push({
            loader: require.resolve(preProcessor),
            options: lessOptions
        });
    }
    return loaders;
};


function resolve(dir) {
    return path.join(__dirname, '.', dir)
}
// 主题色
const theme = require('./package').theme

// const svgSpriteDirs = [
//     require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
//     resolve('src/app/assets/svg/'),  // 业务代码本地私有 svg 存放目录
// ];


module.exports = override(
    // antd按需加载
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        // 这里注意了，less使用
        style: true,
    }),
    addLessLoader({
        lessOptions: {
            modifyVars: theme,
            javascriptEnabled: true,
        },
        sourceMap: false,
    }),
    // 别称
    addWebpackAlias({
        '@assets': resolve('src/app/assets'),
        '@components': resolve('src/components'),
        '@config': resolve('config'),
        '@images': resolve('src/app/assets/images'),
        '@svgs': resolve('src/app/assets/svgs'),
        '@pages': resolve('src/pages'),
        '@utils': resolve('src/utils'),
        '@constants': resolve('src/app/constants'),
        '@actions': resolve('src/app/actions'),
        '@reducers': resolve('src/app/reducers')
    }),
    // pxtorem
    addPostcssPlugins([require('postcss-pxtorem')({
        rootValue: 100,
        selectorBlackList: [], //过滤
        propList: ['*'],
        minPixelValue: 2,
    }),]),
    // svg sprite webpack已有相关配置，未启用
    // addWebpackModuleRule({
    //     test: /\.svg$/i,
    //     loader: 'svg-sprite-loader',
    //     include: svgSpriteDirs,
    //     options: {
    //         symbolId: '[name]'
    //     }
    // }),
    addDecoratorsLegacy(), // 使用装饰器
    // disableEsLint(),
    (config)=>{
        // 增加处理less module配置 customize-cra 不提供 less.module 只提供css.module
        // 然后使用的时候 把原来的less文件改成.module.less 然后在引入文件处改成 import Style from 'XXX.module.less' < div className={Style.styleName}></div>
        const oneOf_loc= config.module.rules.findIndex(n => n.oneOf) // 这里的config是全局的
        config.module.rules[oneOf_loc].oneOf = [
        {
            test: /\.module\.less$/,
            use: getStyleLoaders(
            {
                importLoaders: 2,
                modules: {
                getLocalIdent: getCSSModuleLocalIdent
                }
            },
            'less-loader'
            )
        },
        ...config.module.rules[oneOf_loc].oneOf
        ]
    
        return config
    },
);