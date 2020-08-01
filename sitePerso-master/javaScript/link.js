/* eslint-env browser */

/* jslint white:true, browser:true, devel:true */

/*jslint browser: true*/ 
/*global  $*/



/*
window.onload = function () {
    
    "use strict";

    (function () // Code in a function to create an isolate scope
        {
            var i;
            var j;
            var speed = 300;
            var moving_frequency = 15; // Affects performance !
            var links = document.querySelectorAll("nav a"); // Active links
            var href;
            for (i = 0; i < links.length; i++) {
                href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
                if (href !== null && href.length > 1 && href.substr(0, 1) == '#') {
                    links[i].onclick = function () {
                        var element;
                        var href = this.attributes.href.nodeValue.toString();
                        if (element === document.getElementById(href.substr(1))) {
                            var hop_count = speed / moving_frequency
                            var getScrollTopDocumentAtBegin = getScrollTopDocument();
                            var gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;

                            for (j = 1; j <= hop_count; j++) {
                                (function () {
                                    var hop_top_position = gap * j;
                                    setTimeout(function () {
                                        window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin);
                                    }, moving_frequency * j);
                                })();
                            }
                        }

                        return false;
                    };
                }
            }

            var getScrollTopElement = function (e) {
                var top = 0;

                while (e.offsetParent != undefined && e.offsetParent != null) {
                    top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
                    e = e.offsetParent;
                }

                return top;
            };

            var getScrollTopDocument = function () {
                return document.documentElement.scrollTop + document.body.scrollTop;
            };
        })();

}
*/

        $(document).ready(function() {
            $('.js-scrollTo').on('click', function() { // Au clic sur un élément
                var page = $(this).attr('href'); // Page cible
                var speed = 750; // Durée de l'animation (en ms)
                $('html, body').animate({
                    scrollTop: $(page).offset().top
                }, speed); // Go
                return false;
            });
        });



