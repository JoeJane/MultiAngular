// custom javascript goes here
// IIFE - Immediately Invoked Function Expression
/*(function (){

    function start(){
        console.log('App Started...');

        let deleteButtons = document.querySelectorAll('.btn-danger');

        for(btn of deleteButtons){
            btn.addEventListener('click', (e) => {
               if(!confirm("Are you sure?")){
                   e.preventDefault();
                   window.location.assign('/book');
               }
            });
        }
    }

    window.addEventListener("load", start); // when windows finish loading call start()
})(); */

$(function() {
    console.log( "App Started..." );
    $(".btn-danger").click(function(event) {
        if(!confirm("Are you sure?")){
            event.preventDefault();
            window.location.assign('/book');
        }
    });
});