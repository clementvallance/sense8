'use strict';


import $ from "./jquery.module.js";

$(document).ready(() => {



    class Dropdown {

        constructor(window, links) {

            this.window = window;
            this.links = links;
            this.isDesktop = true;

        }


        init(){

            this.eventListener();
        }

        eventListener(){
            this.testWindow();

            $( window ).resize(() => {

               this.testWindow();
            })


        }

        testWindow(){
            if (window.matchMedia("(min-width: 600px)").matches) {
                this.isDesktop = true;
                this.closeCurrentTab()
                $(this.links).off('click');

            }else {
                this.isDesktop = false;
                this.getDropFooter();
            };
        }

        getDropFooter() {

            $(this.links).on('click', (selector) => {
               if($(selector.currentTarget).hasClass('isActive')){
                   this.closeCurrentTab();
                   $(selector.currentTarget).css('height', 40);
                   $(selector.currentTarget).removeClass('isActive');
               }else {
                   this.closeCurrentTab();
                   $(selector.currentTarget).find('.footer-section_link').toggleClass('isActive');
                   $(selector.currentTarget).css('height', () => {
                       return $(selector.currentTarget).find('.footer-section_link').length * 50;
                   });
                   $(selector.currentTarget).toggleClass('isActive');
               }


            })
        }

        closeCurrentTab () {
            $('.footer-section_link').removeClass('isActive');
            $('.footer-section').removeClass('isActive');

            if(this.isDesktop == true ){
                $('.footer-section').css('height', 'auto');
            } else {
                $('.footer-section').css('height', 40);
            }

        }


    }

    const footerDropdown = new Dropdown(document.querySelector('body'), document.querySelectorAll('.footer-section') );
    footerDropdown.init();


});
