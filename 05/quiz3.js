var $textBtn = document.getElementsByClassName('text-btn')
var $addRed = document.getElementsByClassName('add-red');
var $addBox = document.getElementsByClassName('add-btn');
var $delBox = document.getElementsByClassName('delete-btn');
var $resetBtn = document.getElementsByClassName('reset-btn');
var $toggleBtn = document.getElementsByClassName('toggle-btn');
var $imgBtn = document.getElementsByClassName('image-btn');
var box = document.querySelectorAll('.box');


var btn_event = {

    redbox : function() {

        box.style.backgroundColor = 'red';

    },

    addbox : function() {

        var div = box;


        
    },

    delbox : function() {

        box.removeChild(obj.parentNode);
        
    },

    addtext : function() {
        
    },

    resetbox : function() {
        
    },

    togglebox : function() {
        
    },
    
    imgbox : function() {
        
    }


}

$textBtn.addEventListener('click', btn_event.addtext);
$addRed.addEventListener('click', btn_event.redbox);
$addBox.addEventListener('click', btn_event.addbox);
$delBox.addEventListener('click', btn_event.delbox);
$resetBtn.addEventListener('click', btn_event.resetbox);
$toggleBtn.addEventListener('click', btn_event.togglebox);
$imgBtn.addEventListener('click', btn_event.imgbox);
