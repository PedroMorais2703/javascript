let btns = document.querySelectorAll('buttons');
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        document.querySelector('#app').removeChild(this);
    };
}



