var num = 100;
function messageHandler(event){
    num = event.data;
}
addEventListener("message", messageHandler);
setInterval(function(){
    postMessage(Math.round( Math.random() * num ));
}, 500);
