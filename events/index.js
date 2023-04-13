const EventEmitter = require('events');


// const emitter = new EventEmitter();

// console.log(emitter);

// emitter.on('message', function(msg) {
//     console.log(`Wiadomość: ${msg}`);
// })

// emitter.emit('message', 'Cześć Programisto');

function printData(data) {
    console.log(`Dane ${data.data} z adresu ${data.url}`);
}
 
function confirm() {
    console.log('Pobieram');
}

class Puller extends EventEmitter {
    constructor(url) {
        super();

        this.url = url;
     }

     pull() {

        this.interval = setInterval(() => {
            this.emit('getData', {
                data: 'Pobrane dane', 
                url: this.url
            });
        }, 1000)
     }

    //  stop(callback) {
    //     this.removeListener('getData', callback)
    //     clearInterval(this.interval);
    //  }

    stop() {
        this.removeAllListeners('getData')
        clearInterval(this.interval);
     }
}

const puller = new Puller('https://example.com');

puller.on('getData', printData); 
puller.on('getData', confirm); 

puller.pull();

setTimeout(() => {
    puller.stop(printData)
}, 5000);