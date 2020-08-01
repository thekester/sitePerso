/* eslint-env browser */

/* jslint white:true, browser:true, devel:true */


var closable1 = document.getElementById('closable1');
var closableConcernByClosable1 = document.getElementById('closableConcernByClosable1');
var fleche1 = document.getElementById('fleche1');

var closable2 = document.getElementById('closable2');
var closableConcernByClosable2 = document.getElementById('closableConcernByClosable2');
var fleche2 = document.getElementById('fleche2');

var closable3 = document.getElementById('closable3');
var closableConcernByClosable3 = document.getElementById('closableConcernByClosable3');
var fleche3 = document.getElementById('fleche3');


//console.log(closable1);
//sconsole.log(closableConcernByClosable1);

closable1.addEventListener('click', function () {
    "use strict";
    //console.log("closable1.addEventListener "+closableConcernByClosable1.style.display);
    if (closableConcernByClosable1.style.display === "block") {
        closableConcernByClosable1.style.display = "none";
        fleche1.className = "fas fa-angle-right fa-rotate-90";
    } else if (closableConcernByClosable1.style.display === "") {
        closableConcernByClosable1.style.display = "none";
        fleche1.className = "fas fa-angle-right fa-rotate-90";
    } else {
        closableConcernByClosable1.style.display = "block";
        fleche1.className = "fas fa-angle-right";

    }
});
closable2.addEventListener('click', function () {
    "use strict";
    //console.log("closable1.addEventListener "+closableConcernByClosable1.style.display);
    if (closableConcernByClosable2.style.display === "block") {
        closableConcernByClosable2.style.display = "none";
        fleche2.className = "fas fa-angle-right fa-rotate-90";
    } else if (closableConcernByClosable2.style.display === "") {
        closableConcernByClosable2.style.display = "none";
        fleche2.className = "fas fa-angle-right fa-rotate-90";
    } else {
        closableConcernByClosable2.style.display = "block";
        fleche2.className = "fas fa-angle-right";

    }
});

closable3.addEventListener('click', function () {
    "use strict";
    //console.log("closable1.addEventListener "+closableConcernByClosable1.style.display);
    if (closableConcernByClosable3.style.display === "block") {
        closableConcernByClosable3.style.display = "none";
        document.getElementById("fleche3").className = "fas fa-angle-right fa-rotate-90";
    } else if (closableConcernByClosable3.style.display === "") {
        closableConcernByClosable3.style.display = "none";
        fleche3.className = "fas fa-angle-right fa-rotate-90";
    } else {
        closableConcernByClosable3.style.display = "block";
        fleche3.className = "fas fa-angle-right";

    }
});
