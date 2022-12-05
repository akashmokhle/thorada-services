// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app:{
        head:{
            link:[
                {
                    rel:"stylesheet", 
                    href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"                 
                },
                {
                    rel:'stylesheet',
                    href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,700,300' 
                },
                {
                    rel: "stylesheet",
                    href: "/css/bootstrap/css/bootstrap.min.css"
                },
                {
                    rel: "stylesheet",
                    href: "/css/font-awesome/css/font-awesome.min.css" 
                },
                {
                    rel: "stylesheet",
                    href: "/js/datetimepicker/bootstrap-datetimepicker.min.css" 
                },
                {
                    rel: "stylesheet",
                    href: "/js/owl-carousel/owl.carousel.css" 
                },
                {
                    rel: "stylesheet",
                    href: "/css/themecss/lib.css" 
                },
                {
                    rel: "stylesheet",
                    href: "/js/jquery-ui/jquery-ui.min.css" 
                },
                {
                    rel: "stylesheet",
                    href: "/css/themecss/so_megamenu.css" 
                },
                {
                    rel: "stylesheet",
                    href: "/css/themecss/so-categories.css" 
                },
                {
                    rel: "stylesheet",
                    href: "/css/themecss/so-listing-tabs.css"
                },
                {
                    rel: "stylesheet",
                    href:"/css/themecss/so-newletter-popup.css"
                },
                {
                    rel: "stylesheet",
                    href:"/css/themecss/just_purchased_notification.css"
                },
                {
                    rel:"stylesheet",
                    href:"/css/footer1.css" 
                },
                {
                    rel: "stylesheet",
                    href: "/css/header1.css" 
                },
                {
                    rel: "stylesheet",
                    href:"/css/theme.css" 
                },
                {
                    rel: "stylesheet",
                    href:"/css/responsive.css"
                }

            ],
            script:[

                {src: "/js/jquery-2.2.4.min.js"},
                {src: "/js/bootstrap.min.js"},
                {src: "/js/owl-carousel/owl.carousel.js"},
                {src: "/js/themejs/libs.js"},
                {src: "/js/unveil/jquery.unveil.js"},
                {src: "/js/countdown/jquery.countdown.min.js"},
                {src: "/js/dcjqaccordion/jquery.dcjqaccordion.2.8.min.js"},
                {src: "/js/datetimepicker/moment.js"},
                {src: "/js/datetimepicker/bootstrap-datetimepicker.min.js"},
                {src: "/js/jquery-ui/jquery-ui.min.js"},
                {src: "/js/modernizr/modernizr-2.6.2.min.js"},
                {src: "/js/bootstrap-notify.min.js"},
                {src: "/js/lightslider/lightslider.js"},
                {src: "/js/themejs/toppanel.js"},
                {src:"/js/themejs/application.js"},
                {src: "/js/themejs/homepage.js"},
                {src: "/js/themejs/so_megamenu.js"},
                {src: "/js/themejs/addtocart.js"},  
                
            ]

        },
    },
    modules: [
        '@pinia/nuxt'
    ]

})
