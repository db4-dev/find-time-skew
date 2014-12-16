// Main file

var art = require('ascii-art'),
    ntpClient = require('ntp-client');

/*
art.font('Demo!', 'Doom', function(rendered){ 
    console.log(art.style(rendered, 'blue_bg+red+blink+inverse')); 
}); 



ntpClient.getNetworkTime("pool.ntp.org", 123, function(err, date) {
    if(err) {
        console.error(err);
        return;
    }

    console.log("Current time : ");
    console.log(date);
});

*/

ntpClient.getNetworkTime("pool.ntp.org", 123, function(err, date) {
    if(err) {
        console.error(err);
        return;
    }

    var sysdate = new Date();
  
    console.log("Current time : ", date);
    console.log("System Time : ", sysdate);
  
    console.log("Skew: ", (sysdate - date));
});