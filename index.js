// Main file

console.log("Hello from Travis");

var art = require('ascii-art'); 

art.font('Demo!', 'Doom', function(rendered){ 
    console.log(art.style(rendered, 'blue_bg+red+blink+inverse')); 
}); 


var ntpClient = require('ntp-client');

ntpClient.getNetworkTime("pool.ntp.org", 123, function(err, date) {
    if(err) {
        console.error(err);
        return;
    }

    console.log("Current time : ");
    console.log(date);
});