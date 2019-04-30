'use strict';


import $ from "./jquery.module.js";


$(document).ready(() => {


    /*const dataResponse =
        [
            {
                friend : 'amanda',
                response : 'Hmm..ok, et quel est le rapport avec la destruction du Roi de la nuit par Arya Stark ?',
            },
            {
                friend : 'jim',
                response : 'Très bien mais je ne comprends pas ce qu\'a à voir l\'héritier légitime au trone de fer, Jon Snow',
            },
            {
                friend : 'kim',
                response : 'Cool ! Tu passeras le bonjour à la tante de Jon, Daenerys, merci 😀 ',
            },
            {
                friend : 'mike',
                response : 'Ôte moi d\'un doute, est-ce bien Cersei qui tue Margaery ?!',
            },
            {
                friend : 'nash',
                response : 'Ok, mais l\'épisode 3 de la saison 8 ne dit pas les motivations des marcheurs blancs',
            },
            {
                friend : 'sam',
                response : 'Vivement les spin-off, la mort de Jorah ne m\'a pas convaincu !',
            }
        ];*/

    const dataResponse =
        [
            {
                friend : 'amanda',
                response : 'Hmm..ok, j\'hâte de savoir qui va achever le Night King 😏',
            },
            {
                friend : 'jim',
                response : 'Très bien mais je ne comprends pas ce qu\'a à voir l\'héritier légitime au trone de fer, JS',
            },
            {
                friend : 'kim',
                response : 'Cool ! Tu passeras le bonjour à la tante de Jon, Daenerys, merci 😀 ',
            },
            {
                friend : 'mike',
                response : 'Ôte moi d\'un doute, est-ce bien Cersei qui tue Margaery ?!',
            },
            {
                friend : 'nash',
                response : 'Ok, mais pourquoi Bran est-il la corneille à trois yeux ?',
            },
            {
                friend : 'sam',
                response : 'Vivement les spin-off, je veux en savoir plus sur les origines des marcheurs blancs',
            }
        ];



    class Chatting {

        constructor(window, container, input, data) {

            this.window = window;
            this.container = container;
            this.input = input;
            this.isStuck = false;
            this.isInElement = false;
            this.data = data;
            this.isSending = false;
        }


        init(){

            this.eventListener();
        }

        eventListener(){

            this.getChatMessage()

        }

        getChatMessage() {
            $(this.input).on('keypress', (key) => {

                if(key.keyCode == 13) {


                    let content = $(this.input).val();
                    let from_myself = true;
                    $(this.input).val('');
                    this.isSending = true;
                    this.createMessage(content, from_myself);
                }

            })
        }

        createMessage(content, from_myself, src) {


            if ( this.isSending == true ){
                let global_container = document.createElement('div');

                let msg_container = document.createElement('div');
                $(msg_container).addClass('msg');

                let msg_content = document.createElement('p');
                let date = new Date();
                let msg_hour = document.createElement('span');
                $(msg_hour).addClass('hours');


                msg_hour.textContent = date.getHours() + ':' + date.getMinutes();


                if( from_myself == true ) {
                    $(global_container).addClass('container-message me');
                    msg_content.textContent = content;
                    if(this.isSending == true){
                        setTimeout(() => {
                            this.isSending == false;
                            this.getResponse();
                        }, 250);
                    }
                } else {

                    let friend_picture = document.createElement('img');
                    $(friend_picture).attr('src', src);
                    global_container.appendChild(friend_picture);
                    $(global_container).addClass('container-message friend');
                    msg_content.textContent = content;
                    $(this.container).addClass('on');

                }
                this.container.appendChild(global_container).appendChild(msg_container).appendChild(msg_content);
                msg_container.appendChild(msg_hour);


                this.container.scrollTop = this.container.scrollHeight;

            }
        }

        getResponse(){


            let random_resp = getRandomInt($(this.data).length);

            function getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max));
            }

            let content = $(this.data)[random_resp].response;
            let src = './src/img/app/profilpic/' + $(this.data)[random_resp].friend + '.png';
            console.log(content);

            let from_myself = false;
            this.createMessage(content, from_myself, src);

        }


    }




    const chat = new Chatting(document.querySelector("body"), document.querySelector('.messages-window'), document.querySelector('.chat-input'), dataResponse )
    chat.init();

});
