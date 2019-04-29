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

                if($(window).scrollTop() >= ($(this.landing).height() - 100)) {


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
                $(this.menu).addClass('isSticky');
            }else{
                logo.attr('src', './src/img/cluster.png');
                $(this.menu).removeClass('isSticky');
            }

        }

    }


    $(".menu-toggle").on('click', function() {
        $(this).toggleClass('open');
        $('.menu-section').fadeToggle(600);
    });

		$('.header__menu ul li a').bind('click', function(e) {
				e.preventDefault(); // prevent hard jump, the default behavior

				var target = $(this).attr("href"); // Set the target as variable
        $(".menu-toggle").toggleClass('open');
        $('.menu-section').fadeToggle(600);

				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top
				}, 1000, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
				});

				return false;
    		});

    const stickyMenu = new Sticky(document.querySelector("body"), document.querySelector('.landing-background'), document.querySelector('.header-content') )
    stickyMenu.init();

});
