/* eslint-env browser */

/* jslint white:true, browser:true, devel:true */


//<i class="fas fa-minus-circle"></i>

var blocExpert = document.getElementById('blocExpert');
var newDivToProveExpert = document.createElement("div");

blocExpert.addEventListener('click', function () {
    "use strict";
    newDivToProveExpert.style.position = 'relative';
    newDivToProveExpert.style.zIndex = '10000';
    newDivToProveExpert.backgroundColor = 'white';
    newDivToProveExpert.style.display = 'inline-block';
    newDivToProveExpert.textContent = 'test';
    newDivToProveExpert.width = '40%';
    newDivToProveExpert.height = 'auto';
    document.add(newDivToProveExpert);
    
});

