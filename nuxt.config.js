
export default {
    ssr: true,
    target: 'static',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        scripts: []
    },
    env: {
        nodeEnv: process.env.NODE_ENV || 'dev'
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [
        { src: 'bootstrap/dist/css/bootstrap.min.css', lang: 'css' },
        { src: '@fortawesome/fontawesome-free/css/all.min.css', lang: 'css' },
        { src: 'animate.css/animate.min.css', lang: 'css' },
        { src: '~assets/app/app.css', lang: 'css' },
        { src: 'animate.css/animate.min.css', lang: 'css' },
        { src: 'owl.carousel/dist/assets/owl.carousel.css', lang: 'css' },
        { src: 'owl.carousel/dist/assets/owl.theme.default.css', lang: 'css' },
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '~plugins/sofbox.js',
        '~plugins/vuesax.js',
        '~/plugins/bootstrap-vue'
    ],

    router: {
        // base: '/sofbox-vue/',
        // middleware: ['auth']
    },

    // generate: {
    //     routes(){
    //         getFileUrl()
    //     }
    // },

    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        // '@nuxtjs/eslint-module'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://bootstrap-vue.js.org/docs/
        'bootstrap-vue/nuxt',
        // '@nuxtjs/axios',
        '@nuxtjs/pwa'
    ],

    // axios: {
    //     baseURL: 'http://192.168.110.82:8000', // Used as fallback if no runtime config is provided
    // },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        'html.minify': {},
        extend(config, { isDev, isClient }) {

            config.node = {

                net: 'empty',
                fs: "empty"
            };

        },

        // plugins: [
        //     new webpack.DefinePlugin({
        //         'process.VERSION': version
        //     })
        // ],

        extractCSS: {
            allChunks: true
        },
        splitChunks: {
            layouts: true
        },
        vendor: ['jquery', 'bootstrap'],
        extend(config, ctx) {},
        babel: { compact: true }
    },
    server: {
        host: 0,
        port: 5700 // default: 3000
    },
    vue: {
        config: {
            ignoredElements: [
                'rs-module-wrap', 'rs-module', 'rs-bgvideo', 'rs-slides', 'rs-layer', 'rs-static-layers', 'rs-progress', 'rs-slide', 'rs-3'
            ]
        }
    }
}