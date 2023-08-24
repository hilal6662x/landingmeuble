// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL
    }
  },
  typescript: {
    shim: false
  },
  components: [
    {
      path: '~/components',
      extensions: ['vue', 'ts']
    }
  ],
  app: {
    head: {
      htmlAttrs: {
        class: ['no-js'],
        lang: 'zxx'
      },
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        }
      ],
      titleTemplate: '%s - Landing Page Meuble Putri Mangir',
      charset: 'utf-8',
      title: 'Landing Page Meuble Putri Mangir',
      bodyAttrs: {
        class: ['sticky-header']
      },
      link: [
        {
          rel: 'shortcut icon',
          type: 'image/x-icon',
          href: '/assets/images/favicon.png'
        },
        {
          rel: "stylesheet",
          href: "/assets/css/vendor/bootstrap.min.css"
        },
        {
          rel: "stylesheet",
          href: "/assets/css/vendor/icomoon.css"
        },
        {
          rel: "stylesheet",
          href: "/assets/css/vendor/remixicon.css"
        },
        {
          rel: "stylesheet",
          href: "/assets/css/vendor/magnifypopup.min.css"
        },
        {
          rel: "stylesheet",
          href: "/assets/css/vendor/odometer.min.css"
        },
        {
          rel: "stylesheet",
          href: "/assets/css/vendor/lightbox.min.css"
        },
        {
          rel: "stylesheet",
          href: "/assets/css/vendor/animation.min.css"
        },
        {
          rel: "stylesheet",
          href: "/assets/css/vendor/jqueru-ui-min.css"
        },
        {
          rel: "stylesheet",
          href: "/assets/css/vendor/swiper-bundle.min.css"
        },
        {
          rel: "stylesheet",
          href: "/assets/css/vendor/tipped.min.css"
        },
        {
          rel: "stylesheet",
          href: "/assets/css/app.css"
        },
      ],
      script: [
        {
          src: "/assets/js/vendor/modernizr.min.js",
        },
        {
          src: "/assets/js/vendor/jquery.min.js",
        },
        {
          src:"/assets/js/vendor/bootstrap.min.js"
        },
        {
          src:"/assets/js/vendor/sal.min.js"
        },
        {
          src:"/assets/js/vendor/backtotop.min.js"
        },
        {
          src:"/assets/js/vendor/magnifypopup.min.js"
        },
        {
          src:"/assets/js/vendor/jquery.countdown.min.js"
        },
        {
          src:"/assets/js/vendor/odometer.min.js"
        },
        {
          src:"/assets/js/vendor/isotop.min.js"
        },
        {
          src:"/assets/js/vendor/imageloaded.min.js"
        },
        {
          src:"/assets/js/vendor/lightbox.min.js"
        },
        {
          src:"/assets/js/vendor/paralax.min.js"
        },
        {
          src:"/assets/js/vendor/paralax-scroll.min.js"
        },
        {
          src:"/assets/js/vendor/jquery-ui.min.js"
        },
        {
          src:"/assets/js/vendor/swiper-bundle.min.js"
        },
        {
          src:"/assets/js/vendor/svg-inject.min.js"
        },
        {
          src:"/assets/js/vendor/vivus.min.js"
        },
        {
          src:"/assets/js/vendor/tipped.min.js"
        },
        {
          src:"/assets/js/vendor/smooth-scroll.min.js"
        },
        {
          src:"/assets/js/vendor/isInViewport.jquery.min.js"
        },
        {
          src:"/assets/js/app.js"
        },
      ]
    },


  },
});
