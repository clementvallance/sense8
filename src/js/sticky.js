'use strict';


import $ from "./jquery.module.js";

$(document).ready(() => {



    class Sticky {

        constructor(window, landing, menu) {

            this.window = window;
            this.landing = landing;
            this.menu = menu;
            this.isStuck = false;
            this.isInElement = false;
        }


        init(){

            this.eventListener();
        }

        eventListener(){

            this.getStickyPosition()

        }

        getStickyPosition(){
            $(window).scroll('scroll', () => {

                console.log($(window).scrollTop());
                if($(window).scrollTop() >= ($(this.landing).height() - 50)) {


                    if(this.isStuck == false) {

                        this.isStuck == true;
                        this.isSticky(true);

                    }
                }else{


                    this.isStuck == false;
                    this.isSticky(false);

                }

            })
        }
        isSticky(state){
            let logo = $(this.menu.querySelector('.header__logo')).find('img');

            if(state == true){
                logo.attr('src', './src/img/cluster-black.png');
                console.log(this.menu)
                $(this.menu).addClass('isSticky');
            }else{
                logo.attr('src', './src/img/cluster.png');
                $(this.menu).removeClass('isSticky');
            }

        }

    }


    $(".menu-toggle").on('click', function() {
        $(this).toggleClass("on");
        $('.menu-section').toggleClass("on");
        $("nav ul").toggleClass('hidden');
    });

    const stickyMenu = new Sticky(document.querySelector("body"), document.querySelector('.landing-background'), document.querySelector('.header-content') )
    stickyMenu.init();

});
